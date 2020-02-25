import { call, put } from 'redux-saga/effects';

import api from '../services/api';

import { Creators as RoomActions } from '../store/ducks/salas';

export default function* roomSaga() {
  try {
    const response = yield call(api.fetchRooms);

    yield put(RoomActions.getRoomsSuccess(response));
  } catch (error) {
    yield put(RoomActions.getRoomsFailure());
  }
}