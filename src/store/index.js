import { createStore, combineReducers } from 'redux';
import { usuarioReducer } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
}));

export default store;