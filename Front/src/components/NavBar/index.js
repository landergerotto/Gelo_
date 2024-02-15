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
import { i18n } from "../../translation/i18n"
import { useState } from "react";



export default function NavBar() {
  const I18N_STORAGE_KEY = 'i18nextLng'
  
  const handleLanguage = language => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      language
      )
    window.location.reload(false)
  }

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
          {i18n.t("navbar.TamanduaKeys")}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav style={{display: "flex", justifyContent: "center", alignItems : "center"}}>
            <Nav.Link as={Link} to="/">{i18n.t("navbar.Home")}</Nav.Link>
            <Nav.Link as={Link} to="/products">{i18n.t("navbar.Products")}</Nav.Link>
            <Nav.Link href="#deets" >{i18n.t("navbar.Cart")}</Nav.Link>
            <NavDropdown title={i18n.t("navbar.Language")} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={(e) => {handleLanguage("en-US")}}>
                <Image        
                alt=""
                src={LogoEUA}
                width="32px"
                height="32px" 
                fluid
                style={{marginRight: "10%"}} 
                value = "en-US"/>
                
                {i18n.t("navbar.English")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={(e) => {handleLanguage("pt-BR")}}>
              <Image        
                alt=""
                src={LogoBrasil}
                width="32px"
                height="32px" 
                fluid 
                style={{marginRight: "10%"}} />
                {i18n.t("navbar.Portuguese")}
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
