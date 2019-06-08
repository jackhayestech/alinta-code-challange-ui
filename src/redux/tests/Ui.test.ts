import store from '../../assets/utilities/store';

import { setFilterText } from '../action_creators/Ui.actioncreator';

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
