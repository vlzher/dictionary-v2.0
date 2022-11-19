import {userActions} from "./actions";

export const addUsername = (username) => {
    return (dispatch) => {
        dispatch({type: userActions.ADD_USERNAME, payload: username})
    }
}
export const addToken = (token) => {
    return (dispatch) => {
        dispatch({type:userActions.ADD_TOKEN, payload:token})
    }
}
export const logout = () => {
    return(dispatch) => {
        dispatch({type: userActions.LOGOUT})
    }
}

