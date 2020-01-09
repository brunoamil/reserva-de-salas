import { createStore, combineReducers } from 'redux';
import { usuarioReducer, setModal, setSalas } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
  salas: setSalas,
}));

export default store;