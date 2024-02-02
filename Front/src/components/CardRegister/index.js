import { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from "axios";
import styles from "./styles.module.scss";
import { AlertContext } from "../../context/alert";

import { SECRET } from "../../env";
import CryptoJS from "crypto-js";

export default function RegisterCard() {
  const { setMessage, setShow, setVariant } = useContext(AlertContext);

  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confirmPass, setConfirmPass] = useState("");

  function formValid() {
    if (!name.includes(" ")) {
      setMessage("Insira nome e sobrenome");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (name.length < 5) {
      setMessage("Insira um nome e sobrenome válidos");
      setShow(true);
      setVariant("danger");
      return false;
    }
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
    if (confirmPass !== password) {
      setMessage("As senhas não conferem");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (password.length < 6) {
      setMessage("Senha inferior a 6 caracteres");
      setShow(true);
      setVariant("danger");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formValid()) return;

    const json = {
      name: name,
      email: email,
      adm: false,
      password: password,
      confirmPassword: confirmPass,
    };
    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();

    try {
      var res = await axios.post("http://localhost:8080/api/auth/register", {
        jsonCrypt,
      });
      setMessage(res.data.message);
      setVariant("success");
      setShow(true);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.card__header}>
        <Card.Title>Registrar-se</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form className={styles.card__form} onSubmit={handleSubmit}>
          <Container className={styles.card__form__input}>
            <Form.Label>Insira seu nome</Form.Label>
            <Form.Control
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Label>Insira seu e-mail</Form.Label>
            <Form.Control
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Label>Insira sua senha</Form.Label>
            <Form.Control
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme a Senha"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </Container>
          <Container>
            <Button className={styles.card__form__button} type="submit">
              Cadastrar
            </Button>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}
