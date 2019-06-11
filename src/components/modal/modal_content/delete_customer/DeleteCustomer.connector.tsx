import { connect } from 'react-redux';
import { Customer } from '../../../../assets/interfaces'
import { toggleModalDisplay } from '../../../../redux/action_creators/Ui.actioncreator';
import { deleteCustomer } from '../../../../redux/action_creators/Customers.actioncreator';
import DeleteCustomer from './DeleteCustomer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  toggle: () => dispatch(toggleModalDisplay()),
  deleteCustomer: (customer: Customer) => dispatch(deleteCustomer(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteCustomer);
