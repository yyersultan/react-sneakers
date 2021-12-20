import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addToCartAc } from "../../../store/actions/cart";
import { ProdPropsType } from "../../../types/productTypes";
import './GridProduct.css';



export const GridProduct = ({ id, product }: ProdPropsType): JSX.Element => {
    const { items } = useTypedSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const minusCount = () => count > 1 && setCount(prev => prev - 1);
    const addCount = () => setCount(prev => prev + 1);

    const addToCart = () => {
        dispatch(addToCartAc({ [+id]: product, count }));
    }
    const isInCart: boolean = Object.keys(items).includes(id);
    return (
        
            <NavLink className="sn_grid_mode" to= {`/catalog/${product.category}/${id}`}>
                <div >
                    <img className="sn_image" src={product.img} alt="" />
                </div>
                <div>
                    <h4>{product.name}</h4>

                </div>
                <div>
                    <div className="sn_price"> <b>{product.price} тг./пар</b></div>
                    <div className="sn_size_text">Размер— 44</div>
                    <div className="sn_size_btns">
                        <button className="sn_active_btn">40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                    </div>
                    <div className="sn_cart_count">
                        {isInCart
                            ? <button className='in_cart_btn' onClick={addToCart}>B корзинe <i className="fas fa-check" /></button>
                            : <>
                                <div className="sn_count_btn">
                                    <button onClick={minusCount}>-</button>
                                    <input value={count} type="text" />
                                    <button onClick={addCount}>+</button>
                                </div>

                                <div className="sn_addToCart">
                                    <button onClick={addToCart}>Add to Cart</button>
                                </div>
                            </>}
                    </div>

                </div>
            </NavLink>

    )
}