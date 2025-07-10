import ItemCount from "./ItemCount"

export default function ItemDetail ({detail}) {
    return(
        <div className="container-fluid detail">
            <div className="row">
                <div className="col-lg-7">
                    <div className=" width-18 row ">
                        <div className=" col-lg-5 g-5">
                                <h2>{detail.nombre}</h2>
                                <p>{detail.descripcion}</p>
                                <h3>${detail.precio}</h3>
                            </div>
                        <div className="col-lg-7 g-1 w-50">
                            <img className="image" src={detail.imagen} alt={detail.nombre} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 container-fluid m-4">
                    <ItemCount prod={detail}/>
                </div>
            </div>        
        </div>
    )
}