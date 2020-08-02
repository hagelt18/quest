import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import QuestInfo from '../components/quest-info';
import clues from '../data/clues.js';

function Home() {
  return (
    <div className="Home Page">
      <p>
        Welcome adventurer! Prepare to embark on a thrilling journey beyond your wildest dreams.
        An Evil Wizard has captured the Prince and holds him captive at the top of a great tower.
        It is up to you to find the legendary MAGIC GEMS gems and use them to defeat the Wizard and save the Prince!
      </p>
      <QuestInfo />
      <Link to={`/clue/${clues[0].id}`}><button className='primary center' style={{ marginTop: '48px' }}>Start</button></Link>
    </div >
  );
}

export default Home;
