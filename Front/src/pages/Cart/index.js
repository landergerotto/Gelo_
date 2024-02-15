import { Col, Row } from "react-bootstrap";
// import styles from "./styles.module.scss";
import Products from "../../components/ProductsComponent";
import NavBar from "../../components/NavBar";
import CartComponent from "../../components/CartComponent";

export default function CartPage() {
  return (
    <>
      <NavBar />
      <CartComponent />
    </>
  )
}