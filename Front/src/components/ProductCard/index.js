import Button from "react-bootstrap/Button";

import styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import axios from "axios";

import { DecoderContext } from "../../context/decoder";
import { useContext, useEffect, useState } from "react";

export default function ProductCard(props) {
  const [jwt, setJwt] = useState();
  const { jwtoken, setJwtoken, decode, Rdecode } = useContext(DecoderContext);

  useEffect(() => {
    // Rdecode()
    setJwt(Rdecode());
    // console.log(jwt.adm)
  }, []);

  function RenderAdm() {
    if (jwt == undefined) return;
    console.log(jwt.adm);

    // if (jwt.adm)
      return (
        <>
          <div className={styles.card_attribute}>
            <Button variant="success" onClick={() => DeleteOnClick()}>
              Delete
            </Button>
          </div>
        </>
      );
  }

  const DeleteOnClick = async () => {
    console.log("a");
    const res = await axios.delete("http://localhost:8080/api/product/65ccb7cbe7b45aeaf4a0bb9a", {
      id: "65ccb7cbe7b45aeaf4a0bb9a",
      sla: "ajuda",
    });
    console.log(res);
    // alterar para /home
  };

  return (
    <>
      {/* <body> */}
      <div className={styles.card_container}>
        <Link
          to={`/product/${props.id}`}
          className={styles.hero_image_container}
        >
          <div className={styles.img}>
            <img
              className={styles.hero_image}
              src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
              alt="Spinning glass cube"
            />
          </div>
        </Link>
        <main className={styles.main_content}>
          <h1>
            <Link to={`/product/${props.id}`} className={styles.a}>
              Equilibrium #3429
            </Link>
          </h1>
          <hr></hr>
          {/* <p>Our Equilibrium collection promotes balance and calm.</p> */}
          <div className={styles.flex_row}>
            <div className={styles.coin_base}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/156/541/non_2x/dollar-icon-sign-symbol-design-free-png.png"
                alt="Ethereum"
                className={styles.small_image}
              />
              <span>R$ 0.00</span>
            </div>
            <div className={styles.time_left}>
              <Button variant="success">Add To Cart</Button>{" "}
            </div>
          </div>
        </main>
          <RenderAdm></RenderAdm>

      </div>
      {/* </body> */}
    </>
  );
}
