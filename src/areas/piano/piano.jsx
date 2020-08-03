import React, { useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import SoundfontProvider from './soundfont-provider';
import 'react-piano/dist/styles.css';
import DimensionsProvider from './dimensions-provider';
import Confetti from '../../components/Confetti';
import { useHistory } from 'react-router-dom';

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

  const midiNumToNoteDictionary = [

    { midiNumber: 127, note: 'G9' },
    { midiNumber: 126, note: 'F#' },
    { midiNumber: 125, note: 'F9' },
    { midiNumber: 124, note: 'E9' },
    { midiNumber: 123, note: 'D#' },
    { midiNumber: 122, note: 'D9' },
    { midiNumber: 121, note: 'C#' },
    { midiNumber: 120, note: 'C9' },
    { midiNumber: 119, note: 'B8' },
    { midiNumber: 118, note: 'A#' },
    { midiNumber: 117, note: 'A8' },
    { midiNumber: 116, note: 'G#' },
    { midiNumber: 115, note: 'G8' },
    { midiNumber: 114, note: 'F#' },
    { midiNumber: 113, note: 'F8' },
    { midiNumber: 112, note: 'E8' },
    { midiNumber: 111, note: 'D#' },
    { midiNumber: 110, note: 'D8' },
    { midiNumber: 109, note: 'C#' },
    { midiNumber: 108, note: 'C8' },
    { midiNumber: 107, note: 'B7' },
    { midiNumber: 106, note: 'A#' },
    { midiNumber: 105, note: 'A7' },
    { midiNumber: 104, note: 'G#' },
    { midiNumber: 103, note: 'G7' },
    { midiNumber: 102, note: 'F#' },
    { midiNumber: 101, note: 'F7' },
    { midiNumber: 100, note: 'E7' },
    { midiNumber: 99, note: 'D#' },
    { midiNumber: 98, note: 'D7' },
    { midiNumber: 97, note: 'C#' },
    { midiNumber: 96, note: 'C7' },
    { midiNumber: 95, note: 'B6' },
    { midiNumber: 94, note: 'A#' },
    { midiNumber: 93, note: 'A6' },
    { midiNumber: 92, note: 'G#' },
    { midiNumber: 91, note: 'G6' },
    { midiNumber: 90, note: 'F#' },
    { midiNumber: 89, note: 'F6' },
    { midiNumber: 88, note: 'E6' },
    { midiNumber: 87, note: 'D#' },
    { midiNumber: 86, note: 'D6' },
    { midiNumber: 85, note: 'C#' },
    { midiNumber: 84, note: 'C6' },
    { midiNumber: 83, note: 'B5' },
    { midiNumber: 82, note: 'A#' },
    { midiNumber: 81, note: 'A5' },
    { midiNumber: 80, note: 'G#' },
    { midiNumber: 79, note: 'G5' },
    { midiNumber: 78, note: 'F#' },
    { midiNumber: 77, note: 'F5' },
    { midiNumber: 76, note: 'E5' },
    { midiNumber: 75, note: 'D#' },
    { midiNumber: 74, note: 'D5' },
    { midiNumber: 73, note: 'C#' },
    { midiNumber: 72, note: 'C5' },
    { midiNumber: 71, note: 'B4' },
    { midiNumber: 70, note: 'A#' },
    { midiNumber: 69, note: 'A40' },
    { midiNumber: 68, note: 'G#' },
    { midiNumber: 67, note: 'G4' },
    { midiNumber: 66, note: 'F#' },
    { midiNumber: 65, note: 'F4' },
    { midiNumber: 64, note: 'E4' },
    { midiNumber: 63, note: 'D#' },
    { midiNumber: 62, note: 'D4' },
    { midiNumber: 61, note: 'C#' },
    { midiNumber: 60, note: 'C4' },
    { midiNumber: 59, note: 'B3' },
    { midiNumber: 58, note: 'A#' },
    { midiNumber: 57, note: 'A3' },
    { midiNumber: 56, note: 'G#' },
    { midiNumber: 55, note: 'G3' },
    { midiNumber: 54, note: 'F#' },
    { midiNumber: 53, note: 'F3' },
    { midiNumber: 52, note: 'E3' },
    { midiNumber: 51, note: 'D#' },
    { midiNumber: 50, note: 'D3' },
    { midiNumber: 49, note: 'C#' },
    { midiNumber: 48, note: 'C3' },
    { midiNumber: 47, note: 'B2' },
    { midiNumber: 46, note: 'A#' },
    { midiNumber: 45, note: 'A2' },
    { midiNumber: 44, note: 'G#' },
    { midiNumber: 43, note: 'G2' },
    { midiNumber: 42, note: 'F#' },
    { midiNumber: 41, note: 'F2' },
    { midiNumber: 40, note: 'E2' },
    { midiNumber: 39, note: 'D#' },
    { midiNumber: 38, note: 'D2' },
    { midiNumber: 37, note: 'C#' },
    { midiNumber: 36, note: 'C2' },
    { midiNumber: 35, note: 'B1' },
    { midiNumber: 34, note: 'A#' },
    { midiNumber: 33, note: 'A1' },
    { midiNumber: 32, note: 'G#' },
    { midiNumber: 31, note: 'G1' },
    { midiNumber: 30, note: 'F#' },
    { midiNumber: 29, note: 'F1' },
    { midiNumber: 28, note: 'E1' },
    { midiNumber: 27, note: 'D#' },
    { midiNumber: 26, note: 'D1' },
    { midiNumber: 25, note: 'C#' },
    { midiNumber: 24, note: 'C1' },
    { midiNumber: 23, note: 'B0' },
    { midiNumber: 22, note: 'A#' },
    { midiNumber: 21, note: 'A0' },
    { midiNumber: 20, note: '' },
    { midiNumber: 19, note: '' },
    { midiNumber: 18, note: '' },
    { midiNumber: 17, note: '' },
    { midiNumber: 16, note: '' },
    { midiNumber: 15, note: '' },
    { midiNumber: 14, note: '' },
    { midiNumber: 13, note: '' },
    { midiNumber: 12, note: '' },
    { midiNumber: 11, note: '' },
    { midiNumber: 10, note: '' },
    { midiNumber: 9, note: '' },
    { midiNumber: 8, note: '' },
    { midiNumber: 7, note: '' },
    { midiNumber: 6, note: '' },
    { midiNumber: 5, note: '' },
    { midiNumber: 4, note: '' },
    { midiNumber: 3, note: '' },
    { midiNumber: 2, note: '' },
    { midiNumber: 1, note: '' },
    { midiNumber: 0, note: '' },
  ]

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
                    playNote={x => { playNote(x); onPlayNote(x); }}
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
      {/* <div>
        {previousNotes.join(' ')}
      </div> */}
      <div>
        {success ? <h2>DODEEDODODODOO</h2> : null}
      </div>
      <Confetti active={success} />
      <button onClick={() => { history.goBack() }}> BACK</button>
    </div>
  );
}




export default Home;
