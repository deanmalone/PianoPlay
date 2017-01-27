import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { NotationService } from './notation.service';
import { PianoService } from '../core/piano.service';
import { PianoNote }  from '../core/piano-note';
import { PianoMode }  from '../core/piano-mode.enum';

declare var $: any;

@Component({
  selector: 'notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit, AfterViewChecked  {
  @Input() mode: PianoMode;
  subscription: Subscription;
  notationAsSVG: any;

  constructor(private pianoService: PianoService, private notationService: NotationService) {
    this.subscription = pianoService.notePlayed$.subscribe(note=>this.handleNotePlayed(note));
  }

  ngOnInit() {
    // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
    this.notationAsSVG = this.notationService.renderNotation();
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked');
    let self=this;
    $("g.note").off().on('click', function() { self.noteClicked(this.id); });
  }

  handleNotePlayed(note: PianoNote){
    if( this.mode==PianoMode.Play ) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    }
  }

  noteClicked(id:number) {
    //console.log('noteClicked: ' + id);
    this.pianoService.playNote(this.notationService.notes[id].noteId);
  }

  clear() {
    this.notationService.clear();
    this.notationAsSVG = this.notationService.renderNotation();
  }

  addNote(note:PianoNote) {
    this.notationService.addNote(note);
    this.notationAsSVG = this.notationService.renderNotation();
  }
}
