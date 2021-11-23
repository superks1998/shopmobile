import { Col, Row } from "antd";
import React from "react";

const ConfirmComponent = () => {
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1 style={{ textAlign: "center" }}>Confirm Order</h1>
                </Col>
            </Row>
            <Row>
                <Col span={18} offset={3}>
                    <Row>
                        <Col span={12}>
                            <p>Dia chi giao hang</p>
                            <p>Chu thich</p>
                        </Col>
                        <Col span={12}>
                            <p>Hien thi lai thong tin gio hang</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default ConfirmComponent;
