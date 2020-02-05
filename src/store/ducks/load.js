import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loader: ["loader"],
  info: ["info"]
});

export const INICIAL_STATE = {
  loader: false,
  loadInfo: false
};

const load = (state = INICIAL_STATE, { set_loader }) => ({
  ...state,
  loader: set_loader
});

const infoLoader = (state = INICIAL_STATE, set_loader_info) => ({
  ...state,
  loadInfo: set_loader_info
});

export default createReducer(INICIAL_STATE, {
  [type.LOADER]: load,
  [type.INFO]: infoLoader
});
