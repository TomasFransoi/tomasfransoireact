import CartContext from '../../contexto/CartContext'
import { useContext } from 'react'
const Cart = () =>{
    const {cart} = useContext(CartContext)
    const {price,quantity,name} = cart
}
export default Cart