import React, { useState } from 'react';
// import AnswerField from './AnswerField';
import AnswerField from './AnswerField';

export default ({ clueData }) => {

  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(null);


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
  }

  return (
    <div>

      {clueData.webQuestion && <p>{clueData.question}</p>}
      <br />
      {clueData.webAnswer && (
        <div>
          {/* <input type="text" onChange={onAnswerChange} /> */}
          {clueData.answers.map((a, index) =>
            <AnswerField length={clueData.answers[index].length} onChange={onAnswerChange(index)} />
          )}
          <br />
          {answers.map(a => <div>{a}</div>)}
          {!confirmed && <button onClick={confirmAnswers}>Submit</button>}
          {confirmed != null && <div>{confirmed ? 'Correct' : 'Try again!'}</div>}
          {confirmed && <button onClick={confirmAnswers}>Next</button>}
        </div>
      )}
    </div>
  )
}