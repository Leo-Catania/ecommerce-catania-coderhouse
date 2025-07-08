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

            // copia todo el array que ya estaba y le agrega el producto repetido, pero con 'count + 1'
            setCarrito([...carritoSinElProductoRepetido, {...productoRepetido, count: productoRepetido.count + 1}])

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

    console.log(carrito)

    
    return (
        <CartContext.Provider value={ {carrito, agregarAlCarrito, conseguirCantidad} }>
            {children}
        </CartContext.Provider>
    )
}