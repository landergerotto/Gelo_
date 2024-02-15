import { Col, Row } from "react-bootstrap";
// import styles from "./styles.module.scss";
import Products from "../../components/ProductsComponent";
import NavBar from "../../components/NavBar";
import SingleProductComponent from "../../components/SingleProductComponent";

export default function SingleProductPage() {
  return (
    <>
      <NavBar />
      <SingleProductComponent />
    </>
  )
}