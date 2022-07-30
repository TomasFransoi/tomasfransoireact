const Item = ({product}) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>El precio del producto es {product.price} pesos </p>
            <p>Stock Disponible: {product.stock}</p>
        </li>
    )
}

export default Item