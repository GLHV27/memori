import { connect } from 'react-redux';
import ListCardsComponent from './ListCards.component';
import actions from './ListCards.actions';

import './style.less';

const ListCards = connect(
  function mapStateToProps(state) {
    return {
        cards: state.game.cards,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
        updateCards: (cards) =>  dispatch(actions.updateCards(cards)),
        incrementMoves: () =>  dispatch(actions.incrementMoves()),
        openPopup: (id) =>  dispatch(actions.openPopup(id))
    };
  }
)(ListCardsComponent);

export default ListCards;
