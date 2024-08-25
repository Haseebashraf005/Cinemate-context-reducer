export const CartReducer = (state, action) => {

    const { type, payload } = action;
    console.log(state)

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products };

        case "REMOVE_FROM_CART":
            return;

        case "UpDATE_TOTAL":
            return;

        default:
            throw new Error("No Case Found In CartReducer")
    }
}