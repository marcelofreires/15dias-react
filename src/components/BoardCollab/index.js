import React, { Component } from 'react';

import SquareCollab from '../SquareCollab';

import './styles.css';

class BoardCollab extends Component {
  squareCollabs = (amountChildren, onClick, player) => {
    const squares = Array(amountChildren).fill();
  
    return squares.map((square, i) => (
      <SquareCollab
        key={i}
        onClick={onClick}
        player={player}
      />
    ));
  }

  render() {
    const { amountChildren, onClick, player } = this.props;

    return (
      <article className="board-collab">
        {this.squareCollabs(amountChildren, onClick, player)}
      </article>
    )
  }
};

export default BoardCollab;
