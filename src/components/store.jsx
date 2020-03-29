import React, { Component } from "react";
import Product from "./product";
import { Fragment } from "react";
// import './product.scss';

class Store extends Component {
  state = {
    products: [
      {
        id: 1,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch.jpeg",
        isInCart: false
      },
      {
        id: 2,
        item: "bag",
        price: "$150",
        discount: "$20",
        imgUrl: "assets/bag.jpeg",
        isInCart: false
      },
      {
        id: 3,
        item: "Shoes",
        price: "$300",
        discount: "$60",
        imgUrl: "assets/shoes.webp",
        isInCart: false
      },
      {
        id: 4,
        item: "Back Bag",
        price: "$250",
        discount: "$23",
        imgUrl: "assets/backBag.jpeg",
        isInCart: false
      },
      {
        id: 5,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch2.jpeg",
        isInCart: false
      },
      {
        id: 6,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch3.jpeg",
        isInCart: false
      },
      {
        id: 7,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch4.jpeg",
        isInCart: false
      },
      {
        id: 8,
        item: "Shoes",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/shoes2.jpeg",
        isInCart: false
      },
      {
        id: 9,
        item: "Shoes",
        price: "$150",
        discount: "$20",
        imgUrl: "assets/shoes3.jpeg",
        isInCart: false
      },
      {
        id: 10,
        item: "Back Bag",
        price: "$250",
        discount: "$23",
        imgUrl: "assets/backBag2.jpeg",
        isInCart: false
      }
    ]
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
