import React from 'react';
import Customers from './customers/Customers.connector';

export const Layout: React.FunctionComponent = (): JSX.Element => (
  <div id="layout">
    <Customers />
  </div>
);

export default Layout;
