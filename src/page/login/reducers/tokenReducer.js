import * as types from "../actions/types";

const initialState = {
    token: null,
};

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_TOKEN_LOGIN:
            return {
                ...state,
                token: action.token,
            };
        case types.REMOVE_TOKEN_LOGIN:
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};
