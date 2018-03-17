import { default as React, Component } from 'react';
import Player from './../helpers/player';
import Board from './board';
import BoardHistory from './board-history';
import GameStatus from './game-status';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [{
        cells: Array(9).fill(null),
        isPlayerOneNext: true,
        winner: null,
        move: null
      }],
      stepIdx: 0,
      sortStepsAsc: true
    };
  }

  handleCellClick(idx) {
    const { steps, stepIdx } = this.state;
    const { cells, isPlayerOneNext: isPlayerOneTurn, winner } = steps[stepIdx];

    if (cells[idx] !== null || winner !== null) {
      return;
    }

    //const move = [(idx % 3), Math.floor(idx / 3)];
    const currentCells = cells.slice();
    currentCells[idx] = isPlayerOneTurn ? Player.ONE : Player.TWO;

    this.setState({
      steps: steps.slice(0, stepIdx + 1).concat({
        cells: currentCells,
        isPlayerOneNext: !isPlayerOneTurn,
        winner: Game.findWinnerFromCells(currentCells),
        move: {
          idx,
          player: isPlayerOneTurn ? Player.ONE : Player.TWO
        }
      }),
      stepIdx: stepIdx + 1
    }, () => {
      this.stepList.scrollToLastItem();
    });
  }

  handStepClick(idx) {
    this.setState({ stepIdx: idx });
  }

  static findWinnerFromCells(cells) {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winnerLines) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return cells.includes(null) ? null : Player.DRAW;
  }

  handleSortBtnClick() {
    this.setState({
      sortStepsAsc: !this.state.sortStepsAsc
    });
  }

  render() {
    const { steps, stepIdx, sortStepsAsc } = this.state;
    const { cells, isPlayerOneNext, winner } = steps[stepIdx];

    return (
      <div className="game">
        <GameStatus
          isPlayerOneNext={isPlayerOneNext}
          winner={winner}
        />
        <div className="main">
          <Board
            cells={cells}
            onCellClick={idx => this.handleCellClick(idx)}
          />
          <BoardHistory
            stepIdx={stepIdx}
            totalSteps={steps.length}
            sortStepsAsc={sortStepsAsc}
            onStepClick={idx => this.handStepClick(idx)}
            onSortBtnClick={() => this.handleSortBtnClick()}
            stepListRef={node => this.stepList = node}
          />
        </div>
      </div>
    );
  }
}

export default Game;
