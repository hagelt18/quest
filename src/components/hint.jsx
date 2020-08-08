import React, { useState, useContext } from 'react';
import { loadData, saveData } from '../data/save-data';
import { useEffect } from 'react';
import { store } from '../data/store';
import { Modal, Button } from 'react-bootstrap';
import CaptionImage from './caption-image';
import QuestionBlock from '../assets/images/question-block.png';

export default () => {

  const [showHint, setShowHint] = useState(null);
  const [showHintConfirmation, setShowHintConfirmation] = useState(null);
  const { state } = useContext(store);
  let data = loadData();;

  useEffect(() => {
  }, [])

  const showHintButtonClicked = () => {
    if (!data.hintWarningConfirmed) {
      // Warn user
      // const confirmed = window.confirm("You are about to recieve your first hint, are you sure?");
      // if (confirmed) {
      //   data.hintWarningConfirmed = true;
      //   saveData(data);
      //   setShowHint(true);
      // }
      setShowHintConfirmation(true);
    } else {
      setShowHint(true);
    }
  }

  if (!state.hint) {
    return null;
  }


  const handleHintConfirmationCancel = () => setShowHintConfirmation(false);
  const handleHintConfirmationConfirm = () => {
    setShowHintConfirmation(false);
    data.hintWarningConfirmed = true;
    saveData(data);
    setShowHint(true);
  }

  const renderHintConfirmationModal = () => {
    return (
      <Modal style={{ color: 'black', fontWeight: 700 }} show={showHintConfirmation} onHide={handleHintConfirmationCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Get Hint?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to recieve your first hint, are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHintConfirmationConfirm}>
            Hint
          </Button>
          <Button variant="secondary" onClick={handleHintConfirmationCancel}>
            Nevermind
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const handleHintClose = () => setShowHint(false);

  const renderHintModal = () => {
    return (
      <Modal style={{ color: 'black', fontWeight: 700 }} show={showHint} onHide={handleHintClose}>
        <Modal.Header closeButton>
          <Modal.Title>HINT!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{state.hint}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHintClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <button onClick={showHintButtonClicked}>
        <CaptionImage image={QuestionBlock} caption="Hint" altText="Hint" />
      </button>
      {renderHintConfirmationModal()}
      {renderHintModal()}
    </>
  )
}