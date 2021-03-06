import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import App from './App';
import Store from "./DataBase/redux-store"

export let renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={Store.dispatch.bind(Store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp(Store.getState())
Store.subscribe( () => {
  let state = Store.getState()
  renderApp(state)
})


