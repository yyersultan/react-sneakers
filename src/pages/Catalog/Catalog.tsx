import React, { useState } from "react";
import { Filter } from "../../components/Filter/Filter";
import { MenuCatalog } from "../../components/MenuCatalog/MenuCatalog";
import { ProductContainer } from "../../components/Product/ProductContainer";
import './Catalog.css';

export const Catalog:React.FC = ():JSX.Element => {
    const [grid, setGrid] = useState<boolean>(false);
    
    
    return (
        <div className = "catalog_body">
            <MenuCatalog />
             <div className = "filters sneakers">
                <Filter setGrid = {setGrid} grid = {grid}/>
                <ProductContainer grid = {grid} />
            </div>
            
        </div>
    )
}