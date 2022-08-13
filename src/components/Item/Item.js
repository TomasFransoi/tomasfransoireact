import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {
   
    return (
        <article className="objeto">
            <header >
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imagenDelObjeto"/>
            </picture>
            <section>
                <p className="Info">
                    el precio del producto es ${price}
                </p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`} className='opcion'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item