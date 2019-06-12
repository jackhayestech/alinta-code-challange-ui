import { connect } from 'react-redux';
import { StoreState } from '../../assets/interfaces'
import Customers from './Customers.component';

const mapStateToProps = (state: StoreState) => ({
  customers: state.Customers.data,
  filter: state.Ui.filter,
});

export default connect(
  mapStateToProps,
)(Customers);
