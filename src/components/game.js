import { default as React, Component } from 'react';
import Player from './../helpers/player';
import Winner from './../helpers/winner';
import Board from './board';
import BoardHistory from './board-history';
import GameStatus from './game-status';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {
          cells: Array(9).fill(null),
          isPlayerOneNext: true,
          winner: null,
          winnerLine: null,
          move: null
        }
      ],
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

    const currentCells = cells.slice();
    currentCells[idx] = isPlayerOneTurn ? Player.ONE : Player.TWO;

    this.setState(
      {
        steps: steps.slice(0, stepIdx + 1).concat({
          cells: currentCells,
          isPlayerOneNext: !isPlayerOneTurn,
          winner: Winner.findFromCells(currentCells),
          winnerLine: Winner.findLineFromCells(currentCells),
          move: {
            cellIdx: idx,
            player: isPlayerOneTurn ? Player.ONE : Player.TWO
          }
        }),
        stepIdx: stepIdx + 1
      },
      () => {
        this.stepList.scrollToLastItem();
      }
    );
  }

  handStepClick(idx) {
    this.setState({ stepIdx: idx });
  }

  handleSortBtnClick() {
    this.setState({
      sortStepsAsc: !this.state.sortStepsAsc
    });
  }

  render() {
    const { steps, stepIdx, sortStepsAsc } = this.state;
    const { cells, isPlayerOneNext, winner, winnerLine } = steps[stepIdx];

    return (
      <div className="game">
        <GameStatus isPlayerOneNext={isPlayerOneNext} winner={winner} />
        <div className="main">
          <Board
            cells={cells}
            winnerLine={winnerLine}
            onCellClick={idx => this.handleCellClick(idx)}
          />
          <BoardHistory
            steps={steps}
            stepIdx={stepIdx}
            sortStepsAsc={sortStepsAsc}
            onStepClick={idx => this.handStepClick(idx)}
            onSortBtnClick={() => this.handleSortBtnClick()}
            stepListRef={node => (this.stepList = node)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
