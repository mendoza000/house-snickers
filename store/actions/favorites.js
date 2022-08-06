import { types } from "store/types"

export const getFavorites = () => {
  return {
    type: types.GET_FAVORITES,
  }
}

export const addFavorite = (favItem) => {
  return {
    type: types.ADD_FAVORITE,
    payload: {
      fav: favItem
    }
  }
}

export const removeFavorite = (favItem) => {
  return {
    type: types.REMOVE_FAVORITE,
    payload: {
      toDelete: favItem
    }
  }
}

export const saveFavorites = () => {
  return {
    type: types.SAVE_FAVORITES,
  }
}