import React from 'react';

interface Modal {
  display: boolean;
  toggle: Function;
}

export const Modal: React.FC<Modal> = ({ display, toggle }) => (
  display ? (
    <div>modal</div>
  ) : null
);

export default Modal;
