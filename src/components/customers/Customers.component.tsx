import React from 'react';
import { Customer } from '../../assets/interfaces';

interface CustomersProps {
  customers: Customer[];
}

export const Customers: React.FC<CustomersProps> = ({ customers }): JSX.Element => (
  <div id="layout">
    test
  </div>
);

export default Customers;
