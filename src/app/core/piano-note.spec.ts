/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';

import { PianoNote }  from './piano-note';

describe('PianoNote', () => {

  it('creates correctly with natural noteId', () => {
    let note = new PianoNote(40, "c4");
    expect(note).toBeTruthy();
    expect(note.keyId).toBe(40);
    expect(note.noteId).toBe("c4");
    expect(note.fullname).toBe("C");
    expect(note.name).toBe("c");
    expect(note.octave).toBe(4);
    expect(note.accidental).toBeFalsy();
  });

  it('creates correctly with accidental noteId', () => {
    let note = new PianoNote(41, "d4f");
    expect(note).toBeTruthy();
    expect(note.keyId).toBe(41);
    expect(note.noteId).toBe("d4f");
    expect(note.fullname).toBe("D\u266D"); //D♭
    expect(note.name).toBe("d");
    expect(note.octave).toBe(4);
    expect(note.accidental).toBe("f");
  });

  it('throws on invalid keyId', () => {
    // Note: You must wrap in anonymous function or lambda when expecting Error to be thrown
    expect( () => new PianoNote(251, "d4f") ).toThrow(new RangeError("Invalid keyId. The valid range of keyId is 16 to 64."));
  });

  it('throws on invalid noteId', () => {
    expect( () => new PianoNote(16, "") ).toThrow(new RangeError("noteId is invalid"));
  });

});
