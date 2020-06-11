import React, { Component } from "react";
import items from "./data";

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
  };
  componentDidMount() {
    let products = this.formatData(items);
    this.setState({
      products,
    });
    console.log(products);
  }
  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;

      let product = { ...item.fields, id, image };
      return product;
    });
    return tempItems;
  };
  getProduct = (qty) => {
    // let tempProducts = [this.state.products];
    const product = this.state.products.find((item) => item.qty === qty);
    console.log(product);
    return product;
  };
  detailHandler = (qty) => {
    // console.log("Hello from detailHandler");
    const product = this.getProduct(qty);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (qty) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(qty));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModalHandler = (qty) => {
    const product = this.getProduct(qty);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModalHandler = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
          openModalHandler: this.openModalHandler,
          closeModalHandler: this.closeModalHandler,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
