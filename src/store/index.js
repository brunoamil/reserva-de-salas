import { createStore, combineReducers } from 'redux';
import { usuarioReducer, setModal } from './reducer';

const store = createStore(combineReducers({
  user: usuarioReducer,
  modal: setModal,
}));

export default store;