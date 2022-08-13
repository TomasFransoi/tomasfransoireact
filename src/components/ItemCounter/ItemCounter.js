import { useState} from "react"
const Counter = ({stock, initial = 1, onConfirm}) => {
    const [cantidad,setCantidad] = useState (initial)
    const mas1 = () =>{
        if(cantidad < stock ) {
            setCantidad(cantidad + 1)
        }
    }
    const menos1 = () =>{
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return(
        <div>
            <h3>{cantidad}</h3>
            <button onClick={menos1}>-</button>
            <button onClick={mas1}>+</button>
            <button onClick={() => onConfirm(cantidad)}>Agregar al carrito</button>
        </div>
    )
}
export default Counter