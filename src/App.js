
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import Navbar from './components/Navbar/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo="hola gracias por entrar"/>
    </div>
  );
}

export default App;
