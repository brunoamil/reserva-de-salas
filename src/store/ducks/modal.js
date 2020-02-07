import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  login: ["valueLogin"],
  register: ["valueRegister"],
  confirm: ["valueConfirm"],
  info: ["valueInfo"],
  add_room: ["room"],
  modal: ["valueModal"]
});

export const INICIAL_STATE = {
  modal: false,
  loginForm: false,
  registerForm: false,
  confirmForm: false,
  infoModal: false,
  roomForm: false
};

const Login = (state = INICIAL_STATE, { valueLogin }) => ({
  ...state,
  loginForm: valueLogin,
  registerForm: false,
  confirmForm: false,
  infoModal: false
});

const register = (state = INICIAL_STATE, { valueRegister }) => ({
  ...state,
  registerForm: valueRegister,
  loginForm: false,
  confirmForm: false,
  infoModal: false
});

const confirm = (state = INICIAL_STATE, { valueConfirm }) => ({
  ...state,
  confirmForm: valueConfirm,
  registerForm: false,
  loginForm: false,
  infoModal: false
});

const info = (state = INICIAL_STATE, { valueInfo }) => ({
  ...state,
  infoModal: valueInfo,
  confirmForm: false,
  registerForm: false,
  loginForm: false
});

const room = (state = INICIAL_STATE, { room }) => ({
  ...state,
  roomForm: room,
  infoModal: false,
  confirmForm: false,
  registerForm: false,
  loginForm: false
});

const modal = (state = INICIAL_STATE, { valueModal }) => ({
  ...state,
  modal: valueModal
});

export default createReducer(INICIAL_STATE, {
  [Types.LOGIN]: Login,
  [Types.REGISTER]: register,
  [Types.CONFIRM]: confirm,
  [Types.INFO]: info,
  [Types.ADD_ROOM]: room,
  [Types.MODAL]: modal
});
