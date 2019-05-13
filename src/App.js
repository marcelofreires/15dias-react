import React from 'react';

import './styles.css';

import BoardCollab from './components/BoardCollab';
import NextPlayer from './components/NextPlayer';
import GameWrapper from './components/GameWrapper';

const App = () => (
  <GameWrapper>
    <NextPlayer />
    
    <BoardCollab amountChildren={9} />
  </GameWrapper>
);

export default App;
