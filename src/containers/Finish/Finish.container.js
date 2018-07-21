import { connect } from 'react-redux';
import FinishComponent from './Finish.component';
import actions from './Finish.actions';

import './style.less';

const Finish = connect(
  function mapStateToProps(state) {
    return {
        moves: state.game.moves
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
        resetGame: () =>  dispatch(actions.resetGame()),
    };
  }
)(FinishComponent);

export default Finish;
