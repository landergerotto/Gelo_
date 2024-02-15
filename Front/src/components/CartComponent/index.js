import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

// import styles from "./styles.module.scss";

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartComponent() {
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
        {Array.from({length: 5}).map((item) => (
          
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
