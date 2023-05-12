import { actionTypes } from "./actions";
import { combineReducers } from "redux";

const initialState = {
  myFavorites: [],
}

function favorites(state = initialState, action) {
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

function  filterOrder(state = { order: 'asc', filter: 'all' }, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FILTER_BY_GENDER:
      return { ...state, filter: payload.gender  };
    case actionTypes.ORDER:
      return { ...state, order: payload.order };
    default:
      return { ...state };
  }
}

const rootReducer = combineReducers({
  favorites,
  filterOrder,
});


export default rootReducer;