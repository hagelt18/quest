import React, { useState } from 'react';
// import AnswerField from './AnswerField';
import AnswerField from './AnswerField';
// import Hint from './hint';
import Confetti from './Confetti';

export default ({ clueData, onNextButtonClicked }) => {

  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(clueData.answers ? null : true);

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


  const renderSubmit = () => {

    const answerSubmitted = clueData.answers && confirmed != null; // If there are answers to submit, and one has been submitted (confirmed will be true or false)
    return (
      <>
        {answerSubmitted && !confirmed && <div>'Try again!'</div>}
        {!confirmed && <button onClick={confirmAnswers} className="primary">Submit</button>}
        {confirmed &&

          <button onClick={onNextButtonClicked} className="primary">Next</button>
        }
      </>
    );
  }

  return (
    <div>
      {clueData.question && <p>{clueData.question}</p>}
      <br />
      {clueData.webAnswer && (
        <div>
          {/* <Hint hint={clueData.hint} /> */}
          {clueData.answers.map((a, index) =>
            <AnswerField
              key={index}
              length={clueData.answers[index].length}
              onChange={onAnswerChange(index)}
            />
          )}
          <br />
          {renderSubmit()}
          <Confetti active={confirmed == true} />
          {/* <HintStateContext.Provider value={clueData.hint} /> */}
        </div>
      )}

    </div >
  )
}