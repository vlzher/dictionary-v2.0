import {wordActions} from "./actions";

export const addWords = (words) => {
    return (dispatch) => {
        dispatch({type: wordActions.ADD_WORDS, payload: words})
    }
}
export const addWord = (word,id) => {
    return (dispatch) => {
        dispatch({type: wordActions.ADD_WORD, payload: {word:word, id:id}})
    }
}
export const removeWord = (word) => {
    return (dispatch) => {
        dispatch({type: wordActions.REMOVE_WORD, payload:word})
    }
}
export const cleanWords = () => {
    return(dispatch) => {
        dispatch({type: wordActions.CLEAN_WORDS})
    }
}
export const removeTranslation = (word,translationID) => {
    return(dispatch) => {
        dispatch({type: wordActions.REMOVE_TRANSLATION, payload:{word:word,translationID:translationID}})
    }
}