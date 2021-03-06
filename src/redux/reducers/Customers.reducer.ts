import { action } from './Root.reducer';
import { LOAD_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from '../Actions';
import { localCustomerData } from '../../assets/data/customer.data';

// If the application is being run without connecting to an api load local customer data.
let customerData: object[] = process.env.REACT_APP_LOCAL_DEV
  ? localCustomerData
  : [];

const initialState = {
  data: customerData,
};

const Customers = (state = initialState, action: action) => {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return {
        ...state,
        data: action.data,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.data),
          ...state.data.slice(action.data + 1),
        ],
      };
    case EDIT_CUSTOMER:
      return {
        ...state,
        data: state.data.map((item, index) => {
          // Replace the item at index
          if(index === action.data.index) {
            return action.data.customer;
          }
          // Leave every other item unchanged
          return item;
        })
      }
    default:
      return state;
  }
};

export default Customers;
