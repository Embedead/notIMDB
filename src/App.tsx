import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { LoginPage } from './client/pages/Login';
import { Homepage } from './client/pages/Homepage';
function App() {
  const name = window.sessionStorage.getItem('name')
  return (
    <div className="App">
      <Router>
        <Switch>
          {name ===null || name === ''? 
          <>
          <Route exact path='/'>
            <LoginPage/>
          </Route>
          {/* <Route exact path='/homepage'>
            <Homepage/>
          </Route> */}

          </>  
          :

          <Route exact path='/'>
            <Homepage/>
          </Route>
        }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
