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
import Arrow from '../../assets/images/arrow.png';
import Inventory from '../../components/inventory';

function MazePage() {
  const [mazeEntered, setMazeEntered] = useState(false);
  const [moves, setMoves] = useState([]);
  const [success, setSuccess] = useState(null);
  const [moving, setMoving] = useState(null);

  const immediateDeath = false;

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

  const die = () => {
    const curData = loadData();
    curData.deathDate = new Date();
    saveData(curData);
    window.location.reload(false);
  }
  const handleNextMove = async (nextMove) => {
    setMoving(true);
    await delay(100);
    // const expectedMoves = [
    //   'L', 'U',
    //   'R', 'U', 'R',
    //   'L', 'L', 'U', 'L',
    //   'D', 'L', 'U'];
    const expectedMoves = ['D', 'D', 'R', 'D', 'R', 'R', 'U', 'L', 'U', 'L', 'U'];
    const nextMoveIndex = moves.length;

    if (immediateDeath && expectedMoves[nextMoveIndex] !== nextMove) {
      die();
      return;
    }

    const newMoves = [...moves, nextMove];
    if (newMoves.length === expectedMoves.length) {
      // All Moves Correct
      if (expectedMoves.every((m, i) => newMoves[i] === m)) {
        setSuccess(true);
        PlayNotes(zeldaSecret, 130);
        const data = loadData();
        data.instrumentUnlocked = true;
        saveData(data);
      }
      else {
        die();
        return;
      }
    }
    else {
      setMoves(newMoves);
      await delay(100);
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
              <button disabled={moving} onClick={() => controllerButtonClicked('U')}>
                {/* ⯅ */}
                <img className='up' src={Arrow}></img>
              </button>
            </div>
            <div className='ctile'>&nbsp;</div>
          </div>
          <div className='crow'>
            <div className='ctile'>
              <button disabled={moving} onClick={() => controllerButtonClicked('L')}>
                {/* ⯇ */}
                <img className='left' src={Arrow}></img>
              </button>
            </div>
            <div className='ctile'>&nbsp;</div>
            <div className='ctile'>
              <button disabled={moving} onClick={() => controllerButtonClicked('R')}>
                {/* ⯈ */}
                <img className='right' src={Arrow}></img>
              </button>
            </div>
          </div>
          <div className='crow'>
            <div className='ctile'>&nbsp;</div>
            <div className='ctile'>
              <button disabled={moving} onClick={() => controllerButtonClicked('D')}>
                {/* ⯆ */}
                <img className='down' src={Arrow}></img>
              </button>

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
        <div className="center mb-4" style={{ fontSize: '14px' }}>One wrong turn could be your doom.</div>
        {renderEntrance()}
        {renderMaze()}
        {renderResult()}
        <Inventory />
      </div>
    </Gate>
  );
}

export default MazePage;
