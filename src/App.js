import { Skeleton, Spin } from "antd";
import { ConnectedRouter } from "connected-react-router";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import CartPage from "./page/cart";
import HomePage from "./page/home";
import LoginPage from "./page/login";
import configStore from "./redux/store";

const { store, persistor, history } = configStore();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Spin />} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Suspense fallback={<Skeleton active />}>
                        <Switch>
                            <Route path="/home">
                                <HomePage />
                            </Route>
                            <Route path="/cart">
                                <CartPage />
                            </Route>
                            <Route exact path="/login">
                                <LoginPage />
                            </Route>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                    </Suspense>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
