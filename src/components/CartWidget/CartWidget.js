import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../contexto/CartContext'
const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    const cantidad = getQuantity();
    return(

        <Link to="/carrito">
            <img src="..\images\CartWidget.png" alt="carrito"></img>
            <p>{cantidad}</p>
        </Link>
    )
}
export default CartWidget