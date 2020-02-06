import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    registro: ['registro'],
    pegar: ['pegar'],
    evento: ['evento'],
});

export const INICIAL_STATE = {
    roomsReservation: [],
    currentRoom: "Auditório",
    roomEvents: [],
};

const registro = (state = INICIAL_STATE, {arrSalas}) => (
    {...state, roomsReservation: arrSalas}
)

const pegar = (state = INICIAL_STATE, {room}) => (
    {...state, currentRoom: room}
)

const evento = (state = INICIAL_STATE, {event}) => (
    {...state, roomEvents: event}
)

export default createReducer(INICIAL_STATE, {
    [types.REGISTRO]:registro,
    [types.PEGAR]:pegar,
    [types.EVENTO]:evento,
})