import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderElement = styled.div`
  font-weight: 600;
  width: 100px;
  padding: 10px;
`;

export const CustomersHeader: React.FunctionComponent = (): JSX.Element => (
  <HeaderContainer>
    <HeaderElement>First Name</HeaderElement>
    <HeaderElement>Last Name</HeaderElement>
    <HeaderElement>Date Of Birth</HeaderElement>
  </HeaderContainer>
);

export default CustomersHeader;
