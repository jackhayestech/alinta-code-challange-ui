import { connect } from 'react-redux';
import { StoreState } from '../../../assets/interfaces'
import { setFilterText } from '../../../redux/action_creators/Ui.actioncreator';
import Search from './Search.component';

const mapStateToProps = (state: StoreState) => ({
  filter: state.Ui.filter,
});

const mapDispatchToProps = (dispatch: Function) => ({
  setFilterText: (value: string) => dispatch(setFilterText(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
