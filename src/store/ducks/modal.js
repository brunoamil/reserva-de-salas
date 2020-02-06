import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    login: ['login'],
    register: ['register'],
    confirm: ['confirm'],
    info: ['info'],
    room: ['room'],
    modal: ['modal'],
});

export const INICIAL_STATE = {
    modal: false,
    loginForm: false,
    registerForm: false,
    confirmForm: false,
    infoModal: false,
    createRoomForm: false,
};

const Login = (state = INICIAL_STATE, {valueLogin}) => (
    { ...state, loginForm: valueLogin, registerForm: false, confirmForm: false, infoModal: false }
)

const register = (state = INICIAL_STATE, {valueRegister}) => (
    { ...state, registerForm: valueRegister, loginForm: false, confirmForm: false, infoModal: false }
)

const confirm = (state = INICIAL_STATE, {valueConfirm}) => (
    { ...state, confirmForm: valueConfirm, registerForm: false, loginForm: false, infoModal: false}
)

const info = (state = INICIAL_STATE, {valueInfo}) => (
    { ...state, infoModal: valueInfo, confirmForm: false, registerForm: false, loginForm: false }
)

const room = (state = INICIAL_STATE, {createRoomForm}) => (
    { ...state, createRoomForm, infoModal: false, confirmForm: false, registerForm: false, loginForm: false }
)

const modal = (state = INICIAL_STATE, {valueModal}) => (
    { ...state, modal: valueModal }
)

export default createReducer(INICIAL_STATE, {
    [type.LOGIN] : Login,
    [type.REGISTER] : register,
    [type.CONFIRM] : confirm,
    [type.INFO] : info,
    [type.ROOM] : room,
    [type.MODAL] : modal,
})
