import { ProductItem } from "./productTypes";

//  OBJECT TYPES 
export interface CartState {
    totalPrice : number;
    items : CartId
    total : number
}


export interface CartId {
    [key : number] : CartItem
}
export interface CartItem  {
    item : ProductItem
    count : number
}

export interface CartItemPayload {
    [key : number] : ProductItem,
    count?:number
}
// CONSTANT TYPES  
export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    INCEREMENT_ITEM = 'INCEREMENT_ITEM',
    DECREMENT_ITEM = 'DECREMENT_ITEM',
    DELETE_ITEM = 'DELETE_ITEM'
}

interface AddToCartAction {
    type : CartActionTypes.ADD_TO_CART,
    payload : CartItemPayload
}
interface incretemntItemAction {
    type : CartActionTypes.INCEREMENT_ITEM,
    payload : number
}
interface decrementItemAction {
    type : CartActionTypes.DECREMENT_ITEM,
    payload : number
}

interface deleteCartItemAction  {
    type : CartActionTypes.DELETE_ITEM,
    payload : number
}

export type CartAction = AddToCartAction|incretemntItemAction|decrementItemAction|deleteCartItemAction;