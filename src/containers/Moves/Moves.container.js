import { connect } from 'react-redux';
import MovesComponent from './Moves.component';

import './style.less';

const Moves = connect(
  function mapStateToProps(state) {
    return {
        count: state.game.moves
    };
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(MovesComponent);

export default Moves;
