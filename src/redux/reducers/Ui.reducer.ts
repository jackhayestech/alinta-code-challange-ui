import { action } from './Root.reducer';
import { SET_FILTER_TEXT, TOGGLE_MODAL_DISPLAY } from '../Actions';

const initialState = {
  filter: '',
  modalDisplay: false,
};

const Ui = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return {
        ...state,
        filter: action.data,
      };
    case TOGGLE_MODAL_DISPLAY:
      return {
        ...state,
        modalDisplay: !state.modalDisplay,
      }
    default:
      return state;
  }
};

export default Ui;
