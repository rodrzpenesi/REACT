import './App.css'
import Logo from './assets/logo.png';

function App() {
  function NombreEmpresa (){
    return {
      empresa: "SaFFadi",
      dueño: "Alejandro",
    };
  }
  function LogoEmpresa() {
    return{

    }
  }
  const NombreEmpr = NombreEmpresa();
  return (
    <>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={Logo} alt="Logo" width="40" height="40" className="logo d-inline-block align-text-top"/>
      {NombreEmpr.empresa}
    </a>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Catalogo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</nav>
    </>
  )
}

export default App
