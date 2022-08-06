
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Productos Sin Filtrar'/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Productos  filtrados'/>} />
          <Route exact path='/detail/:productId' element={<ItemDetailContainer />} />  
          <Route exact path='*' element={<h1>404 no encontrado</h1>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
