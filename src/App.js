import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Subjects from './components/Pages/Subjects/Subjects';
import Contactus from './components/Pages/Contactus/Contactus';
import Aboutus from './components/Pages/Aboutus/Aboutus';
import fire from './fire';

const database = fire.database();

function App() {


  const baseURL = "";



  return (
    <Router>
      <div className="App">

        <Header></Header>
        <div className="body-section">
          <Switch>

            <Route path={`${baseURL}/`} exact component={() => <Home />} />
            <Route path={`${baseURL}/contactus`} component={Contactus} />
            <Route path={`${baseURL}/aboutus`} component={Aboutus} />
            <Route path={`${baseURL}/subjects`} component={() => <Subjects database={database} />} />

          </Switch>
        </div>

      </div>
    </Router >

  );
}

export default App;
