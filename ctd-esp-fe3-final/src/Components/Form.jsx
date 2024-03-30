import React, { useState, useContext } from 'react';
import { GlobalContext } from './utils/global.context';

const Form = () => {
  const { state } = useContext(GlobalContext);
  const [input, setInput] = useState({
    fullName: '',
    email: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const isValidFullName = input.fullName.length > 5;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email);

  if (isValidFullName && isValidEmail) {
    console.log('Datos válidos:', input);
    setMessage(`Gracias ${input.fullName}, te contactaremos cuanto antes vía email.`);
    setInput({ fullName: '', email: '' });
  } else {
    console.log('Datos inválidos');
    setMessage('Por favor verifica tu información nuevamente.');
  }
};

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Ingrese su nombre completo"
            value={input.fullName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su email"
            value={input.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="button-field">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;