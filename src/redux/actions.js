
const actionTypes = {
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES'
}

const addToFavorites = (character) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: { ...character }
  }
}

const removeFromFavorites = (characterId) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: { characterId }
  }
}

export { 
  addToFavorites,
  removeFromFavorites,
  actionTypes,
}