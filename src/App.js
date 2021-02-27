    import './App.css';
    import React from "react";
    import Header from './progect_files/Headers/Header';
    import Section from './progect_files/Navigations/Sections';

    import {BrowserRouter, Route} from "react-router-dom";



    function App(props) {
      return (
        <BrowserRouter>
          <div className="Main">
            <Header user="params"/>
            <Section {...props}/>
          </div>
        </BrowserRouter>
      );
    }


    export default App;
