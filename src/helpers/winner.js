import Player from './player';

class Winner {
  static get LINES() {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  static findFromCells(cells) {
    let line = Winner.findLineFromCells(cells);

    if (line !== null) {
      return cells[line[0]];
    }

    return cells.includes(null) ? null : Player.DRAW;
  }

  static findLineFromCells(cells) {
    for (let line of Winner.LINES) {
      const [a, b, c] = line;

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return line;
      }
    }

    return null;
  }
}

export default Winner;
