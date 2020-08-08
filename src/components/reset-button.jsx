import React, { useState } from 'react';
import { saveData } from '../data/save-data';
import { Modal, Button } from 'react-bootstrap';


const ResetButton = () => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmationCancel = () => setShowConfirmation(false);
  const handleConfirmationConfirm = () => {
    setShowConfirmation(false);
    saveData({});
    window.location.reload(false);
  }

  const renderConfirmationModal = () => {
    return (
      <Modal style={{ color: 'black', fontWeight: 700 }} show={showConfirmation} onHide={handleConfirmationCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Data?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to reset all progress. Are you sure you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmationConfirm}>
            Reset Data
          </Button>
          <Button variant="secondary" onClick={handleConfirmationCancel}>
            Nevermind
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return (
    <div>
      {renderConfirmationModal()}
      <button style={{ fontSize: '14px', float: 'right' }} onClick={() => setShowConfirmation(true)}>Reset</button>
    </div>
  );
}

export default ResetButton;
