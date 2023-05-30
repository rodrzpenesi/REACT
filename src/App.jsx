import './App.css'
import NavBar from './components/NavBar';
import Saludar from './components/Main';
import Card from './components/Card';
import CardsConteiner from './components/CardsConteiner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='ItemsCards'>
        <CardsConteiner/>
      </div>  
    </div>
  )
}

export default App
