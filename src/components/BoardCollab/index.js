import React, { Component } from 'react';

import SquareCollab from '../SquareCollab';

import './styles.css';

class BoardCollab extends Component {
  squareCollabs = (amountChildren) => {
    const squares = Array(amountChildren).fill();
  
    return squares.map((square, i) => (
      <SquareCollab
        key={i}
        onClick={() => this.props.onClick(i)}
        player={this.props.squares[i]}
      />
    ));
  }

  render() {
    const { amountChildren} = this.props;

    return (
      <article className="board-collab">
        {this.squareCollabs(amountChildren)}
      </article>
    )
  }
};

export default BoardCollab;
