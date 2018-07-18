import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';

class ListCards extends React.Component {
    static defaultProps = {
        cards: [],
        duration: 800
    }

    constructor(props) {
        super();

        this.state = {
            lastCard: null,
            disabled: false
        };

        this.actions = {};
        this.actions.updateCards = props.updateCards;
        this.actions.incrementMoves = props.incrementMoves;
        this.actions.openPopup = props.openPopup;

        this.onClickOpen = this.onClickOpen.bind(this);
    }

    setDisabled(item) {
        this.setState({
            disabled: true
        }, () => {
            if (+item.id !== +this.state.lastCard.id) {
                setTimeout(() => this.closeCards(item), this.props.duration);
            } else {
                setTimeout(() => this.hiddenCards(item), this.props.duration);
            }
        });
    }

    takeOffDisabled() {
        setTimeout(() => {
            this.setState({
                disabled: false,
                lastCard: null
            });
        }, this.props.duration);
    }

    setLastCard(item, callback) {
        this.setState({
            lastCard: item
        }, () => {
            callback && callback();
        });
    }

    closeCards(item) {
        let cards = [...this.props.cards];

        cards[item.index].open = false;
        cards[this.state.lastCard.index].open = false;

        this.actions.updateCards(cards);
        this.takeOffDisabled();
    }

    hiddenCards(item) {
        let cards = [...this.props.cards];

        cards[item.index].hidden = true;
        cards[this.state.lastCard.index].hidden = true;

        this.actions.updateCards(cards);
        this.actions.openPopup(item.id);
        this.takeOffDisabled();
    }

    onClickOpen(item) {
        if (this.state.disabled) {
            return;
        }

        let cards = [...this.props.cards];

        cards[item.index].open = true;

        if (!this.state.lastCard) {
            this.setLastCard(item, () => {
                this.actions.updateCards(cards);
            });
        } else {
            this.actions.incrementMoves();
            this.actions.updateCards(cards);
            this.setDisabled(item);
        }
    }

    render() {
        return (
            <ul className="memori-list">
                {this.props.cards.map((item, i) => (
                    <li className="memori-list__item" key={i}>
                        <Card
                            id={+item.id}
                            index={i}
                            open={item.open}
                            hidden={item.hidden}
                            onClickOpen={!item.hidden ? this.onClickOpen : null}
                        />
                    </li>
                ))}
            </ul>
        )
    }
};

ListCards.propTypes = {
    cards: PropTypes.array,
    duration: PropTypes.number
};

export default ListCards;