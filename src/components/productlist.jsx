import React, { Component } from "react";
import Product from "./product";
import { Fragment } from "react";
import { connect } from "react-redux";

// import './product.scss';
import { fetch_products } from "./../action/productActions";

class Productlist extends Component {
  componentDidMount() {
    this.props.fetch_products();
    console.log("this.props.products");
  }

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

function mapStateToProps(state) {
  return { products: state.products.items };
}
export default connect(mapStateToProps, { fetch_products })(Productlist);
