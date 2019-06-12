import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface DeleteCustomer {
  toggleModalDisplay: Function;
  setModalType: Function;
  setSelectedCustomer: Function;
}

export const DeleteCustomer: React.FC<DeleteCustomer> = ({ toggleModalDisplay, setModalType, setSelectedCustomer }): JSX.Element => (
  <div
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
  </div>
);

export default DeleteCustomer;
