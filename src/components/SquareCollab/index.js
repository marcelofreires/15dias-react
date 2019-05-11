import React, { Component } from 'react';

import './styles.css';

class SquareCollab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerText: true,
    };
  }

  handleClick() {
    this.setState({playerText: !this.state.playerText});
  };

  render() {
    return (
      <button 
        onClick={() => this.handleClick()}
        className="square-collab"
      >
      {this.state.playerText ? "X" : "O"}
      </button>
    );
  }
};

export default SquareCollab;
