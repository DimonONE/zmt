import React from "react";
import { Route } from "react-router-dom";
import './App.css';

import Header from './progect_files/Headers/Header';
import HeadContainer from './progect_files/Navigations/Head/HeadСontainer';
import Cabinet from './progect_files/Navigations/Cabinets/Cabinet/Сabinet';
import FrendsPageContainer from "./progect_files/Navigations/frendsPage/frendsPageContainer";
import ProfileContainer from "./progect_files/Navigations/Profile/ProfileContainer";



function App(props) {
  return (
      <div className="Main">
        <Header user="params"/>
        <div className="section">
          <Route path="/head" render={ () => <HeadContainer />} />
          <Route path="/frends" render={ () => <FrendsPageContainer {...props}/>} />
          <Route path="/cabinet" render={ () => <Cabinet {...props}/>} />
          <Route path="/profiles" render={ () => <ProfileContainer {...props} />} />
        </div>
      </div>
  );
}

export default App;
