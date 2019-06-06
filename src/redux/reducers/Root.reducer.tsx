import { combineReducers } from 'redux';
import Customers from './Customers.reducer';

// The action interface.
export interface action {
  type: string;
  data: object;
}

const rootReducer = () => combineReducers({ Customers });

export default rootReducer;
