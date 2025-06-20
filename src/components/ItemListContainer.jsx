import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList'

export default function ItemListContainer () {

    const [items, setItems] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {

        if (categoryName){
            fetch(`https://dummyjson.com/products/category/${categoryName}`)
                .then(res => res.json())
                .then(data => setItems(data.products));
        }else {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => setItems(data.products));
        }

    },[categoryName])
    return(
        <ItemList items={items} />
    )
}