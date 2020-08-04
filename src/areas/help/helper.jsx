import React, { useEffect } from 'react';
import Gate from '../../components/gate';
import { useHistory } from 'react-router';
import Talk from "talkjs";
import { getHelper, getHelpee, getInbox } from './talkjs-utility';

export default () => {

  const history = useHistory();

  let inbox = null;
  let container = null;
  const setUpChat = async () => {
    await Talk.ready;
    const other = getHelpee();
    const me = getHelper();
    inbox = getInbox(me, other);
    inbox.mount(container);
  }

  useEffect(() => {
    setUpChat();
  }, []);


  return (
    <div className="Help-Chat">
      <Gate>
        <button onClick={() => { history.goBack() }}>← BACK</button>
        <br />
        <span>
          <div style={{ height: '500px' }} ref={c => container = c}>Loading...</div>
        </span>
      </Gate>
      <br />
    </div>
  );

};