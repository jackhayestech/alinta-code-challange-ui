import React from 'react';
import CustomerInfo from './customer_info/CustomerInfo.component';

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
  <div className="customerRow">
    <CustomerInfo info={fn} />
    <CustomerInfo info={ln} />
    <CustomerInfo info={dob} />
  </div>
);

export default CustomerRow;
