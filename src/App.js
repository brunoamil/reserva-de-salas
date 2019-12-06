import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import Principal from './main/principal'
import Telas from './Tela/Telas'

function App() {
  return(
      <Router>
        <Route exact path = '/' component={Telas}/>
        <Route exact path = '/Principal' component={Principal}/>
      </Router>
  )
}

export default App;