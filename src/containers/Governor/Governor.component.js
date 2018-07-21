import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../components/Modal/Modal';
import declension from '../../helpers/declension';
import config from '../../config';

const avatars = config.avatars.large;

class Governor extends React.Component {
    static defaultProps = {
        visible: false,
        data: {}
    };

    constructor(props) {
        super();

        this.actions = {};
        this.actions.hiddenModal = props.hiddenModal;

        this.onClose = this.onClose.bind(this);
    }

    getAge() {
        const birthday = new Date(this.props.data.birthday);
        const today = new Date();
        const days = (today.getTime() - birthday.getTime()) / config.dayInMilliseconds;
        const years = Math.floor(days / config.daysInYear);
        const suffix = declension(years, config.declension.year);

        return `${years} ${suffix}`;
    }

    onClose() {
        this.actions.hiddenModal();
    }

    render() {
        return (
            <CustomModal
                visible={this.props.visible}
            >
                {Object.keys(this.props.data).length
                    ? (
                        <div className="memori-governor">
                            <div className="memori-governor__image" style={{
                                backgroundImage: `url(${avatars[this.props.data.id]})`
                            }} />
                            <div className="memori-governor__title">{this.props.data.name}, {this.getAge()}</div>
                            <div className="memori-governor__subtitle">{this.props.data.subtitle}</div>
                            <div className="memori-governor__text">{this.props.data.description}</div>
                            <div className="memori-governor__action">
                                <button
                                    className="gui-button"
                                    type="button"
                                    onClick={this.onClose}
                                >Дальше</button>
                            </div>
                        </div>
                    )
                    : null
                }
            </CustomModal>
        )
    }
};

Governor.propTypes = {
    visible: PropTypes.bool,
    data: PropTypes.object
};

export default Governor;