import AppConstants from '../../constants/AppConstants';

export const actions = {
    onClickOpen: (id) => {
        return {
            type: AppConstants.GAME_OPEN_CARD,
            action: id
        };
    }
}

export default actions;
