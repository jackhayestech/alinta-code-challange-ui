import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface DeleteCustomer {
  delCus: Function;
  custIndex: number;
}

export const DeleteCustomer: React.FC<DeleteCustomer> = ({ delCus, custIndex }): JSX.Element => (
  <div
    className="button-icon"
    onMouseDown={() => {
      delCus(custIndex);
    }}
    role="button"
    tabIndex={0}
  >
    <FontAwesomeIcon icon={faTrash} />
  </div>
);

export default DeleteCustomer;
