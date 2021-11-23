import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { getUsername } from "../helpers/authentication";
import { logoutRequest } from "../page/login/actions";

const { Header } = Layout;

function HeaderComponent() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const countListCart = useSelector((state) => state.cartReducer.countList);

    const token = useSelector((state) => state.auth.token);

    const user = getUsername(token);

    const logout = () => {
        dispatch(logoutRequest());
    };

    return (
        <Header>
            <h3 className="logo">
                Shop
                <span>Mobile</span>
            </h3>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/home">
                    <NavLink to="/home">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="/cart">
                    <NavLink to="/cart">Cart ({countListCart})</NavLink>
                </Menu.Item>
                {user ? (
                    <>
                        <Menu.Item key="hi">Hi: {user}</Menu.Item>

                        <Menu.Item key="logout" onClick={() => logout()}>
                            Log out
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item key="login">
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    );
}

export default HeaderComponent;
