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
          .filter((character) => character.id !== payload.characterID)],
      }

    default:
      return { ...state }
  }
}

function  filter(state = 'all', action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FILTER_BY_GENDER:
      return payload;
    default:
      return state;
  }
}

function order(state = 'asc', action) {
  switch (action.type) {
    case actionTypes.ORDER:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
  filter,
  order,
});


export default rootReducer;