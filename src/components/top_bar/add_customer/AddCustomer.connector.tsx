import { connect } from 'react-redux';
import { ModalType } from '../../../assets/enums';
import { toggleModalDisplay, setModalType } from '../../../redux/action_creators/Ui.actioncreator';
import AddCustomer from './AddCustomer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleModalDisplay: () => dispatch(toggleModalDisplay()),
  setModalType: () => dispatch(setModalType(ModalType.ADD))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCustomer);
