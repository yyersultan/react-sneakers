import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/product";
import './MenuCatalog.css';

const sections:string[][] = [
    ['sneakers','Kроссовки'],
    ['kedy','Кеды'],
    ['wears','Толстовка'],
    ['Accessory ','Aксессуары '],
    ['discount','Cкидки']
    
]

export const MenuCatalog:React.FC = ():JSX.Element => {
    const [activeSection,setActiveSection] = useState(0);
    const dispatch = useDispatch();
    const onSectionClick = (category:string,id : number) => {
        dispatch(fetchProducts(category));
        setActiveSection(id)
    }
    return ( 
        <div className="catalog">
            
            <div className="catalog_list">
                {
                    sections.map((el,i) => {
                        const isEq = i === activeSection
                        return <div key = {el[1]} 
                                className = {isEq? 'active_sectoin':''}
                                onClick = {() => onSectionClick(el[0],i)}>
                            <div>{el[1]}</div>
                            {isEq && <div><i className="fas fa-chevron-right"></i></div>}
                        </div>
                    })
                }
               
            </div>
        </div>
    )
}