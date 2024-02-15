import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { AlertContext } from "../../context/alert";
import Image from 'react-bootstrap/Image';
import Perfil from "../../img/Login/perfil.png"
import { i18n } from "../../translation/i18n"



import axios from "axios";
import { SECRET } from "../../env";
import CryptoJS from "crypto-js";

export default function LoginCard() {
  const { setMessage, setShow, setVariant } = useContext(AlertContext);

  const navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [pass, setPass] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formValid()) return;

    const json = {
      email: email,
      password: pass,
    };
    try {
      const jsonCrypt = CryptoJS.AES.encrypt(
        JSON.stringify(json),
        SECRET
      ).toString();
      var res = await axios.post("http://localhost:8080/api/auth/", {
        jsonCrypt,
      });
      sessionStorage.setItem("token", res.data.token);
      navigate("/"); // alterar para /home
    } catch (error) {
      setMessage("Erro ao se conectar");
      setShow(true);
      setVariant("danger");
    }
  }

  function formValid() {
    if (!email.includes("@")) {
      setMessage("Insira um e-mail válidos");
      setShow(true);
      setVariant("danger");
      return false;
    }

    if (email.length < 5) {
      setMessage("Insira um e-mail válido");
      setShow(true);
      setVariant("danger");
      return false;
    }

    return true;
  }

  return (
      <Card className={styles.bigcard} style={{ justifyContent: "center", display: "flex", alignItems: "center"}}>
        <Col xs={{offset: "0"}} sm={{offset: "2"}} md={{offset: "4"}}>
        <Card className={styles.card} style={{backgroundColor: "black"}}>
          <Card.Body style={{backgroundColor: "#696768", borderRadius: "30px", marginTop: "8vh", marginBottom: "8vh"}}>
              <Card.Title style={{}}>
                <Image
                alt=""
                src={Perfil}
                width="128px"
                height="128px"
                fluid
                />
              </Card.Title>
            <Form className={styles.card__form} onSubmit={handleSubmit}>
              <Form.Control
                value={email}
                placeholder={i18n.t("Login.email")}
                onChange={(e) => setEmail(e.target.value)}
                style={{backgroundColor : "#cccccc"}}
              />
              <Form.Control
                value={pass}
                placeholder={i18n.t("Login.password")}
                onChange={(e) => setPass(e.target.value)}
                style={{backgroundColor : "#CCCCCC"}}
              />
              <Container className={styles.card__form__container} >
                <Button style={{backgroundColor : "#cccccc", border: "none", color : "black", width: "100%"}} className={styles.card__form__button} type="submit">
                {i18n.t("Login.login")}
                </Button>
              </Container>
              <Container className={styles.card__form__container} >
                <Button style={{backgroundColor : "#cccccc", border: "none", color : "black", width: "100%"}} as={Link} to="/register" className={styles.card__form__button} type="submit">
                {i18n.t("Register.register")}
                </Button>
              </Container>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Card>
  );
}
