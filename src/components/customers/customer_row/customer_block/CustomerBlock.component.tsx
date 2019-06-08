import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  padding: 0px 10px;
`;

interface CustomerInfo {
  childer: object;
}

export const CustomerInfo: React.FC<CustomerInfo> = ({
  children,
}): JSX.Element => <Block>{children}</Block>;

export default CustomerInfo;
