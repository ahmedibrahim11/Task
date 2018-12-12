import * as types from "./actions";

import { userProxyService } from "../../proxy";


export type LOAD_USERs_ACTION = {
    type: string,
    payload: any
};

export function loadUsers(): LOAD_USERs_ACTION {
    return async (dispatch, getState) => {
        // const state = getState();
        //  dispatch({ type: UiTypes.UI_LOADING });
        debugger;
        let response = await userProxyService.getUsers();
        debugger;
        let users: any;
        users = await response.json();
        if (response.status === 200) {
            //   dispatch({ type: UiTypes.UI_LOADING });
            dispatch({ type: types.LOAD_USERS, payload: users });
        } else {
            //  dispatch({ type: UiTypes.UI_LOADING });
        }
    };
}
