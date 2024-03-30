import React, { useContext, useEffect } from 'react';
import { GlobalContext, ACTIONS } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const fetchDentists = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_DENTISTS, payload: data });
    };

    fetchDentists();
  }, [dispatch]);

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
  <div className={`home ${themeClass}`}>
    <div className="cards-container ">
      {state.dentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  </div>
  );
};

export default Home;
