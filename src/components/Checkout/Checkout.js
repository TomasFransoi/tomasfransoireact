import { useState, useContext } from "react"
import CartContext from "../../contexto/CartContext"
import React from "react"
import { db } from "../../fireBase/fireBase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 
    const [values, setValues] = React.useState({
        Nombre: "",
        Telefono: "",
        Direccion: "",
    });
    const navigate = useNavigate()

        function handleSubmit(evt) {
          evt.preventDefault();
        }
        function handleChange(evt) {
          const { target } = evt;
          const { name, value } = target;
          const newValues = {
            ...values,
            [name]: value,
          };
          setValues(newValues);
        }

    
    const totalQuantity = getQuantity()
    const total = getTotal()
    const createOrder = async () => {
        setIsLoading(true)
        try {
            const {Nombre,Telefono,Direccion} = values
            const objOrder = {
                buyer: {
                    Name: Nombre,
                    phone: Telefono,
                    address: Direccion
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productosRef = collection(db, 'Productos')
    
            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), 'in', ids)))
            
            const { docs } = productosAddedFromFirestore
            const outOfStock = []
    
            const batch = writeBatch(db)
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity,})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                addDoc(orderRef, objOrder)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Nombre">Nombre</label>
              <input
                id="Nombre"
                name="Nombre"
                type="Nombre"
                value={values.Nombre}
                onChange={handleChange}
              />
              <label htmlFor="Telefono">Telefono</label>
              <input
                id="Telefono"
                name="Telefono"
                type="number"
                value={values.Telefono}
                onChange={handleChange}
              />
            <label htmlFor="Direccion">Direccion</label>
              <input
                id="Direccion"
                name="Direccion"
                type="text"
                value={values.Direccion}
                onChange={handleChange}
              />
            </form>
            <button className="Option" onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout