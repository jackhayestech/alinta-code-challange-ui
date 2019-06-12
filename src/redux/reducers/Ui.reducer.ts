import { action } from './Root.reducer';
import { SET_FILTER_TEXT, TOGGLE_MODAL_DISPLAY, SET_MODAL_TYPE, SET_SELECTED_CUSTOMER } from '../Actions';

const initialState = {
  filter: '',
  modalDisplay: false,
  modalType: null,
  selectedCustomer: null,
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
      };
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.data,
      };
    case SET_SELECTED_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action.data,
      }
    default:
      return state;
  }
};

export default Ui;
