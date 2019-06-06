import { Customer } from '../../assets/interfaces'
import { Dispatch } from 'redux'
import { LOAD_CUSTOMERS } from '../Actions';

// Loads property data
export const loadCustomers = (customers: Customer[]) => (dispatch: Dispatch) =>
  dispatch({
    type: LOAD_CUSTOMERS,
    data: customers,
  });
