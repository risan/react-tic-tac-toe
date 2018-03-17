import React from 'react';
import Cell from './cell';

function Board({ cells, onCellClick }) {
  return (
    <div className="board">
      {cells.map((value, idx) =>
        <Cell
          key={idx}
          value={value}
          onClick={() => onCellClick(idx)}
        />
      )}
    </div>
  );
}

export default Board;
