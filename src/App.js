import React from 'react';
import './App.css';
import Calendar from "./components/calendar/Calendar";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/navbar";

function App() {
  return (
    <div style={{display: 'flex'}}>
        <Navbar/>
        <div className="App">
        <Header/>
        <Calendar/>
        </div>
    </div>
  );
}

export default App;
