import React, { useState } from 'react';
import Viewer from 'react-viewer';
import image from '../../assets/images/comic.png'

function ComicPage() {
  const [showViewer, setShowViewer] = useState(false);
  return (
    <div className="Comic Page">
      <div>
        {/* <button onClick={() => { setVisible(true); }}>show</button> */}
        <Viewer
          visible={showViewer}
          onClose={() => { setShowViewer(false); }}
          images={[{ src: image, alt: 'Comic Book Clue' }]}
        />
      </div>
      <img
        src={image}
        alt="Comic Book Clue"
        onClick={() => setShowViewer(true)}
        style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '30%' }}
      />
    </div>
  );
}

export default ComicPage;
