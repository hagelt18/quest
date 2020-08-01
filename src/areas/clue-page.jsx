import React, { useContext, useEffect } from 'react';
import Clue from '../components/clue';
import ClueNotFound from '../components/clue-not-found';
import clues from '../data/clues';
import { store } from '../data/store';

export const CluePage = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const clueId = props.match.params.id
  const clueData = clues.find(c => c.id === clueId)

  useEffect(() => {
    dispatch({ type: 'SET_HINT', payload: clueData.hint })
  }, [])

  const renderClue = (type) => {
    switch (type) {
      case 'basic':
      default:
        return <Clue clueData={clueData} />
    }
  }

  if (!clueData) {
    return <ClueNotFound />
  }


  return (
    <div className="ClueWrapper Page">
      {renderClue(clueData.type)}
    </div>
  );
}

export default CluePage;
