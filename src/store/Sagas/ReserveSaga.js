import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ReservesActions } from '../ducks/reserves';

export default function* reserveSaga() {
  try {
    const room = yield select(state => state.salas.currentRoom);
    const response = yield call(api.fetchReserves, room);
    
    yield put(ReservesActions.getReservesSuccess(response));
  } catch (error) {
    yield put(ReservesActions.getReservesFailure(error));
  }
}