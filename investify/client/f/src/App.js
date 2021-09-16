import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from './components/dashboard';
import SignUp from './components/signup';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route path="/dashboard">
        <Dashboard />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route exact path="/">
        < Dashboard />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
