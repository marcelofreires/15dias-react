import React, { Component } from 'react';

import SquareCollab from '../SquareCollab';
// import { Container } from './styles';

class BoardCollab extends Component {
  render() {
    return (
      <div className="board-collab">
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
      </div>
    );
  }
}

export default BoardCollab;
