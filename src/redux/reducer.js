import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "../page/home/reducers/homeReducer";
import cartReducer from "../page/cart/reducer/cartReducer";
import { loginReducer } from "../page/login/reducers/loginReducer";
import { tokenReducer } from "../page/login/reducers/tokenReducer";
import signupReducer from "../page/signup/reducer/signupReducer";

const configPersistToken = {
    key: "token-persist",
    storage,
    whitelist: ["token"],
};

const configPersistCart = {
    key: "cart-persist",
    storage,
    whitelist: ["cartList", "sumMoney", "countList"],
};

const rootReducer = (history) =>
    combineReducers({
        productsReducer,
        cartReducer: persistReducer(configPersistCart, cartReducer),
        router: connectRouter(history),
        auth: persistReducer(configPersistToken, tokenReducer),
        login: loginReducer,
        signup: signupReducer,
    });

export default rootReducer;
