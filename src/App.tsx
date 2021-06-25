import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { LoginPage } from './pages/Login';
import { Homepage } from './pages/Homepage';
import {useLogin} from "./hooks/useLogin"
function App() {
  const {getUser} = useLogin();
  const name = getUser('name')
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
