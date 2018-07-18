import React from 'react';
import PropTypes from 'prop-types';
import ActionGames from './actions/ActionGames';
import ListCards from './containers/ListCards/ListCards.container';
import Moves from './containers/Moves/Moves.container';

import './statics/style/index.less';

class App extends React.Component {
    componentDidMount() {
        ActionGames.star();
    }

    render() {
        return (
            <div className="memori">
                <div className="memori-layput">
                    <Moves />
                    <ListCards />
                </div>
            </div>
        )
    }
};

export default App;
