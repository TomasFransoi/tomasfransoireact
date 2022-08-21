import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/fireBase'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = !categoryId 
            ? collection(db, 'productos')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])
    if(loading) {
    return <h1>Cargando productos...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer