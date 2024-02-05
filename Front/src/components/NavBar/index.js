import {  Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.scss";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from "../../img/NavBar/KeyboardLogo.png";
import LogoBrasil from "../../img/NavBar/Flags/Brasil.png";
import LogoEUA from "../../img/NavBar/Flags/EUA.png";
import Perfil from "../../img/NavBar/Perfil.png";

export default function NavBar() {
  return (
    <Navbar className={styles.background} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >
        <div>
          <img
            alt=""
            src={image}
            width="60px"
            height="30px" 
            className="d-inline-block align-top"
          />{" "}
          TamanduaKeys
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <NavDropdown title="Language" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <img        
                alt=""
                src={LogoEUA}
                width="32px"
                height="32px" />
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <img        
                alt=""
                src={LogoBrasil}
                width="32px"
                height="32px" />
                Portugues
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{paddingTop: "5%"}}>
                <img 
                    alt=""
                    src={Perfil}
                    width="32px"
                    height="32px"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
