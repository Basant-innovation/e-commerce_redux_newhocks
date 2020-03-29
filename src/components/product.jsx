import React, { Component } from 'react';




class Product extends Component {

    render() { 
        const {item, price, discount, imgUrl} = this.props.product;
        return ( 
            <React.Fragment>
                <div className="item-medium-1">
            <div className="item-medium-1__image image" style={{backgroundImage: `url("${imgUrl}")`}}>
                <a href="#" className="item-medium-1__action" onClick={() => this.props.onToggleCart(this.props.product)}>Add to Cart</a>
            </div>
            <a href="#">
                <h4>{item}</h4>
                <div>
                <del>{discount}</del>
                <span className="lable">{price}</span>
                </div>
            </a>
            <div className="crud-actions">
                <a href="#"><i className="far fa-eye" /></a>
                <a href="#"><i className="fas fa-edit" /></a>
                <a href="#"><i className="fas fa-trash-alt" /></a>
            </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Product;