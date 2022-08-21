import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../fireBase/fireBase'
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemDetailContainer = () => {
    const [product,setProduct] = useState()
    const [loading,setLoading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
        getDoc(doc(db, 'Productos', productId)).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
    if(loading) {
        return <h1>La Informacion se esta cargando</h1>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer