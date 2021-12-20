import { CartAction, CartActionTypes, CartItemPayload } from "../../types/cartTypes"

export const addToCartAc = (payload:CartItemPayload):CartAction => {
    return {
        type : CartActionTypes.ADD_TO_CART,
        payload  
    }
}

export const incretemntItemAc = (payload : number):CartAction => {
    return {
        type : CartActionTypes.INCEREMENT_ITEM,
        payload
    }
}

export const decrementItemAc = (payload : number) : CartAction => {
    return {
        type : CartActionTypes.DECREMENT_ITEM,
        payload
    }
}

export const deleteCartItemAc = (payload : number) : CartAction => {
    return {
        type : CartActionTypes.DELETE_ITEM,
        payload
    }
}