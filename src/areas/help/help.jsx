import React, { useState } from 'react';
const HelpChat = React.lazy(() => import('./help-chat'));

export default () => {

  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(null);

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onNameSubmit = (e) => {
    if (name && name.toLowerCase().includes('daniella')) {
      setConfirmed(true);
    } else {
      setConfirmed(false);
    }
  }

  const renderPrompt = () => {
    if (confirmed) {
      return null;
    }
    return (
      <div className="center">
        <p>To begin, enter your name</p>
        <input type='test' onChange={onNameChange}></input>
        <br />
        <br />
        <button onClick={onNameSubmit}>Enter</button>
      </div>
    );

  }


  return (
    <div className="Help">
      {renderPrompt()}
      {confirmed === false && <div>You are not the true hero. Only the chosen adventurer may receive guidance.</div>}
      {confirmed === true && <HelpChat name={name} />}
    </div>
  );

};