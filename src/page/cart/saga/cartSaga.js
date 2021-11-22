import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/index";
import { getDataProductById } from "../../../services/api";
import { ADD_CART } from "../actions/types";

function* addCartSaga({ id }) {
    try {
        yield put(actions.startAddCart(true));

        const data = yield call(getDataProductById, id);

        if (data) {
            yield put(actions.addCartSuccess(data));
            yield put(actions.finishedAddCart(true));
        } else {
            yield put(
                actions.addCartFailed({
                    code: 404,
                    message: "Not found data",
                })
            );
            yield put(actions.finishedAddCart(false));
        }
    } catch (error) {
        yield put(actions.addCartFailed(error));
        yield put(actions.finishedAddCart(false));
    }
}

export default function* watchAddCartSaga() {
    yield takeEvery(ADD_CART, addCartSaga);
}
