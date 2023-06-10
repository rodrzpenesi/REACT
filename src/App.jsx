import './App.css'
import NavBar from './components/NavBar';
import Saludar from './components/Main';
import Item from './components/Item';
import ItemListConteiner from './components/ItemListConteiner'; 
import ItemDetailConteiner from './components/ItemDetailConteiner'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='ItemsCards'>
        <ItemListConteiner/>
        <ItemDetailConteiner/>
      </div>  
    </div>
  )
}

export default App
