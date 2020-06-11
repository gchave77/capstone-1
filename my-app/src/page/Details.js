import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          slug,
          name,
          price,
          count,
          description,
          company,
          inCart,
          image,
          description2,
        } = value.detailProduct;
        console.log(value.detailProduct);
        console.log(image);
        return (
          <section className="details">
            <div className="details-center">
              {/* <div className="details-title">
                <h2>{name}</h2>
              </div> */}
              <div className="details-container">
                <div className="details-img">
                  <img src={image} alt="product" width="100%" />
                </div>
                <div className="details-info">
                  <div className="details-title">
                    <h2>{name}</h2>
                  </div>
                  <h4>One week (double occupancy) :</h4>
                  <br></br>
                  <h5 className="details-price">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <br></br>
                  <h6 className="details-model">
                    Quantity Remaining: <span>{count}</span>
                  </h6>
                  <br></br>
                  <p>{description}</p>
                  <br></br>
                  <p>{description2}</p>
                  <br></br>
                  <h5 className="details-made">
                    Featured by : <span>{company}</span>
                  </h5>
                  <br></br>
                  <div className="details-btn-container">
                    {/* Use Link like an "a" tag */}
                    <Link to="/products">
                      <button className="btn back-product-btn">
                        back to products
                      </button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      className="btn add-incart-btn"
                      onClick={() => {
                        value.addToCart(slug);
                        value.openModalHandler(slug);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
