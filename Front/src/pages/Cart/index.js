import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Products from "../../components/ProductsComponent";
import NavBar from "../../components/NavBar";
import CartComponent from "../../components/CartComponent";

export default function CartPage() {
  return (
    <>
      <NavBar />
      <Col className={`${styles.container}`}>
        <Row className={` pt-5 ${styles.container__row}`}>
          <Col xs={12} sm={12} md={10}>
            <CartComponent />

          </Col>
        </Row>
      </Col>
    </>
  )
}