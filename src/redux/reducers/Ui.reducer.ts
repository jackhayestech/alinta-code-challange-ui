import { action } from './Root.reducer';
import { SET_FILTER_TEXT } from '../Actions';

const initialState = {
  filter: '',
};

const Ui = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return {
        ...state,
        filter: action.data,
      };
    default:
      return state;
  }
};

export default Ui;
