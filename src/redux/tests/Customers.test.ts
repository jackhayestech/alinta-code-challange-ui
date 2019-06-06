import store from '../../assets/utilities/store';

import { loadCustomers } from '../action_creators/Customers.actioncreator';
import { localCustomerData } from '../../assets/data/customer.data';

/**
 * Test loading customers
 *
 * Expect state to equal default
 */
test('should fail loading property data', async () => {
  expect(store.getState().Customers.data).toEqual([]);
  store.dispatch<any>(loadCustomers(localCustomerData));
  expect(store.getState().Customers.data).toEqual(localCustomerData);
});
