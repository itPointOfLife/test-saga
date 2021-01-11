import { PUT_DATA } from '../actions/types';
import produce from 'immer';

const initialState = {
  data: [],
};

export const putData = produce((draft, action) => {
  if (action.type === PUT_DATA) {
    draft.data = action.payload;
  }
}, initialState);
