import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StartPage} from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          digi-tomb
        </p>
        <StartPage />
      </header>
    </div>
  );
}

export default App;
