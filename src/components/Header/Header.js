import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'main',
    }
  }

  onTabChangeHandler = (item) => {
    if (this.state !== item) {
      this.setState(() => {
        return {
          activeTab: item,
        }
      })
    }
  };

  render() {
    const tabs = {
      main: 'Main',
      platform: 'Platform',
      account: 'Account',
      journal: 'Journal',
    };

    const tabsList = Object.keys(tabs).map((item) => {
      return (
        <li className="nav-item" key={item} onClick={() => this.onTabChangeHandler(item)}>
          <Link className={`nav-link ${this.state.activeTab === item ? 'active' : ''}`} to={`/${item}`}>
            {tabs[item]}
          </Link>
        </li>
      )
    });

    return (
      <header className="main-header container">
        <div className="row align-items-center justify-content-between">
          <img src="/img/logo.png" alt="logo" width="100px" height="100px" />
          <p className="main-header-logo">Be in trend <br></br> any time, any place!</p>
          <nav>
            <ul className="nav nav-pills">
              {tabsList}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
