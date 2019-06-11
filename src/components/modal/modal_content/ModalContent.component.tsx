import React from 'react';
import styled from 'styled-components';

import { ModalType } from '../../../assets/enums';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  cursor: pointer;
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
