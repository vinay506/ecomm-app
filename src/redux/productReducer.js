import { SET_PRODUCT_LIST } from "./constant";

export const productData = (state = [], action) => {
    console.warn("action is called ", action.data);
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.data];
        default:
            return state;
    }
}