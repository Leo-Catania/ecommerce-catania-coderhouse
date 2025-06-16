import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const [itemDetail, setItemDetail] = useState('')

    const { id } = useParams()

    useEffect (()=> {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItemDetail(data));
    }, [id])

    return(
        <ItemDetail detail={itemDetail} />
    )
}