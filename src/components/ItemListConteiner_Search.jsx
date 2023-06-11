import productos from "../productos/productos"
import Item from "./Item"
import { useState } from "react"

function obtenerDatos(){
    return new Promise(resolve =>{
        setTimeout(() => {resolve(productos)} ,1500)
    })
}
function witchBusqueda(ComponenteOriginal){
    function WrappedCompnente(){
        const [searchword, setSearchword] = useState("")
        function handleChange(event){
            const valor = event.target.value;
                setSearchword(valor);
        }
        function filtarLista(productos){
            
            if (searchword === ""){
                return productos;}
            else{
                return productos.filter((item) => item.nombre === searchword)
            }
        }
    return(
            <>
                <input onChange={handleChange} 
                placeholder="..."></input>
                <ComponenteOriginal filtarLista={filtarLista}/>
            </>
        )
    }
    return WrappedCompnente;
}

function CardsConteinerSearch({filtarLista}) {
    let [products, setProducts] = useState ([]);

    obtenerDatos().then(respuesta => 
        {setProducts(respuesta)});

    return (
        <div className="cardFlex">
                {
                filtarLista(products.map( CardInArray =><Item
                    key={CardInArray.id}
                    {...CardInArray}
                />))
                }
        </div>
    )
}
const witchBusquedaCardsConteinerSearch = witchBusqueda(CardsConteinerSearch)
export default witchBusquedaCardsConteinerSearch;
