import { call, put } from 'redux-saga/effects';

import api from '../services/api';

import { Creators as UserActions } from '../store/ducks/users';

export default function* UserSaga({ email }) {
  try {
    const res = yield call(api.fetchDataUser, email)

    yield put(UserActions.getSuccessName(res.name))
    yield put(UserActions.getSuccessSector(res.setor))
  } catch (error) {
    yield put(UserActions.getFailureDataUser())
  }
}