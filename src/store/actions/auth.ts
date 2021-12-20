import axios from "axios"
import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../types/authTypes"

export const registerThunk = (email : string,password : string) => {
    return async (dispatch:Dispatch<AuthAction>) => {
        try{
            const data = {email,password,returnSecureToken: true};
            const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDgSgfQpWY0U-peOXg-Tz2osIeUIWKkLr4',data);
            dispatch({type : AuthActionTypes.AUTH_SUCCESS,payload : {email,token : response.data.idToken}})  
        }catch(e:any){
            dispatch({type : AuthActionTypes.AUTH_UNSUCCESS,payload : e.response.data.error.message})
            
        }
    }
}

export const loginThunk = (email : string, password : string) => {
    return async(dispatch:Dispatch<AuthAction>) => {
        try{
            const data = {email,password,returnSecureToken:true};
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgSgfQpWY0U-peOXg-Tz2osIeUIWKkLr4',data);
            dispatch({type : AuthActionTypes.AUTH_SUCCESS,payload : {email,token : response.data.idToken}})
        }catch(e:any){
            dispatch({type : AuthActionTypes.AUTH_UNSUCCESS,payload : e.response.data.error.message})
        }
    }
}

export const logoutAc = ():AuthAction => {
    return {type : AuthActionTypes.AUTH_LOGOUT}
}