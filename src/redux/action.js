import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constant";

export const addToCard = (data)=> {
    console.warn("action is called ", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCard = (data)=> {
    console.warn("remove action is called ", data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCard = ()=> {
    console.warn("empty action is called ");
    return {
        type: EMPTY_CART,
        data: []
    }
}