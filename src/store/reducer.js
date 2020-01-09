import { MODAL, USER, SALAS } from "./states";


export function usuarioReducer(state = USER, action){
  switch(action.type){
    case 'LOG_IN':
      return {...state, usuarioLogin: 1, usuarioEmail: action.usuarioEmail }
    case 'LOG_OUT':
      return {...state, usuarioLogin: 0, usuarioEmail: ''};
    default:
      return state;
  };
};

export function setSalas(state = SALAS, action) {
  let arrSalas = action.arrSalas;
  switch(action.type) {
    case 'REG_SALAS':
      return {...state, salasReserva: arrSalas}
    default:
      return state;
  }
}

export function setModal(state = MODAL, action) {
  let valueLogin = action.valueLogin;
  let valueRegister = action.valueRegister;
  let valueConfirm = action.valueConfirm;

  switch(action.type) {
    case 'SET_MODAL_LOGIN':
      return { ...state, loginForm: valueLogin, registerForm: false, confirmForm: false };
    case 'SET_MODAL_REGISTER':
      return { ...state, registerForm: valueRegister, loginForm: false, confirmForm: false };
    case 'SET_MODAL_CONFIRM':
      return { ...state, confirmForm: valueConfirm, registerForm: false, loginForm: false};
    default:
      return state;
  }
}