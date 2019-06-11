import React from 'react';
import moment from 'moment'
import styled from 'styled-components';
import CustomerBlock from './customer_block/CustomerBlock.component';
import EditCustomer from './edit_customer/EditCustomer.component';
import DeleteCustomer from './delete_customer/DeleteCustomer.component';

const Row = styled.div`
  display: flex;
  margin: 10px 0px;
`;

interface CustomerRowProps {
  arrPos: number;
  fn: string;
  ln: string;
  dob: Date;
}

export const CustomerRow: React.FC<CustomerRowProps> = ({
  arrPos,
  fn,
  ln,
  dob,
}): JSX.Element => (
  <Row>
    <CustomerBlock>{fn}</CustomerBlock>
    <CustomerBlock>{ln}</CustomerBlock>
    <CustomerBlock>{moment(dob).format('DD/MM/YYYY')}</CustomerBlock>
    <CustomerBlock>
      <EditCustomer custIndex={arrPos} />
    </CustomerBlock>
    <CustomerBlock>
      <DeleteCustomer custIndex={arrPos} />
    </CustomerBlock>
  </Row>
);

export default CustomerRow;
