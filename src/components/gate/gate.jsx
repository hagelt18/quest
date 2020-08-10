import React from 'react';
import DeathGate from './death-gate';
import NameGate from './name-gate';

export default ({ children }) => {
  return (
    <div className="Gate">
      <NameGate>
        <DeathGate>
          {children}
        </DeathGate>
      </NameGate>
    </div>
  );
};