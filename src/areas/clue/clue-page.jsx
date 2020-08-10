import React, { useContext, useEffect } from 'react';
import BasicClue from './basic-clue';
import GemClue from './gem-clue';
import ClueNotFound from './clue-not-found';
import clues from '../../data/clues';
import { store } from '../../data/store';
import Gate from '../../components/gate/gate';
import { useHistory } from 'react-router-dom';
import Inventory from '../../components/inventory';
import { saveProgress } from '../../data/save-data';

export const CluePage = (props) => {
  const globalState = useContext(store);
  const history = useHistory();
  const { dispatch } = globalState;

  const clueId = props.match.params.id
  const clueData = clues.find(c => c.id === clueId)

  useEffect(() => {
    if (clueData) {
      dispatch({ type: 'SET_HINT', payload: clueData.hint })
    }
    return function cleanup() {
      dispatch({ type: 'SET_HINT', payload: null })
    }
  }, [clueData, props.match, dispatch])

  const onNextButtonClicked = () => {
    const clueIndex = clues.findIndex(c => c.id === clueId);
    if (clueIndex + 1 < clues.length) {
      const nextClue = clues[clueIndex + 1];
      history.push(`/clue/${nextClue.id}`);
    }
  }

  const getPreviousClue = () => {
    const clueIndex = clues.findIndex(c => c.id === clueId);
    if (clueIndex - 1 >= 0) {
      return clues[clueIndex - 1];
    };
  }

  const onPreviousButtonClicked = () => {
    history.push(`/clue/${previousClue.id}`);
  }

  const onClueSolved = (id) => {
    saveProgress(id);
  }

  const renderClue = (type) => {
    switch (type) {
      case 'gem-clue':
        return <GemClue clueData={clueData} onSolved={onClueSolved} onNextButtonClicked={onNextButtonClicked} />
      case 'basic':
      default:
        return <BasicClue clueData={clueData} onSolved={onClueSolved} onNextButtonClicked={onNextButtonClicked} />
    }
  }

  if (!clueData) {
    return <ClueNotFound />
  }

  const previousClue = getPreviousClue();

  return (
    <div className="ClueWrapper Page">
      <Gate>
        {previousClue &&
          (
            <button style={{ fontSize: '14px' }} onClick={onPreviousButtonClicked}>
              ← Previous Clue
            </button>
          )}
        {renderClue(clueData.type)}

        <Inventory />
      </Gate>
    </div>
  );
}

export default CluePage;
