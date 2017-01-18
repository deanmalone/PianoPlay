import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PianoNote }  from './piano-note';

interface IPianoKeyNoteMapping {
  keyId : number;
  notes : string[];
}

@Injectable()
export class PianoService {

  private pianoKeyNoteMap : IPianoKeyNoteMapping[];

  // Observable sources
  private pianoNotePlayedSource = new Subject<PianoNote>();

  // Observable streams
  notePlayed$ = this.pianoNotePlayedSource.asObservable();

  constructor() {

    this.pianoKeyNoteMap = [
      { keyId : 16, notes: [ "c2" ] },
      { keyId : 17, notes: [ "c2s", "d2f" ] },
      { keyId : 18, notes: [ "d2" ] },
      { keyId : 19, notes: [ "d2s", "e2f" ] },
      { keyId : 20, notes: [ "e2" ] },
      { keyId : 21, notes: [ "f2" ] },
      { keyId : 22, notes: [ "f2s", "g2f" ] },
      { keyId : 23, notes: [ "g2" ] },
      { keyId : 24, notes: [ "g2s", "a2f" ] },
      { keyId : 25, notes: [ "a2" ] },
      { keyId : 26, notes: [ "a2s", "b2f" ] },
      { keyId : 27, notes: [ "b2" ] },
      { keyId : 28, notes: [ "c3" ] },
      { keyId : 29, notes: [ "c3s", "d3f" ] },
      { keyId : 30, notes: [ "d3" ] },
      { keyId : 31, notes: [ "d3s", "e3f" ] },
      { keyId : 32, notes: [ "e3" ] },
      { keyId : 33, notes: [ "f3" ] },
      { keyId : 34, notes: [ "f3s", "g3f" ] },
      { keyId : 35, notes: [ "g3" ] },
      { keyId : 36, notes: [ "g3s", "a3f" ] },
      { keyId : 37, notes: [ "a3" ] },
      { keyId : 38, notes: [ "a3s", "b3f" ] },
      { keyId : 39, notes: [ "b3" ] },
      { keyId : 40, notes: [ "c4" ] },
      { keyId : 41, notes: [ "c4s", "d4f" ] },
      { keyId : 42, notes: [ "d4" ] },
      { keyId : 43, notes: [ "d4s", "e4f" ] },
      { keyId : 44, notes: [ "e4" ] },
      { keyId : 45, notes: [ "f4" ] },
      { keyId : 46, notes: [ "f4s", "g4f" ] },
      { keyId : 47, notes: [ "g4" ] },
      { keyId : 48, notes: [ "g4s", "a4f" ] },
      { keyId : 49, notes: [ "a4" ] },
      { keyId : 50, notes: [ "a4s", "b4f" ] },
      { keyId : 51, notes: [ "b4" ] },
      { keyId : 52, notes: [ "c5" ] },
      { keyId : 53, notes: [ "c5s", "d5f" ] },
      { keyId : 54, notes: [ "d5" ] },
      { keyId : 55, notes: [ "d5s", "e5f" ] },
      { keyId : 56, notes: [ "e5" ] },
      { keyId : 57, notes: [ "f5" ] },
      { keyId : 58, notes: [ "f5s", "g5f" ] },
      { keyId : 59, notes: [ "g5" ] },
      { keyId : 60, notes: [ "g5s", "a5f" ] },
      { keyId : 61, notes: [ "a5" ] },
      { keyId : 62, notes: [ "a5s", "b5f" ] },
      { keyId : 63, notes: [ "b5" ] },
      { keyId : 64, notes: [ "c6" ] }
    ];

  }

  private getNote(keyId : number, noteId?: string) : PianoNote {

    if (keyId < 16 || keyId > 64) {
      throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
    }

    // get the IPianoKeyNoteMapping for the specified keyId
    let notes = this.pianoKeyNoteMap[keyId-16].notes;

    // find the noteId if specified, otherwise use default note (first one).
    let note = notes.find( x => x == noteId);
    if (!note) {
      note = notes[0];
    }

    return new PianoNote(keyId, note);
  }

  playNote(keyId : number, noteId?: string) : void {

    let pianoNote = this.getNote(keyId, noteId);
    console.log(`playNote: sender=${pianoNote.sender}, keyId=${pianoNote.keyId}, noteId=${pianoNote.noteId}, fullname=${pianoNote.fullname}`);

    this.pianoNotePlayedSource.next(pianoNote);

  }

  getAlternateNote(keyId: number, noteId: string) : PianoNote {

    if (keyId < 16 || keyId > 64) {
      throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
    }

    let alternateNote: PianoNote;
    let notes = this.pianoKeyNoteMap[keyId-16].notes;

    if(notes.length > 1) {
      if(notes[0] == noteId) {
        alternateNote = new PianoNote(keyId, notes[1]);
      }
      else {
        alternateNote = new PianoNote(keyId, notes[0]);;
      }
    }

    return alternateNote;

  }

}
