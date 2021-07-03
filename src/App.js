import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Main from './pages/Main'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
