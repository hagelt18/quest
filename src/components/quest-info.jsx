import React from 'react';
import OldWoman from '../assets/images/old-woman.png';
import Fire from '../assets/images/fire.gif';

export default () => {

  return (
    <div>
      <h2>Goal</h2>
      <p>Find the crystals, use them to defeat the Wizard, and save the Prince!</p>
      <h2>Words of Wisdom</h2>
      <img
        src={Fire}
        alt="Fire"
        style={{ width: '48px', height: '48px' }}
      />
      <img
        src={OldWoman}
        alt="Old Woman"
        style={{ width: '48px', height: '48px', marginLeft: '16px', marginRight: '16px' }}
      />
      <img
        src={Fire}
        alt="Fire"
        style={{ width: '48px', height: '48px' }}
      />
      <ul>
        <li>Do your best</li>
        <li>Be victorious</li>
      </ul>
    </div>
  )
}