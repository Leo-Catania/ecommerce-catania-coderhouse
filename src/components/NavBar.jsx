import { useEffect, useState } from 'react';
import CartWidget from './CartWidget'
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link, NavLink } from "react-router";


export default function NavBar() {
    const [categorie,setCategorie] = useState ([])

    useEffect (() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data => setCategorie(data));
    }, [])

    return (
        <nav className="navbar">
            <ul className='m-2'>
                <li className=''><NavLink to='/'>Golden Roar</NavLink></li>
                <li className=''>
                    <NavDropdown title="categorias" id="basic-nav-dropdown">
                        {categorie.map(cat => (<NavDropdown.Item as={NavLink} to={`/category/${cat}`} key={cat}>{cat}</NavDropdown.Item>))}
                    </NavDropdown>
                </li>
            </ul>
            <ul className='m-2'>
                <li className=''><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}