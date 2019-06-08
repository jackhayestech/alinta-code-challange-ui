import { Dispatch } from 'redux';
import { SET_FILTER_TEXT, TOGGLE_MODAL_DISPLAY } from '../Actions';

// Loads customer data
export const setFilterText = (text: string) => (dispatch: Dispatch) =>
  dispatch({
    type: SET_FILTER_TEXT,
    data: text,
  });

// Toggles the modal display
export const toggleModalDisplay = () => (dispatch: Dispatch) =>
  dispatch({
    type: TOGGLE_MODAL_DISPLAY,
  });
