import * as types from "../actions/types";

const initialState = {
    loading: false,
    info: null,
    cancelled: null,
    message: null,
};

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_SIGNUP:
            return {
                ...state,
                loading: action.loading,
            };
        case types.SIGNUP_FAILED:
            return {
                ...state,
                info: null,
                cancelled: null,
                message: action.error,
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                info: action.data,
                cancelled: null,
                message: action.message,
            };
        case types.SIGNUP_CANCELLED:
            return {
                ...state,
                cancelled: action.cancelled,
            };
        default:
            return state;
    }
};

export default signupReducer;
