import React from 'react';
import { Link } from 'react-router-dom';
import { getNextClueId } from '../data/save-data';
import clues from '../data/clues';

const StartContinue = ({ primary }) => {

  const nextClue = getNextClueId();

  const isFirstClue = clues[0].id === nextClue;

  return (
    <div className="center">
      <Link to={`/clue/${nextClue}`}>
        <button className={primary ? 'primary' : ''}>
          {isFirstClue ? 'Start' : 'Continue'}
        </button>
      </Link>
    </div>
  )
}


export default StartContinue;