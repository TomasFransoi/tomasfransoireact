
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./contexto/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout';
function App() {


  return (
    <div className="App">
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                    <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting='Productos Sin Filtrar'/>}/>
                    <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Productos  filtrados'/>} />
                    <Route exact path='/detail/:productId' element={<ItemDetailContainer />} />  
                    <Route exact path='*' element={<h1>No se ha encontrado la pagina buscada</h1>} /> 
                    <Route exact path="/carrito" element={<Cart/>}></Route>
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>

            </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
