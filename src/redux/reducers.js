import { actionTypes } from "./actions";

const initialState = {
  myFavorites: [],
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload.character],
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites
          .filter((character) => character.id !== payload.characterId)],
      }
    default:
      return { ...state }
  }
}

export default favoritesReducer;