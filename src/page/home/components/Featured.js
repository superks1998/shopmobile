import { Button, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";

function FeaturedProducts() {
    const dispatch = useDispatch();
    const { loading, products } = useSelector((state) => state.productsReducer);

    return (
        <>
            <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                    <Button
                        type="primary"
                        style={{ textAlign: "center", marginTop: 10 }}
                    >
                        Go to Cart
                    </Button>
                    <h1>Featured Products</h1>
                </Col>
            </Row>
            <ListItem loading={loading} data={products.featured} />
        </>
    );
}

export default FeaturedProducts;
