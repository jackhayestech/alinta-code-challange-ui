import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface EditCustomer {
  edit: Function;
  custIndex: number;
}

export const EditCustomer: React.FC<EditCustomer> = ({ edit, custIndex }): JSX.Element => (
  <div
    className="button-icon"
    onMouseDown={() => {
      edit(custIndex);
    }}
    role="button"
    tabIndex={0}
  >
    <FontAwesomeIcon icon={faPencilAlt} />
  </div>
);

export default EditCustomer;
