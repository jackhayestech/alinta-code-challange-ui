import { combineReducers } from 'redux';
import Customers from './Customers.reducer';

const rootReducer = () => combineReducers({ Customers });

export default rootReducer;
