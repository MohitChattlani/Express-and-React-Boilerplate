import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NotFound from './Components/NotFound';

export const History=createBrowserHistory();

export const routes=(
  <Router history={History}>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
