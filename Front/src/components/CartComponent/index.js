import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

// import styles from "./styles.module.scss";

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { CartContext } from "../../context/cart";

import { i18n } from "../../translation/i18n"

export default function CartComponent() {

  const { cart, setCart, addToCart, removeFromCart  } = useContext(CartContext);
  // setCart([])
  console.log(cart)

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
        {Array.from(cart).map((item, idx) => (
          
          <Col key={idx}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                <Button variant="secondary">-</Button>{' '}
                <Button variant="success">+</Button>{' '}
                </Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item)}>{i18n.t("Products.Delete")}</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
