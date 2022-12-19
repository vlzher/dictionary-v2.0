import {wordActions} from "../action-creator/actions";

const initialState = [];
export const wordReducer = (state = initialState, action) => {
    let newState = [...state]
    switch(action.type){
        case(wordActions.ADD_WORD):
            if(typeof action.payload.word.id !== "undefined") newState = newState.filter(word => word.id !== action.payload.word.id)

            if(action.payload.id !==-1){
                newState.splice(action.payload.id,0,action.payload.word)
            }
            else{
                newState = [action.payload.word].concat(newState)
            }
            return newState
        case(wordActions.ADD_WORDS):
            newState = newState.concat(action.payload)
            return newState
        case(wordActions.REMOVE_WORD):
            return newState.filter(word => word.id!==action.payload);
        case(wordActions.CLEAN_WORDS):
            return []
        case(wordActions.REMOVE_TRANSLATION):
            const word = newState.find(word => word.original === action.payload.word.original)
            console.log(word)
            word.translations.splice(action.payload.translationID,1)
            return newState
        default:
            return newState
    }
}