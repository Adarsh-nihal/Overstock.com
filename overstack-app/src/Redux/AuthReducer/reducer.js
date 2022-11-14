import * as types from "./actionType";

import React from 'react'
const inState = {
    user:'',
    isAdmin:false,
    isAuth:false,
    isAuthLoading:false,
    isAuthError:false
}
const reducer = (state = inState,action) => {
    const {type,payload} = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
        return{
            ...state,
            isAuthLoading:true,
        }
    case types.USER_LOGIN_SUCCESS:
        return{
            ...state,
            isAuthLoading:false,
            isAuth:true,
            user:payload
        }
    case types.USER_LOGIN_FAILURE:
        return{
            ...state,
            isAuthLoading:false,
            isAuthError:true,
            isAuth:false
        }
    case types.USER_REGISTER_REQUEST:
        return{
            ...state,
            isAuthLoading:true
        }
    case types.USER_REGISTER_SUCCESS:
        return{
            ...state,
            isAuthLoading:false,
            isAuth:true,
            user:payload
        }
    case types.USER_REGISTER_FAILURE:
        return{
            ...state,
            isAuthLoading:false,
            isAuthError:true,
            isAuth:true
        }
    case types.USER_LOGOUT_REQUEST:
        return{
            ...state,
            isAuthLoading:true,
        }
    case types.USER_LOGOUT_SUCCESS:
        return{
            ...state,
            user:'',
            isAdmin:false,
            isAuth:false
        }
    case types.USER_LOGOUT_FAILURE:
        return{
            ...state,
            isAuthError:true,
            isAuthLoading:false
        }
    case types.ADMIN_LOGIN_REQUEST:
        return{
            ...state,
            isAdmin:false
        }
    case types.ADMIN_LOGIN_SUCCESS:
        return{
            ...state,
            isAuth:true,
            isAdmin:true
        }
    case types.ADMIN_LOGIN_FAILURE:
        return{
            ...state,
            isAdmin:false
        }
    
    default:
        return state
  }
}

export {reducer}