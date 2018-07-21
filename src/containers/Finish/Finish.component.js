import React from 'react';
import declension from '../../helpers/declension';
import config from '../../config';

class Finish extends React.Component {
    constructor(props) {
        super();

        this.actions = {};
        this.actions.resetGame = props.resetGame;

        this.onReset = this.onReset.bind(this);
    }

    onReset() {
        this.actions.resetGame();
    }

    getMoves() {
        const suffix = declension(this.props.moves, config.declension.moves);

        return `${this.props.moves} ${suffix}`;
    }

    render() {
        return (
            <div className="memori-finish">
                <div className="memori-finish__title">Я могу отличить губернаторов за {this.getMoves()}!</div>
                <div className="memori-finish__text">Хотя сделать это очень сложно</div>
                <div className="memori-finish__action">
                    <button
                        className="gui-button gui-button_link"
                        type="button"
                        onClick={this.onReset}
                    >Попробовать еще раз</button>
                </div>
            </div>
        )
    }
};

export default Finish;