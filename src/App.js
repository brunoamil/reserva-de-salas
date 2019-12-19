import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import Agenda from './pages/agenda';
import Status from './pages/status';

function App() {
  return(
    <Router>
      <Route exact path = '/' component={Status}/>
      <Route exact path = '/Principal' component={Agenda}/>
    </Router>
  )
}

export default App;
