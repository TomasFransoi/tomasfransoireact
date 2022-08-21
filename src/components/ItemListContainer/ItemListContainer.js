import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../fireBase/fireBase'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = !categoryId 
            ? collection(db, 'Productos')
            : query(collection(db, 'Productos'), where('category', '==', categoryId))

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