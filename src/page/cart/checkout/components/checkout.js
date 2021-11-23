import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutComponent = () => {
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1 style={{ textAlign: "center" }}>Checkout</h1>
                </Col>
            </Row>
            <Row>
                <Col span={18} offset={3}></Col>
            </Row>
            <Row>
                <Col span={12}>
                    <h3>Vui long xac nhan cac thong tin</h3>
                </Col>
                <Col span={12}>
                    <p>
                        Neu co da co tai khoan bam vao{" "}
                        <Link to="/login">Day</Link> de dang nhap
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default CheckoutComponent;
