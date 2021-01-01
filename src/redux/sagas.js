import { takeEvery, call, put } from 'redux-saga/effects';
import { putData } from './actions';
import { LOAD_DATA } from './actions/actionTypes';

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}

function* workerData() {
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchData() {
  yield takeEvery(LOAD_DATA, workerData);
}
