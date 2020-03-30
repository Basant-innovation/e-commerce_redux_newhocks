import types from "../reducers/types";

export function fetch_products() {
  return function(dispatch) {
    fetch("http://localhost:3000/products")
      .then(result => result.json())
      .then(data => dispatch({ type: types.FETCH_PRODUCTS, payload: data }));
  };
}
