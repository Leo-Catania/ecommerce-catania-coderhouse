import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ItemCount ({prod}) {

    const [count, setCount] = useState(1)
    const {agregarAlCarrito} = useContext(CartContext)

    const handleRestar = () => setCount(count - 1 )
    const handleSumar = () => setCount(count + 1 )
    const handleAgregar = () => agregarAlCarrito({...prod,count})

    return (
        <div className="container">
            <div className="row bg-secondary"><p>{count}</p></div>
            <div className="row bg-primary">
                <div className="col-lg-4">
                    <button onClick={handleRestar}>-</button>
                    
                </div>
                <div className="col-lg-4">
                    <button onClick={handleSumar}>+</button>
                </div>
            </div>
            <div className="row">
                <button onClick={handleAgregar}> Agregar al Carrito</button>
            </div>

        </div>
    )
}