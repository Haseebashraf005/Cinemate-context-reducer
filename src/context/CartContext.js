import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer";

const initialState = {
    cartList: [],
    total: 5
}


let CartContext = createContext(initialState);

   
export const CartProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product)
        dispatch({ 
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        }) 
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current_item_cart => current_item_cart.id !== product.id)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
 
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
        
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// note following will be better if we have multiple context
export const useCart = () => {
    return useContext(CartContext);

}

// export {CartContext};