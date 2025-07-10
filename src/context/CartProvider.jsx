import { useState } from "react"
import { CartContext  } from "./CartContext"

export default function CartProvider ({ children }) {

    const [carrito, setCarrito ] = useState([]) 

    const agregarAlCarrito = (prod) => {
        const isInCart = carrito.some(item => item.id === prod.id)
        if (isInCart){

            //Busca el objeto exacto que es igual al que es agregado :o
            const productoRepetido = carrito.find (item => item.id === prod.id)

            // hace un array sin el producto duplicado
            const carritoSinElProductoRepetido = carrito.filter(item => item.id !== prod.id)

            // copia todo el array que ya estaba y le agrega el producto repetido, pero con 'count + (aca le pase prod.count para que me sume los que yo quiera)'
            setCarrito([...carritoSinElProductoRepetido, {...productoRepetido, count: productoRepetido.count + prod.count}])

        }
        else {
            setCarrito([...carrito, prod])
        }


    }

    const conseguirCantidad = () => {
        const cantidades = carrito.map(prod => prod.count)
        const cantidadTotal = cantidades.reduce((acc,   current) => acc + current, 0)
        return cantidadTotal
    } 

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + (prod.precio * (prod.count || 1)), 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const quitarDelCarrito = (id) => {
    const producto = carrito.find(item => item.id === id);
    if (!producto) return;

    if ((producto.count || 1) > 1) {
        setCarrito(carrito.map(item =>
            item.id === id
                ? { ...item, count: (item.count || 1) - 1 }
                : item
        ));
    } else {
        setCarrito(carrito.filter(item => item.id !== id));
    }
}

    
    return (
        <CartContext.Provider value={ {carrito, agregarAlCarrito, conseguirCantidad, calcularTotal, vaciarCarrito, quitarDelCarrito} }>
            {children}
        </CartContext.Provider>
    )
}