import React from 'react';
import Modal from './modal/Modal.connector';
import TopBar from './top_bar/TopBar.component';
import Customers from './customers/Customers.connector';

export const Layout: React.FunctionComponent = (): JSX.Element => (
  <div id="layout">
    <Modal />
    <TopBar />
    <Customers />
  </div>
);

export default Layout;
