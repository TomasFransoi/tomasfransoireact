import "./Navbar.css"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from "react-router-dom"
const menu = () =>{
    return(
        <nav className= 'Navbar'>
            <div className='opciones'>
                <Link to='/'>
                Fransoi Tienda
            </Link>
            <div className="categorias">
                <NavLink to='/category/Calcos' className="Option"><button>Calcos</button></NavLink>
                <NavLink to='/category/Fundas' className="Option"><button>Fundas</button></NavLink>
                <NavLink to='/category/productosVarios' className="Option"><button>Productos varios</button></NavLink>
            </div>
                <CartWidget/>
            </div>

        </nav>
    )
}
export default menu