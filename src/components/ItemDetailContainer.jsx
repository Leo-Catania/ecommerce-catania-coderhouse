import { useState, useEffect } from "react";
import { getAProduct } from "../firebase/db";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const [itemDetail, setItemDetail] = useState('')

    const { id } = useParams()
        
    useEffect (()=> {
        getAProduct(id)
            .then(prod=> setItemDetail(prod))
    }, [id])

    return(
        <ItemDetail detail={itemDetail} />
    )
}