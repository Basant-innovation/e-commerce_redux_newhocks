import React, { Component } from "react";
import Product from "./product";
import { Fragment } from "react";

// import './product.scss';

class Store extends Component {
  state = {
    products: []
  };

  toggleCartHandler = Product => {
    const products = [...this.state.products];
    const index = products.findindex(p => p.id === Product.id);
    products[index] = { ...products[index] };
    products[index].isInCart = !products[index].isInCart;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.products.map(prdct => (
          <Product
            key={prdct.id}
            product={prdct}
            onToggleCart={this.props.onToggleCart}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Store;
