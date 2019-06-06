import { Customer } from '../../assets/interfaces'
import { Dispatch } from 'redux'
import { LOAD_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER } from '../Actions';

// Loads customer data
export const loadCustomers = (customers: Customer[]) => (dispatch: Dispatch) =>
  dispatch({
    type: LOAD_CUSTOMERS,
    data: customers,
  });

// Adds customer data
export const addCustomer = (customer: Customer) => (dispatch: Dispatch) =>
  dispatch({
    type: ADD_CUSTOMER,
    data: customer,
  });

// Deletes customer data
export const deleteCustomer = (index: number) => (dispatch: Dispatch) =>
  dispatch({
    type: DELETE_CUSTOMER,
    data: index,
  });
