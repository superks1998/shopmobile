import { take, put, call, fork, cancel, cancelled } from "redux-saga/effects";
import { push } from "connected-react-router";
import * as actions from "../actions/index";
import * as types from "../actions/types";
import { signupApi } from "../../../services/signup";

function* signupSaga(user, pass) {
    try {
        yield put(actions.startSignup(true));

        const response = yield call(signupApi, user, pass);

        if (response.hasOwnProperty("code") && response["code"] === 200) {
            yield put(
                actions.signupSucces(response, "Signup success. You can login!")
            );
            yield put(actions.startSignup(false));
        } else {
            yield put(actions.signupFailed("Username already exist!"));
        }
    } catch (error) {
        yield put(actions.signupFailed(error));
    } finally {
        // Khong the truy cap ket noi api
        if (yield cancelled()) {
            yield put(
                actions.signupCancelled({
                    code: 500,
                    message: "Sync cancelled",
                })
            );
        }
    }
}

export default function* signupSagaFlowing() {
    while (true) {
        const { user, pass } = yield take(types.SIGNUP_REQUEST);
        const taskSignup = yield fork(signupSaga, user, pass);
        const act = yield take([types.SIGNUP_FAILED]);

        if (act.type === types.SIGNUP_FAILED) {
            yield put(actions.startSignup(false));
            yield cancel(taskSignup);

            // Mac dinh quay ve trang login
            yield put(push("/login"));
        }
    }
}
