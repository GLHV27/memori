import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../components/Modal/Modal';
import config from '../../config';

class Governor extends React.Component {
    static defaultProps = {
        visible: false,
        data: {}
    };

    getAge() {
        const birthday = new Date(this.props.data.birthday);
        const today = new Date();
        const days = (today.getTime() - birthday.getTime()) / config.dayInMilliseconds;

        return Math.floor(days / config.daysInYear);
    }

    render() {
        if (!Object.keys(this.props.data).length) {
            return null;
        }

        return (
            <CustomModal
                visible={this.props.visible}
            >
                <div className="memori-governor">
                    <div className="memori-governor__image" />
                    <div className="memori-governor__title">{this.props.data.name}{this.getAge()}</div>
                    <div className="memori-governor__subtitle">{this.props.data.subtitle}</div>
                    <div className="memori-governor__text">{this.props.data.description}</div>
                </div>
            </CustomModal>
        )
    }
};

Governor.propTypes = {
    visible: PropTypes.bool,
    data: PropTypes.object
};

export default Governor;