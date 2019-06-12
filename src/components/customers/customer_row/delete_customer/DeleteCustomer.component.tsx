import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 0px 10px;
  cursor: pointer;
`;

interface DeleteCustomer {
  toggleModalDisplay: Function;
  setModalType: Function;
  setSelectedCustomer: Function;
}

export const DeleteCustomer: React.FC<DeleteCustomer> = ({ toggleModalDisplay, setModalType, setSelectedCustomer }): JSX.Element => (
  <Container
    className="button-icon"
    onMouseDown={() => {
      toggleModalDisplay();
      setModalType();
      setSelectedCustomer();
    }}
    role="button"
    tabIndex={0}
  >
    <FontAwesomeIcon icon={faTrash} />
  </Container>
);

export default DeleteCustomer;
