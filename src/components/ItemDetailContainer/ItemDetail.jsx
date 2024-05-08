import ItemCount from "../ItemCount/ItemCount";
import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {
    const handleAddToCart = (count) => {
        const productCart = { ...product, quantity: count }
        console.log(productCart)
    }

    return (
        <div className="item-detail">
            <div className="image-detail">
                <img src={product.image} />
            </div>
            <div className="text-detail">
                <h1 className="name-detail">{product.name}</h1>
                <p className="description-detail">{product.description}</p>
                <p className="price-detail">${product.price}</p>
                <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
            </div>
        </div>
    )
}
export default ItemDetail