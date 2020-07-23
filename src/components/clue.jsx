import React, { useState } from 'react';
// import AnswerField from './AnswerField';
import AnswerField from './AnswerField';

export default ({ clueData }) => {

  const [answer, setAnswer] = useState();
  const [confirmed, setConfirmed] = useState(null);


  const onAnswerChange = (value) => {
    // setAnswer(e.target.value);
    setAnswer(value);
  }

  const confirmAnswer = () => {
    const correct = clueData.answer === answer
    setConfirmed(correct);
  }

  return (
    <div>

      {clueData.webQuestion && <p>{clueData.question}</p>}
      <br />
      {clueData.webAnswer && (
        <div>
          {/* <input type="text" onChange={onAnswerChange} /> */}
          <AnswerField length={clueData.answer.length} onChange={onAnswerChange} />
          <br />
          {answer}
          <button onClick={confirmAnswer}>Submit</button>
        </div>
      )}
      {confirmed === false && <div>Try again.</div>}
    </div>
  )
}