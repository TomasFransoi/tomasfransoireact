import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ saludo }) =>{
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        getProducts().then(products =>{
            setProducts(products)
        })
    })
    return(
        <>
            <h1 className="saludo">
            {saludo}
            </h1>
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer