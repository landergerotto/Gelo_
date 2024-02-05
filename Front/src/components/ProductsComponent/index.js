import { useEffect, useState, useContext } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { AlertContext } from "../../context/alert";
import styles from "./styles.module.scss";
import image from "../../img/NavBar/LogoTamandua.png";
import NavBar from "../NavBar";

import axios from "axios";

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
      <NavBar />
      <Container>
        <Row xs={1} md={2} className="g-4">
        {Array.from(produtos).map((produto) => (
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
          ))}
        </Row>
      </Container>
    </>
  );
}
