import {wordActions} from "../action-creator/actions";
import {fakeWords} from "../../assets/fakewords";

const initialState = [];
export const wordReducer = (state = initialState, action) => {
    const newState = [...state]
    switch(action.type){
        case(wordActions.ADD_WORD):
            newState.push(action.payload)
            return newState
        case(wordActions.ADD_WORDS):
            newState.concat(action.payload)
            return newState
        case(wordActions.ADD_FAKE_WORDS):
            return fakeWords
        case(wordActions.REMOVE_WORD):
            return newState.filter(e => e.word!==action.payload);
        default:
            return state
    }
}