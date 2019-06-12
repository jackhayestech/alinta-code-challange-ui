import { connect } from 'react-redux';
import { ModalType } from '../../../../assets/enums';
import { StoreState } from '../../../../assets/interfaces'
import { toggleModalDisplay, setModalType, setSelectedCustomer } from '../../../../redux/action_creators/Ui.actioncreator';
import DeleteCustomer from './DeleteCustomer.component';

interface Props {
  custIndex: number;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function, props: Props) => ({
  toggleModalDisplay: () => dispatch(toggleModalDisplay()),
  setModalType: () => dispatch(setModalType(ModalType.DELETE)),
  setSelectedCustomer: () => dispatch(setSelectedCustomer(props.custIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteCustomer);
