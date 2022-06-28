import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PianoNote }  from './piano-note';


@Injectable()
export class PianoService {

  private pianoKeyMap:{ [key: string] : Array<string>; } = {};
  private pianoNoteMap:{ [key: string] : string; } = {};

  // Observable sources
  private pianoNotePlayedSource = new Subject<PianoNote>();

  // Observable streams
  notePlayed$ = this.pianoNotePlayedSource.asObservable();

  constructor() {

    this.pianoKeyMap = {
      16: [ "c2" ],
      17: [ "c2s", "d2f" ],
      18: [ "d2" ],
      19: [ "d2s", "e2f" ],
      20: [ "e2" ],
      21: [ "f2" ],
      22: [ "f2s", "g2f" ],
      23: [ "g2" ],
      24: [ "g2s", "a2f" ],
      25: [ "a2" ],
      26: [ "a2s", "b2f" ],
      27: [ "b2" ],
      28: [ "c3" ],
      29: [ "c3s", "d3f" ],
      30: [ "d3" ],
      31: [ "d3s", "e3f" ],
      32: [ "e3" ],
      33: [ "f3" ],
      34: [ "f3s", "g3f" ],
      35: [ "g3" ],
      36: [ "g3s", "a3f" ],
      37: [ "a3" ],
      38: [ "a3s", "b3f" ],
      39: [ "b3" ],
      40: [ "c4" ],
      41: [ "c4s", "d4f" ],
      42: [ "d4" ],
      43: [ "d4s", "e4f" ],
      44: [ "e4" ],
      45: [ "f4" ],
      46: [ "f4s", "g4f" ],
      47: [ "g4" ],
      48: [ "g4s", "a4f" ],
      49: [ "a4" ],
      50: [ "a4s", "b4f" ],
      51: [ "b4" ],
      52: [ "c5" ],
      53: [ "c5s", "d5f" ],
      54: [ "d5" ],
      55: [ "d5s", "e5f" ],
      56: [ "e5" ],
      57: [ "f5" ],
      58: [ "f5s", "g5f" ],
      59: [ "g5" ],
      60: [ "g5s", "a5f" ],
      61: [ "a5" ],
      62: [ "a5s", "b5f" ],
      63: [ "b5" ],
      64: [ "c6" ]
    };

    // create pianoNoteMap, mapping noteIds to keyIds.
    Object.keys(this.pianoKeyMap).forEach(
      (keyId:string) => this.pianoKeyMap[keyId].forEach(
        (note: string) => this.pianoNoteMap[note] = keyId)
      );
  }

  getNote(noteId : string) : PianoNote {
    if(this.pianoNoteMap.hasOwnProperty(noteId)) {
      let keyId = parseInt(this.pianoNoteMap[noteId]);
      return new PianoNote(keyId, noteId);
    }
    else{
      throw new Error("Invalid noteId.");
    }
  }

  getNoteByKeyId(keyId: number) : PianoNote {
    if(this.pianoKeyMap.hasOwnProperty(keyId)) {
      let noteId = this.pianoKeyMap[keyId][0]; // default to first note for keyId
      return new PianoNote(keyId, noteId);
    }
    else{
      throw new Error("Invalid keyId. The valid range of keyId is 16 to 64.");
    }
  }

  playNote(noteId: string) : void {
    let note = this.getNote(noteId);
    this.pianoNotePlayedSource.next(note);
  }

  playNoteByKeyId(keyId: number) : void {
    let note = this.getNoteByKeyId(keyId);
    this.pianoNotePlayedSource.next(note);
  }

  getAlternateNote(noteId: string) : PianoNote {

    if(!this.pianoNoteMap.hasOwnProperty(noteId)) {
      throw new Error("Invalid noteId");
    }

    let alternateNote!: PianoNote;
    let keyId = parseInt(this.pianoNoteMap[noteId]);
    let notes = this.pianoKeyMap[keyId];

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

  getAllNoteIds() : string[] {
    return Object.keys(this.pianoNoteMap);
  }

  getAllNaturalNoteIds(lowerOctave:number = 2, upperOctave = 6) : string[] {
    let naturalNotes : string[] = [];

    Object.keys(this.pianoNoteMap).forEach( note => {
      if(note.length == 2) {
        let n = parseInt( note[1] );
        if(n >= lowerOctave && n <= upperOctave) {
        naturalNotes.push(note);
        }
      }
    })

    return naturalNotes;
  }

}
