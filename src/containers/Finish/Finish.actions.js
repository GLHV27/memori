import AppConstants from '../../constants/AppConstants';

export const actions = {
    resetGame() {
        return {
            type: AppConstants.GAME_START
        };
    },
}

export default actions;
