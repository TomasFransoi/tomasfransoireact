
import { useContext } from 'react'
import CartContexto from '../../contexto/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContexto)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CartItem'>
            <header>
                <h2 className="Nombre">
                    Nombre: {name}
                </h2>
            </header>
            <section >
                <p className="CANTIDAD">
                    Cantidad: {quantity}
                </p>
                <p className="Precio">
                    Precio por Unidad: ${price}
                </p>
            </section>           
            <footer>
                 <p className="Subtotal">
                     Subtotal: ${price * quantity}
                 </p>
                 <button  onClick={() => handleRemove(id)}>Eliminar</button>
            </footer>
        </article>
    )
}

export default CartItem