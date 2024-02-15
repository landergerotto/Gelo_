import { Container, Row } from "react-bootstrap"
import styled from "./styles.module.scss"
import KeyboardLogo from "../../img/Footer/KeyboardLogo.png";
import Image from 'react-bootstrap/Image';
import { i18n } from "../../translation/i18n"




export default function Footer (){
    return(
        <>
            <Container fluid className={styled.title}>
                <h1 className={styled.backgroundcolortitle}></h1>
                <div>
                    <Image
                        alt=""
                        src={KeyboardLogo}
                        width="10%"
                        height="auto%" 
                        className="d-inline-block align-top"
                        fluid
                    />{" "}
                </div>
                <h6 style={{color: "white", marginTop:"1%", paddingBottom: "2%"}}>{i18n.t("Footer.Privacy")}</h6>
            </Container>
        </>
    )

}