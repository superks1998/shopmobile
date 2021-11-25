import * as types from "./types";

export const signupRequest = (user, pass) => ({
    type: types.SIGNUP_REQUEST,
    user,
    pass,
});

export const startSignup = (loading) => ({
    type: types.START_SIGNUP,
    loading,
});

export const signupSucces = (data, message) => ({
    type: types.SIGNUP_SUCCESS,
    data,
    message,
});

export const signupCancelled = (cancel) => ({
    type: types.SIGNUP_CANCELLED,
    cancel,
});

export const signupFailed = (error) => ({
    type: types.SIGNUP_FAILED,
    error,
});
