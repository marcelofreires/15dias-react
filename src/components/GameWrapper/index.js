import React, { Component } from 'react';

import NextPlayer from '../NextPlayer';
import BoardCollab from '../BoardCollab';

import './styles.css';

class GameWrapper extends  Component {
  state = {
    player: "X",
  };

  handleClick = () => {
    this.setState(this.state.player === "X" ? {player: "O"} : {player: "X"});
  };

  render() {
    const { player } = this.state;
    
    return (
      <main className="game-wrapper">
        <NextPlayer player={player} />
        <BoardCollab amountChildren={9} content={player} onClick={this.handleClick} />
      </main>
    )
  }
}

export default GameWrapper;
