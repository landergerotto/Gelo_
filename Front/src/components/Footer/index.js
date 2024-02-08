import { Container, Row } from "react-bootstrap"
import styled from "./styles.module.scss"
import KeyboardLogo from "../../img/Footer/KeyboardLogo.png";
import Image from 'react-bootstrap/Image';



export default function Footer (){
    return(
        <>
            <Container fluid className={styled.title}>
                <h1 className={styled.backgroundcolortitle}>TamanduaKeys</h1>
                <div>
                    <Image
                        alt=""
                        src={KeyboardLogo}
                        width="30%"
                        height="auto%" 
                        className="d-inline-block align-top"
                        fluid
                    />{" "}
                </div>
                <h6 style={{color: "white", marginTop:"1%"}}>Politica De Privacidade</h6>
                <h1 style={{color: "white", paddingTop: "5%", marginBottom: "0"}}>TAMANDUA BANDEIRA É DA HORA</h1>
            </Container>
        </>
    )

}