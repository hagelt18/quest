import React, { useState } from 'react';
import entrance from '../../assets/images/loz-entrance.png';
import './maze-page.css';
import lostwoodsLeft from '../../assets/images/lostwoods-left.png';
import lostwoodsRight from '../../assets/images/lostwoods-right.png';
import lostwoodsTop from '../../assets/images/lostwoods-top.png';
import lostwoodsBottom from '../../assets/images/lostwoods-bottom.png';
import heroVictoryMusicBox from '../../assets/images/hero-victory-musicbox.png';
import { zeldaSecret } from '../piano/songs';
import { PlayNotes } from '../piano/soundfont-provider'
import StartContinue from '../../components/start-continue';
import { loadData, saveData } from '../../data/save-data';
import { delay } from '../../common/delay';
import Gate from '../../components/gate/gate';

function MazePage() {
  const [mazeEntered, setMazeEntered] = useState(false);
  const [moves, setMoves] = useState([]);
  const [success, setSuccess] = useState(null);
  const [moving, setMoving] = useState(null);


  const handleEnterMaze = () => {
    setSuccess(null);
    setMazeEntered(true);
  }

  const renderEntrance = () => {
    if (mazeEntered) {
      return null;
    }
    return (
      <div className="center">
        <button
          onClick={handleEnterMaze}>
          <img
            src={entrance}
            alt="Maze Entrance"
          />
        </button>
        <div><button onClick={handleEnterMaze}>ENTER</button></div>
      </div>
    );
  }

  const handleNextMove = async (nextMove) => {
    setMoving(true);
    await delay(200);
    const expectedMoves = ['L', 'U', 'R', 'D', 'R', 'U', 'R', 'D', 'L'];
    const nextMoveIndex = moves.length;
    if (expectedMoves[nextMoveIndex] !== nextMove) {
      // Wrong Move
      const curData = loadData();
      curData.deathDate = new Date();
      saveData(curData);
      window.location.reload(false);
      return;
    }

    // Correct Move
    const newMoves = [...moves, nextMove];
    if (newMoves.length === expectedMoves.length &&
      expectedMoves.every((m, i) => newMoves[i] === m)) {
      setSuccess(true);
      PlayNotes(zeldaSecret, 130);
      const data = loadData();
      data.instrumentUnlocked = true;
      saveData(data);
    }
    else {
      setMoves(newMoves);
      await delay(200);
      setMoving(false);
    }


  }

  const controllerButtonClicked = (direction) => {
    handleNextMove(direction);
  }

  const GetMazeImage = () => {
    let image = lostwoodsBottom;
    const currentMove = (moves && moves[moves.length - 1]);
    switch (currentMove) {
      case 'L':
        image = lostwoodsRight;
        break;
      case 'R':
        image = lostwoodsLeft;
        break;
      case 'D':
        image = lostwoodsTop;
        break;
      case 'U':
      default:
        image = lostwoodsBottom;
        break;
    }

    return (
      <img className={`maze-screen ${moving ? 'fadeOut' : 'fadeIn'} center`}
        src={image}
        alt="Maze"
      />);
  }

  const renderMaze = () => {
    if (!mazeEntered || success !== null) {
      return null;
    }
    return (
      <div>
        {GetMazeImage()}
        <br />
        <div className='controller'>
          <div className='crow'>
            <div className='ctile'>&nbsp;</div>
            <div className='ctile'>
              <button onClick={() => controllerButtonClicked('U')}>🡅</button>
            </div>
            <div className='ctile'>&nbsp;</div>
          </div>
          <div className='crow'>
            <div className='ctile'>
              <button onClick={() => controllerButtonClicked('L')}>🡄</button>
            </div>
            <div className='ctile'>&nbsp;</div>
            <div className='ctile'>
              <button onClick={() => controllerButtonClicked('R')}>🡆</button>
            </div>
          </div>
          <div className='crow'>
            <div className='ctile'>&nbsp;</div>
            <div className='ctile'>
              <button onClick={() => controllerButtonClicked('D')}>🡇</button>
            </div>
            <div className='ctile'>&nbsp;</div>
          </div>
        </div>

      </div >
    )
  }

  const reset = () => {
    window.location.reload(false);
  }

  const renderResult = () => {
    if (success) {
      return (
        <div className="center">
          <img className="maze-result"
            src={heroVictoryMusicBox}
            alt="Hero Victorious"
          />
          <div>
            You have obtained the magical instrument! Check your inventory.
          </div>
          <StartContinue />
        </div>
      );
    }

    if (success === false) {
      return (
        <div className="center">
          <div>
            <button onClick={reset}>Try Again</button>
          </div>
        </div>
      )
    }

  }

  return (
    <Gate>
      <div className="Maze Page">
        {renderEntrance()}
        {renderMaze()}
        {renderResult()}
      </div>
    </Gate>
  );
}

export default MazePage;
