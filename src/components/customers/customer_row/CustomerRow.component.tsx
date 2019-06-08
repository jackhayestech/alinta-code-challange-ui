import React from 'react';
import styled from 'styled-components';
import CustomerInfo from './customer_info/CustomerInfo.component';
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
    <CustomerInfo info={fn} />
    <CustomerInfo info={ln} />
    <CustomerInfo info={dob} />
    <EditCustomer custIndex={arrPos} />
    <DeleteCustomer custIndex={arrPos} />
  </Row>
);

export default CustomerRow;
