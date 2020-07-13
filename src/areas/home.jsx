import React from 'react';
import Chest from '../components/chest';
import './home.css';

function Home() {
  return (
    <div className="Home">
      <Chest />
      <p>
        Welcome adventurer! Prepare to embark on a thrilling journey beyond your wildest dreams.
      </p>
    </div>
  );
}

export default Home;
