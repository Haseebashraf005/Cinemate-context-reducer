export const CartReducer = (state, action) => {

    const { type, payload } = action;
    console.log(state)

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products };

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products }

        case "UpDATE_TOTAL":
            return { ...state, total: payload.total }

        default:
            throw new Error("No Case Found In CartReducer")
    }
}   