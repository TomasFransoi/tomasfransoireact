import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCounter/ItemCounter"
const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ name,descripcion,stock,price,img }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }
    const Count = inputType === 'button' ? ItemCount : InputCount

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <h1>{name}</h1>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">{descripcion}</p>
            <p className="Info">el precio del producto es ${price}</p>
            <p className="Info">El stock restantes es {stock}</p>

            </section>
            {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
        </article>

        
    )
}

export default ItemDetail