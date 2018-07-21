import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import style from './style';

class CustomModal extends React.Component {
    constructor(props) {
        super();

        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    close() {
        this.props.onClose();
    }

    confirm() {
        if (this.state.loading || this.state.confirmDisabled) {
            return;
        }

        this.props.onConfirm();
    }

    getStyle() {
        let overlay = {};

        if (this.props.visible) {
            overlay = {
                pointerEvents: 'auto',
                transform: 'scale(1)',
                opacity: 1
            };
        }

        return {
            ...style,
            overlay: {
                ...style.overlay,
                ...overlay
            },
        };
    }

    render() {
        return (
            <ReactModal
                isOpen={true}
                style={this.getStyle()}
            >
                <form>
                    {this.props.children}
                </form>
            </ReactModal>
        )
    }
}

CustomModal.propTypes = {
    visible: PropTypes.bool,
    confirmDisabled: PropTypes.bool,
    className: PropTypes.string,
    duration: PropTypes.number
};

CustomModal.defaultProps = {
    visible: true,
    confirmDisabled: false,
    className: '',
    duration: 600
};

CustomModal.contextTypes = {
    t: PropTypes.object
};

export default CustomModal;
