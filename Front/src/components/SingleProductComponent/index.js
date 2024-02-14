import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./styles.module.scss";

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

export default function SingleProductComponent() {
  const url = window.location.href;
  const slug = url.split("/").pop();
  const [product, setProduct] = useState({})
  useEffect(() => {
    getItem()
  }, [ ])

  async function getItem()
  {
    const res = await axios.get(`http://localhost:8080/api/product/${slug}`);
    console.log(res.data)
    setProduct(res.data);
  }

  console.log(slug)
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.product_image}>
            {/* <img
              src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png"
              alt=""
              className={styles.product_logo}
            /> */}
            <img
              src="https://freepngimg.com/download/keyboard/162894-gaming-keyboard-free-png-hq.png"
              alt=""
              className={styles.product_pic}
            />
            <div className={styles.dots}>
              <a href="#!" className={styles.active}>
                <i>1</i>
              </a>
              {/* <a href="#!">
                <i>2</i>
              </a>
              <a href="#!">
                <i>3</i>
              </a>
              <a href="#!">
                <i>4</i>
              </a> */}
            </div>
          </div>

          <div className={styles.product_details}>
            <header>
              <h1 className={styles.product_details_title}>{product.name}</h1>
              <span className={styles.product_details_colorCat}>
              {product.type}
              </span>
              <div className={styles.product_details_price}>
                <span className={styles.product_details_before}>R$150</span>
                <span className={styles.product_details_price_current}>
                  R${product.price?.toFixed(2)}
                </span>
              </div>
              <div className={styles.product_details_rate}>
                <a href="#!" className={styles.active}>
                  ★
                </a>
                <a href="#!" className={styles.active}>
                  ★
                </a>
                <a href="#!" className={styles.active}>
                  ★
                </a>
                <a href="#!">★</a>
                <a href="#!">★</a>
              </div>
            </header>
            <article>
              <h5>Description</h5>
              <p>
                {product.description}
              </p>
            </article>
            <div className={styles.product_details_controls}>
              <div className={styles.product_details_color}>
                <div className={styles.h5}>
                  <h5>color</h5>
                </div>
                <div className={styles.product_details_color}>
                  <ul className={styles.ul}>
                    <div>
                      <Form.Select aria-label="Default select example">
                        <option disabled>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    {/* <span>
                  POR DROPDOWN DE CORES AQ
                </span> */}
                  </ul>
                </div>
              </div>
              <div>
                <div className={styles.size}>
                  <div className={styles.h5}>
                    <h5>size</h5>
                  </div>
                  <a
                    href="#!"
                    className={styles.product_details_controls_option}
                  >
                    (UK 8)
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.qty}>
                  <div className={styles.h5}>
                    <h5>qty</h5>
                  </div>
                  <a
                    href="#!"
                    className={styles.product_details_controls_option}
                  >
                    (1)
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <button type={styles.button}>
                <img
                  src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
                  alt=""
                />
                <span>add to cart</span>
              </button>
              {/* <a href="#!">
              <img
                src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                alt=""
              />
            </a> */}
            </div>
          </div>
        </div>

        {/* <a
        href="https://www.youtube.com/watch?v=qGOxPVHfZuE"
        target="_blank"
        title="Watch me speed code this"
        style={{position: "fixed", bottom: "10px", right: "10px"}}
      >
        <img src="http://co0kie.github.io/codepen/youtube.png" alt="" />
      </a> */}
      </div>
    </>
  );
}
