import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Subjects from './components/Pages/Subjects/Subjects';
import Contactus from './components/Pages/Contactus/Contactus';
import Aboutus from './components/Pages/Aboutus/Aboutus';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import fire from './fire';

const database = fire.database();

function App() {


  const baseURL = "";
  const [open, setOpen] = React.useState(false);

  const handleToggle = (flag) => {
    setOpen(flag);
  };


  return (
    <Router>
      <div className="App">
        <Backdrop open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Header></Header>

        <Switch>

          <Route path={`${baseURL}/`} exact component={() => <Home loader={handleToggle} />} />
          <Route path={`${baseURL}/contactus`} component={Contactus} />
          <Route path={`${baseURL}/aboutus`} component={Aboutus} />
          <Route path={`${baseURL}/subjects`} component={() => <Subjects loader={handleToggle} database={database} />} />

        </Switch>


      </div>
    </Router >

  );
}

export default App;
