import { NavLink } from "react-router-dom"
import './CartEmpty.css';
export const CartEmpty = (): JSX.Element => {
    return (
        <div className = 'CartEmpty'>
            <i className="fas fa-cart-arrow-down cart_empty_icon"></i>
            <h3>Ваша корзина пуста</h3>
            <div>
                <NavLink to='/'>Нажмите здесь,</NavLink>
                чтобы продолжить покупки 
            </div>

        </div>
    )
}