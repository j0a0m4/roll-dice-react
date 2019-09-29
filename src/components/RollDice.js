import React, { Component } from 'react';
import '../styles/RollDice.css';
import Die from './Die';
import getRandomDiceValue from '../utils/getRandomDiceValue';

class RollDice extends Component {
  state = {
    dice1: getRandomDiceValue(),
    dice2: getRandomDiceValue(),
    animation: false
  };

  roll = () => {
    const dice1 = getRandomDiceValue();
    const dice2 = getRandomDiceValue();
    this.setState({ animation: true });
    setTimeout(() => {
      this.setState({ dice1, dice2, animation: false });
    }, 800);
  };

  render() {
    return (
      <div className="RollDice">
        <h1>RollDice</h1>
        <div className="dices">
          <Die
            classStyle={this.state.animation && 'shaking'}
            value={this.state.dice1}
          />
          <Die
            classStyle={this.state.animation && 'shaking'}
            value={this.state.dice2}
          />
        </div>
        <button
          className="roll-button"
          onClick={this.roll}
          disabled={this.state.animation}
        >
          {(this.state.animation && 'Rolling...') || 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
