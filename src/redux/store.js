import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";

import rootReducer from "./reducer";
import rootSaga from "./saga";
import history from "./history";

const configRootPersist = {
    key: "root-persist-config",
    storage,
    blacklist: ["router", "productReducer", "login"],
};

const rootReducerPersist = persistReducer(
    configRootPersist,
    rootReducer(history)
);

const sagaMiddleware = createSagaMiddleware();

const configStore = (loadStore = {}) => {
    const store = createStore(
        rootReducerPersist,
        loadStore,
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
        )
    );

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return { store, persistor, history };
};

export default configStore;
