import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

// A modal window is a graphical control element subordinate to app's main window. It creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it.

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModalHandler } = value;
          const { image, name, price } = value.modalProduct;
          console.log(value, modalOpen, closeModalHandler);

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="modal-center">
                  <div id="modal" className="modal-title">
                    <h5>Item added to cart </h5>
                    <br></br>
                    <img
                      src={image}
                      alt="product"
                      width="200px"
                      height="200px"
                    />
                    <h5>{name}</h5>
                    <br></br>
                    <h5>price : {price}</h5>
                    <br></br>
                    <Link to="/products">
                      <button
                        className="btn"
                        onClick={() => closeModalHandler()}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        className="btn"
                        onClick={() => closeModalHandler()}
                      >
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
