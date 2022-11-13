import {userActions} from "../action-creator/actions";
const initialState = {username: "username"};
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case(userActions.ADD_USERNAME):
            return {...state,username: action.payload}
        default:
            return state
    }
}