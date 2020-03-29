import React, { Component, Fragment } from 'react';
// import './product.scss';
// import './header.scss';

class Add extends Component {
    render(){
        return(
            <React.Fragment>
                <div>
  {/* header */}
  <div className="header">
    {/* upper header */}
    <div className="header__upper">
      {/* container */}
      <div className="container">
        {/* contact info */}
        <ul className="list list--hr list--hr-separator">
          <li className="list__item">
            <span className="info">
              {/* icon */}
              <i className="info__icon far fa-dot-circle" />
              {/* info */}
              <span className="info__data">1234 Street Name, City Name</span>
            </span>
          </li>
          <li className="list__item">
            <a href="#" className="info">
              {/* icon */}
              <i className="info__icon fab fa-whatsapp" />
              {/* info */}
              <span className="info__data">123-456-7890</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="info">
              {/* icon */}
              <i className="info__icon far fa-envelope" />
              {/* info */}
              <span className="info__data">mail@domain.com</span>
            </a>
          </li>
        </ul>
        {/* side menu */}
        <ul className="list list--hr">
          <li className="list__item">
            <a href="#" className="link">
              {/* icon */}
              <i className="link__icon fas fa-angle-right" />
              {/* info */}
              About Us
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="link">
              {/* icon */}
              <i className="link__icon fas fa-angle-right" />
              {/* info */}
              Contact Us
            </a>
          </li>
          {/* languges */}
          <li className="list__item">
            {/* drop down */}
            {/* to oppen dropdown dropdown--opened */}
            <div className="dropdown ">
              {/* header */}
              <div className="dropdown__header">
                <a href="#" className="link">
                  <img className="flag flag-us" src alt />
                  English
                </a>
                <i className="fas fa-angle-down" />
              </div>
              {/* items */}
              <div className="dropdown__body">
                <ul className="dropdown__items list">
                  <li className="dropdown__item list__item">
                    <a href="#" className="link">
                      <img className="flag flag-us" src alt />
                      English
                    </a>
                  </li>
                  <li className="dropdown__item list__item">
                    <a href="#" className="link">
                      <img className="flag flag-es" src alt />
                      Español
                    </a>
                  </li>
                  <li className="dropdown__item list__item">
                    <a href="#" className="link">
                      <img className="flag flag-fr" src alt />
                      Française
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* middle header */}
    <div className="header__middle container">
      {/* logo */}
      <a href="#" className="header__logo-box">
        <img className="header__logo" src="img/logo.png" alt />
      </a>
      {/* user options */}
      <div className="header__user-options">
        {/* login control */}
        <a href="#" className="link">Login</a>
        <div className="dropdown">
          <div className="dropdown__header">
            <div className="image image--small image--circle" style={{backgroundImage: 'url("img/PersonalImage.png")'}}>
            </div>
          </div>
          <div className="dropdown__body">
          </div>
        </div>
        {/* shopping card dropdown */}
        {/* dropdown--opened to open */}
        <div className="dropdown dropdown--left  ">
          {/* header */}
          <div className="dropdown__header">
            <div className="image image--small" style={{backgroundImage: 'url("img/icons/icon-cart-big.svg")'}}>
              <div className="notification notification--danger">
                1
              </div>
            </div>
          </div>
          {/* body */}
          <div className="dropdown__body">
            {/* items */}
            <ul className="dropdown__items list list--vr-separator">
              <li className="dropdown__item list__item">
                {/* item small 2 */}
                <div className="item-small-1">
                  {/* item data */}
                  <div className="item-small-1__data">
                    {/* title */}
                    <a href className="item-small-1__title">Camera X1000</a>
                    {/* price */}
                    <span className="item-small-1__description">
                      1 X $890
                    </span>
                  </div>
                  {/* item image */}
                  <div className="item-small-1__image-box">
                    <a href="#" className="item-small-1__image image" style={{backgroundImage: 'url("img/products/product-1.jpg")'}}>
                    </a>
                    <a href="#" className="item-small-1__action">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown__item list__item">
                <div className="item-small-1">
                  {/* item data */}
                  <div className="item-small-1__data">
                    {/* title */}
                    <a href className="item-small-1__title">Camera X2000</a>
                    {/* price */}
                    <span className="item-small-1__description">
                      2 X $990
                    </span>
                  </div>
                  {/* item image */}
                  <div className="item-small-1__image-box">
                    <a href="#" className="item-small-1__image image" style={{backgroundImage: 'url("img/products/product-1.jpg")'}}>
                    </a>
                    <a href className="item-small-1__action">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            {/* totals */}
            <div className="separator" />
            <div className="block">
              <span className="lable">Total:</span>
              <span className="lable">$2870</span>
            </div>
            {/* actions */}
            <div className="block list list--hr">
              <a className="list-item btn btn--gray" href>View Cart</a>
              <a className="list-item btn btn--primary" href>Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* lower header */}
    <div className="header__lower container">
      {/* navigation */}
      <nav className="nav">
        <ul className="nav__items list list--hr">
          {/* items */}
          <li className="nav__item">
            <a className="nav__link" href="#">Home</a>
          </li>
          <li className="nav__item dropdown ">
            {/* title */}
            <a className="nav__link dropdown__header" href="#">
              Products
            </a>
            {/* items */}
            <div className="dropdown__body">
              <ul className=" list">
                <li className="list__item">
                  <a className="nav__inner-link" href="#">Product Listing</a>
                </li>
                <li className="list__item">
                  <a className="nav__inner-link" href="#">Add Product</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Contact Us</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* add Item */}
  <div className=" container">
    <form className="add-product" action>
      <div className="add-product__images slider">
        <div className="add-product__image-actions">
          <div className="add-product__image-action">
            <a href="#"><i className="fas fa-plus-square" /></a>
            <a href="#"><i className="fas fa-edit" /></a>
            <a href="#"><i className="fas fa-trash-alt" /></a>
          </div>
        </div>
        <div className="slider__items">
          <div className="slider__item active" style={{backgroundImage: 'url(assets/watch.jpeg'}} />
          <div className="slider__item" style={{backgroundImage: 'url(assets/watch.jpeg)'}} />
          <div className="slider__item" style={{backgroundImage: 'url(assets/watch.jpeg)'}} />
        </div>
        <div className="slider__indicators">
          <span className="slider__indicator active" />
          <span className="slider__indicator" />
          <span className="slider__indicator" />
        </div>
      </div>
      <div className="add-product__data">
        <div className="form-controls">
          <section className="tabs">
            <div className="tabs__headers">
              <div className="tabs__header active">
                English
              </div>
              <div className="tabs__header">
                Arabic
              </div>
            </div>
            <div className="tabs__bodies">
              <div className="tabs__body active">
                <div className="form-group invalid">
                  <label htmlFor>Name</label>
                  <input className="form-control" type="text" name id />
                </div>
                <div className="form-group">
                  <label htmlFor>Description</label>
                  <textarea className="form-control" name id cols={30} rows={4} defaultValue={""} />
                </div>
              </div>
              <div className="tabs__body ">
                <div className="form-group invalid">
                  <label htmlFor>Name</label>
                  <input className="form-control" type="text" name id />
                </div>
                <div className="form-group">
                  <label htmlFor>Description</label>
                  <textarea className="form-control" name id cols={30} rows={4} defaultValue={""} />
                </div>
              </div>
            </div>
          </section>
          <div className="form-group">
            <label htmlFor>Price</label>
            <input className="form-control" type="text" name id />
          </div>
          <div className="add-product__discount">
            <div className="form-group">
              <label htmlFor>Satus</label>
              <div className="form-group__radios">
                <div className="form-group__radio"><input type="radio" name id /><span>On Sale</span></div>
                <div className="form-group__radio"><input type="radio" name id /><span>Not On Sale</span></div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor>Discount</label>
              <input className="form-control" type="text" name id />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor>Payment Types</label>
            <div className="form-group__checkboxs">
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>Direct Bank
                  Transfare</span></div>
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>Cheque Payment</span></div>
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>Paypal</span></div>
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>Visa</span></div>
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>Mastercard</span></div>
              <div className="form-group__checkbox"><input type="checkbox" name id /><span>On Dilivery</span></div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor>Category</label>
            <select className="form-control" name id>
              <option value>Arts &amp; Crafts</option>
              <option value>Automotive</option>
              <option value>Baby</option>
              <option value>Books</option>
              <option value>Eletronics</option>
              <option value>Women's Fashion</option>
              <option value>Men's Fashion</option>
              <option value>Health &amp; Household</option>
              <option value>Home &amp; Kitchen</option>
              <option value>Military Accessories</option>
              <option value>Movies &amp; Television</option>
              <option value>Sports &amp; Outdoors</option>
              <option value>Tools &amp; Home Improvement</option>
              <option value>Toys &amp; Games</option>
            </select>
          </div>
          <div className="taged-textbox form-group">
            <label className="taged-textbox__lable" htmlFor>Tags</label>
            <div className="taged-textbox__data">
              <div className="taged-textbox__tags">
                <div className="taged-textbox__tag"><span>tag1</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag2</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag3</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag4</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag5</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag6</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag7</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag8</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag9</span><a href="#" className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
                <div className="taged-textbox__tag"><span>tag10</span><a className="taged-textbox__remove"><i className="fas fa-times" /></a></div>
              </div>
              <div className="taged-textbox__clear">
                <a href="#"><i className="fas fa-times" /></a>
              </div>
            </div>
            <input className="taged-textbox__textbox form-control" type="text" name id />
          </div>
          <div className="add-product__actions">
            <button href="#" className="btn btn--gray">Cancel</button>
            <button href="#" className="btn btn--primary">Add</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  {/* footer */}
  <div className="footer">
    {/* subscription */}
    <div />
    {/* menu */}
    <div />
    {/* contact info */}
    <div />
  </div>
</div>

            </React.Fragment>
        )
    }
    
}


export default Add;