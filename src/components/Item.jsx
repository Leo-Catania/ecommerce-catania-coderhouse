

export default function Item ({ prod }) {
    return(
        <div className='border flex flex-col gap-3 rounded'>
            <h3>{prod.title}</h3>
            <h4>${prod.price}</h4>
            <p>{prod.description}</p>
            <img className="w-50 h-50" src={prod.images} alt={prod.title} />
            <button className='bg-blue-950 text-white'>Ver mas</button>
        </div> 
    )
}