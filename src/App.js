import React from 'react';
import PropTypes from 'prop-types';
import ActionGames from './actions/ActionGames';
import Body from './containers/Body/Body.container';

import './statics/style/index.less';

class App extends React.Component {
    componentDidMount() {
        ActionGames.star();
    }

    render() {
        return (
            <div className="memori">
                <Body />
            </div>
        )
    }
};

export default App;
