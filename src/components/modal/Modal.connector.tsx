import { connect } from 'react-redux';
import { StoreState } from '../../assets/interfaces'
import { toggleModalDisplay } from '../../redux/action_creators/Ui.actioncreator';
import Modal from './Modal.component';

const mapStateToProps = (state: StoreState) => ({
  display: state.Ui.modalDisplay,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggle: () => dispatch(toggleModalDisplay()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
