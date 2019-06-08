import React from 'react';

interface CustomerInfo {
  childer: object;
}

export const CustomerInfo: React.FC<CustomerInfo> = ({
  children,
}): JSX.Element => <div>{children}</div>;

export default CustomerInfo;
