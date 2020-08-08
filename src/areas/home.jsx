import React from 'react';
import './home.css';
import QuestInfo from '../components/quest-info';
import StartContinue from '../components/start-continue';
import ResetButton from '../components/reset-button';

function Home() {
  return (
    <div className="Home Page">
      <p>
        Welcome adventurer! Prepare to embark on a thrilling journey beyond your wildest dreams.
        An Evil Wizard has captured the Prince and holds him captive at the top of a great tower.
        It is up to you to find the legendary <strong>magic gems</strong> and use them to defeat the Wizard and save the Prince!
      </p>
      <QuestInfo />
      <div style={{ marginTop: '48px' }}>
        <StartContinue primary={true} />
      </div>
      <ResetButton />
    </div >
  );
}

export default Home;
