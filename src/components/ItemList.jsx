import Item from './Item'

export default function ItemList ({ items }) {
    return (
        <div className='grid grid-cols-3 gap-4 p-3 w-330'>
            {items.map(prod => (
                <Item prod={prod} key={prod.id}/>) )}
        </div>
    )
}