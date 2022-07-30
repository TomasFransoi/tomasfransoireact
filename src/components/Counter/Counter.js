import {useState} from "react"
const Counter = ({stock, onAdd}) => {
    const [count,setCount] = useState (1)
    const mas1 = () =>{
        if(count < stock ) {
            setCount(count + 1)
        }
    }
    const menos1 = () =>{
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return(
        <div>
            <h2>Contador</h2>
            <h3>{count}</h3>
            <button onClick={menos1}>-</button>
            <button onClick={mas1}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
export default Counter