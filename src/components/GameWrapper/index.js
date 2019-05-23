import React, { Component } from 'react';

import NextPlayer from '../NextPlayer';
import BoardCollab from '../BoardCollab';
import GameHistory from '../GameHistory';

import './styles.css';

class GameWrapper extends  Component {
  state = {
    player: "X",
    squares: Array(9).fill("")
  };

  handleClick = (i) => {
    const { player, squares } = this.state;

    !squares[i] && (squares[i] = player);

    this.setState({
      player: player === "X" ? "O" : "X",
      squares: squares,
    });
  };

  render() {
    const { player, squares } = this.state;
    
    return (
      <main className="game-wrapper">
        <NextPlayer player={player} />
        <BoardCollab amountChildren={9} squares={squares} onClick={this.handleClick} />
        <GameHistory />
      </main>
    )
  }
}

export default GameWrapper;
