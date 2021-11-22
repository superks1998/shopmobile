import * as types from "../actions/types";

const initialState = {
    loading: false,
    cancelled: null,
    info: null,
    errorMessage: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOGIN:
            return {
                ...state,
                loading: action.loading,
            };
        case types.LOGIN_CANCELLED:
            return {
                ...state,
                cancelled: action.cancelled,
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                info: null,
                cancelled: null,
                errorMessage: action.error,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                info: action.data,
                cancelled: null,
                errorMessage: null,
            };
        case types.LOGOUT_SUSSESS:
            return {
                ...state,
                errorMessage: null,
                info: null,
                cancelled: null,
            };
        default:
            return state;
    }
};
