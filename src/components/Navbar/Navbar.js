import "./Navbar.css"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
const menu = () =>{
    return(
        <nav className= 'Navbar'>
            <div className='opciones'>
                <Link to='/'>
                Fransoi Tienda
            </Link>
            <div className="Categories">
                <Link to='/category/Calcos' className="Option"><button>Calcos</button></Link>
                <Link to='/category/Fundas' className="Option"><button>Fundas</button></Link>
                <Link to='/category/Productos varios' className="Option"><button>Productos varios</button></Link>
            </div>
                <CartWidget/>
            </div>

        </nav>
    )
}
export default menu