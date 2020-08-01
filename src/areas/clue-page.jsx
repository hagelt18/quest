import React, { useContext, useEffect } from 'react';
import Clue from '../components/clue';
import ClueNotFound from '../components/clue-not-found';
import clues from '../data/clues';
import { store } from '../data/store';
import Gate from '../components/gate';
import { useHistory } from 'react-router-dom';

export const CluePage = (props) => {
  const globalState = useContext(store);
  const history = useHistory();
  const { dispatch } = globalState;

  const clueId = props.match.params.id
  const clueData = clues.find(c => c.id === clueId)

  useEffect(() => {
    dispatch({ type: 'SET_HINT', payload: clueData.hint })
  }, [])

  const onNextButtonClicked = () => {
    const clueIndex = clues.findIndex(c => c.id === clueId);
    if (clueIndex + 1 < clues.length) {
      const nextClue = clues[clueIndex + 1];
      history.push(`/clue/${nextClue.id}`);
    }

  }

  const renderClue = (type) => {
    switch (type) {
      case 'basic':
      default:
        return <Clue clueData={clueData} onNextButtonClicked={onNextButtonClicked} />
    }
  }

  if (!clueData) {
    return <ClueNotFound />
  }


  return (
    <div className="ClueWrapper Page">
      <Gate>
        {renderClue(clueData.type)}
      </Gate>
    </div>
  );
}

export default CluePage;
