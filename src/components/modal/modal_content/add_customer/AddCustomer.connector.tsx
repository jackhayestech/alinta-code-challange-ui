import { connect } from 'react-redux';
import { Customer } from '../../../../assets/interfaces'
import { toggleModalDisplay } from '../../../../redux/action_creators/Ui.actioncreator';
import { addCustomer } from '../../../../redux/action_creators/Customers.actioncreator';
import AddCustomer from './AddCustomer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  toggle: () => dispatch(toggleModalDisplay()),
  addCustomer: (customer: Customer) => dispatch(addCustomer(customer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCustomer);
