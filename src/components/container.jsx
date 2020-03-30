import React, { Component } from "react";

import Store from "./store";
import Product from "./product";

class Container extends Component {
  state = {
    currentPage: 1,
    perPage: 6,
    currentFilter: 0,
    search: "",
    sort: "asc"
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    let products = [...this.props.products];

    if (this.state.search !== "") {
      products = this.props.products.filter(p => {
        return (
          p.item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
    }
    if (this.state.currentFilter !== 0) {
      products = products.filter(p => p.filterId === this.state.currentFilter);
    }

    const pages = [];
    for (let i = 0; i < products.length / this.state.perPage; i++) {
      pages.push(i + 1);
    }

    const start = (this.state.currentPage - 1) * this.state.perPage;
    products = products.slice(start, start + this.state.perPage);

    return (
      <React.Fragment>
        <div className="container">
          {/* filters */}
          <section className="filters">
            {/* search box */}
            <div className="search-box">
              <input
                className="search-box__input"
                placeholder="Search..."
                type="text"
                name="txt_search"
                id
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
              <button type="submit" className="search-box__btn">
                <i className="fas fa-search" />
              </button>
            </div>
            {/* filter list */}
            <div>
              {/* filter header */}
              <h5>Categories</h5>
              {/* filter list */}
              <ul className="list list--vr-separator">
                {this.props.filters.map(f => (
                  <li
                    key={f.id}
                    className="link list__item"
                    onClick={() => this.setState({ currentFilter: f.id })}
                  >
                    <i className="link__icon fas fa-angle-right" />
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* filter tags */}
            <div>
              {/* filter header */}
              <h5>Tags</h5>
              {/* filter tags */}
              <div className="tags">
                <span className="tag">Nike</span>
                <span className="tag">Travel</span>
                <span className="tag">Sport</span>
                <span className="tag">Tv</span>
                <span className="tag">Books</span>
              </div>
            </div>
            {/* related items */}
            <div>
              {/* title */}
              <h5 />
              {/* small item */}
              <div />
              <div />
              <div />
            </div>
          </section>
          {/* Items */}
          <section className="item-listing">
            {/* tools (sorting , change view , exporting) */}
            <div className="item-listing__tools">
              <select className="form-control" name id>
                <option value={1}>Featured</option>
                <option value={2}>Price low to high</option>
                <option value={3}>Price high to low</option>
                <option value={4}>Name</option>
              </select>
              <a className="action-btn" href="#">
                <i className="fas fa-plus" />
              </a>
            </div>
            {/* items */}
            <div className="item-listing__items item-listing--3items">
              {/* medium item */}
              <Store
                products={products}
                onToggleCart={this.props.onToggleCart}
              />
            </div>
            {/* paging */}
            <div className="paging">
              {/* left arrow */}
              <div className="paging__arrow">
                <i className="fas fa-angle-left" />
              </div>
              {/* page number */}
              {pages.map(page => (
                <div
                  className={
                    this.state.currentPage === page
                      ? "paging__number active"
                      : "paging__number"
                  }
                  onClick={() => this.setState({ currentPage: page })}
                >
                  {page}
                </div>
              ))}

              {/* right arrow */}
              <div className="paging__arrow">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;
