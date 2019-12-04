import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Agenda from './agenda/agenda'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Agenda/>, document.getElementById('root'));
registerServiceWorker();
