import './ProductDetail.css';
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { withRouter } from "react-router"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductDetail } from "../../store/actions/product";
import { addToCartAc } from '../../store/actions/cart';

const DetailPage = (props: any): JSX.Element => {
    const[count,setCount] = useState(1);
    const[sizeId,setSizeId] = useState(0);
    const dispatch = useDispatch();
    const { productDetail,section } = useTypedSelector(state => state.productReducer);
    const { items } = useTypedSelector(state => state.cartReducer);
    const { category, id } = props.match.params;

    useEffect(() => {
        const data = {product : {id,category},section}
        dispatch(fetchProductDetail(data));
    }, [id, category]);

    const onIncrementCount = () => setCount(prev => prev + 1);
    const onDecrementCount = () => count > 1 && setCount(prev => prev - 1);
    const onAddToCart = () => {
        dispatch(addToCartAc({ [+id] : productDetail,count}));
    } 

    const size_list = productDetail.size.split(',');
    const isAdded = Object.keys(items).includes(id);
    return (
        <div className="ProductDetail">
            <h1 className='ProductDetail_title'>
                {productDetail.name} 
                <span className = 'character_text'> Арт.: S10270-75</span> 
            </h1>
            <div className="ProductDetailContainer">
                <img src={productDetail.img} alt="cross" />
                <div className="ProductDetailInfo">
                    <h2>{productDetail.price}  тг./пар</h2>

                    <li className="sn_count">Есть в наличии: {Math.floor(Math.random() * 10)}</li>

                    <p className="prod_size_text">Размер—{size_list[sizeId]}</p>
                    <div className="ProductDetail_sizes">
                        {
                            size_list.map((size,i) => {
                                return <button 
                                        onClick = {() => setSizeId(i)}
                                        className= {'size_btn ' + (sizeId === i && ' ac_size_btn')} >
                                            {size}
                                        </button>
                            })
                        }
                    </div>

                    <div className="prod_det_btn_gr">
                        {!isAdded && <div className="add_minus_form">
                            <button onClick = {onDecrementCount}>-</button>
                            <input type="text" value={count} />
                            <button onClick ={onIncrementCount}>+</button>
                        </div>}
                        <button onClick = {onAddToCart} className='add_to_cart_btn'>
                            {isAdded ? 
                            <span >B корзинe <i className="fas fa-check"></i>
                            </span>:"добавить в корзину"}
                        </button>
                    </div>
                    <div className = 'character_title'>Характеристики</div>
                    <div className='charcter_blocks'>
                        <div>
                            <span className='character_text'> Сезон </span> <span>	—Мульти </span>
                        </div>
                        <div>
                            <span className='character_text'>  Пол </span> <span>	—Унисекс </span>
                        </div>
                        <div>
                            <span className='character_text'> Бренд </span> <span>	—{productDetail.category} </span>
                        </div>
                    </div>
                    <div className = 'character_text'>
                    Цена действительна только для интернет-магазина и может отличаться от цен в розничных магазинах
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductDetail = withRouter(DetailPage);
export { ProductDetail };