import { all, call } from "redux-saga/effects";
import watchAddCartSaga from "../page/cart/saga/cartSaga";
import watchGetDataProductSaga from "../page/home/saga/homeSaga";
import {
    loginSagaFlowing,
    logoutSagaFlowing,
} from "../page/login/saga/loginSaga";
import signupSagaFlowing from "../page/signup/saga/signupSaga";

export default function* rootSaga() {
    yield all([
        call(watchGetDataProductSaga),
        call(watchAddCartSaga),
        call(loginSagaFlowing),
        call(logoutSagaFlowing),
        call(signupSagaFlowing),
    ]);
}
