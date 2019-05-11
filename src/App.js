import React from 'react';

import './styles.css';

import BoardCollab from './components/BoardCollab';
import SquareCollab from './components/SquareCollab';
import NextPlayer from './components/NextPlayer';
import GameWrapper from './components/GameWrapper';

const App = () => (
  <GameWrapper>
    <NextPlayer />
    
    <BoardCollab>
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
      <SquareCollab />
    </BoardCollab>
  </GameWrapper>
);

export default App;
