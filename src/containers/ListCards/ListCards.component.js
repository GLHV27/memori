import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '../Card/Card';

class ListCards extends React.Component {
    static defaultProps = {
        list: [],
        openCards: []
    }

    constructor(props) {
        super();

        this.state = {};

        this.actions = {};
        this.actions.onClickOpen = props.onClickOpen;
    }

    checkOpen(id) {
        return this.props.openCards.indexOf(id) !== -1;
    }

    render() {
        return (
            <ul className="memori-list">
                {this.props.list.map((key, i) => (
                    <li className="memori-list__item" key={i}>
                        <Card
                            id={+key}
                            index={i}
                            open={this.checkOpen(+key)}
                            onClickOpen={this.actions.onClickOpen}
                        />
                    </li>
                ))}
            </ul>
        )
    }
};

ListCards.propTypes = {
    list: PropTypes.array,
    openCards: PropTypes.array
};

export default ListCards;