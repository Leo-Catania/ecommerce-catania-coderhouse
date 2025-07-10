
import CartWidget from './CartWidget'
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router";


export default function NavBar() {

    return (
        <nav className="navbar border-y-1 border-gray-300 pb-0">
            <ul className='m-2 mb-0'>
                <li ><NavLink className='no-underline 'to='/'><button className='button'>Techzone</button></NavLink></li>
                <li className=''>
                    <NavDropdown title="categorias" id="basic-nav-dropdown" className='py-2 text-sm text-gray-700 dark:text-black-200'>
                            <NavDropdown.Item className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            to='/category/celulares'
                            as={NavLink} 
                            >
                                celulares
                                </NavDropdown.Item>
                            <NavDropdown.Item className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            to='/category/computadoras'
                            as={NavLink} 
                            >
                                computadoras
                                </NavDropdown.Item>
                            <NavDropdown.Item className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            to='/category/relojes'
                            as={NavLink} 
                            >
                                relojes
                                </NavDropdown.Item>
                            <NavDropdown.Item className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            to='/category/auriculares'
                            as={NavLink} 
                            >
                                auriculares
                                </NavDropdown.Item>
                            <NavDropdown.Item className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            to='/category/tablets'
                            as={NavLink} 
                            >
                                tablets
                                </NavDropdown.Item>
                    </NavDropdown>
                </li>
            </ul>
            <ul className='m-2 mb-0'>
                <li className=''>
                    <NavLink to='/cart'>
                    <div id='botoncarrito'><CartWidget></CartWidget></div>
                        
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}