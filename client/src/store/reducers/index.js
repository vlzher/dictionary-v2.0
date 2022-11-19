import {combineReducers} from "redux";
import {wordReducer} from "./wordsReducer";
import {userReducer} from "./userReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore } from 'redux'
const rootReducer = combineReducers({
    words: wordReducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
