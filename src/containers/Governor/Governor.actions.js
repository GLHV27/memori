import AppConstants from '../../constants/AppConstants';

export const actions = {
    hiddenModal() {
        return {
            type: AppConstants.GAME_HIDDEN_POPUP
        };
    },
}

export default actions;
