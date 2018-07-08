import { connect } from 'react-redux';
import ListCardsComponent from './ListCards.component';
import actions from './ListCards.actions';

import './style.less';

const ListCards = connect(
  function mapStateToProps(state) {
    return {
      list: state.game.positions,
      openCards: state.game.openCards
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
        onClickOpen: (id) =>  dispatch(actions.onClickOpen(id))
    };
  }
)(ListCardsComponent);

export default ListCards;
