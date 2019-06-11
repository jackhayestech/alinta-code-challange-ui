import React from 'react';
import styled from 'styled-components';

import ModalContent from './modal_content/ModalContent.connector';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  cursor: pointer;
`;

interface Modal {
  display: boolean;
  toggle: Function;
}

const Modal: React.FC<Modal> = ({ display, toggle }) =>
  display ? (
    <Background
      onClick={() => {
        toggle();
      }}
    >
      <ModalContent />
    </Background>
  ) : null;

export default Modal;
