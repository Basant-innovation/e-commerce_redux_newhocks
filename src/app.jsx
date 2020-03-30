import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Store from "./components/store";
import Header from "./components/header";

import Add from "./components/add";
import Container from "./components/container";
import axios from "axios";

// import './components/product.scss';
import "./style.css";

class App extends Component {
  state = {
    products: [],

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

  componentDidMount() {
    axios.get("http://localhost:3000/products").then(result => {
      const products = result.data;
      console.log("products");
      console.log(products);
      this.setState({ products });
    });
  }

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
          <Route path="/add" render={() => <Add />}></Route>
          <Redirect from="/" to="/list"></Redirect>
        </Switch>
        {/*<Add/>*/}
      </React.Fragment>
    );
  }
}

export default App;
