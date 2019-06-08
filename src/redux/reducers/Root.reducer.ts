import { combineReducers } from 'redux';
import Customers from './Customers.reducer';
import Ui from './Ui.reducer';

// The action interface.
export interface action {
  type: string;
  data: any;
}

const rootReducer = () => combineReducers({ Customers, Ui });

export default rootReducer;
