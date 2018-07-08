import { combineReducers } from 'redux';

import { reducer as governorsReducer } from './governors';
import { reducer as gameReducer } from './game';

const reducer = combineReducers({
    governors: governorsReducer,
    game: gameReducer
});

export default reducer;
