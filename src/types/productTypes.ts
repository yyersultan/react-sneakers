// PRODUCT OBJECT TYPES 
export interface ProductItem { 
    name : string
    img : string
    size : string 
    price : number,
    category : string
}
export interface ProductId { 
    [key:number] : ProductItem
}
export interface ProductCategory {
    [key : string] : ProductId
}

export type ProdPropsType = {
    id : string,
    product : ProductItem
}


export interface ProductState {
    products : ProductCategory| null,
    productDetail : ProductItem,
    isLoading : boolean,
    error : null | string,
    section : string,
    filters : ProdFilters,
}
export interface ProductDetailType {
    id : string,
    category : string
}
export interface PayloadFetchProd {
    product : ProductDetailType,
    section : string
}

export interface ProdFilters {
    brand : string,
    price : number[]
}

//  CONSTAN ACTION TYPE 
export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL',
    CAHNGE_FILTER_PRICE = 'CAHNGE_FILTER_PRICE'
}


//  ACTION CREATORS TYPE
interface FetchProductsAction {
    type : ProductActionTypes.FETCH_PRODUCTS,
}

interface FetchProductsSuccessAction {
    type : ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload : any
}
interface FetchProductsErrorAction {
    type : ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload : string
}
interface FetchProductDetailAction {
    type : ProductActionTypes.FETCH_PRODUCT_DETAIL,
    payload : ProductItem
}

interface FilterPriceChanegAction {
    type :ProductActionTypes.CAHNGE_FILTER_PRICE,
    payload : number[]
}

export type ProductAction = FetchProductsAction |  
FetchProductsSuccessAction | FetchProductsErrorAction | 
FetchProductDetailAction | FilterPriceChanegAction;


// HERE NEEDED TYPES 

  
 