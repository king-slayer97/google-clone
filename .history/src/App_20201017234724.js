import React from 'react';
import './App.css';
import Home from './screens/Home'
import {BrowserRouter as Router, Route, Switch} 

function App() {
  return (
    <div className="app">
      <Home/>
    </div>
  );
}

export default App;
