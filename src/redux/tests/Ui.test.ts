import store from '../../assets/utilities/store';

import {
  setFilterText,
  toggleModalDisplay,
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
 * Test setting filter text
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
