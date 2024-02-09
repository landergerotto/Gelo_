import { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from "axios";
import styles from "./styles.module.scss";
import { AlertContext } from "../../context/alert";
import Image from 'react-bootstrap/Image';


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
    <Card className={styles.card} style={{borderRadius : "30", borderColor: "black"}}>
      <Card.Body style={{backgroundColor: "#14253D"}}>
      <Card.Title style={{color : "#cfcfcf", fontSize : "60px", marginBottom: "5%"}}><strong>Register</strong></Card.Title>
        <Form className={styles.card__form} onSubmit={handleSubmit}>
          <Container className={styles.card__form__input}>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{backgroundColor : "#cfcfcf"}}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Control
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{backgroundColor : "#cfcfcf"}}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Control
              placeholder="Senha"
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{backgroundColor : "#cfcfcf"}}
            />
          </Container>
          <Container className={styles.card__form__input}>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              style={{backgroundColor : "#cfcfcf"}}
            />
          </Container>
          <Container>
            <Button className={styles.card__form__button} style={{backgroundColor : "#213B61", borderColor: "black", color : "#cfcfcf"}} type="submit">
              Cadastrar
            </Button>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}
