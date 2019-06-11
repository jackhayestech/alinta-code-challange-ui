import { connect } from 'react-redux';
import { StoreState } from '../../../assets/interfaces'
import ModalContent from './ModalContent.component';

const mapStateToProps = (state: StoreState) => ({
  modalType: state.Ui.modalType,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContent);
