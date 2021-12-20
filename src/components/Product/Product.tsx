import { ProductItem } from "./ProductItem/ProductItem"
import './Product.css';
import {  ProductId } from "../../types/productTypes";


type PropType = {
    allProd : ProductId[]
}

export const Product = ({allProd}:PropType):JSX.Element => {
    
    return (
        <div className = 'container'>
            {
                allProd?.map((obj,i) => {
                    const id = Object.keys(obj)[0];
                    console.log(obj);
                    
                    return <ProductItem 
                                id={id} 
                                key = {`${id}~${i}`} 
                                product = {obj[+id]}
                            />
                })
            }
        </div>
    )
}