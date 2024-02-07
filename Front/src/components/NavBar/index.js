import {  Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.scss";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import KeyboardLogo from "../../img/Footer/KeyboardLogo.png";
import LogoBrasil from "../../img/NavBar/Flags/Brasil.png";
import LogoEUA from "../../img/NavBar/Flags/EUA.png";
import Perfil from "../../img/NavBar/Perfil.png";
import Image from 'react-bootstrap/Image';


export default function NavBar() {
  return (
    <Navbar className={styles.background} collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/" >
        <div>
          <Image
            alt=""
            src={KeyboardLogo}
            width="60px"
            height="30px" 
            className="d-inline-block align-top"
            fluid
          />{" "}
          TamanduaKeys
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav style={{display: "flex", justifyContent: "center", alignItems : "center"}}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link href="#deets" >About Us</Nav.Link>
            <NavDropdown title="Language" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Image        
                alt=""
                src={LogoEUA}
                width="32px"
                height="32px" 
                fluid
                style={{marginRight: "10%"}} />
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Image        
                alt=""
                src={LogoBrasil}
                width="32px"
                height="32px" 
                fluid 
                style={{marginRight: "10%"}} />
                Portugues
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{paddingTop: "5%"}}>
                <Image 
                    alt=""
                    src={Perfil}
                    width="32px"
                    height="32px"
                    fluid/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
