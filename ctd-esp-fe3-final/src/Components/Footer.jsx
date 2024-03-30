import React, { useContext } from 'react';
import { GlobalContext } from './utils/global.context';

function Footer() {
  const { state } = useContext(GlobalContext);
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <footer className={`footer-container ${themeClass}`}>
      <div className="footer-logo">
        <img src="../../public/images/DH.png" alt="Dental Health" />
      </div>
      <p className="footer-copy">&copy; 2024 Dental Health App</p>
      <div className="footer-right">
        <img src="../../public/images/ico-facebook.png" alt="Facebook" />
        <img src="../../public/images/ico-instagram.png" alt="Instagram" />
        <img src="../../public/images/ico-tiktok.png" alt="TikTok" />
        <img src="../../public/images/ico-whatsapp.png" alt="WhatsApp" />
      </div>
    </footer>
  );
}

export default Footer;
