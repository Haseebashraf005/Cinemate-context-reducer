import { createContext, useContext } from "react"

const initialState = {
    cartList: [],
    total: 0

}



let CartContext = createContext();
export const CartProvider = ({ children }) => {
    const value = { 
        total:5000
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider> 
    );
}

// note following will be better if we have multiple context
// export const useCart = () => {
//         return useContext(CartContext); 
    
//     }
    
    export {CartContext};