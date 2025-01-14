import React, { useEffect } from 'react';
import * as Tone from 'tone';

const Piano: React.FC = () => {
  const playNote = (note: string) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n'); // '8n' is an eighth note duration
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case '1':
        playNote('C4'); // Do
        break;
      case '2':
        playNote('D4'); // Re
        break;
      case '3':
        playNote('E4'); // Mi
        break;
      case '4':
        playNote('F4'); // Fa
        break;
      case '5':
        playNote('G4'); // Sol
        break;
      case '6':
        playNote('A4'); // La
        break;
      case '7':
        playNote('B4'); // Si
        break;
      case '8':
        playNote('C5'); // Do (higher octave)
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default Piano;
