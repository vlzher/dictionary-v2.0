import * as WordActionCreator from "./word"
import * as UserActionCreator from "./user"

export const ActionCreators = {
    ...WordActionCreator,
    ...UserActionCreator
}