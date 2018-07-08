import React from 'react';
import PropTypes from 'prop-types';
import ActionGames from './actions/ActionGames';
import ListCards from './containers/ListCards/ListCards.container';

import './statics/style/index.less';

class App extends React.Component {
    componentDidMount() {
        ActionGames.star();
    }

    render() {
        return (
            <div className="memori">
                <div className="memori-layput">

                    <ListCards />
                </div>
            </div>
        )
    }
};

export default App;
