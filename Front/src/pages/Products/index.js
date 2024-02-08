import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Products from "../../components/ProductsComponent";
import NavBar from "../../components/NavBar";

export default function ProductsPage() {
  return (
    <>
      <NavBar />

      <Col className={`${styles.container}`}>
        <Row className={` pt-5 ${styles.container__row}`}>
          <Col xs={12} sm={10} md={10}>
            <Products />

          </Col>
        </Row>
      </Col>
    </>
  );
}
