import { createStore } from 'redux';
import usuarioReducer from './reducer';

const store = createStore(usuarioReducer);

export default store;