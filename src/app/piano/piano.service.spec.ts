/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { tick, fakeAsync } from '@angular/core/testing/fake_async';

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

  it('playNote should play specified key', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    // expect a PianoNote to be published on the notePlayed stream
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNote(16);
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(16);
    expect(expectedNote.noteId).toBe("c2");
    expect(expectedNote.fullname).toBe("C");
    expect(expectedNote.octave).toBe(2);
    expect(expectedNote.accidental).toBeUndefined();
  })));

  it('playNote should play (default) accidental note', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNote(41);
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("c4s");
    expect(expectedNote.fullname).toBe("C\u266F"); //C♯
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("s")
  })));

  it('playNote should play specified accidental note', inject([PianoService], fakeAsync((service: PianoService) => {
    let expectedNote : PianoNote;
    service.notePlayed$.subscribe((note) => {
      expectedNote = note;
    });
    service.playNote(41, "d4f");
    tick();
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("d4f");
    expect(expectedNote.fullname).toBe("D\u266D"); //D♭
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("f")
  })));

  it('playNote throws on invalid keyId', inject([PianoService], (service: PianoService)  => {
    // Note: You must wrap in anonymous function or lambda when expecting Error to be thrown
    expect( () => service.playNote(100)).toThrow(new RangeError("Invalid keyId. The valid range of keyId is 16 to 64."));
  }));

  it('getAlternateNote should return flat note for specified sharp note', inject([PianoService], (service: PianoService)  => {
    let expectedNote = service.getAlternateNote(41, "c4s");
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("d4f");
    expect(expectedNote.fullname).toBe("D\u266D"); //D♭
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("f")
  }));

  it('getAlternateNote should return sharp note for specified flat note', inject([PianoService], (service: PianoService)  => {
    let expectedNote = service.getAlternateNote(41, "d4f");
    expect(expectedNote).toBeTruthy();
    expect(expectedNote.keyId).toBe(41);
    expect(expectedNote.noteId).toBe("c4s");
    expect(expectedNote.fullname).toBe("C\u266F"); //C♯
    expect(expectedNote.octave).toBe(4);
    expect(expectedNote.accidental).toBe("s")
  }));

  it('getAlternateNote should return undefined for natural note', inject([PianoService], (service: PianoService)  => {
    let expectedNote = service.getAlternateNote(40, "c4");
    expect(expectedNote).toBeFalsy();
  }));

});
