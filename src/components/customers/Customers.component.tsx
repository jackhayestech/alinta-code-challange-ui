import React from 'react';
import { Customer } from '../../assets/interfaces';
import { CustomerRow } from './customer_row/CustomerRow.component';

interface CustomersProps {
  customers: Customer[];
}

export const Customers: React.FC<CustomersProps> = ({
  customers,
}): JSX.Element => (
  <div id="customer">
    {customers.map((customer, i) => (
      <CustomerRow
        key={customer.id}
        arrPos={i}
        fn={customer.firstName}
        ln={customer.lastName}
        dob={customer.dob}
      />
    ))}
  </div>
);

export default Customers;
