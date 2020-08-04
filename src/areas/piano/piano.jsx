import React, { useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import SoundfontProvider, { PlayNotes } from './soundfont-provider';
import 'react-piano/dist/styles.css';
import DimensionsProvider from './dimensions-provider';
import Confetti from '../../components/Confetti';
import { useHistory } from 'react-router-dom';
import { zeldaSecret, midiNumToNoteDictionary } from './songs';
import { useEffect } from 'react';

function Home() {
  const history = useHistory();
  const [currentNote, setCurrentNote] = useState('');
  const [previousNotes, setPreviousNotes] = useState([]);
  const [success, setSuccess] = useState(false);

  const firstNote = MidiNumbers.fromNote('c5');
  const lastNote = MidiNumbers.fromNote('b5');
  const config = {
    instrumentName: 'acoustic_grand_piano',
    noteRange: {
      first: firstNote,
      last: lastNote,
    },
    keyboardShortcutOffset: 0,
  };
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });


  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


  useEffect(() => {
    if (success) {
      PlayNotes(zeldaSecret, 130);
    }
  }, [success]);


  const onPlayNote = (midiNumber) => {
    const midiInfo = midiNumToNoteDictionary.find(x => x.midiNumber === midiNumber);
    const note = midiInfo && midiInfo.note;
    let newNotes = [...previousNotes];
    newNotes.push(note);
    if (newNotes.length > 8) {
      newNotes = newNotes.slice(1, 9);
    }
    setPreviousNotes(newNotes);
    setCurrentNote(note);
    if (newNotes.join(' ') === 'A5 G5 F# G5 G5 F5 E5 F5') {
      setSuccess(true);
    }
  }

  return (
    <div className="Piano Page">
      <SoundfontProvider
        audioContext={audioContext}
        instrumentName={config.instrumentName}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote, stopAllNotes }) => (
          <div>
            <div className="mt-4">
              <DimensionsProvider>
                {({ containerWidth }) => (
                  <Piano
                    noteRange={config.noteRange}
                    // keyboardShortcuts={keyboardShortcuts}
                    playNote={n => { playNote(n); onPlayNote(n); }}
                    stopNote={stopNote}
                    disabled={isLoading}
                    width={containerWidth}
                  />

                )}
              </DimensionsProvider>
            </div>
          </div>)}
      />
      <div>
        {currentNote}
      </div>
      <div>
        {success ? <h2>DODEEDODODODOO</h2> : null}
      </div>
      <Confetti active={success} />
      <button onClick={() => { history.goBack() }}> BACK</button>
    </div>
  );
}




export default Home;
