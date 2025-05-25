import '../index.css';
import CartWidget from './CartWidget'
export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="">Golden Roar</a></li>
                <li><a href="">Remeras</a></li>
                <li><a href="">Pantalones</a></li>
            </ul>
            <ul>
                <li><a href=""><CartWidget></CartWidget></a></li>
            </ul>
        </nav>
    )
}