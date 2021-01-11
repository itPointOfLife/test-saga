import { takeEvery, call, put } from 'redux-saga/effects';
import { putData } from './actions/data';
import { LOAD_DATA } from './actions/types';

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
}

function* workerData() {
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchData() {
  yield takeEvery(LOAD_DATA, workerData);
}
