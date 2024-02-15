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
  const [dummyState,rerender] = useState(1);

  const onClick = () => {
      rerender(dummyState + 1);
  }

  useEffect( () => {
      // console.log("dummyState's state has updated to: " + dummyState)
  }, [dummyState])

  const { cart, setCart, addToCart, removeFromCart  } = useContext(CartContext);
  // setCart([])

  function RenderGoButton()
  {
    if (cart.length > 0)
        return(
      <>
      <Button variant="success" className="mt-5" onClick={() => createOrder()}>Buy</Button>
      </>
      )
    else{
      return(<>
      <p>
        {i18n.t("Cart.Message")}
      </p>
      </>)
    }
  }

  function addQty(item)
  {
    cart.forEach(element => {
      if (element._id == item._id)
        item.qty++;
    });
    console.log(cart)
    onClick()
  }

  function remQty(item)
  {
    cart.forEach(element => {
      if (element._id == item._id)
        item.qty--;
    });

    if (item.qty <= 0)
      removeFromCart(item)
    onClick()
  }

  async function createOrder()
  {
    // console.log("a")
    var list = []
    cart.forEach(element => {
      var prodObj = {Id: element._id, Color: 'Black', Qty: element.qty}
      list.push(prodObj)
    });
    const res = await axios.post(`http://localhost:8080/api/order/`, {
      number: 0,
      product: list,
      userId: "65cca63905963b01842417ae"
    });

    cart.forEach(element => {
      removeFromCart(element)
    });

    console.log(res)
  }

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
        {Array.from(cart).map((item, idx) => (
          
          <Col key={idx}>
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                <Button variant="secondary" onClick={() => remQty(item)}>-</Button>{' '}
                  {item.qty}
                <Button variant="success" onClick={() => addQty(item)}>+</Button>{' '}
                </Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item)}>{i18n.t("Products.Delete")}</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
        <Row>
          <RenderGoButton></RenderGoButton>
        </Row>
      </Container>
    </>
  );
}
