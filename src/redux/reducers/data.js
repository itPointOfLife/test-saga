import { PUT_DATA } from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  data: {},
};

// export const putData = produce((draft, action) => {
//   if (action.type === PUT_DATA) {
//     draft.data = action.payload;
//   }
// }, initialState);

export const putData = (state = initialState, action) => {
  if (action.type === PUT_DATA) {
    return Object.assign({}, state, {
      // <- NB the {}!
      data: action.payload,
    });
  }
  return state;
};
