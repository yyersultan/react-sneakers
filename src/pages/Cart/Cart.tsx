import { CartEmpty } from "../../components/CartEmpty/CartEmpty";
import { CartItem } from "../../components/CartItem/CartItem";
import { useTypedSelector } from "../../hooks/useTypedSelector"
import './Cart.css';


export const Cart = (): JSX.Element => {
    const { items, totalPrice } = useTypedSelector(state => state.cartReducer);
    const items_length: boolean = Object.keys(items).length === 0;
    return (
        <div className="Cart">

            <h1>Корзина</h1>

            { items_length ? <CartEmpty /> :
            <>
                <div className='Cart_Items_Price'>
                    <div><h1>Итого: {totalPrice} тг</h1></div>
                    <button>Oformit Zakaz</button>
                </div>
                <div>
                    {
                        Object.keys(items).map((key, i) => {
                            return <CartItem
                                key={`${key}_${i}`}
                                id={+key}
                                item={items[+key]} />
                        })
                    }
                </div>
            </>
            }           
        </div>
    )
}