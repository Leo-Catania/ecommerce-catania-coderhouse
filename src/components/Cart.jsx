import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router";

export default function Cart () {

    const {carrito, calcularTotal, vaciarCarrito, quitarDelCarrito} = useContext(CartContext)
    const total = calcularTotal();

    return (
        <div className="container-fluid mt-3">
            <div className="row">
            <div className="col-lg-4">
                <ol className="list-group list-group-numbered">
            {carrito.map(prod => (
                <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-start">
                    <button onClick={() => quitarDelCarrito(prod.id)} type="button" className="btn-close inline" aria-label="Close"></button>
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{prod.nombre}</div>
                    </div>
                    <span className="badge text-bg-primary rounded-pill">{prod.count}</span>
                </li>
            ))} </ol>
            </div>
            <div className="col-lg-8">
                <h2>${total}</h2>
                <div className="d-grid gap-2">
                        <button onClick={vaciarCarrito} className="btn btn-danger m-2" type="button">Vaciar carrito</button>
                </div>
                <NavLink to='/chekout'>
                <div className="d-grid gap-2">
                        <button className="btn btn-primary m-2" type="button">Ir al Chekout</button>
                </div>
                </NavLink>
            </div>
            </div>
        </div>
        
    )
}