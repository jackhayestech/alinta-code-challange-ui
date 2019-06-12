import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface EditCustomer {
  toggleModalDisplay: Function;
  setModalType: Function;
  setSelectedCustomer: Function;
}

export const EditCustomer: React.FC<EditCustomer> = ({ toggleModalDisplay, setModalType, setSelectedCustomer }): JSX.Element => (
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
    <FontAwesomeIcon icon={faPencilAlt} />
  </div>
);

export default EditCustomer;
