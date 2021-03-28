import React from "react";
import { Route } from "react-router-dom";
import './App.css';

import HeadContainer from './progect_files/Navigations/Head/HeadСontainer';
import Cabinet from './progect_files/Navigations/Cabinets/Cabinet/Сabinet';
import FrendsPageContainer from "./progect_files/Navigations/frendsPage/frendsPageContainer";
import ProfileContainer from "./progect_files/Navigations/Profile/ProfileContainer";
import { HeadeContainer } from "./progect_files/Headers/HeaderContainer";
import LoginContainer from "./progect_files/Navigations/Logins/LoginContainer";



function App(props) {
  return (
      <div className="Main">
        <HeadeContainer />
        <div className="section">
          <Route path="/head" render={ () => <HeadContainer />} />
          <Route path="/login" render={ () => <LoginContainer />} />
          <Route path="/frends" render={ () => <FrendsPageContainer {...props}/>} />
          <Route path="/cabinet" render={ () => <Cabinet {...props}/>} />
          <Route path="/profiles/:userId" render={ () => <ProfileContainer {...props} />} />
        </div>
      </div>
  );
}

export default App;
