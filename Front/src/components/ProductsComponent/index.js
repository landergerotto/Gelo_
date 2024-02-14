import { useEffect, useState, useContext } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import { AlertContext } from "../../context/alert";
import styles from "./styles.module.scss";
import image from "../../img/NavBar/LogoTamandua.png";
import NavBar from "../NavBar";

import axios from "axios";
import ProductCard from "../ProductCard";

export default function Products() {

  const [produtos, setArtigos] = useState([]);

  async function getPosts() {
    const res = await axios.get("http://localhost:8080/api/product");
    setArtigos(res.data);
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
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
        {/* {Array.from(produtos).map((produto) => (
          <Col key={produto._id}>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{produto.name}</Card.Title>
                <Card.Text>
                  {produto.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          ))} */}
           {/* {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))} */}
      {/* {Array.from({ length: 10 }).map((item, idx) => (
      <Col key={idx}>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src={image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{"A"}</b>
            <p className="text-default-500">{0.00}</p>
          </CardFooter>
        </Card>
      </Col>
      ))} */}
      {Array.from({ length: 10 }).map((item, idx) => (
        <Col key={idx}>
          <ProductCard
            id={idx}
          />
        </Col>

      ))}

        </Row>
      </Container>
    </>
  );
}
