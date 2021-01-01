import { PUT_DATA, LOAD_DATA } from './actionTypes';

export const putData = (data) => ({
  type: PUT_DATA,
  payload: data,
});

export const loadData = () => ({
  type: LOAD_DATA,
});
