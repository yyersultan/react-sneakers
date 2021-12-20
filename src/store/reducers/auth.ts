import { AuthAction, AuthActionTypes, authState } from "../../types/authTypes"

const initialState:authState = {
    email : '',
    token : null,
    error : null
}

const authReducer = (state = initialState,action:AuthAction):authState => {
    switch(action.type){
        case AuthActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                email : action.payload.email,
                token : action.payload.token,
                error : null
            }
        case AuthActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token : null,
                email : '',
                error : null
            }
        case AuthActionTypes.AUTH_UNSUCCESS:
            return {
                ...state,
                error : action.payload
            }
        default : return state
    }
}
export default authReducer;