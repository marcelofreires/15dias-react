import React, { Component } from 'react';

import SquareCollab from '../SquareCollab';

import './styles.css';

class BoardCollab extends Component {
  squareCollabs = (amountChildren, onClick, content) => {
    const squares = Array(amountChildren).fill();
  
    return squares.map((square, i) => (
      <SquareCollab
        key={i}
        onClick={onClick}
        content={content}
      />
    ));
  }

  render() {
    const { amountChildren, onClick, content } = this.props;

    return (
      <article className="board-collab">
        {this.squareCollabs(amountChildren, onClick, content)}
      </article>
    )
  }
};

export default BoardCollab;
