import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Platform from './components/Platform';
import Account from './components/MainPage';
import Journal from './components/Journal';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="wrapper-body">
        <Switch>
          <Route path="/main" component={MainPage}/>
          <Route path="/platform" component={Platform}/>
          <Route path="/account" component={Account}/>
          <Route path="/journal" component={Journal}/>
          <Redirect to="/main"/>
        </Switch>
      </div>
      <Footer/>
    </div>
  )
};

export default App;
