import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (state = [], action) => {
    console.warn("action is called ", action);
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data];
        case REMOVE_FROM_CART:
            return state.filter(item => item.name !== action.data)
        case EMPTY_CART:
            return []
        default:
            return state;
    }
}