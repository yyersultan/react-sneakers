import { useDispatch } from "react-redux";
import { decrementItemAc, deleteCartItemAc, incretemntItemAc } from "../../store/actions/cart";
import { CartItem as CartItemType } from "../../types/cartTypes"
import './CartItem.css';

type CartProps = {
    id: number,
    item: CartItemType,
    
}

export const CartItem = ({ id, item }: CartProps): JSX.Element => {
    const dispatch = useDispatch();
    const { img, name, price } = item.item;
    const onIncrement = () => {
        dispatch(incretemntItemAc(id));
    }
    const onDecrement = () => {
        dispatch(decrementItemAc(id));
    }
    const onDelete = () => {
        const yes = window.confirm("Do you wanna delete this item");
        yes && dispatch(deleteCartItemAc(id));
    }
    return (
        <div className='CartItem'>
            <div className='cart_section1'>
                <img src={img} alt="cart" className='cartItem_img'/>
                <div> {name} </div>
            </div>
            <div className = 'cart_section2'>
                <div className='cart_item_price'>
                    <div>{price} тг. </div>
                    <div className='cart_price_text'>цена за 1 пар</div>
                </div>
                <div className = 'cart_counter'>
                    <button onClick = {onDecrement}>-</button>
                    <input type="text" width="20" value={item.count} />
                    <button onClick = {onIncrement}>+</button>
                </div>
                <div className='cart_item_price'>
                    {price * item.count} тг. 
                </div>
                <i className="far fa-trash-alt" onClick = {onDelete}/> 
            </div>

        </div>
    )
}