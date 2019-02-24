import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Platform from './components/Footer';
import Account from './components/Header';
import Journal from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/main" component={MainPage}  />
        <Route path="/platform" component={Platform}  />
        <Route path="/account" component={Account}  />
        <Route path="/journal" component={Journal}  />
        <Redirect to="/main" />
      </Switch>
      <Footer />
    </Fragment>
  )
};

export default App;
