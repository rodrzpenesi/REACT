import productos from "../productos/productos"
import Card from "./Card"

export default function CardsConteiner() {
    console.log(productos)
    return (
        <div className="cardFlex">
            {
                productos.map( CardInArray =><Card
                    key={CardInArray.id}
                    {...CardInArray}
                />)
            }
        </div>
    )
}
