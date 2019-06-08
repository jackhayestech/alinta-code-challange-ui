// The customer interface.
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface CustomerStore {
  data: Customer[];
}

// The store interface
export interface StoreState {
  Customers: CustomerStore;
}