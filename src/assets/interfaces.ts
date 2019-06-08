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

export interface UiStore {
  filter: string;
  modalDisplay: boolean;
}

// The store interface
export interface StoreState {
  Customers: CustomerStore;
  Ui: UiStore;
}
