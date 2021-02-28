import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import App from './App';
import Store from "./DataBase/state"




export let renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={Store.getState()} addMessage={Store.addMessage.bind(Store)} updateMessageText={Store.updateMessageText.bind(Store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp(Store.getState())
Store.subscribe(renderApp)


