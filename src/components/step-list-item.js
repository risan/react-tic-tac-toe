import React from 'react';

function StepListItem({ isCurrentlyActive, onClick, children, ...rest }) {
  return isCurrentlyActive ? (
    <li className="step-list-item active" {...rest}>
      {children}
      <span className="finger" role="img" aria-label="finger pointing left">
        👈
      </span>
    </li>
  ) : (
    <li className="step-list-item" onClick={onClick} {...rest}>
      {children}
    </li>
  );
}

export default StepListItem;
