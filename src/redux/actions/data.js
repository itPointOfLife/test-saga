import { LOAD_DATA, PUT_DATA } from './types';

export const putData = (data) => ({
  type: PUT_DATA,
  payload: data,
});

export const loadData = () => ({
  type: LOAD_DATA,
});
