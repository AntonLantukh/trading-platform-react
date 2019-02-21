import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';


ReactDOM.render(document.querySelector('#root',
    <Provider store={store}>
        <App />
    </Provider>
    ));

rcc
