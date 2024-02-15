import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Switches from "../../img/Carousel/Switches.png";
import Housing from "../../img/Carousel/Housing.png";
import Keyboard from "../../img/Carousel/Keyboard.png";
import Image from 'react-bootstrap/Image';
import styles from './styles.module.scss';
import { i18n } from "../../translation/i18n"


export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{backgroundColor : "black", textAlign : "center"}}>
      <Carousel.Item>
      <Image
          alt=""
          src={Keyboard}
          width="1067px"
          height="600px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3>{i18n.t("Carousel.KeyboardStyle")}</h3>
          <p>{i18n.t("Carousel.KeyboardStyletext")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          alt=""
          src={Housing}
          width="1067px"
          height="600px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3>{i18n.t("Carousel.KeyboardCases")}</h3>
          <p>{i18n.t("Carousel.KeyboardCasestext")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          alt=""
          src={Switches}
          width="600px" 
          height="600px"
          className={`d-inline-block align-top ${styles.image}`}
          fluid
        />{" "}
        <Carousel.Caption>
          <h3>{i18n.t("Carousel.Switches")}</h3>
          <p>{i18n.t("Carousel.Switchestext")}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
