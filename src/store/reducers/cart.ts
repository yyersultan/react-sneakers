import { CartAction, CartActionTypes, CartId, CartState } from "../../types/cartTypes";

const initialState:CartState = {
    items : {},
    total : 0,
    totalPrice : 0
}

const cartReducer = (state = initialState,action:CartAction) => {
    switch(action.type) {
        case CartActionTypes.ADD_TO_CART:
            const id:number = +Object.keys(action.payload)[0];
            const items = {...state.items};
            if(items[id]){
                delete items[id];
            }else{
                items[id] = {item : action.payload[id],count : action.payload.count||1}
            }         
            const totalPrice2  = getTotalPrice(items);
            return {
                ...state,
                items,
                totalPrice : totalPrice2
            }
        case CartActionTypes.INCEREMENT_ITEM:
            const cart_items = {...state.items};
            const cart_item = {...cart_items[action.payload]};
            cart_item.count += 1
            cart_items[action.payload] = cart_item;
            const sum = getTotalPrice(cart_items);
            return {
                ...state,
                items : cart_items,
                totalPrice : sum
            }
            
        case CartActionTypes.DECREMENT_ITEM:
            const cart_items2 = {...state.items};
            const cart_item2 = {...cart_items2[action.payload]};
            if(cart_item2.count> 1){
                cart_item2.count -=1
            }
            cart_items2[action.payload] = cart_item2;
            const totalPrice = getTotalPrice(cart_items2);
            return {
                ...state,
                items : cart_items2,
                totalPrice
            }


        case CartActionTypes.DELETE_ITEM:
            const cart_items3  = {...state.items};
            delete cart_items3[action.payload];
            const totalPrice3 = getTotalPrice(cart_items3);
            return {
                ...state,
                items : cart_items3,
                totalPrice : totalPrice3
            }

        //
        default : return state;
    }
}

const getTotalPrice = (items:CartId):number => {
    let sum = 0;
    Object.keys(items).forEach(key => {
        const obj = items[+key];
        sum += (obj.count * obj.item.price);
    });
    return sum;
}

export default cartReducer;