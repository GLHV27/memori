import store from '../stores/redux';
import AppConstants from '../constants/AppConstants';

const { dispatch } = store;
const ActionGames = {
    star() {
        dispatch({
            type: AppConstants.GAME_START
        });
    }
};

export default ActionGames;