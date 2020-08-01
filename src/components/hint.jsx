import React, { useState } from 'react';
import { loadData, saveData } from '../common/save-data';
import { useEffect } from 'react';

export default ({ hint }) => {

  const [showHint, setShowHint] = useState(null);
  let data = loadData();

  useEffect(() => {
  }, [])

  const showHintButtonClicked = () => {
    let show = true;
    if (!data.hintWarningConfirmed) {
      // Warn user
      const confirmed = window.confirm("You are about to recieve your first hint, are you sure?");
      if (!confirmed) {
        show = false;
      } else {
        data.hintWarningConfirmed = true;
        saveData(data);
      }
    }

    setShowHint(show);
  }

  if (!hint) {
    return null;
  }

  return (
    <div className="hint">
      {!showHint && <button className="hint" onClick={showHintButtonClicked}>?</button>}
      {showHint && <p>HINT: {hint}</p>}
    </div>
  )
}