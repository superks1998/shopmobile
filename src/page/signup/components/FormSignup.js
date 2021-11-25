import React from "react";
import { Button, Col, Row, Form, Input, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signupRequest } from "../actions";
import { NavLink } from "react-router-dom";

const FormSignup = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(signupRequest(values.username, values.password));
    };

    const { loading, message } = useSelector((state) => state.signup);

    return (
        <>
            <Row>
                <Col span={12} offset={6} style={{ textAlign: "center" }}>
                    <h1>Sign Up</h1>
                    {message !== null ? (
                        <p style={{ color: "red", padding: "10px" }}>
                            {message}
                        </p>
                    ) : null}
                </Col>
                <Col
                    span={12}
                    offset={6}
                    style={{ border: "1px #ccc solid", padding: "10px" }}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed=""
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            {loading ? (
                                <>
                                    <Button
                                        disabled
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                    <Spin style={{ marginLeft: "12px" }} />
                                </>
                            ) : (
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            )}
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 20,
                                span: 16,
                            }}
                        >
                            <Button type="primary">
                                <NavLink to="/login">Login</NavLink>
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
                <Col offset={6}>
                    <Button
                        type="primary"
                        style={{ textAlign: "center" }}
                        onClick={() => dispatch(push("/"))}
                    >
                        Go to home
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default FormSignup;
