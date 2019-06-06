import React from 'react';

interface CustomerInfo {
  info: string;
}

export const CustomerInfo: React.FC<CustomerInfo> = ({ info }): JSX.Element => (
  <div className="customer-info">{info}</div>
);

export default CustomerInfo;
