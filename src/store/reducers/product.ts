import { ProductAction, ProductActionTypes, ProductState } from "../../types/productTypes";


const initialState : ProductState= {
    products : {}, 
    productDetail : {name : '',img : '',category:'',price:0,size:''},
    isLoading : false,
    error : null,
    filters : {
        price : [5000,100000],
        brand : ""
    },
    section : 'sneakers',
}



const productReducer = (state=initialState,action:ProductAction):ProductState => {
    switch(action.type){
        case ProductActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                isLoading : true,
            }
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                products : action.payload.products,
                section : action.payload.section
            } 
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                products : {},
                isLoading : false,
                error : action.payload
            }
        case ProductActionTypes.FETCH_PRODUCT_DETAIL:
            return {
                ...state,
                isLoading : false,
                productDetail : action.payload
            }
        case  ProductActionTypes.CAHNGE_FILTER_PRICE:
            return {
                ...state,
                filters : {
                    ...state.filters,
                    price : action.payload
                }
            }

        default : return state;
    }
}

export default productReducer;