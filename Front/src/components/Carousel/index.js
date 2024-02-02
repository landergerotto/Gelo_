import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import tam1 from "../../img/Carousel/TamanduaCarouseul1.png";
import tam2 from "../../img/Carousel/TamanduaCarouseul2.png";
import tam3 from "../../img/Carousel/TamanduaCarouseul3.png";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          alt=""
          src={tam1}
          width="1920px"
          height="600px"
          className="d-inline-block align-top"
        />{" "}
        <Carousel.Caption>
          <h3>Comida</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          alt=""
          src={tam2}
          width="1920px"
          height="600px"
          className="d-inline-block align-top"
        />{" "}
        <Carousel.Caption>
          <h3>de</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          alt=""
          src={tam3}
          width="1920px"
          height="600px"
          className="d-inline-block align-top"
        />{" "}
        <Carousel.Caption>
          <h3>Tamandua Bandeira</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
