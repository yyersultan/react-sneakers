import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { addToCartAc } from '../../../store/actions/cart';
import { ProdPropsType } from '../../../types/productTypes';
import './ProductItem.css';


export const ProductItem = ({id,product}:ProdPropsType):JSX.Element => {
    const dispatch = useDispatch();
    const {items} = useTypedSelector(state => state.cartReducer);
    const isAdded:boolean = Object.keys(items).includes(id);
    const onAddToCart = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const paylaod = {[+id] : product,count : 1};
        dispatch(addToCartAc(paylaod) )
    }
    return (
        <NavLink to = {`/catalog/${product.category}/${id}`} className="sneaker_block">
            <img  src={product["img"]} alt="" />
            <div className="sn_block_content">
                <div className="sn_block_title">
                    {product.name}
                </div>
                <div className="sn_count_type">
                    <li className="sn_count">Есть в наличии: {Math.floor(Math.random() * 10)}</li>
                    <div className="sn_type">Арт.: S10270-75</div>
                </div>

                <div className="sn_block_footer">
                    <div className="sn_price">
                        {product.price} тг./пар	
                    </div>
                    <div className = "sn_card" onClick = {(e) => onAddToCart(e)}>
                        {isAdded ? <i className="fas fa-check"></i>
                        :<i className="fas fa-cart-arrow-down"></i>
                        }
                    </div>
                </div>
                
            </div>
        </NavLink>
    )
}