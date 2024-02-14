import { useEffect, useState, useContext } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { AlertContext } from "../../context/alert";
import styles from "./styles.module.scss";
import image from "../../img/NavBar/LogoTamandua.png";
import NavBar from "../NavBar";

import axios from "axios";
import ProductCard from "../ProductCard";
import { DecoderContext } from '../../context/decoder';

export default function Products() {
  const [produtos, setProdutos] = useState([]);
  const [jwt, setJwt] = useState();
  const { jwtoken, setJwtoken, decode, Rdecode} = useContext(DecoderContext);

  // console.log(props)

  function getToken()
  {
    
  }

  async function getPosts() {
    const res = await axios.get("http://localhost:8080/api/product");
    setProdutos(res.data);
    console.log(res.data);
  }

  async function handleClick(id) {
    await axios.post(`http://localhost:8080/api/article/like/${id}`, {
      userId: "65784a80eeb305eb54f56446",
    });
    getPosts();
  }

  function RenderComments(props) {
    const artigo = props.artigo;
    if (artigo.comments.length > 0) {
      return artigo.comments.map((comment) => {
        return <div key={comment._id}>{comment.text}</div>;
      });
    }
  }

  useEffect(() => {
    getPosts();
    // Rdecode()
    setJwt(Rdecode());
    console.log(jwt)
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
          {Array.from(produtos).map((item) => (
            <Col key={item._id}>
              <ProductCard 
              id={item._id}
              produto={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
