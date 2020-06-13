import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Home from "./page/Home";
import Products from "./page/Products";
import Contact from "./page/Contact";
import Details from "./page/Details";

// Class component which is extended from React.Component, with a render function which returns a React element.
class App extends Component {
  state = {
    isOpen: false,
  };
  // Toggle this.state.isOpen to determine when the Navbar is clicked.
  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  // Render is needed with class component.
  render() {
    return (
      // React fragment is used in place of a div wrapper. It groups what's inside without adding extra nodes to the DOM because fragments are not rendered to the DOM.
      <React.Fragment>
        <Navbar clicked={this.toggleHandler} />
        {/* A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. */}
        <Modal />
        {/* Switch component renders exact matches, while Router components render inclusively of all route matches. NOTE: Still not sure what that means, though. :-) */}
        <Switch>
          {/* Used the exact path for proper page rendering, from Amir's react-router-dom lecture. */}
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/details" component={Details} />
        </Switch>
        <Cart />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
