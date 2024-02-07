import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "./styles.module.scss";
import Keycaps from "../../img/ProductHome/Keycaps.png"
import Keyboard from "../../img/ProductHome/Keyboard.png"
import Housing from "../../img/ProductHome/Housing.png"
import Switches from "../../img/ProductHome/Switches.png"


export default function ProductsHome() {
  return (
    <Container fluid className={styled.title}>
        <h1 className={styled.backgroundcolortitle}>Products</h1>
      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "40vh" }}
        >
          <div style={{ marginLeft : "20%"}}>
            <h3>Keycaps</h3>
            <h6>Muita Qualidade Envolvida</h6>
              <img
                alt=""
                src={Keycaps}
                width="200px"
                height="200px"
                style={{marginTop : "5%"}}
              />
          </div>

        </Col>
        <Col className={styled.backgroundcolor}>
          <div style={{ marginRight : "20%"}}>
            <h3>Keyboards</h3>
            <h6>Muita Qualidade Envolvida</h6>
              <img
                  alt=""
                  src={Keyboard}
                  width="300px"
                  height="300px"
                />
          </div>
        </Col>
      </Row>


      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "40vh" }}
        >
          <div style={{ marginLeft : "20%"}}>
            <h3>Housing</h3>
            <h6>Muita Qualidade Envolvida</h6>
              <img
                alt=""
                src={Housing}
                width="533px"
                height="300px"
              />
          </div>

        </Col>
        <Col className={styled.backgroundcolor}>
          <div style={{ marginRight : "20%"}}>
            <h3>Switches</h3>
            <h6>Muita Qualidade Envolvida</h6>
              <img
                  alt=""
                  src={Switches}
                  width="333px"
                  height="150px"
                  style={{marginTop : "10%"}}
                />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
