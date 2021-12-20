import { Dispatch } from "redux";
import { instance } from "../../api/api";
import {  PayloadFetchProd, ProductAction, ProductActionTypes } from "../../types/productTypes"


export const fetchProducts = (category : string = 'sneakers') => {
    return async (dispatch:Dispatch<ProductAction>) => {
        try{
            dispatch({type : ProductActionTypes.FETCH_PRODUCTS});
            const response = await instance.get(`/${category}.json`);
            const payload = {products : response.data,section : category};
            dispatch({type:ProductActionTypes.FETCH_PRODUCTS_SUCCESS,payload});
        }catch(e){
            dispatch({
                type : ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload : 'Error Accured on load products'
            })
        }
    }
}
export const fetchProdBrand = (category:string, brand : string) => {
    
    return async(dispatch:Dispatch<ProductAction>) => {
        try{
            dispatch({type : ProductActionTypes.FETCH_PRODUCTS});
            const response = await instance.get(`/${category}/${brand}.json`);
            
            if(response.data){
                const payload =  {products : {[brand] : response.data},section : category};  
                dispatch({type : ProductActionTypes.FETCH_PRODUCTS_SUCCESS,payload});

            }else{
                const payload =  {products : null,section : category};  
                dispatch({type : ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload });
            }
        }catch(e){
            console.log(e);
            window.alert(e);
        }
    }
}
export const fetchProductDetail = (productDetailPath : PayloadFetchProd) => {        
    return async(dispatch:Dispatch<ProductAction>) => {
        try{
            dispatch({type : ProductActionTypes.FETCH_PRODUCTS});
            const response = await instance.get(`/${productDetailPath.section}/${productDetailPath.product.category}/${productDetailPath.product.id}.json`);            
            dispatch({type : ProductActionTypes.FETCH_PRODUCT_DETAIL,payload : response.data});
        }catch(e){
            console.log(e);
        }
    }
}

export const changeFilterPriceAc = (price : number[]):ProductAction => {
    return {
        type : ProductActionTypes.CAHNGE_FILTER_PRICE,
        payload: price
    }
}