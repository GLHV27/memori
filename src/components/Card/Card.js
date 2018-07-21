import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import config from '../../config';
import './style.less';

const avatars = config.avatars.small;

class Card extends React.Component {
    static defaultProps = {
        open: false,
        hidden: false,
        id: null
    }

    constructor(props) {
        super();

        this.onClick = this.onClick.bind(this);
    }

    getMainClass() {
        return classnames({
            'memori-card': true,
            'memori-card_open': this.props.open,
            'memori-card_hidden': this.props.hidden
        });
    }

    onClick() {
        if (this.props.open) {
            return;
        }

        this.props.onClickOpen({
            id: this.props.id,
            index: this.props.index
        });
    }

    render() {
        return (
            <div
                className={this.getMainClass()}
                onClick={this.onClick}
            >
                <div className="memori-card__hand memori-card__hand_shirt" />
                <div className="memori-card__hand memori-card__hand_face" style={{
                    backgroundImage: `url(${avatars[this.props.id]})`
                }} />
            </div>
        )
    }
};

Card.propTypes = {
    open: PropTypes.bool,
    hidden: PropTypes.bool,
    id: PropTypes.number
};

export default Card;