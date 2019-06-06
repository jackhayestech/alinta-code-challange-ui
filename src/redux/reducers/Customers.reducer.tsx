const initialState = {
  customers: [],
};

interface action {
  type: string;
}

const Customers = (state = initialState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Customers;
