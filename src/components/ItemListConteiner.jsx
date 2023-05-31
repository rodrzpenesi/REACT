import productos from "../productos/productos"
import Item from "./Item"
import { useState } from "react"

function obtenerDatos(){
    return new Promise(resolve =>{
        setTimeout(() => {resolve(productos)} ,1500)
    })
}

export default function CardsConteiner() {
    let [products, setProducts] = useState ([]);

    obtenerDatos().then(respuesta => 
        {setProducts(respuesta)});
    return (
        <div className="cardFlex">
            {
                products.map( CardInArray =><Item
                    key={CardInArray.id}
                    {...CardInArray}
                />)
            }
        </div>
    )
}
