import { types } from "store/types"

const initialState = {
  sneakers: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}