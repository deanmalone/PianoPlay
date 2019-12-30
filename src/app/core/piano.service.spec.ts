/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
//import { tick, fakeAsync } from '@angular/core/testing/fake_async';

import { PianoService } from './piano.service';
import { PianoNote }  from './piano-note';

describe('PianoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoService]
    });
  });

  it('should create', inject([PianoService], (service: PianoService) => {
    expect(service).toBeTruthy();
  }));
/*
  it('playNoteByKeyId should play specified key', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    // expect a PianoNote to be published on the notePlayed stream
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNoteByKeyId(16);
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(16);
    expect(expectedNote.noteId).toBe("c2");
    expect(expectedNote.fullname).toBe("C");
    expect(expectedNote.octave).toBe(2);
    expect(expectedNote.accidental).toBeUndefined();
  })));

  it('playNoteByKeyId should play (default) accidental note', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNoteByKeyId(41);
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("c4s");
    expect(expectedNote.fullname).toBe("C\u266F"); //C♯
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("s");
  })));
*/
   it('playNoteByKeyId throws on invalid keyId', inject([PianoService], (service: PianoService)  => {
    // Note: You must wrap in anonymous function or lambda when expecting Error to be thrown
    expect( () => service.playNoteByKeyId(100)).toThrow(new Error("Invalid keyId. The valid range of keyId is 16 to 64."));
  }));

  /*
  it('playNote should play specified noteId', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNote("d4f");
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("d4f");
    expect(expectedNote.fullname).toBe("D\u266D"); //D♭
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("f");
  })));
*/
  it('playNote throws on invalid noteId', inject([PianoService], (service: PianoService)  => {
    // Note: You must wrap in anonymous function or lambda when expecting Error to be thrown
    expect( () => service.playNote('z2f')).toThrow(new Error("Invalid noteId."));
  }));

  it('getAlternateNote should return flat note for specified sharp note', inject([PianoService], (service: PianoService)  => {
    let expectedNote = service.getAlternateNote("c4s");
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("d4f");
    expect(expectedNote.fullname).toBe("D\u266D"); //D♭
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("f");
  }));

  it('getAlternateNote should return sharp note for specified flat note', inject([PianoService], (service: PianoService)  => {
    let actualNote = service.getAlternateNote("d4f");
    expect(actualNote).toBeTruthy();
    expect(actualNote.keyId).toBe(41);
    expect(actualNote.noteId).toBe("c4s");
    expect(actualNote.fullname).toBe("C\u266F"); //C♯
    expect(actualNote.octave).toBe(4);
    expect(actualNote.accidental).toBe("s");
  }));

  it('getAlternateNote should return undefined for natural note', inject([PianoService], (service: PianoService)  => {
    let expectedNote = service.getAlternateNote("c4");
    expect(expectedNote).toBeFalsy();
  }));

  it('getAllNoteIds should return all noteIds', inject([PianoService], (service: PianoService)  => {
    let actualNotesId = service.getAllNoteIds();
    let expectedNotesId = ["c2", "c2s", "d2f", "d2", "d2s", "e2f", "e2", "f2", "f2s", "g2f", "g2", "g2s", "a2f", "a2", "a2s", "b2f", "b2", "c3", "c3s", "d3f", "d3", "d3s", "e3f", "e3", "f3", "f3s", "g3f", "g3", "g3s", "a3f", "a3", "a3s", "b3f", "b3", "c4", "c4s", "d4f", "d4", "d4s", "e4f", "e4", "f4", "f4s", "g4f", "g4", "g4s", "a4f", "a4", "a4s", "b4f", "b4", "c5", "c5s", "d5f", "d5", "d5s", "e5f", "e5", "f5", "f5s", "g5f", "g5", "g5s", "a5f", "a5", "a5s", "b5f", "b5", "c6"];
    expect(actualNotesId).toBeTruthy();
    expect(actualNotesId.length).toBe(69);
    expect(actualNotesId).toEqual(expectedNotesId);
  }));

  it('getAllNaturalNoteIds should return all natural noteIds', inject([PianoService], (service: PianoService)  => {
    let actualNotesId = service.getAllNaturalNoteIds();
    let expectedNotesId = ["c2", "d2", "e2", "f2", "g2", "a2", "b2", "c3", "d3", "e3", "f3", "g3", "a3", "b3", "c4", "d4", "e4", "f4", "g4", "a4", "b4", "c5", "d5", "e5", "f5", "g5", "a5", "b5", "c6"];
    expect(actualNotesId).toBeTruthy();
    expect(actualNotesId.length).toBe(29);
    expect(actualNotesId).toEqual(expectedNotesId);
  }));

  it('getAllNaturalNoteIds(3,4) should return middle 2 octaves of natural noteIds', inject([PianoService], (service: PianoService)  => {
    let actualNotesId = service.getAllNaturalNoteIds(3,4);
    let expectedNotesId = ["c3", "d3", "e3", "f3", "g3", "a3", "b3", "c4", "d4", "e4", "f4", "g4", "a4", "b4"];
    expect(actualNotesId).toBeTruthy();
    expect(actualNotesId.length).toBe(14);
    expect(actualNotesId).toEqual(expectedNotesId);
  }));

});
