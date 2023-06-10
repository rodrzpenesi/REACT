import './ItemDetailConteiner.css'
import { useEffect, useState } from "react"
import productos from "../productos/productos"
import Contador from './Contador';
function newObtenerDatos(id){
    return new Promise(resolve =>{
        setTimeout(() => {resolve(productos[2])} ,1500)
    })
}

function ItemDetailConteiner(){

const [product, setProduct] = useState({});

useEffect(
    () => {
        newObtenerDatos().then((respuesta) => 
            {setProduct(respuesta)});
    },[]
);
return (
    <div className="cardsDetail">
        <img src={product.imagen2} alt="" />
        <h3>{product.descripcion}</h3>
        <Contador/>
        <a href="#" className="btn btn-primary">Comprar</a>
    </div>
)
}
export default ItemDetailConteiner;
