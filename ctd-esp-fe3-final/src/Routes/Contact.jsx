import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useContext(GlobalContext);
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={themeClass}>
      <Form />
    </div>
  );
};

export default Contact;
