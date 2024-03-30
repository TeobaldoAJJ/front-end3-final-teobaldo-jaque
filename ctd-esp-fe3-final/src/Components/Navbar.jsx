import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, ACTIONS } from './utils/global.context';

function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
  
  <div className={`navbar ${themeClass}`}>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../../public/images/DH.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_THEME })}>
          {state.theme === 'light' ? '🌙' : '☀️'} Theme
        </button>
      </div>
    </nav>
  </div>
  );
}

export default Navbar;
