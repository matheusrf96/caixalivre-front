import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import './App.css'
import Main from './pages/Main'

const App = () => {
  const state = useSelector((state) => state)

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
