import { connect } from 'react-redux';
import { ModalType } from '../../../../assets/enums';
import { toggleModalDisplay, setModalType, setSelectedCustomer } from '../../../../redux/action_creators/Ui.actioncreator';
import EditCustomer from './EditCustomer.component';

interface Props {
  custIndex: number;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function, props: Props) => ({
  toggleModalDisplay: () => dispatch(toggleModalDisplay()),
  setModalType: () => dispatch(setModalType(ModalType.EDIT)),
  setSelectedCustomer: () => dispatch(setSelectedCustomer(props.custIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditCustomer);
