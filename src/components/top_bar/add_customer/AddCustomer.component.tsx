import React from 'react';
import styled from 'styled-components';

const Add = styled.div`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 10px;
`;

interface AddCustomer {
  toggleModalDisplay: Function;
}

export const AddCustomer: React.FC<AddCustomer> = ({
  toggleModalDisplay,
}): JSX.Element => (
  <Add
    onClick={() => {
      toggleModalDisplay();
    }}
  >
    Add customer.
  </Add>
);

export default AddCustomer;
