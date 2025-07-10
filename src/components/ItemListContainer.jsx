import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getProducts, getProductsCategory } from '../firebase/db';
import ItemList from './ItemList'


export default function ItemListContainer () {

    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {

        if(categoryName){
            getProductsCategory(categoryName)
                .then(prods => setItems(prods))
        }else {
            getProducts()
                .then (prod => {
                    setItems(prod)
                })
        }




        

    },[categoryName])
    return(
        <ItemList items={items} />
    )
}
