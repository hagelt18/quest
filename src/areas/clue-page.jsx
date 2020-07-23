import React from 'react';
import Clue from '../components/clue';
import ClueNotFound from '../components/clue-not-found';
import clues from '../assets/data/clues';

export const CluePage = (props) => {
  const clueId = props.match.params.id
  const clueData = clues.find(c => c.id === clueId)

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
