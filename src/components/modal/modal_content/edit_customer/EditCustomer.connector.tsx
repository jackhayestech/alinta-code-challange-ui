import { connect } from 'react-redux';
import { StoreState, Customer } from '../../../../assets/interfaces'
import { toggleModalDisplay } from '../../../../redux/action_creators/Ui.actioncreator';
import { editCustomer } from '../../../../redux/action_creators/Customers.actioncreator';
import EditCustomer from './EditCustomer.component';

const mapStateToProps = (state: StoreState) => ({
  customerData: state.Customers.data[state.Ui.selectedCustomer],
  selectedCustomer: state.Ui.selectedCustomer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggle: () => dispatch(toggleModalDisplay()),
  editCustomer: (index: number, customer: Customer) => dispatch(editCustomer(index, customer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditCustomer);
