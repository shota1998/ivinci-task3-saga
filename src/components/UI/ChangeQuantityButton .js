import React from 'react';

const ChangeQuantityButton = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default ChangeQuantityButton;
