    import './App.css';
    import React from "react";
    import Header from './progect_files/Headers/Header';
    import Section from './progect_files/main/Sections';

    import {BrowserRouter, Route} from "react-router-dom";
    import "./App.css"
    // import 'bootstrap/dist/css/bootstrap.min.css';



    function App() {
      return (
        <BrowserRouter>
          <div className="App">
            <Header user="params"/>
            <Section />
          </div>
        </BrowserRouter>
      );
    }




    export default App;
