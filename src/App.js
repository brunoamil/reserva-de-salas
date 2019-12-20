import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import Agenda from './pages/agenda';
import Status from './pages/status';
import NovaAgenda from './pages/nova-agenda';

function App() {
  return(
    <Router>
      <Route exact path = '/' component={Status}/>
      <Route exact path = '/Principal' component={Agenda}/>
      <Route exact path = '/NovaAgenda' component={NovaAgenda}/>
    </Router>
  )
}

export default App;
