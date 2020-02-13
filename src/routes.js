import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Agenda from './pages/agenda';

export default function Routes() {
  return (
    <Router>
      <Route exact path = '/' component={Agenda}/>
    </Router>
  )
}