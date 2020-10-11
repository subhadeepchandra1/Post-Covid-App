import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './pages/login';
import signup from './pages/signup';
import landing from './pages/landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ landing }></Route>
        <Route path="/login" component={ login }></Route>
        <Route path="/signup" component={ signup }></Route>
      </div>
    </Router>
  );
}

export default App;
