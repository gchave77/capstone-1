import React, { Component } from "react";
import ShoppingCart from "./Modal";

export class Cart extends Component {
  render() {
    return (
      <ShoppingCart>
        {(products) => {
          const { image, name, price } = products.modalProduct;
          console.log(products);

          return (
            <div>
              <h5>Item picked for shopping cart </h5>
              <br></br>
              <img src={image} alt="product" width="200px" height="200px" />
              <h5>{name}</h5>
              <br></br>
              <h5>price : {price}</h5>
              <br></br>
            </div>
          );
        }}
      </ShoppingCart>
    );
  }
}

export default Cart;
