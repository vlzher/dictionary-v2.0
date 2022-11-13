import {combineReducers} from "redux";
import {wordReducer} from "./wordsReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    words: wordReducer,
    user: userReducer,
})