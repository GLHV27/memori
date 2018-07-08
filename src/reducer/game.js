import AppConstants from '../constants/AppConstants';
import randomize from '../helpers/randomize';
import store from '../stores/redux';

export const initialState = {
    positions: [],
    openCards: [],
    moves: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.GAME_START:
            return {
                ...state,
                ...initialState,
                positions: randomPositions()
            };

        case AppConstants.GAME_OPEN_CARD:
            return {
                ...state,
                openCards: state.openCards.concat([action.action])
            };

        default:
            return state;
    }
};

const randomPositions = () => {
    const data = store.getState().governors.list;
    let ids = Object.keys(data);
    ids = ids.concat(ids);

    return randomize(ids);
}
