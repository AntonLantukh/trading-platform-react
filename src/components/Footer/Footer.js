import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="main-footer container">
      <div className="row justify-content-between">
        <div>
          <p>&copy; Crypto React App</p>
        </div>
        <div>
          <span className="social-item badge badge-primary">Vkontakte</span>
          <span className="social-item badge badge-secondary">Facebook</span>
          <span className="social-item badge badge-success">Twitter</span>
        </div>
        <div>
          <p>Trade cryptocurrencies safe using our website!</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
