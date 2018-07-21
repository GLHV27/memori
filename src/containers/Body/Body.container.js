import { connect } from 'react-redux';
import BodyComponent from './Body.component';

const Body = connect(
  function mapStateToProps(state) {
    return {
        route: state.game.route
    };
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(BodyComponent);

export default Body;
