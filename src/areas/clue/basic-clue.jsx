import React, { useState } from 'react';
import AnswerField from '../../components/AnswerField';
import Confetti from '../../components/confetti';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { loadData, } from '../../data/save-data';

export default ({ clueData, onSolved, onNextButtonClicked }) => {

  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(null);
  const [previouslySolved, setPreviouslySolved] = useState(null);
  const [currentClueId, setCurrentClueId] = useState(null);
  const answerNeeded = () => ((clueData.answers || []).length > 0);

  useEffect(() => {
    setCurrentClueId(clueData.id);
    const data = loadData();
    const prevSolved = data.completedClues.some(c => c === clueData.id);
    setPreviouslySolved(prevSolved)
    setAnswers(!prevSolved ? [] : clueData.answers);
    setConfirmed(null);
    if (!answerNeeded()) {
      onSolved(clueData.id);
    }
  }, [clueData])

  const onAnswerChange = index => (value) => {
    // setAnswer(e.target.value);
    var newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const confirmAnswers = () => {
    var correct = true;
    for (let i = 0; i < clueData.answers.length; i++) {
      if (!answers[i]) {
        // Answer missing
        correct = false;
        break;
      }
      if (clueData.answers[i].toLowerCase() !== answers[i].toLowerCase()) {
        // Answer incorrect
        correct = false;
        break;
      }
    }
    setConfirmed(correct);
    if (correct) {
      onSolved(clueData.id);
    }
  }


  const renderSubmit = () => {

    const answerSubmitted = clueData.answers && confirmed != null; // If there are answers to submit, and one has been submitted (confirmed will be true or false)
    return (
      <div className="center">
        {answerSubmitted && !confirmed && <h3>Try again!</h3>}
        {answerSubmitted && confirmed && clueData.successMessage && <ReactMarkdown source={clueData.successMessage} />}
        {!confirmed && answerNeeded() && <button onClick={confirmAnswers} className="primary mt-2">Submit</button>}

      </div>
    );
  }

  if (currentClueId !== clueData.id) {
    // clue is changing
    return null;
  }

  return (
    <div>
      {clueData.clue && <ReactMarkdown source={clueData.clue} />}
      {clueData.question && <ReactMarkdown source={clueData.question} />}
      <br />
      {!previouslySolved && clueData.webAnswer && (
        <div>
          {/* <Hint hint={clueData.hint} /> */}
          {clueData.answers.map((a, index) =>
            <AnswerField
              key={index}
              clueId={clueData.id}
              answer={clueData.answers[index]}
              onChange={onAnswerChange(index)}
            />
          )}
          <br />
          {renderSubmit()}
          {!previouslySolved && <Confetti active={confirmed} />}
          {/* <HintStateContext.Provider value={clueData.hint} /> */}
        </div>
      )}
      {previouslySolved && (
        clueData.answers.map(a => <h3 key={a}>{a}</h3>)
      )}
      {(confirmed || previouslySolved || !answerNeeded) &&
        <button onClick={onNextButtonClicked} className="center primary mt-2">Next</button>
      }

    </div >
  )
}