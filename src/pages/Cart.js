import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { CartContext, useCart } from "../context/CartContext";
import { createContext, useContext } from "react";

export const Cart = () => {
  const {total} = useCart();

  // let{ total } = useContext(CartContext)
  console.log(total)



  useTitle("Cart");
  
  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} / {total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
