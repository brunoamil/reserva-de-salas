import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import AgendaDias from './views/main/index';
import Status from './views/Status/index';
import Login from './views/ModalUsuario/App'

function App() {
  return(
      <Router>
        <Route exact path = '/' component={Status}/>
        <Route exact path = '/Principal' component={AgendaDias}/>
        <Route exact path = '/Login' component={Login}/>
      </Router>
  )
}

export default App;
