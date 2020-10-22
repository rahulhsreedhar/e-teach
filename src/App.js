import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
      <Header></Header>
      </div>
      </Router>

  );
}

export default App;
