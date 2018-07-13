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

    render() {
        return (
            <ReactModal
                isOpen={this.props.visible}
                style={style}
            >
                <form
                    // onSubmit={this.props.onSubmit ? this.props.onSubmit : null}
                >
                    {this.props.children}
                </form>
            </ReactModal>
        )
    }
}

CustomModal.propTypes = {
    visible: PropTypes.bool,
    loading: PropTypes.bool,
    confirmDisabled: PropTypes.bool,
    className: PropTypes.string
};

CustomModal.defaultProps = {
    visible: true,
    loading: false,
    confirmDisabled: false,
    className: ''
};

CustomModal.contextTypes = {
    t: PropTypes.object
};

export default CustomModal;
