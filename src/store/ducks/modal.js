import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  modal: ["valueModal"],
  login_modal: ["valueLogin"],
  register: ["valueRegister"],
  confirm: ["valueConfirm"],
  infoReserve: ["valueInfo"],
  add_room: ["room"],
});

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

const info = (state = INICIAL_STATE, { valueInfo }) => ({
  ...state,
  info: valueInfo,
  login: false,
  register: false,
  confirm: false,
  room: false
})

const add = (state = INICIAL_STATE, { valueRoom }) => ({
  ...state,
  room: valueRoom,
  login: false,
  register: false,
  confirm: false,
  info: false,
})

export default createReducer(INICIAL_STATE, {
  [Types.MODAL]: modal,
  [Types.LOGIN_MODAL]: login,
  [Types.REGISTER]: register,
  [Types.CONFIRM]: confirm,
  [Types.INFO_RESERVE]: info,
  [Types.ADD_ROOM]: add
});
