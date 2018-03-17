import { default as React, Component } from 'react';
import StepListItem from './step-list-item';

class StepList extends Component {
  scrollToLastItem() {
    this.listNode.scrollTop = this.props.sortStepsAsc ?
      this.listNode.querySelector('li:last-child').offsetTop : 0;
  }

  render() {
    const { stepIdx, totalSteps, sortStepsAsc, onStepClick } = this.props;
    let stepIndices = [...Array(totalSteps).keys()];

    if (!sortStepsAsc) {
      stepIndices.reverse();
    }

    return (
      <ol className="step-list" ref={node => this.listNode = node}>
        {stepIndices.map(idx => (
          <StepListItem
            key={idx}
            isCurrentlyActive={idx === stepIdx}
            onClick={() => onStepClick(idx)}
          >
            {idx ? `Step #${idx}` : `Game Start`}
          </StepListItem>
        ))}
      </ol>
    );
  }
}

export default StepList;
