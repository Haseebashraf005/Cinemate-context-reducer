import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import {  useCart } from "../context/CartContext";

export const Cart = () => {
  const {total,cartList} = useCart();

  // let{ total } = useContext(CartContext)
  // console.log(total)

  useTitle("Cart");
  
  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  //   {id: 2, "name": "boAt R ockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  // ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / {total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
