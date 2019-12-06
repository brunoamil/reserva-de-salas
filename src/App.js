import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import Principal from './main/principal'
import principal from './main/principal';

function App() {
  return(
      <Router>
        <Route exact path = '/' component={Principal}/>
      </Router>
  )
}

export default App;