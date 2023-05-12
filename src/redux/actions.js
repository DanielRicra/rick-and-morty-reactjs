
const actionTypes = {
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  FILTER_BY_GENDER: 'FILTER_BY_GENDER',
  ORDER: 'ORDER',
}

const addToFavorites = (character) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: { character }
  }
}

const removeFromFavorites = (characterId) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: { characterId }
  }
}

const setFilterByGender = (gender) => {
  return {
    type: actionTypes.FILTER_BY_GENDER,
    payload: { gender }
  }
}

const setOrder = (order) => {
  return {
    type: actionTypes.ORDER,
    payload: { order }
  }
}

export { 
  addToFavorites,
  removeFromFavorites,
  setFilterByGender,
  setOrder,
  actionTypes,
}