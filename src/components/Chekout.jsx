import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { crearOrden } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"

export default function Chekout () {

        const { carrito } = useContext(CartContext)

        const handleSubmit = e => {
                e.preventDefault()
        const formulario = e.target
        const email = formulario.email.value
        const nombre = formulario.nombre.value
        const numero = formulario.numero.value

        crearOrden({
                email,
                nombre,
                numero,
                productos: carrito,
                tiempo: serverTimestamp()
        })
        }

        

        return (
        <div className="container-fluid mt-3">
                <div className="row">
                        <div className="col-lg-3"></div>
                                <form onSubmit={handleSubmit} className="col-lg-6">
                        
                                        <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input type="email" placeholder="name@example.com" className="form-control" id="email" aria-describedby="emailHelp"/>
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                                <input type="text" placeholder="Pablito Suarez" className="form-control" id="nombre" />
                                        </div>
                                        <label htmlFor="numero" className="form-label">Número</label>
                                        <input type="text" placeholder="+541115516489" className="form-control" id="numero" />
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                
                                </form>
                        <div className="col-lg-3"></div> 
                </div>
        </div>
        )
}