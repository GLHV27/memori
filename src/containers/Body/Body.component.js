import React from 'react';
import ListCards from '../ListCards/ListCards.container';
import Moves from '../Moves/Moves.container';
import Governor from '../Governor/Governor.container';
import Finish from '../Finish/Finish.container';

class Body extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        if (this.props.route !== 'game') {
            return <Finish />;
        }

        return (
            <div className="memori-game">
                <div className="memori-layout">
                    <Moves />
                    <ListCards />
                    <Governor />
                </div>
            </div>
        )
    }
};

export default Body;