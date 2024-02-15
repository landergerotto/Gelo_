import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import AlertComponent from "../../components/AlertComponent";
import LoginCard from "../../components/LoginCard";

export default function LoginPage() {
  return (
      <Col className={styles.container}>
        <Row className={styles.container__row}>
          <Col xs={12} sm={10} md={10}>
            <AlertComponent />
            <LoginCard />
          </Col>
        </Row>
      </Col>
  );
}
