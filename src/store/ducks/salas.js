import { createActions, createReducer } from "reduxsauce";

// criando actions types && creators
export const { Types, Creators } = createActions({
  rooms: ["arr_rooms"],
  currentRoom: ["room"],
  roomEvents: ["events"]
});

//criando os reducer handlers
export const INICIAL_STATE = {
  rooms: [],
  currentRoom: "Auditório",
  roomEvents: []
};

const set_rooms = (state = INICIAL_STATE, { arr_rooms }) => (
  {...state, rooms: arr_rooms}
);

const set_current_room = (state = INICIAL_STATE, { room }) => ({
  ...state,
  currentRoom: room
});

const set_room_events = (state = INICIAL_STATE, { events }) => ({
  ...state,
  roomEvents: events
});

//criando os reducers
export default createReducer(INICIAL_STATE, {
  [Types.ROOMS]: set_rooms,
  [Types.CURRENT_ROOM]: set_current_room,
  [Types.ROOM_EVENTS]: set_room_events,
});
