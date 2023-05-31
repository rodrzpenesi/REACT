import './App.css'
import NavBar from './components/NavBar';
import Saludar from './components/Main';
import Item from './components/Item';
import ItemListConteiner from './components/ItemListConteiner'; 


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='ItemsCards'>
        <ItemListConteiner/>
      </div>  
    </div>
  )
}

export default App
