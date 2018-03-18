import React from 'react';
import Player from './../helpers/player';

function Cell({ value, isWinner, onClick }) {
  let className = '';

  switch (value) {
    case Player.ONE:
      className = 'cell-player-one';
      break;
    case Player.TWO:
      className = 'cell-player-two';
      break;
    default:
  }

  return (
    <button
      className={`cell ${className} ${isWinner ? 'cell-winner' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cell;
