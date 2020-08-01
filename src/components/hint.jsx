import React, { useState, useContext } from 'react';
import { loadData, saveData } from '../common/save-data';
import { useEffect } from 'react';
import { store } from '../data/store';
import { Modal, Button } from 'react-bootstrap';

export default () => {

  const [showHint, setShowHint] = useState(null);
  const { state } = useContext(store);
  let data = loadData();;

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

    // window.alert(state.hint);
    setShowHint(true);
  }

  if (!state.hint) {
    return null;
  }


  const handleClose = () => setShowHint(false);

  const renderModal = () => {
    return (
      <Modal style={{ color: 'black', fontWeight: 700 }} show={showHint} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HINT!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{state.hint}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      {!showHint &&
        // <button className="hint" onClick={showHintButtonClicked}>?</button>
        <button onClick={showHintButtonClicked}>👁‍🗨</button>
      }
      {renderModal()}
      {/* {showHint && <p>HINT: {hint}</p>} */}
    </>
  )
}