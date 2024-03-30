import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const foundDentist = state.dentists.find(d => d.id.toString() === id);
    if (foundDentist) {
      setDentist(foundDentist);
    } else {
      const fetchDentist = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      };
      fetchDentist();
    }
  }, [id, state.dentists]);

  if (!dentist) {
    return <p>Cargando...</p>;
  }

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={`detail ${themeClass}`}>
      <h1>{dentist.name}</h1>
      <div className="info-grid">
        <p className=''>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
    </div>
  );
};

export default Detail;
