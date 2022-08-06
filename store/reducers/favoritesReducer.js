import { types } from "store/types"

const initialState = {
  favs: [
    /*
      airmax270,
      retro4,
      travis
    */
  ]
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FAVORITES:
      let x = localStorage.getItem('favs')
      return { 
        ...state,
        favs: JSON.parse(x)
      }

    case types.SAVE_FAVORITES:
      localStorage.setItem('favs', JSON.stringify(state))
      return state

    case types.ADD_FAVORITE:

      if (!state.favs.includes(action.payload.fav)) {
        return {
          ...state,
          favs: [
            ...state.favs, 
            action.payload.fav
          ]
        }
      }else{
        return {
          ...state
        }
      }
      

    case types.REMOVE_FAVORITE:
      let tempFavs = state.favs.filter(e => e !== action.payload.toDelete)
      return {
        ...state,
        favs: [...tempFavs]
      }
      
    default:
      return state
  }
}