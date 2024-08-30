import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {

  const { name, price, image } = product;

  const { total, cartList, addToCart, removeFromCart } = useCart();


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
      {/* <button className="remove">Remove</button> */}
    </div>
    </div >
  )
}
