import { NavLink } from 'react-router-dom';
import logo from '../../../asstes/img/logo.png';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './MediumHeader.css';

export const MediumHeader = ():JSX.Element => {
    const {items} = useTypedSelector(state => state.cartReducer);
    const countOfItems:number = Object.keys(items).length;
    return (
    <nav className="nav">
        <div className="nav_item">
            <div className="nav_title">
                <img src= {logo} alt="" className="nav_logo"/> 
            </div>
            <div className="nav_title_text">
                Магазин кроссовок и одежды
            </div>
        </div>

        <div className="nav_item">
            <input type="text" className="search" placeholder="Enter somethnig" />
            <i className="fas fa-search"></i>
        </div>

        <NavLink to = {'/cart'} className = 'cart-icon'>
                <i className="fas fa-cart-plus"></i>
                <div className='cart-count'>
                    { countOfItems }
                </div>
        </NavLink>
    </nav> 
    )
}