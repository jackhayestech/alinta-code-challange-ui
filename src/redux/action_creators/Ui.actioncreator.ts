import { Dispatch } from 'redux'
import { SET_FILTER_TEXT } from '../Actions';

// Loads customer data
export const setFilterText = (text: string) => (dispatch: Dispatch) =>
  dispatch({
    type: SET_FILTER_TEXT,
    data: text,
  });