import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "./styles.module.scss";
import Keycaps from "../../img/ProductHome/Keycaps.png"
import Keyboard from "../../img/ProductHome/Keyboard.png"
import Housing from "../../img/ProductHome/Housing.png"
import Switches from "../../img/ProductHome/Switches.png"
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import { i18n } from "../../translation/i18n";

export default function ProductsHome() {
  const navigate = useNavigate();


  return (
    <Container fluid className={styled.title}>
        <h1 className={styled.backgroundcolortitle}>{i18n.t("Products.Products")}</h1>
      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "auto" } }
        >
          <div style={{ marginLeft : "20%"}}>
            <h3>{i18n.t("Products.Keycaps")}</h3>
            <h6>{i18n.t("Products.Keycapstext")}</h6>
              <Image
                alt=""
                src={Keycaps}
                width="200px"
                height="200px"
                style={{marginTop : "5%"}}
                fluid
                onClick={() => navigate('/products')}

              />
          </div>

        </Col>
        <Col className={styled.backgroundcolor}>
          <div style={{ marginRight : "20%"}}>
            <h3>{i18n.t("Products.KeyBoards")}</h3>
            <h6>{i18n.t("Products.KeyBoardstext")}</h6>
              <Image
                  alt=""
                  src={Keyboard}
                  width="300px"
                  height="300px"
                  fluid
                  onClick={() => navigate('/products')}
                />
          </div>
        </Col>
      </Row>


      <Row>
        <Col
          className={styled.backgroundcolor}
          style={{ width: "100vw", height: "auto" }}
        >
          <div style={{ marginLeft : "20%"}}>
            <h3>{i18n.t("Products.Cases")}</h3>
            <h6>{i18n.t("Products.Casestext")}</h6>
              <Image
                className={styled.image}
                alt=""
                src={Housing}
                width="533px"
                height="300px"
                fluid
                onClick={() => navigate('/products')}
              />
          </div>

        </Col>
        <Col className={styled.backgroundcolor}>
          <div style={{ marginRight : "20%"}}>
            <h3>{i18n.t("Products.Switches")}</h3>
            <h6>{i18n.t("Products.Switchestext")}</h6>
              <Image
                  alt=""
                  src={Switches}
                  width="333px"
                  height="150px"
                  style={{marginTop : "10%"}}
                  fluid
                  onClick={() => navigate('/products')}
                />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
