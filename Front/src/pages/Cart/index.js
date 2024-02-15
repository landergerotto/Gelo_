import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import CartCatd from "../../components/LoginCard";

export default function CartPage() {
  return (
      <Col className={styles.container}>
        <Row className={styles.container__row}>
          <Col xs={12} sm={10} md={10}>
            {/* <LoginCard /> */}
          </Col>
        </Row>
      </Col>
  );
}
