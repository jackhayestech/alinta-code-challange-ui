import React from 'react';
import styled from 'styled-components';

import Search from './search/Search.connector';
import AddCustomer from './add_customer/AddCustomer.connector';

const Bar = styled.div`
  display: flex;
  align-items: center;
`;


export const TopBar: React.FunctionComponent = (): JSX.Element => (
  <Bar>
    <Search />
    <AddCustomer />
  </Bar>
);

export default TopBar;
