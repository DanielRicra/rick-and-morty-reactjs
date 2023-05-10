import { actionTypes } from "./actions";

const initialState = {
  myFavorites: [],
}

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites
          .filter((character) => character.id !== action.payload.characterId),
      }
    default:
      return { ...state }
  }
}

export default favoritesReducer;