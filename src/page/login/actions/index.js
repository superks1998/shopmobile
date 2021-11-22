import * as types from "./types";

export const loginRequest = (user, pass) => ({
    type: types.LOGIN_REQUEST,
    user,
    pass,
});

export const startLogin = (loading) => ({
    type: types.START_LOGIN,
    loading,
});

export const loginSucces = (data) => ({
    type: types.LOGIN_SUCCESS,
    data,
});

export const loginFailed = (error) => ({
    type: types.LOGIN_FAILED,
    error,
});

export const loginCancelled = (cancel) => ({
    type: types.LOGIN_CANCELLED,
    cancel,
});

export const saveTokenLogin = (token) => ({
    type: types.SAVE_TOKEN_LOGIN,
    token,
});

export const removeTokenLogin = (token) => ({
    type: types.REMOVE_TOKEN_LOGIN,
    token,
});

export const logoutRequest = () => ({
    type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = (mess) => ({
    type: types.LOGOUT_SUSSESS,
    mess,
});
