// @Flow
import { UserState, UserInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";
import * as _ from "lodash";

type Action =
    | actions.LOAD_USERs_ACTION
    | actions.GET_USER_BY_IB_ACTION
    | actions.LOAD_MORE_USERS_ACTION

export function userReducer(
    state: UserState = UserInitialState,
    action: Action
): UserState {
    switch (action.type) {
        case types.LOAD_MORE_USERS: {
            var len = state.users.length - state.loadedUsers.length;
            debugger;
            let _loadedusers = state.loadedUsers.concat(_.slice(state.users, len, len + 3));
            return {
                ...state,
                loadedUsers: _loadedusers
            }
        }
        case types.LOAD_USERS: {
            let _loadedusers = _.slice(action.payload, 0, 5);
            debugger;
            return {
                ...state,
                users: action.payload,
                loadedUsers: _loadedusers
            }
        }

        case types.GET_USER_BY_IB: {
            return {
                ...state,
                currentUser: action.payload
            }
        }

        default:
            return state;
    }
}
