import React from 'react';
import Cell from './cell';

function Board({ cells, winnerLine, onCellClick }) {
  return (
    <div className="board">
      {cells.map((value, idx) => (
        <Cell
          key={idx}
          value={value}
          isWinner={winnerLine ? winnerLine.includes(idx) : false}
          onClick={() => onCellClick(idx)}
        />
      ))}
    </div>
  );
}

export default Board;
