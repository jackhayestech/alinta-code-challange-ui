import React from 'react';
import styled from 'styled-components';

const Add = styled.div`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 10px;
`;

export const AddCustomer: React.FunctionComponent = (): JSX.Element => (
  <Add>
    Add customer.
  </Add>
);

export default AddCustomer;
