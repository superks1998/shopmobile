import React from "react";
import { Button, Card, Col, Row, Skeleton } from "antd";
import { handleMoney } from "../../../helpers/handleMoney";
import { useDispatch } from "react-redux";
import { addPdToCart } from "../../cart/actions";

const { Meta } = Card;

function ListItem({ loading, data }) {
    const dispatch = useDispatch();

    const handleAddCart = (id) => {
        dispatch(addPdToCart(id));
    };

    return (
        <>
            {data && !loading ? (
                <Row style={{ margin: "5px 10px" }}>
                    {data.map((item, index) => (
                        <Col span={6} key={index}>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img src={item.image} alt={item.name} />}
                            >
                                <Meta title={item.name} />
                                <p>
                                    Price:{" "}
                                    <span style={{ color: "red" }}>
                                        {handleMoney(item.price)}
                                    </span>
                                </p>
                                <Button
                                    type="primary"
                                    onClick={() => handleAddCart(item.id)}
                                >
                                    Add cart
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Skeleton active />
            )}
        </>
    );
}

export default React.memo(ListItem);
