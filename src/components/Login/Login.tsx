import { useForm } from 'react-hook-form';
import PureModal from 'react-pure-modal';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from '../../store/actions/auth';

type LoginProps = {
    modal : boolean,
    onModalClick : () => void,
    error : string|null
}

export const Login = ({onModalClick,modal,error}:LoginProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onLogin = handleSubmit((values) => {
        dispatch(loginThunk(values.email,values.password));
    })
    const onRegister = handleSubmit((values) => {
        dispatch(registerThunk(values.email,values.password));
    })
    
    return (

        <PureModal
            width = {'400px'}
            className = "login_modal"
            header = "Login"
            isOpen = {modal}
            onClose = {onModalClick}
        >
            <>
            <form className = "login_form" >
                <div>
                    <div>Email</div>
                    <input type="email" {...register('email',{required : true})}/>
                    {errors.email && <p className = 'login_errorMes'>Required Field</p>}
                </div>
                <div>
                    <div>password</div>
                    <input type="password" {...register('password',{required : true,minLength:6})}/>
                    {errors?.password?.type==='required' && <p className = 'login_errorMes'>Required filed</p>}
                    {errors?.password?.type==='minLength' && <p className = 'login_errorMes'> Min Length 6 </p>}
                </div>
                {<p className = 'login_errorMes'>{error}</p>}
            </form>
            
            <div className = "login_form_btn_groups">
                <button onClick = {onLogin}>Login</button>
                <button onClick = {onRegister}>Registration</button>
            </div>
            </>
        </PureModal>
    )
}