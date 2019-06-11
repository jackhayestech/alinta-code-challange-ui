import React from 'react';
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

import AddCustomer from './add_customer/AddCustomer.connector';

import { ModalType } from '../../../assets/enums';

const ModalContainer = styled.div`
  min-width: 50px;
  min-height: 50px;
  background-color: #ffffff;
`;

interface ModalContainerProps {
  modalType: string;
}

const ModalContent: React.FC<ModalContainerProps> = ({ modalType }) => {
  let content: any;

  switch (modalType) {
    case ModalType.ADD:
      content = <AddCustomer />;
      break;
    case ModalType.DELETE:
      content = 'delete';
      break;
    case ModalType.EDIT:
      content = 'edit';
      break;
    default:
      content = null;
      break;
  }

  return (
    <ModalContainer
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {content}
    </ModalContainer>
  );
};

export default ModalContent;
