import React from 'react';
import styled from 'styled-components';
import CustomerBlock from './customer_block/CustomerBlock.component';
import EditCustomer from './edit_customer/EditCustomer.component';
import DeleteCustomer from './delete_customer/DeleteCustomer.component';

const Row = styled.section`
  display: flex;
  margin: 10px;
`;

interface CustomerRowProps {
  arrPos: number;
  key: number;
  fn: string;
  ln: string;
  dob: string;
};

export const CustomerRow: React.FC<CustomerRowProps> = ({
  arrPos,
  fn,
  ln,
  dob,
}): JSX.Element => (
  <Row>
    <CustomerBlock>
      {fn}
    </CustomerBlock>
    <CustomerBlock>
      {ln}
    </CustomerBlock>
    <CustomerBlock>
      {dob}
    </CustomerBlock>
    <CustomerBlock>
      <EditCustomer custIndex={arrPos} />
    </CustomerBlock>
    <CustomerBlock>
      <DeleteCustomer custIndex={arrPos} />
    </CustomerBlock>
  </Row>
);

export default CustomerRow;
