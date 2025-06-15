import '../index.css';
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li className='navbar--li'>Golde Roar</li>
                <li className='navbar--li'>Carrito</li>
            </ul>
            <ul>
                <li className='navbar--li'><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}