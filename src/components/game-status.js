import React from 'react';
import Player from './../helpers/player';

function GameStatus({ isPlayerOneNext, winner }) {
  let status;
  const playerOne = <span className="player-one">{Player.ONE}</span>;
  const playerTwo = <span className="player-two">{Player.TWO}</span>;
  const wonEmoji = <span role="img" aria-label="confetti">🎉</span>;

  if (winner) {
    switch (winner) {
      case Player.ONE:
        status = <span>{wonEmoji} Player One won! ({playerOne})</span>;
        break;
      case Player.TWO:
        status = <span>{wonEmoji} Player Two won! ({playerTwo})</span>;
        break;
      case Player.DRAW:
        status = "It's a draw!";
        break;
      default:
    }
  } else {
    status = isPlayerOneNext ?
      <span>It's Player One turn ({playerOne})</span> :
      <span>It's Player Two turn ({playerTwo})</span>;
  }

  return <div className="game-status">{status}</div>;
}

export default GameStatus;
