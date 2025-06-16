import { useNavigate } from "react-router"
import { useEffect } from "react";

export default function Item ({ prod }) {

    const navigate = useNavigate()

    return(
        <div className='border flex flex-col gap-3 rounded'>
            <h3>{prod.title}</h3>
            <h4>${prod.price}</h4>
            <p>{prod.description}</p>
            <img className="w-50 h-50" src={prod.thumbnail} alt={prod.title} />
            <button className='bg-blue-950 text-white' onClick={() => navigate(`/item/${prod.id}`)}>
            Ver mas
            </button>
        </div> 
    )
}