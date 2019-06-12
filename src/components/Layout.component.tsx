import React from 'react';
import styled from 'styled-components';
import Modal from './modal/Modal.connector';
import TopBar from './top_bar/TopBar.component';
import Customers from './customers/Customers.connector';

const LayoutContainer = styled.div`
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const ContentContainer = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
`;

export const Layout: React.FunctionComponent = (): JSX.Element => (
  <LayoutContainer>
    <Modal />
    <ContentContainer>
      <TopBar />
      <Customers />
    </ContentContainer>
  </LayoutContainer>
);

export default Layout;
