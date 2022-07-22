import { FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./actionsType";

const initialState={
        loading: true,
        data :[],
        error: false
}

export const reducer = (store=initialState, action) => {

    switch (action.type) {
        case FETCH_USER_LOADING:
           return {
            ...store,
            loading : true,
            error : false
            }
        case FETCH_USER_SUCCESS:
           return {
            ...store,
            loading : false,
            error : false,
            data : action.payload
            }
        case FETCH_USER_ERROR:
           return {
            ...store,
            loading :false,
            error : true            
            }    
        default:
           return {
            ...store                
            }
    }
}
