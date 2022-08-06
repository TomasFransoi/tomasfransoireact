const ItemDetail = ({ name,descripcion,stock,price,img }) => {
    return (
        <article>
            <h1>{name}</h1>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">{descripcion}</p>
            <p className="Info">el precio del producto es ${price}</p>
            <p className="Info">El stock restantes es {stock}</p>
            </section>

        </article>

        
    )
}

export default ItemDetail