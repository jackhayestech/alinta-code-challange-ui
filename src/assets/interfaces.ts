// The customer interface.
export interface Customer {
  firstName: string;
  lastName: string;
  dob: Date;
}

export interface CustomerStore {
  data: Customer[];
}

export interface UiStore {
  filter: string;
  modalDisplay: boolean;
  modalType: string;
}

// The store interface
export interface StoreState {
  Customers: CustomerStore;
  Ui: UiStore;
}
