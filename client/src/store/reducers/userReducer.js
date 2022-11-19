import {userActions} from "../action-creator/actions";
const initialState = {};
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case(userActions.ADD_USERNAME):
            return {...state,username: action.payload}
        case(userActions.ADD_TOKEN):
            return {...state,token: action.payload}
        case (userActions.LOGOUT):
            return {}
        default:
            return state
    }
}