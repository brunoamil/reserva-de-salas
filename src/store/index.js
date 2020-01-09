import { createStore, combineReducers } from 'redux';
import { usuarioReducer, setModal, setDadosReserva } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
  dados: setDadosReserva,
}));

export default store;