import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

const GlobalContext = createContext(initialState);

const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_DENTISTS: 'SET_DENTISTS',
  ADD_TO_FAVS: 'ADD_TO_FAVS',
  REMOVE_FROM_FAVS: 'REMOVE_FROM_FAVS',
};

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case ACTIONS.SET_DENTISTS:
      return {
        ...state,
        dentists: action.payload,
      };
    case ACTIONS.ADD_TO_FAVS:
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case ACTIONS.REMOVE_FROM_FAVS:
      const filteredFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favs', JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, ACTIONS };
