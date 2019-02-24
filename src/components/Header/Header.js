import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="main-header container">
      <div className="row align-items-center justify-content-around">
        <img src="/img/logo.png" alt="logo" width="120px" height="120px" />
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item nav-link active">
              <Link className="nav-link active" to="/main">Main</Link>
            </li>
            <li className="nav-item nav-link">
              <Link className="nav-link" to="/platform">Platform</Link>
            </li>
            <li className="nav-item nav-link">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
            <li className="nav-item nav-link">
              <Link className="nav-link" to="/journal">Journal</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
