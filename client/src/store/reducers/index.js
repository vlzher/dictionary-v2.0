import {combineReducers} from "redux";
import {wordReducer} from "./wordsReducer";
import {userReducer} from "./userReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
    words: wordReducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
