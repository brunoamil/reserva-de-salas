import { createActions, createReducer } from "reduxsauce";

// criando actions types && creators
export const { Types, Creators } = createActions({
  getRoomsRequest: [],
  getRoomsSuccess: ["arr_rooms"],
  getRoomsFailure: [],
  currentRoom: ["room"],
  roomEvents: ["events"]
});

export const RoomTypes = Types;
export default Creators;

//criando os reducer handlers
export const INICIAL_STATE = {
  currentRoom: "Auditório",
  roomEvents: [],
  rooms: [],
  loading: false,
  error: false,
};

const request = (state = INICIAL_STATE, actions=null) => (
  {...state, loading: true}
)

const success = (state = INICIAL_STATE, { arr_rooms }) => (
  {...state, rooms: arr_rooms, loading: false}
);

const failure = (state = INICIAL_STATE, actions=null) => (
  {...state, error: true, loading: false}
)

const set_current_room = (state = INICIAL_STATE, { room }) => ({
  ...state,
  currentRoom: room
});

const set_room_events = (state = INICIAL_STATE, { events }) => ({
  ...state,
  roomEvents: events
});

//criando os reducers
export const salas = createReducer(INICIAL_STATE, {
  [Types.GET_ROOMS_REQUEST]: request,
  [Types.GET_ROOMS_SUCCESS]: success,
  [Types.GET_ROOMS_FAILURE]: failure,
  [Types.CURRENT_ROOM]: set_current_room,
  [Types.ROOM_EVENTS]: set_room_events,
});
