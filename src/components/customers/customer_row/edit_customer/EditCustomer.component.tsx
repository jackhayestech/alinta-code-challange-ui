import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 0px 20px;
`;


interface EditCustomer {
  toggleModalDisplay: Function;
  setModalType: Function;
  setSelectedCustomer: Function;
}

export const EditCustomer: React.FC<EditCustomer> = ({ toggleModalDisplay, setModalType, setSelectedCustomer }): JSX.Element => (
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
    <FontAwesomeIcon icon={faPencilAlt} />
  </Container>
);

export default EditCustomer;
