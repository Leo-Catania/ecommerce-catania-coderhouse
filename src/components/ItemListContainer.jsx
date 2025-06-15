import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList'


export default function ItemListContainer () {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setItems(data.products));
    },[])
    console.log(items)
    return(
        <ItemList items={items} />
    )
}