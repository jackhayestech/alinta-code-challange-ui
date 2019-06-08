import store from '../../assets/utilities/store';

import {
  loadCustomers,
  addCustomer,
  deleteCustomer,
} from '../action_creators/Customers.actioncreator';
import {
  loadCustomerData,
  addCustomerData,
  addedCustomerData,
} from './data/customer.data';

/**
 * Test loading customers
 *
 * Expect state to equal default
 * Expect state to equal loacl customer data
 *
 */
test('should load customer data', async () => {
  expect(store.getState().Customers.data).toEqual([]);
  store.dispatch<any>(loadCustomers(loadCustomerData));
  expect(store.getState().Customers.data).toEqual(loadCustomerData);
});

/**
 * Test adding customer
 *
 * Expect state to added customer data
 */
test('should add customer data', async () => {
  store.dispatch<any>(addCustomer(addCustomerData));
  expect(store.getState().Customers.data).toEqual(addedCustomerData);
});

/**
 * Test deleting customer
 *
 * Expect state to equal default
 */
test('should delete customer data', async () => {
  store.dispatch<any>(deleteCustomer(2));
  expect(store.getState().Customers.data).toEqual(loadCustomerData);
});