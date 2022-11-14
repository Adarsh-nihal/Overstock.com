import { auth } from "../../fireBase";
import * as types from "./actionType";

const userLoginRquest =  () =>{
    return{
        type:types.USER_LOGIN_REQUEST
    }
}

const userLoginSuccess = (payload) =>{
    return {
        type:types.USER_LOGIN_SUCCESS,
        payload
    }
}

const userLoginFailure = () =>{
    return{
        typep:types.USER_LOGIN_FAILURE
    }
}
const registerRequest = () =>{
    return{
        type:types.USER_REGISTER_REQUEST
    }
}
const registerSuccess = (payload) =>{
    return{
        type:types.USER_REGISTER_SUCCESS,
        payload
    }
}
const registerFailure = () =>{
    return{
        type:types.USER_REGISTER_FAILURE
    }
}
const userLogutRequst = () =>{
    return{
        type:types.USER_LOGOUT_REQUEST
    }
}
const userLogutSuccess = () =>{
    return{
        type:types.USER_LOGOUT_SUCCESS
    }
}
const userLogutFailure = () =>{
    return{
        type:types.USER_LOGOUT_FAILURE
    }
}

const adminLoginRquest =  () =>{
    return{
        type:types.ADMIN_LOGIN_REQUEST
    }
}

const adminLoginSuccess = (payload) =>{
    return {
        type:types.ADMIN_LOGIN_SUCCESS,
        payload
    }
}

const adminLoginFailure = () =>{
    return{
        typep:types.ADMIN_LOGIN_FAILURE
    }
}
const registerInitiate = (email,password) =>{
        return function (dispatch){
            dispatch(registerRequest());
            auth.createUserWithEmailAndPassword(email.trim(),password).then((res)=>{
                console.log(res);
                res.user.updateProfile({
                    displayName:email
                })
                dispatch(registerSuccess(res.user.uid));
            }).catch((er)=>{
                console.log(er);
                dispatch(registerFailure())})
        }
};
const loginInitiate = (email,password) =>{
    return function (dispatch){
        dispatch(userLoginRquest());
        auth.signInWithEmailAndPassword(email.trim(),password).then((res)=>{
            console.log(res);
            dispatch(userLoginSuccess(res.user.uid));
        }).catch((er)=>{
            console.log(er);
            dispatch(userLoginFailure())})
    }
    
};
const logoutInitiate = () =>{
    return function (dispatch){
        dispatch(userLogutRequst());
        auth.signOut().then((res)=>{
            dispatch(userLogutSuccess())
        }).catch(er=>dispatch(userLogutFailure()))
    }
}

export {registerInitiate,loginInitiate,logoutInitiate,adminLoginSuccess};