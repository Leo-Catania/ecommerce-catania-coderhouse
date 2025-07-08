import ItemCount from "./ItemCount"

export default function ItemDetail ({detail}) {

    return(
        <div className="container-fluid">
                    <img className="w-50 h-50" src={detail.thumbnail} alt={detail.title} />
                    <h2>{detail.title}</h2>
                    <h4>{detail.brand}</h4>
                    <p>{detail.description}</p>
                    <h3>${detail.price}</h3>
                    <ItemCount prod={detail}/>
        </div>
    )
}