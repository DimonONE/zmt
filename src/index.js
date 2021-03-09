import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import App from './App';
import Store from "./DataBase/redux-store"
import { Provider } from 'react-redux';

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={Store}>
          <App  />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'));




