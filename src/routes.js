import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Agenda from './pages/agenda';
import Inicial from './pages/status/index'

export default function Routes() {
  return (
    <Router>
      <Route exact path = '/' component={Inicial}/>
      <Route exact path = '/NovaAgenda' component={Agenda}/>
    </Router>
  )
}