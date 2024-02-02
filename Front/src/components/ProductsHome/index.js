import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "./styles.module.scss";

export default function ProductsHome() {
  return (
    <Container fluid className={styled.title}>
        <h1 className={styled.backgroundcolortitle}>Our Products</h1>
      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "60vh" }}
        >
          .
        </Col>
        <Col className={styled.backgroundcolor}>.</Col>
      </Row>
    </Container>
  );
}
