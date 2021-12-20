import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GridLoader } from "../../asstes/Loader/GridLoader";
import { Loader } from "../../asstes/Loader/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/actions/product";
import { ProductId } from "../../types/productTypes";
import { EmptyProducts } from "../EmptyProducts/EmptyProducts";
import { GridProducts } from "../GridProducts/GridProducts";
import { Product } from "./Product";

type ProductContainerProps = {
    grid ?: boolean,
}
export const ProductContainer = memo(({grid}:ProductContainerProps): JSX.Element => {
    const { products, isLoading,filters } = useTypedSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        // eslint-disable-next-line 
    }, []);

    if (isLoading) {
        return (
            <div className="container">
                {Array(8).fill(0).map((_) => {
                    return grid ? <GridLoader />:
                            <Loader />
                })}
            </div>
        )
    }
    // Join all product to one array and mix it soon ...
    if(!products){
        return <EmptyProducts />
    }
    
    const arr: ProductId[] = []
    Object.values(products).forEach(obj => {
        Object.keys(obj).forEach(el => {
            arr.push({ [el]: obj[+el] });
        })
    });

    // FILTER BY PRICE
    const filteredARR = [...arr.filter(obj => {
        const key = Object.keys(obj)[0];
        const price = obj[+key].price;
        return (filters.price[0] <= price) && (filters.price[1] >= price)
    })]
    if(!filteredARR.length){
        return <EmptyProducts />
    }

    
    return (
        <React.Fragment>
            {
                grid ? <GridProducts allProd={filteredARR} /> : <Product allProd={filteredARR} />
            }
        </React.Fragment>
    )
}); 



