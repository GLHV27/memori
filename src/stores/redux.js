import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducer/index';

export const history = createHistory();
let middlewares = applyMiddleware(
    thunk
);

middlewares = process.env.NODE_ENV !== 'development'
    ? middlewares
    : composeWithDevTools(middlewares);

const store = createStore(
    reducer,
    middlewares
);

export default store;
