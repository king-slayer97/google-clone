import React from 'react';
import './App.css';
import Home from './screens/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="">

          </Route>
        </Switch>
      <Home/>
      </Router>
    </div>
  );
}

export default App;
