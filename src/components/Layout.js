import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import "./layout.css";

function LayoutComponent(props) {
    return (
        <Layout className="layout">
            <HeaderComponent />
            <Content style={{ padding: "0 50px" }}>
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <FooterComponent />
        </Layout>
    );
}

export default LayoutComponent;
