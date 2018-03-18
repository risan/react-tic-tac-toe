import React from 'react';
import StepList from './step-list';

function BoardHistory({ steps, stepIdx, sortStepsAsc, onStepClick, onSortBtnClick, stepListRef }) {
  const sortEmoji = sortStepsAsc ?
    <span role="img" aria-label="sort asc">🔼</span>:
    <span role="img" aria-label="sort desc">🔽</span>;

  return (
    <div className="board-history">
      <h3>
        Board History
        <button className="history-sort-btn" onClick={() => onSortBtnClick()}>
          {sortEmoji}
        </button>
      </h3>
      <StepList
        steps={steps}
        stepIdx={stepIdx}
        sortStepsAsc={sortStepsAsc}
        onStepClick={onStepClick}
        ref={stepListRef}
      />
    </div>
  );
}

export default BoardHistory;
