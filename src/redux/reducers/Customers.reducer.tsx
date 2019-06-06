import { action } from './Root.reducer';
import { localCustomerData } from '../../assets/data/customer.data';

let customerData: object[] = [];
// If the application is being run without connecting to an api load local customer data.
if (process.env.REACT_APP_LOCAL_DEV === 'true') {
  customerData = localCustomerData;
}

const initialState = {
  data: customerData,
};

const Customers = (state = initialState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Customers;
