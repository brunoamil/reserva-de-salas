import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// paginas
import Status from './pages/status';
import NovaAgenda from './pages/nova-agenda';

//Redux
import store from '../src/store/index';
import { Provider } from 'react-redux';

function App() {
  return(
    <Provider store={store}>
      <Router>
        <Route exact path = '/' component={Status}/>
        <Route exact path = '/NovaAgenda' component={NovaAgenda}/>
      </Router>
    </Provider>
  )
}

export default App;
