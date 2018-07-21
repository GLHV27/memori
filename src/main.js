import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';

import store, { history } from './stores/redux';
import App from './App';

ReactModal.setAppElement('#app');

ReactDOM.render(
	<Provider store={store}>
    <App />
	</Provider>,
	document.getElementById('app')
);
