import React from "react";
import { ProductId } from "../../types/productTypes";
import { GridProduct } from "./GridProduct/GridProduct";
import './GridProducts.css';
type PropType = {
    allProd : ProductId[]
}

export const GridProducts = ({allProd}:PropType):JSX.Element => {
    
    return (
        
        <div className = "grid_sneakers">
            {
                allProd?.map((obj,i) => {
                    const id = Object.keys(obj)[0];                    
                    return <GridProduct 
                                id={id} 
                                key = {`${id}&${i}`} 
                                product = {obj[+id]}
                            />
                })
            }
        </div>
    )
}