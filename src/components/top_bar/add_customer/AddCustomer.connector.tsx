import { connect } from 'react-redux';
import { toggleModalDisplay } from '../../../redux/action_creators/Ui.actioncreator';
import AddCustomer from './AddCustomer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleModalDisplay: () => dispatch(toggleModalDisplay()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCustomer);
