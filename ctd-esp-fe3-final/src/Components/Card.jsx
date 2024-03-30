import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, ACTIONS } from './utils/global.context';

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const handleFavClick = () => {
    const actionType = isFav ? ACTIONS.REMOVE_FROM_FAVS : ACTIONS.ADD_TO_FAVS;
    dispatch({ type: actionType, payload: dentist });
  };

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={`card ${themeClass}`}>
      <img src='../../public/images/doctor.jpg' alt="Doctor" style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>{dentist.name}</h3>
      <p>{dentist.email}</p>
      <button onClick={handleFavClick}>{isFav ? 'Delete Favs' : 'Add to Favs ⭐'}</button>
      <Link to={`/dentist/${dentist.id}`}>View Details</Link>
    </div>
  );

};

export default Card;
