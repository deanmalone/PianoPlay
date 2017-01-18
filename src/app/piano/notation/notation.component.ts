import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { PianoService } from '../piano.service';
import { NotationService } from './notation.service';
import { PianoNote }  from '../piano-note';

declare var $: any;

@Component({
  selector: 'notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit, AfterViewChecked  {

  subscription: Subscription;
  notationAsSVG: any;

  constructor(private pianoService: PianoService, private notationService: NotationService) {

    this.subscription = pianoService.notePlayed$.subscribe(
      pianoNote => {
        this.notationService.addNote(pianoNote);
        this.notationAsSVG = this.notationService.renderNotation();
    });

  }

  ngOnInit() {

    //console.log('ngOnInit');
    // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
    this.notationAsSVG = this.notationService.renderNotation();

  }

  ngAfterViewChecked() {

    //console.log('ngAfterViewChecked');
    let self=this;
    $("g.note").click(function() { self.noteClicked(this.id); });

  }

  noteClicked(id:number) {

    console.log('noteClicked: ' + id);
    this.pianoService.playNote(this.notationService.notes[id].keyId, this.notationService.notes[id].noteId);

  }

}
