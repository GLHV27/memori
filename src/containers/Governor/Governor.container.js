import { connect } from 'react-redux';
import GovernorComponent from './Governor.component';
// import actions from './Governor.actions';

import './style.less';

const Governor = connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
        // updateCards: (cards) =>  dispatch(actions.updateCards(cards)),
    };
  }
)(GovernorComponent);

export default Governor;
