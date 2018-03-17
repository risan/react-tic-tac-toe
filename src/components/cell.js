import React from 'react';
import Player from './../helpers/player';

function Cell({ value, onClick }) {
  let className = 'cell';

  switch (value) {
    case Player.ONE:
      className = 'cell cell-player-one';
      break;
    case Player.TWO:
      className = 'cell cell-player-two';
      break;
    default:
  }

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Cell;
