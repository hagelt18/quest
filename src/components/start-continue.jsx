import React from 'react';
import { Link } from 'react-router-dom';
import { getNextClueId } from '../data/save-data';
import clues from '../data/clues';

const StartContinue = ({ primary }) => {

  const nextClue = getNextClueId();
  if (!nextClue) {
    return null;
  }

  const isFirstClue = clues[0].id === nextClue;

  return (
    <Link to={`/clue/${nextClue}`}>
      <button className={`center ${primary ? 'primary' : ''}`}>
        {isFirstClue ? 'Start' : 'Continue'}
      </button>
    </Link>
  )
}


export default StartContinue;