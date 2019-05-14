import React from 'react';

import './styles.css';
import SquareCollab from '../SquareCollab';

const squareCollabs = amountChildren => {
  const squares = Array(amountChildren).fill();

  return squares.map((square, i) => <SquareCollab key={i} />);
}

const BoardCollab = ({ amountChildren }) => (
  <article className="board-collab">
    {squareCollabs(amountChildren)}
  </article>
);

export default BoardCollab;
