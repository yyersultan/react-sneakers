import React from "react";
import { AboutCompany } from "../components/AboutCompany/AboutCompany";
import { Category } from "../components/Category/Category";
import { ContentHead } from "../components/ContentHead/ContentHead";
import { ProductContainer } from "../components/Product/ProductContainer";
import { Slider } from "../components/Slider/Slider";

export const Home:React.FC = () => {
    return (
        <React.Fragment>
            <Slider />
            <Category />
            <ContentHead />
            <ProductContainer grid = {false}/>
            <AboutCompany />
        </React.Fragment>
    )
}