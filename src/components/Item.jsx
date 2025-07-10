import { useNavigate } from "react-router"

export default function Item ({ prod }) {

    const navigate = useNavigate()

    return(
        <div className="card w-95">
            <img src={prod.imagen} className="card-img-top" alt={prod.nombre}></img>
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descripcion}</p>
                <button className='"btn btn-primary button' onClick={() => navigate(`/item/${prod.id}`)}>
                    Ver mas
                </button>
            </div>
        </div>
        
    )
}
