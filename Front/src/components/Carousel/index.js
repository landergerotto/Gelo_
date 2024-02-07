import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Switches from "../../img/Carousel/Switches.png";
import Housing from "../../img/Carousel/Housing.png";
import Keyboard from "../../img/Carousel/Keyboard.png";
import Image from 'react-bootstrap/Image';


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
          <h3>Keyboard Styles</h3>
          <p>Style your keyboard your way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          alt=""
          src={Housing}
          width="1067"
          height="600px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3>Housing Keyboards</h3>
          <p>Housing styled for you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          alt=""
          src={Switches}
          width="600px"
          height="600px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3>Switches Keyboards</h3>
          <p>Switches for your Keyboard.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
