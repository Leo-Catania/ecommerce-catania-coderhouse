import { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import { BsCart } from "react-icons/bs";

export default function CartWidget() {

    const { conseguirCantidad } = useContext(CartContext)
    const cantidadTotal = conseguirCantidad()


    return(
        <button className='button'><BsCart className='inline' />{cantidadTotal}</button>
    )
}