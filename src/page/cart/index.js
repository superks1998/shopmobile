import React from "react";
import { useDispatch } from "react-redux";
import LayoutComponent from "../../components/Layout";
import ListCart from "./components/ListCart";

function CartPage() {
    return (
        <>
            <LayoutComponent>
                <ListCart />
            </LayoutComponent>
        </>
    );
}

export default CartPage;
