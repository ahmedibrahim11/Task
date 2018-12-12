// @Flow
import { UserState, UserInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
    | actions.LOAD_USERs_ACTION

export function userReducer(
    state: UserState = UserInitialState,
    action: Action
): UserState {
    switch (action.type) {
        case types.LOAD_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }

        default:
            return state;
    }
}
