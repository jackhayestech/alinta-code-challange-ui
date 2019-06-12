import React from 'react';
import styled from 'styled-components';
import Modal from './modal/Modal.connector';
import TopBar from './top_bar/TopBar.component';
import Customers from './customers/Customers.connector';

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 50px;
`;

export const Layout: React.FunctionComponent = (): JSX.Element => (
  <LayoutContainer>
    <Modal />
    <TopBar />
    <Customers />
  </LayoutContainer>
);

export default Layout;
