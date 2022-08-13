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
                <NavLink to='/category/Calcos' className="Opcion"><button>Calcos</button></NavLink>
                <NavLink to='/category/Fundas' className="Opcion"><button>Fundas</button></NavLink>
                <NavLink to='/category/productosVarios' className="Opcion"><button>Productos varios</button></NavLink>
            </div>
                <CartWidget/>
            </div>

        </nav>
    )
}
export default menu