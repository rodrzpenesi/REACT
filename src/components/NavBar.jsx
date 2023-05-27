import Logo from '../assets/logo.png';
import Carrito from "../assets/carrito.png";

function NavBar(){
            function NombreEmpresa (){
            return {
                empresa: "SaFFadi",
            };
            }
            const NombreEmpr = NombreEmpresa();
            const NumberCarrito = 1;
    return(
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
                <li className="nav-item" >
                    <a href="#" className="nav-link">
                    <img src={Carrito} alt="Carrito" width="25" height="25" href="#" />{NumberCarrito}
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
            </div>
        </nav>
        </>
    );
}
export default NavBar
