import { connect } from 'react-redux';
import { StoreState } from '../../../../assets/interfaces'
import { toggleModalDisplay } from '../../../../redux/action_creators/Ui.actioncreator';
import { deleteCustomer } from '../../../../redux/action_creators/Customers.actioncreator';
import DeleteCustomer from './DeleteCustomer.component';

const mapStateToProps = (state: StoreState) => ({
  custIndex: state.Ui.selectedCustomer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggle: () => dispatch(toggleModalDisplay()),
  deleteCustomer: (custIndex: number) => dispatch(deleteCustomer(custIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteCustomer);
