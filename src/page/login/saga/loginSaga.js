import {
    take,
    put,
    call,
    fork,
    cancel,
    cancelled,
    takeLatest,
} from "redux-saga/effects";
import { push } from "connected-react-router";
import * as actions from "../actions/index";
import * as types from "../actions/types";
import { loginApi } from "../../../services/login";

function* loginSaga(user, pass) {
    try {
        yield put(actions.startLogin(true));

        const response = yield call(loginApi, user, pass);

        if (response.hasOwnProperty("code") && response["code"] === 200) {
            yield put(actions.loginSucces(response));
            yield put(actions.saveTokenLogin(response["token"]));
            yield put(actions.startLogin(false));

            yield put(push("/home"));
        } else {
            yield put(actions.loginFailed("Username or password invalid!"));
        }
    } catch (error) {
        yield put(actions.loginFailed("Username or password invalid"));
    } finally {
        // Khong the truy cap ket noi api
        if (yield cancelled()) {
            yield put(
                actions.loginCancelled({
                    code: 500,
                    message: "Sync cancelled",
                })
            );
        }
    }
}

function* logoutSaga() {
    try {
        yield put(actions.logoutSuccess("Logout success"));
        yield put(actions.removeTokenLogin(null));
        yield put(push("/login"));
    } catch (err) {
        console.log(err);
    }
}

export function* loginSagaFlowing() {
    while (true) {
        // Thuc su se theo doi loginSaga khi co action cua user lay ra du lieu nguoi dung nhap
        const { user, pass } = yield take(types.LOGIN_REQUEST);

        console.log(user, pass);
        // Theo doi re nhanh loginSaga
        const taskLogin = yield fork(loginSaga, user, pass);
        // Khi co hanh dong logout hoac login error thi dung hanh dong login lai

        // Lay ra hanh dong logout va login failed
        const act = yield take([types.LOGOUT_REQUEST, types.LOGIN_FAILED]);

        if (
            act.type === types.LOGOUT_REQUEST ||
            act.type === types.LOGIN_FAILED
        ) {
            yield put(actions.startLogin(false));
            //Huy hanh dong login
            yield cancel(taskLogin);
            yield put(actions.removeTokenLogin(null));

            // Mac dinh quay ve trang login
            yield put(push("/login"));
        }
    }
}

export function* logoutSagaFlowing() {
    yield takeLatest(types.LOGOUT_REQUEST, logoutSaga);
}
