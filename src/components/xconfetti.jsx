import React from 'react';
import Confetti from 'react-dom-confetti';

export default ({ active }) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Confetti active={active} config={{ spread: 120, angle: 90 }} />
    </div>
  );
}