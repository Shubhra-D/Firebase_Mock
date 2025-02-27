import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actions";


const initState = {
    user:null,
    loading:false,
    error:null,
};



  const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {...state,loading:true,error:null} 
        case LOGIN_SUCCESS:
            return {...state,loading:false,error:null}
        case LOGIN_FAILURE:
            return {...state,loading:false,error:action.error}
        case LOGOUT:
            return initState;
        default :
         return state;
    }
};

export default authReducer