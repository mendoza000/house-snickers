import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { productsReducer } from "./productsReducer";

export default combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
})