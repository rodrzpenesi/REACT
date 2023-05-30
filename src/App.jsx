import './App.css'
import NavBar from './components/NavBar';
import Saludar from './components/Main';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='ItemsCards'>
        <Card/>
      </div>  
    </div>
  )
}

export default App
