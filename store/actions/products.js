const { types } = require("store/types")

export const getProducts = (products) => {
  return {
    type: types.GET_PRODUCTS,
    payload: {
      sneakers: products
    }
  }
}