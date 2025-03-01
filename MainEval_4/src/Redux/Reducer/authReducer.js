import { LOGIN_USER, LOGOUT_USER, SET_USER } from "../Actions/authActions"


const initState = {
    isLoggedIn : false,
    user:null,
}

 export const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,isLoggedIn:true,user:action.user
            }
        case LOGOUT_USER:
            return {
                ...state,isLoggedIn:false,
                user:null
            }
        case SET_USER:
            return {
                ...state,user:action.user
            }
        default :
          return state
    }
};
