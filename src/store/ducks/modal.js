import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  modal: ["valueModal"],
  login: ["valueLogin"],
  register: ["valueRegister"],
  confirm: ["valueConfirm"],
  info: ["valueInfo"],
  add_room: ["room"],
});

console.log(Types)
console.log(Creators)

export const INICIAL_STATE = {
  modal: false,
  login: false,
  register: false,
  confirm: false,
  info: false,
  room: false
};

const modal = (state = INICIAL_STATE, { valueModal }) => ({
  ...state,
  modal: valueModal
});

const login = (state = INICIAL_STATE, { valueLogin }) => ({
  ...state,
  login: valueLogin,
  register: false,
  confirm: false,
  info: false,
  room: false
})

const register = (state = INICIAL_STATE, { valueRegister }) => ({
  ...state,
  register: valueRegister,
  login: false,
  confirm: false,
  info: false,
  room: false
})

const confirm = (state = INICIAL_STATE, { valueConfirm }) => ({
  ...state,
  confirm: valueConfirm,
  login: false,
  register: false,
  info: false,
  room: false
})

export default createReducer(INICIAL_STATE, {
  [Types.MODAL]: modal,
  [Types.LOGIN]: login,
  [Types.REGISTER]: register,
  [Types.CONFIRM]: confirm,
});
