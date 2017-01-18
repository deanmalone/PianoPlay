import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { PianoNote } from '../piano-note';
import { PianoService } from '../piano.service';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html',
  styleUrls: ['./note-info.component.css']
})
export class NoteInfoComponent implements OnInit {

  subscription: Subscription;
  currentNote: PianoNote;
  alternateNote?: PianoNote;

  constructor(private pianoService: PianoService) {

    this.subscription = pianoService.notePlayed$.subscribe(
      pianoNote => {
        this.currentNote = pianoNote;
        this.alternateNote = this.pianoService.getAlternateNote(pianoNote.keyId, pianoNote.noteId);
    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  playNote(note: PianoNote): void {
    //console.log(note);
    this.pianoService.playNote(note.keyId, note.noteId);
  }

}
