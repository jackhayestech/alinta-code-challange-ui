import React from 'react';
import styled from 'styled-components';

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
  switch (modalType) {
    case ModalType.ADD:
      return <ModalContainer>add</ModalContainer>;
    case ModalType.DELETE:
      return <ModalContainer>delete</ModalContainer>;
    case ModalType.EDIT:
      return <ModalContainer>edit</ModalContainer>
    default:
      return null;
  }
};

export default ModalContent;
