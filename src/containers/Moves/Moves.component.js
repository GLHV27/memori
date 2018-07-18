import React from 'react';
import PropTypes from 'prop-types';

class Moves extends React.Component {
    static defaultProps = {
        cards: [],
        duration: 800
    };

    render() {
        return (
            <div className="memori-moves">ХОДОВ: {this.props.count}</div>
        )
    }
};

Moves.propTypes = {
    cards: PropTypes.array,
    duration: PropTypes.number
};

export default Moves;