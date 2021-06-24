import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { LoginPage } from './client/pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
