import {userActions} from "./actions";

export const addUsername = (username) => {
    return (dispatch) => {
        dispatch({type: userActions.ADD_USERNAME, payload: username})
    }
}