import { FETCH_USER_SUCCESS, FETCH_USER_LOADING, FETCH_USER_ERROR } from "./actionsType"

export const getUsersLoading=()=>{
    return{
        type : FETCH_USER_LOADING,
    }

}

export const getUsersSuccess=(data)=>{
    return{
        type : FETCH_USER_SUCCESS,
        payload : data
    }

}

export const getUsersError=()=>{
    return{
        type : FETCH_USER_ERROR,
    }

}