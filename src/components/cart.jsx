import React, { Component } from "react";
import Product from "./product";
import { Fragment } from "react";
// import './product.scss';

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        item: "Watch",
        price: "$275",
        discount: "$10",
        imgUrl: "assets/watch.jpeg"
      },
      {
        id: 2,
        item: "bag",
        price: "$150",
        discount: "$20",
        imgUrl: "assets/bag.jpeg"
      },
      {
        id: 3,
        item: "Shoes",
        price: "$300",
        discount: "$60",
        imgUrl: "assets/shoes.webp"
      },
      {
        id: 4,
        item: "Back Bag",
        price: "$250",
        discount: "$23",
        imgUrl: "assets/backBag.jpeg"
      }
    ],
    isOpened: false
  };
  render() {
    const classes = this.state.isOpened
      ? "dropdown dropdown--left dropdown--opened"
      : "dropdown dropdown--left";
    return (
      <React.Fragment>
        {/* {this.state.products.map(prdct =>(
                    <Product key={prdct.id}
                    product={prdct}/>
                ))} */}
        <div className={classes}>
          {/* header */}
          <div
            className="dropdown__header"
            onClick={() => this.setState({ isOpened: !this.state.isOpened })}
          >
            <div
              className="image image--small"
              style={{
                backgroundImage: 'url("./assets/img/icons/icon-cart-big.svg")'
              }}
            >
              <div className="notification notification--danger">
                {this.props.count}
              </div>
            </div>
          </div>
          {/* body */}
          <div className="dropdown__body">
            {/* items */}
            <ul className="dropdown__items list list--vr-separator">
              {this.props.products.map(p => (
                <li key={p.id} className="dropdown__item list__item">
                  {/* item small 2 */}
                  <div className="item-small-1">
                    {/* item data */}
                    <div className="item-small-1__data">
                      {/* title */}
                      <a href className="item-small-1__title">
                        {p.item}
                      </a>
                      {/* price */}
                      <span className="item-small-1__description">
                        {p.price}
                      </span>
                    </div>
                    {/* item image */}
                    <div className="item-small-1__image-box">
                      <a
                        href="#"
                        className="item-small-1__image image"
                        style={{
                          backgroundImage: `url("${p.imgUrl}")`
                        }}
                      ></a>
                      <a
                        href="#"
                        className="item-small-1__action"
                        onClick={() => this.props.onToggleCart(p)}
                      >
                        <i className="fas fa-times" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* totals */}
            <div className="separator" />
            <div className="block">
              <span className="lable">Total:</span>
              <span className="lable">$2870</span>
            </div>
            {/* actions */}
            <div className="block list list--hr">
              <a className="list-item btn btn--gray" href="">
                View Cart
              </a>
              <a className="list-item btn btn--primary" href="">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
