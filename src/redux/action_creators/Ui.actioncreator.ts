import { Dispatch } from 'redux';
import {
  SET_FILTER_TEXT,
  TOGGLE_MODAL_DISPLAY,
  SET_MODAL_TYPE,
  SET_SELECTED_CUSTOMER,
} from '../Actions';

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

// Sets the modal type
export const setModalType = (text: string) => (dispatch: Dispatch) =>
  dispatch({
    type: SET_MODAL_TYPE,
    data: text,
  });

// Sets the selected customer
export const setSelectedCustomer = (id: number) => (dispatch: Dispatch) =>
  dispatch({
    type: SET_SELECTED_CUSTOMER,
    data: id,
  });
