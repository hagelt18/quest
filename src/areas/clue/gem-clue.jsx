import React, { useState } from 'react';
import Confetti from '../../components/confetti';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import GemSelector from '../../components/gem-selector';
import { loadData, saveData } from '../../data/save-data';

export default ({ clueData, onSolved, onNextButtonClicked }) => {

  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setAnswers([]);
    setConfirmed(null);
    setLoaded(true);
  }, [clueData])

  const onAnswerChange = index => (value) => {
    var newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const confirmAnswers = (currentAnswers) => {
    var correct = true;
    for (let i = 0; i < clueData.answers.length; i++) {
      if (!currentAnswers[i]) {
        // Answer missing
        correct = false;
        break;
      }
      if (clueData.answers[i].toLowerCase() !== currentAnswers[i].toLowerCase()) {
        // Answer incorrect
        correct = false;
        break;
      }
    }


    if (correct) {
      setConfirmed(correct);
      onSolved(clueData.id);
    } else {
      //setAnswers([null, null, null]);
      const curData = loadData();
      curData.deathDate = new Date();
      saveData(curData);
      window.location.reload(false);
    }
  }


  const renderSubmit = () => {
    const answerSubmitted = clueData.answers && confirmed != null; // If there are answers to submit, and one has been submitted (confirmed will be true or false)
    return (
      <>
        {answerSubmitted && confirmed && clueData.successMessage && <ReactMarkdown source={clueData.successMessage} />}
      </>
    );
  }

  const GemValueChanged = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    if (clueData.answers.every((a, i) => !!newAnswers[i])) {
      confirmAnswers(newAnswers);
    }
  }

  if (!loaded) {
    return null;
  }
  return (
    <div>
      {clueData.clue && <ReactMarkdown source={clueData.clue} />}
      {clueData.question && <ReactMarkdown source={clueData.question} />}
      <br />
      {clueData.webAnswer && (
        <div>

          <div className="diamond-wrapper mb-4">

            <GemSelector start="red" value={answers[0]} onChange={v => GemValueChanged(0, v)}></GemSelector>
            <GemSelector start="blue" value={answers[1]} onChange={v => GemValueChanged(1, v)}></GemSelector>
            <GemSelector start="yellow" value={answers[2]} onChange={v => GemValueChanged(2, v)} ></GemSelector>
          </div>

          <br />
          {renderSubmit()}
          {<Confetti active={confirmed} />}
        </div>
      )}

    </div >
  )
}