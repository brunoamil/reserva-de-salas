import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  evento: ["evento"],
  id: ["id"],
  hora: ["hora"],
  horaFinal: ["horaFinal"],
  data: ["data"]
});

export const INICIAL_STATE = {
  hora: "",
  horaFinal: "",
  evento: "",
  id: "",
  data: ""
};

const set_event = (state = INICIAL_STATE, { evento }) => ({
  ...state,
  evento: evento
});

const set_id = (state = INICIAL_STATE, { id }) => ({ ...state, id: id });

const set_hora = (state = INICIAL_STATE, { hora }) => ({
  ...state,
  hora: hora
});

const set_hora_final = (state = INICIAL_STATE, { horaFinal }) => ({
  ...state,
  horaFinal: horaFinal
});

const set_data = (state = INICIAL_STATE, { data }) => ({
  ...state,
  data: data
});

export default createReducer(INICIAL_STATE, {
  [type.EVENTO]: set_event,
  [type.ID]: set_id,
  [type.HORA]: set_hora,
  [type.HORAFINAL]: set_hora_final,
  [type.DATA]: set_data
});
