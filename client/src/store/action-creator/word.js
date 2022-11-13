import {wordActions} from "./actions";

export const addWords = (words) => {
    return (dispatch) => {
        dispatch({type: wordActions.ADD_WORDS, payload: words})
    }
}
export const addWord = (word) => {
    return (dispatch) => {
        dispatch({type: wordActions.ADD_WORD, payload: word})
    }
}

export const addFakeWords = () => {
    return (dispatch) => {
        dispatch({type: wordActions.ADD_FAKE_WORDS})
    }
}
export const removeWord = (word) => {
    return (dispatch) => {
        dispatch({type: wordActions.REMOVE_WORD, payload:word})
    }
}