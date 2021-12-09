import React, { Component } from 'react';

class Timer extends Component {
  componentDidMount() {
    this.timer = setInterval(this.ticker, 1000);
  }

  //call a function ticker that subtracts the new date
  ticker() {
    this.setState({ clock: new Date() - this.props.start });
  }

  //define a clock with a default state
  constructor(props) {
    super(props);

    this.state = {
      clock: 0,
    };
    this.ticker = this.ticker.bind(this);
  }
  render() {
    const clock = Math.round(this.state.clock / 1000);
    return (
      <div>
        <p>You have been on this site for: </p>
        <br />
        <span>{clock}</span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
