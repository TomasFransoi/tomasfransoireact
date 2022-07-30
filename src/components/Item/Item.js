import Counter from "../Counter/Counter.js"
const Item = ({product}) => {
    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`)
      }
    return (
        <li>
            <h3>{product.name}</h3>
            <p>El precio del producto es {product.price} pesos </p>
            <p>Stock Disponible: {product.stock}</p>
            <Counter stock={product.stock} onAdd={handleOnAdd}/>
        </li>
    )
}

export default Item