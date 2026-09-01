import { PRODUCT_LIST } from "./constant";

export const productData = (state = [], action) => {
    console.warn("action is called ", action);
    switch (action.type) {
        case PRODUCT_LIST:
            return [...state, action.data];
        default:
            return state;
    }
}