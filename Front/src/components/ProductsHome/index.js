import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "./styles.module.scss";
import icon from "../../img/NavBar/KeyboardIcon.png"


export default function ProductsHome() {
  return (
    <Container fluid className={styled.title}>
        <h1 className={styled.backgroundcolortitle}>Our Products</h1>
      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "60vh" }}
        >
          <h3>Keyboard LED</h3>
          <h6>Muita Qualidade Envolvida</h6>
            <img
              alt=""
              src={icon}
              width="200px"
              height="200px"
            />

        </Col>
        <Col className={styled.backgroundcolor}>
          <h3>Keyboard no LED</h3>
          <h6>Muita Qualidade Envolvida</h6>
            <img
                alt=""
                src={icon}
                width="200px"
                height="200px"
              />
        </Col>
      </Row>
    </Container>
  );
}
