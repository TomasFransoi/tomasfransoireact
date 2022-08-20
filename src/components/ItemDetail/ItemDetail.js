import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from '../ItemCounter/ItemCounter'
import CartContext from '../../contexto/CartContext'

const ItemDetail = ({ id,name,descripcion,stock,price,img }) => {
    const [quantity, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    }
    const productQuantity = getProductQuantity(id)
    return (
        <article>
            <h1>{name}</h1>
            <picture>
                <img src={img} alt={name} className="ImagenDelObjeto"/>
            </picture>
            <section>
            <p className="Info">{descripcion}</p>
            <p className="Info">el precio del producto es ${price}</p>
            <p className="Info">El stock restantes es {stock}</p>

            </section>
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/carrito'>Terminar compra</Link>
                    )
                }
            </footer>
        </article>

        
    )
}

export default ItemDetail