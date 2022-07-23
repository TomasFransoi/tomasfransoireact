import "./Navbar.css"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
const menu = () =>{
    return(
        <nav className= 'Navbar'>
            <div>
                <h1>Fransoi Tienda</h1>
            </div>

            <div className='opciones'>
                <button>calcos para bicicleta</button>
                <button>funda para asientos de bicicleta</button>
                <button>Productos varios</button>
                <CartWidget/>
            </div>

        </nav>
    )
}
export default menu