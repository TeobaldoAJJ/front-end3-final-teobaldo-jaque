import React, { useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext} from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
  <div className={`favs ${themeClass}`}> 
    <div className="cards-container">
      {state.favs.length > 0 ? (
        state.favs.map((dentist) => <Card key={dentist.id} dentist={dentist} />)
      ) : (
        <p>No hay dentistas favoritos seleccionados.</p>
      )}
    </div>
  </div> 
  );
};

export default Favs;
