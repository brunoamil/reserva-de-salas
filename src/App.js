import React from 'react';

// Redux
import store from '../src/store/index';
import { Provider } from 'react-redux';

// Routes
import Routes from './routes';

function App() {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;
