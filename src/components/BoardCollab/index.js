import React from 'react';

import './styles.css';
import SquareCollab from '../SquareCollab';

const squareCollabs = amountChildren => {
  const squares = [];

  for(let i = 0; i < amountChildren; i++) {
    squares.push(<SquareCollab key={i} />);
  }

  return squares;
}

const BoardCollab = ({ amountChildren }) => (
  <article className="board-collab">
    {squareCollabs(amountChildren)}
  </article>
);

export default BoardCollab;
