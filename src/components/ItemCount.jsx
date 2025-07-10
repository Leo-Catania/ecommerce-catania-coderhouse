import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ItemCount ({prod}) {

    const [count, setCount] = useState(1)
    const {agregarAlCarrito} = useContext(CartContext)

    const handleRestar = () => setCount(count - 1 )
    const handleSumar = () => setCount(count + 1 )
    const handleAgregar = () => agregarAlCarrito({...prod,count})

    return (
        <div className="container-fluid">
            <div class="bg-gray-200 w-100 h-64 rounded-lg">
                <div class="flex p-2 gap-1">
                    <div class="">
                        <span class="bg-red-500/80 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                        <span class="bg-yellow-500/80 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                        <span class="bg-blue-500/80 box inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                </div>
                <div class="card__content">
                    <div className="row"><h4 className="text-center">Cantidad: {count}</h4></div>
                        <div className="row">
                            <div className="col-lg-6 w-50 text-center">
                                <button onClick={handleRestar} disabled={count <= 1} className="hover:duration-200 ease-in hover:scale-400" >-</button>
                            </div>
                            <div className="col-lg-6 w-50 text-center">
                                <button onClick={handleSumar} className="hover:duration-200 ease-in hover:scale-400">+</button>
                            </div>
                        </div>
            <div className="row m-5 ">
                <button onClick={handleAgregar}
                class="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                >
                <span
                    class="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
                    >Agregar al carrito</span
                >
                <span
                    class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                >
                    <svg
                    class="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                </span>
                </button>

            </div>
                </div>
            </div>
        </div>
    )
}