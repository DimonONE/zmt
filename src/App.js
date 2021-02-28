  import './App.css';
  import React from "react";
  import Header from './progect_files/Headers/Header';
  import Section from './progect_files/Navigations/RenderMainSections/Sections';
  


  function App(props) {
    return (
        <div className="Main">
          <Header user="params"/>
          <Section {...props}/>
        </div>
    );
  }


  export default App;
