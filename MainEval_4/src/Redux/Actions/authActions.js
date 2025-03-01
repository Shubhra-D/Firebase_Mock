export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";


export const login = (user)=>{
    return{
        type:LOGIN_USER,
        user,
    }
};

export const logout = ()=>{
    return {
        type:LOGOUT_USER
    }
};


export const setUserr = (user)=>{
    return {
        type:SET_USER
    }
}