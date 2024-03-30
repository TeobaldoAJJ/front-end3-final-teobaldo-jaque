import React, { useContext } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/Routes/Home';
import Contact from '../src/Routes/Contact';
import Detail from '../src/Routes/Detail';
import Favs from '../src/Routes/Favs';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import { GlobalProvider, GlobalContext } from '../src/Components/utils/global.context';

function App() {
  const { state } = useContext(GlobalContext);
  const themeClass = state.theme === 'dark' ? 'dark' : '';
  return (
    <div className={`app ${themeClass}`}>
    <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      
    </GlobalProvider>
    </div>
  );
}

export default App;
