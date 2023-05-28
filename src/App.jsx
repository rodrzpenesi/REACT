import './App.css'
import Contador from './components/Contador';
import NavBar from './components/NavBar';
import Saludar from './components/main';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Saludo'>
        <Saludar/>
        <Contador/>
      </div>   
    </div>
  )
}

export default App
