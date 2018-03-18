import { default as React, Component } from 'react';
import StepListItem from './step-list-item';
import Player from './../helpers/player';

class StepList extends Component {
  scrollToLastItem() {
    this.listNode.scrollTop = this.props.sortStepsAsc
      ? this.listNode.querySelector('li:last-child').offsetTop
      : 0;
  }

  getItemChild(idx) {
    if (idx === 0) {
      return 'Game Start';
    }

    const { winner, move: { cellIdx, player } } = this.props.steps[idx];

    if (winner) {
      return StepList.getWonItemChild(winner);
    }

    const cellPos = [cellIdx % 3, Math.floor(cellIdx / 3)];

    return `Step #${idx} - ${player} (${cellPos[0]},${cellPos[1]})`;
  }

  static getWonItemChild(winner) {
    const wonEmoji = (
      <span role="img" aria-label="trophy">
        🏆
      </span>
    );

    switch (winner) {
      case Player.ONE:
        return <span>Player One Won {wonEmoji}</span>;
      case Player.TWO:
        return <span>Player Two Won {wonEmoji}</span>;
      case Player.DRAW:
        return 'Draw Match';
      default:
        return null;
    }
  }

  render() {
    const { steps, stepIdx, sortStepsAsc, onStepClick } = this.props;
    let stepIndices = [...Array(steps.length).keys()];

    if (!sortStepsAsc) {
      stepIndices.reverse();
    }

    return (
      <ol className="step-list" ref={node => (this.listNode = node)}>
        {stepIndices.map(idx => (
          <StepListItem
            key={idx}
            isCurrentlyActive={idx === stepIdx}
            onClick={() => onStepClick(idx)}
          >
            {this.getItemChild(idx)}
          </StepListItem>
        ))}
      </ol>
    );
  }
}

export default StepList;
