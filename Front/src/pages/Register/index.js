import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import AlertComponent from "../../components/AlertComponent";
import RegisterCard from "../../components/CardRegister";

export default function RegisterPage() {

  return (
    <Col className={styles.container}>
      <Row className={styles.container__row}>
        <Col xs={12} sm={8} md={4}>
          <AlertComponent />
          <RegisterCard />
        </Col>
      </Row>
    </Col>
  );
}
