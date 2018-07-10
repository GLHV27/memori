import AppConstants from '../constants/AppConstants';
import randomize from '../helpers/randomize';
import store from '../stores/redux';

export const initialState = {
    cards: [],
    moves: 0,
    finish: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.GAME_START:
            return {
                ...state,
                ...initialState,
                cards: randomPositions()
            };

        case AppConstants.GAME_UPDATE_CARDS:
            return {
                ...state,
                cards: action.action
            };

        case AppConstants.GAME_INCREMENT_MOVES:
            return {
                ...state,
                moves: state.moves + 1
            };

        default:
            return state;
    }
};

const randomPositions = () => {
    const data = store.getState().governors.list;
    let ids = Object.keys(data);
    let cards = ids.concat(ids).map(id => {
        return {
            id,
            open: false,
            hidden: false
        };
    });

    return randomize(cards);
};
