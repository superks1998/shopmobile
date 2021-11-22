import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function TopSelling() {
    const { loading, products } = useSelector((state) => state.productsReducer);

    return (
        <>
            <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                    <h1>Top Selling Products</h1>
                </Col>
            </Row>
            <ListItem loading={loading} data={products.topSelling} />
        </>
    );
}

export default TopSelling;
