import React from 'react';
import Search from './search/Search.connector';
import AddCustomer from './add_customer/AddCustomer.component';

export const TopBar: React.FunctionComponent = (): JSX.Element => (
  <div id="topBar">
    <Search />
    <AddCustomer />
  </div>
);

export default TopBar;
