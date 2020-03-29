import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Store from "./components/store";
import Header from "./components/header";

import Add from "./components/add";
import Container from "./components/container";

// import './components/product.scss';
import "./style.css";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch.jpeg",
        isInCart: false,
        filterId: 3
      },
      {
        id: 2,
        item: "bag",
        price: "$150",
        discount: "$20",
        imgUrl: "assets/bag.jpeg",
        isInCart: false,
        filterId: 2
      },
      {
        id: 3,
        item: "Shoes",
        price: "$300",
        discount: "$60",
        imgUrl: "assets/shoes.webp",
        isInCart: false,
        filterId: 1
      },
      {
        id: 4,
        item: "Back Bag",
        price: "$250",
        discount: "$23",
        imgUrl: "assets/backBag.jpeg",
        isInCart: false,
        filterId: 2
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
    ],
    filters: [
      {
        id: 1,
        title: "shoes"
      },
      {
        id: 2,
        title: "bags"
      },
      {
        id: 3,
        title: "watch"
      }
    ]
  };
  toggleCartHandler = Product => {
    const products = [...this.state.products];
    const index = products.findIndex(p => p.id === Product.id);
    products[index] = { ...products[index] };
    products[index].isInCart = !products[index].isInCart;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          products={this.state.products.filter(p => p.isInCart)}
          onToggleCart={this.toggleCartHandler}
        />

        <Switch>
          <Route
            path="/list"
            render={() => (
              <Container
                products={this.state.products}
                filters={this.state.filters}
                searchItems={this.state.searchItems}
                onToggleCart={this.toggleCartHandler}
              />
            )}
          ></Route>
          <Route path="/about" render={() => <h1>About Page</h1>}></Route>
          <Redirect from="/" to="/list"></Redirect>
        </Switch>
        {/*<Add/>*/}
      </React.Fragment>
    );
  }
}

export default App;
