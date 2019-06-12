import store from '../../assets/utilities/store';

import {
  setFilterText,
  toggleModalDisplay,
  setModalType,
  setSelectedCustomer,
} from '../action_creators/Ui.actioncreator';

/**
 * Test setting filter text
 *
 * Expect state to equal default
 * Expect state to equal entered text
 *
 */
test('should correctly set filter text', async () => {
  expect(store.getState().Ui.filter).toEqual('');
  store.dispatch<any>(setFilterText('test'));
  expect(store.getState().Ui.filter).toEqual('test');
});

/**
 * Test toggling modal display
 *
 * Expect state to equal true
 * Expect state to equal false
 * Expect state to equal true
 *
 */
test('should correctly set modal display', async () => {
  expect(store.getState().Ui.modalDisplay).toEqual(false);
  store.dispatch<any>(toggleModalDisplay());
  expect(store.getState().Ui.modalDisplay).toEqual(true);
  store.dispatch<any>(toggleModalDisplay());
  expect(store.getState().Ui.modalDisplay).toEqual(false);
});

/**
 * Test setting filter text
 *
 * Expect state to equal default
 * Expect state to equal entered text
 *
 */
test('should correctly set filter text', async () => {
  expect(store.getState().Ui.modalType).toEqual(null);
  store.dispatch<any>(setModalType('test'));
  expect(store.getState().Ui.modalType).toEqual('test');
});

/**
 * Test setting selected customer
 *
 * Expect state to equal default
 * Expect state to equal entered number
 *
 */
test('should correctly set selected customer id', async () => {
  expect(store.getState().Ui.selectedCustomer).toEqual(null);
  store.dispatch<any>(setSelectedCustomer(1));
  expect(store.getState().Ui.selectedCustomer).toEqual(1);
});