import { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { AlertContext } from "../../context/alert";

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
    <Card className={styles.card}>
      <Card.Body style={{backgroundColor: "#14253D", borderRadius: "30px"}}>
          <Card.Title style={{color : "#cfcfcf", fontSize : "60px", marginBottom: "5%"}}><strong>Login</strong></Card.Title>
        <Form className={styles.card__form} onSubmit={handleSubmit}>
          <Form.Control
            value={email}
            placeholder="Insira seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            style={{backgroundColor : "#cfcfcf"}}
          />
          <Form.Control
            value={pass}
            placeholder="Insira sua senha"
            onChange={(e) => setPass(e.target.value)}
            style={{backgroundColor : "#cfcfcf"}}
          />
          <Container className={styles.card__form__container}>
            <Button style={{backgroundColor : "#213B61", borderColor: "black", color : "#cfcfcf"}} className={styles.card__form__button} type="submit">
              Entrar
            </Button>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}
