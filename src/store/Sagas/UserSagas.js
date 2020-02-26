import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export default function* UserSaga() {
  try {
    const email = yield select(state => state.user.userEmail);

    const res = yield call(api.fetchDataUser, email);

    yield put(UserActions.getSuccessName(res.name))
    yield put(UserActions.getSuccessSector(res.sector))
  } catch (error) {
    yield put(UserActions.getFailureDataUser(error))
  }
}