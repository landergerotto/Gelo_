import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../../img/TamanduaBandeira.png';
import styles from "./styles.module.scss"

export default function NavBar(){

    return(
        <Navbar className={styles.background}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={image}
                        width="50px"
                        height="50px"
                        className="d-inline-block align-top"
                    />{' '}
                    TAMANDUA
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}