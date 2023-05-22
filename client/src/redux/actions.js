import {
   removeFavoriteByID,
   saveToFavorites,
} from '../services/favoriteService';

export const actionTypes = {
   ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
   REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
   FILTER_BY_GENDER: 'FILTER_BY_GENDER',
   ORDER: 'ORDER',
};

export const addToFavorites = (character) => {
   return {
      type: actionTypes.ADD_TO_FAVORITES,
      payload: { character },
   };
};

export const deleteFavoriteByID = (characterID) => {
   return {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      payload: { characterID },
   };
};

export const setFilterByGender = (gender) => {
   return {
      type: actionTypes.FILTER_BY_GENDER,
      payload: gender,
   };
};

export const setOrder = (order) => {
   return {
      type: actionTypes.ORDER,
      payload: order,
   };
};

export const toggleFavorite = (character) => {
   return async (dispatch, getState) => {
      try {
         const favorite = getState().favorites.myFavorites.find(
            (c) => c.id === character.id
         );

         if (favorite) {
            await removeFavoriteByID(character.id);
            dispatch(deleteFavoriteByID(character.id));
         } else {
            await saveToFavorites(character);
            dispatch(addToFavorites(character));
         }
      } catch (error) {
         dispatch({ type: 'ERROR', payload: error.message });
      }
   };
};
