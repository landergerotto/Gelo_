import Button from "react-bootstrap/Button";

import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

export default function SingleProductComponent() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.product_image}>
          <img
            src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png"
            alt=""
            className={styles.product_logo}
          />
          <img
            src="http://co0kie.github.io/codepen/nike-product-page/nikeShoe.png"
            alt=""
            className={styles.product_pic}
          />
          <div className={styles.dots}>
            <a href="#!" className={styles.active}>
              <i>1</i>
            </a>
            <a href="#!">
              <i>2</i>
            </a>
            <a href="#!">
              <i>3</i>
            </a>
            <a href="#!">
              <i>4</i>
            </a>
          </div>
        </div>

        <div className={styles.product_details}>
          <header>
            <h1 className={styles.title}>Nike Roshe Run</h1>
            <span className={styles.colorCat}>mint green</span>
            <div className={styles.price}>
              <span className={styles.before}>$150</span>
              <span className={styles.current}>$144.99</span>
            </div>
            <div className="rate">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
          <div className={styles.controls}>
            <div className={styles.color}>
              <h5>color</h5>
              <ul>
                <li>
                  <a href="#!" className={[styles.colors, styles.color_bdot1, styles.active]}></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot2"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot3"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot4"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot5"></a>
                </li>
                <p>
                  POR DROPDOWN DE CORES AQ
                </p>
              </ul>
            </div>
            <div className={styles.size}>
              <h5>size</h5>
              <a href="#!" className={styles.option}>
                (UK 8)
              </a>
            </div>
            <div className="qty">
              <h5>qty</h5>
              <a href="#!" className={styles.option}>
                (1)
              </a>
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
            <a href="#!">
              <img
                src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://www.youtube.com/watch?v=qGOxPVHfZuE"
        target="_blank"
        title="Watch me speed code this"
        style={{position: "fixed", bottom: "10px", right: "10px"}}
      >
        <img src="http://co0kie.github.io/codepen/youtube.png" alt="" />
      </a>
    </>
  );
}
