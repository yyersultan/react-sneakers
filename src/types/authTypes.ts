export interface authState {
    token : string | null,
    email : string,
    error : null | string
}

export enum AuthActionTypes  {
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
    AUTH_UNSUCCESS = 'AUTH_UNSUCCESS'
}

export interface authLoginPayload {
    token : string ,
    email : string
}

interface authLoginSucAction {
    type : AuthActionTypes.AUTH_SUCCESS,
    payload : authLoginPayload
}
interface authLogoutAction {
    type : AuthActionTypes.AUTH_LOGOUT
}
interface authUnSuccessAction  {
    type : AuthActionTypes.AUTH_UNSUCCESS,
    payload : string
}
interface authLogoutAction{
    type : AuthActionTypes.AUTH_LOGOUT
}
export type AuthAction = authLoginSucAction | authLogoutAction | authUnSuccessAction | authLogoutAction;