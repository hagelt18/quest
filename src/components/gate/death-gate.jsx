import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import gravestone from '../../assets/images/loz-gravestone.png';
import { loadData } from '../../data/save-data';

export default ({ children }) => {

  const [respawnTime, setRespawnTime] = useState(null);
  useEffect(() => {
    const data = loadData();
    const deathDate = data.deathDate && new Date(data.deathDate);
    if (deathDate) {
      const timeToSpawn = getTimeToSpawn(deathDate);
      const stillDead = isStillDead(timeToSpawn);
      if (stillDead) {
        setRespawnTime(timeToSpawn);
      }
    }
  }, [])


  const getTimeToSpawn = (date) => {
    const respawnTimeout = 10;
    const responseDate = new Date(date);
    responseDate.setSeconds(date.getSeconds() + respawnTimeout);
    return responseDate;
  }
  const isStillDead = (date) => {
    var now = new Date();
    return (now < date);
  }

  const countdownRenderer = ({ hours, minutes, seconds }) => (
    <span>
      {seconds.toString().padStart(2, '0')}
    </span>
  );
  const countDownOnComplete = () => { setRespawnTime(null) };


  if (!respawnTime) {
    return <>{children}</>
  }
  return (
    <div className="center">
      <img className="maze-result"
        src={gravestone}
        alt="Hero Failed"
      />
      <div>
        <strong>You died</strong>
      </div>
      <br />
      <div>Respawn in&nbsp;
      <Countdown
          date={respawnTime}
          renderer={countdownRenderer}
          onComplete={countDownOnComplete} />
      </div>
    </div>

  );


};