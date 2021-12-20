import './TopHeader.css'
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useState } from 'react';
import { Login } from '../../Login/Login';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutAc } from '../../../store/actions/auth';

export const TopHeader = (): JSX.Element => {
    const {token,email,error} = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();
    const [modal, setModal] = useState<boolean>(false);
    const onModalClick = () => {
        setModal(!modal);
    }
    const onLogout = () => {
        dispatch(logoutAc());
    }
    return (
        <header>
            <div>Almaty</div>
            <div>
                <i className="fas fa-phone-alt"></i>  8 777 980 45 65
                <span className="order_phone">Order phone</span>
            </div>
            {token ? 
            <b>
                {email} <button className='logout_btn' onClick = {onLogout}>Logout</button> 
            </b> :
            <>
                <div onClick={onModalClick} className="button ">
                    <i className="far fa-user"></i>  Log in
                </div>
                <Login
                    error= {error}
                    onModalClick={onModalClick}
                    modal={modal} />
            </>
            }
        </header>

    )
}