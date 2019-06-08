import { connect } from 'react-redux';
import { StoreState } from '../../assets/interfaces'
import Customers from './Customers.component';

const mapStateToProps = (state: StoreState) => ({
  customers: state.Customers.data,
});

export default connect(
  mapStateToProps,
)(Customers);
