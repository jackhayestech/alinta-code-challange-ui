import React from 'react';
import { Customer } from '../../assets/interfaces';
import CustomersHeader from './customer_header/CustomerHeader.component';
import CustomerRow from './customer_row/CustomerRow.component';

interface CustomersProps {
  customers: Customer[];
  filter: string;
}

export const Customers: React.FC<CustomersProps> = ({
  customers,
  filter,
}): JSX.Element => {
  const filterCustomer = (fn: string, ln: string) => {
    if (fn.search(filter) !== -1) {
      return true;
    }
    if (ln.search(filter) !== -1) {
      return true;
    }
    return false;
  };

  return (
    <div id="customer">
      <CustomersHeader />
      {customers.map((customer, i) => (
        <div key={`key-${i}`}>
          {filterCustomer(customer.firstName, customer.lastName) ? (
            <CustomerRow
              arrPos={i}
              fn={customer.firstName}
              ln={customer.lastName}
              dob={customer.dob}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Customers;
