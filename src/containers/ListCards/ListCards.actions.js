import AppConstants from '../../constants/AppConstants';

export const actions = {
    updateCards(cards) {
        return {
            type: AppConstants.GAME_UPDATE_CARDS,
            action: cards
        };
    },

    incrementMoves() {
        return {
            type: AppConstants.GAME_INCREMENT_MOVES
        };
    }
}

export default actions;
