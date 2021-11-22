import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as types from "../actions/types";
import { getListDataProducts } from "../../../services/api";

function* getDataProductsSaga() {
    try {
        yield put(actions.startGetDataProducts(true));

        const data = yield call(getListDataProducts);

        if (data) {
            yield put(actions.getDataProductsSuccess(data));
        } else {
            yield put(
                actions.getDataProductsFailed({
                    code: 404,
                    message: "Not found data",
                })
            );
        }

        yield put(actions.stopGetDataProducts(false));
    } catch (err) {
        yield put(actions.getDataProductsFailed(err));
        yield put(actions.stopGetDataProducts(false));
    }
}

export default function* watchGetDataProductSaga() {
    yield takeEvery(types.GET_DATA_PRODUCTS, getDataProductsSaga);
}
