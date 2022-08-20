import "./Navbar.css"
import react from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from "react-router-dom"
import Cart from "../Cart/Cart"
const menu = () =>{
    if(Cart.length === 0){
        CartWidget.style.visibility = "false"
    }
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