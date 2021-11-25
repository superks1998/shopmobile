import React from "react";
import ConfirmComponent from "./components/confirm";
import CheckoutComponent from "./components/checkout";
import { useSelector } from "react-redux";
import LayoutComponent from "../../../components/Layout";
import { isLogin } from "../../../helpers/authentication";

const CheckoutPage = () => {
    const token = useSelector((state) => state.auth.token);

    const checkLogin = isLogin(token);

    return (
        <>
            <LayoutComponent>
                {checkLogin ? <ConfirmComponent /> : <CheckoutComponent />}
            </LayoutComponent>
        </>
    );
};

export default CheckoutPage;
