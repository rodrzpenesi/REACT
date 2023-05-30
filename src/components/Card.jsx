import './Card.css'
import Rapiditas from '../assets/rapiditas.png';
import Contador from '../components/Contador';

function Card() {
    return (
    <>
        <div className="card">
            <img src={Rapiditas} alt="Rapiditas" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Rapiditas Clasicas</h5>
            <div>
            <Contador/>
            </div>
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
        </div>
    </>
    )
}

export default Card