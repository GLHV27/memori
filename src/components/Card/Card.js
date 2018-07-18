import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

const path = '../../statics/images/governors/';
const images = {
    1: require(`../../statics/images/governors/s_artuhov.jpg`),
    2: require(`../../statics/images/governors/s_azarov.jpg`),
    3: require(`../../statics/images/governors/s_burkov.jpg`),
    4: require(`../../statics/images/governors/s_civilev.jpg`),
    5: require(`../../statics/images/governors/s_moor.jpg`),
    6: require(`../../statics/images/governors/s_nikitin.jpg`),
    7: require(`../../statics/images/governors/s_nikolaev.jpg`),
    8: require(`../../statics/images/governors/s_nosov.jpg`)
};

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
                    backgroundImage: `url(${images[this.props.id]})`
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