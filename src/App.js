import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from './Widgets'

function App() {
  return (
    <div className="App">
      {/*Header section*/}
      <Header />
      <div className="app__body">
        {/*Sidebar section*/}
        <Sidebar />
        {/*Feed section*/}
        <Feed />
        {/*Widgets section*/}
        <Widgets />
      </div>
    </div>

  );
}

export default App;