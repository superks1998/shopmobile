import React from "react";
import { Button, Col, Image, InputNumber, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { handleMoney } from "../../../helpers/handleMoney";
import { changeQtyCart, deleteItemCart } from "../actions";

function ListCart() {
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartReducer.cartList);
    const totalMoney = useSelector((state) => state.cartReducer.sumMoney);

    const handleDeleteItemCart = (id) => {
        dispatch(deleteItemCart(id));
    };

    const handleChangeQtyItem = (id, qty) => {
        dispatch(changeQtyCart(id, qty));
    };

    const goToCheckout = () => {
        dispatch(push("/checkout"));
    };

    return (
        <>
            <Row style={{ margin: "25px 0" }}>
                <Col span={24}>
                    <h1 style={{ textAlign: "center" }}>List cart</h1>
                </Col>
            </Row>
            {cartList.map((item, index) => (
                <Row
                    key={index}
                    style={{
                        marginBottom: 20,
                        borderBottom: "1px solid #ccc",
                        padding: "10px 0",
                    }}
                >
                    <Col span={4}>
                        <Image width={200} src={item.image} />
                    </Col>
                    <Col span={20}>
                        <h2>{item.name}</h2>
                        <p>
                            Price:{" "}
                            <span style={{ color: "red" }}>
                                {handleMoney(item.price)}
                            </span>
                        </p>
                        <p>
                            Money:{" "}
                            <span style={{ color: "red" }}>
                                {handleMoney(item.price * item.qty)}
                            </span>
                        </p>
                        <InputNumber
                            min={1}
                            max={10}
                            defaultValue={item.qty}
                            onChange={(val) =>
                                handleChangeQtyItem(item.id, val)
                            }
                        />
                        <div style={{ marginTop: 5, color: "red" }}>
                            <Button
                                type="dashed"
                                onClick={() => handleDeleteItemCart(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </Col>
                </Row>
            ))}

            {totalMoney > 0 ? (
                <Row style={{ margin: "10px 0" }}>
                    <Col span={24}>
                        <h3 style={{ textAlign: "right" }}>
                            Total Money:{" "}
                            <span style={{ color: "red" }}>
                                {handleMoney(totalMoney)}
                            </span>
                        </h3>
                        <Button
                            type="primary"
                            style={{ float: "right" }}
                            onClick={() => goToCheckout()}
                        >
                            Checkout
                        </Button>
                    </Col>
                </Row>
            ) : (
                <h3 style={{ textAlign: "center" }}>Kh??ng c?? s???n ph???m n??o</h3>
            )}
        </>
    );
}

export default ListCart;
