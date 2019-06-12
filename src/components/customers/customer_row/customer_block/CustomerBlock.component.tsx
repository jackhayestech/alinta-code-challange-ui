import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  padding: 0px 10px;
  width: 120px;
  word-wrap: anywhere;
`;

interface CustomerInfo {
  childern: object;
}

export const CustomerInfo: React.FC<CustomerInfo> = ({
  children,
}): JSX.Element => <Block>{children}</Block>;

export default CustomerInfo;
