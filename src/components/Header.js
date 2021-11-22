import { Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";

const { Header } = Layout;

function HeaderComponent() {
    const { pathname } = useLocation();
    const countListCart = useSelector((state) => state.cartReducer.countList);

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
            </Menu>
        </Header>
    );
}

export default HeaderComponent;
