import React, { Component } from 'react';

class Rando extends Component {
  state = {
    num: 0
  };
  componentDidMount() {
    this.makeTimer();
  }
  randomNum(max) {
    return Math.floor(Math.random() * Number(max));
  }
  makeTimer() {
    setInterval(
      () => this.setState({ num: this.randomNum(this.props.maxNum) }),
      1000
    );
  }
  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default Rando;
