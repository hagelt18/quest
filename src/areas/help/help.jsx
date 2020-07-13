import React from 'react';
import Gate from '../../components/gate';


export default () => {

  return (
    <div className="Help-Chat">
      <Gate>
        <iframe
          src="https://tlk.io/Quest08132020"
          title="quest-chat"
          width={`${window.innerWidth}px`}
          height='300px' />
      </Gate>
    </div>
  );

};