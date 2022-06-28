import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription }   from 'rxjs';

import { NotationService } from './notation.service';
import { PianoService } from '../core/piano.service';
import { QuizService } from '../core/quiz.service';
import { PianoNote }  from '../core/piano-note';
import { PianoMode }  from '../core/piano-mode.enum';
import { QuizResult }  from '../core/quiz-result';

declare var $: any;

@Component({
  selector: 'notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit, AfterViewChecked  {
  @Input() mode!: PianoMode;
  subscription: Subscription;
  notationAsSVG: any;
  noteColor!: string[];

  constructor(private pianoService: PianoService, private notationService: NotationService, private quizService: QuizService) {
    this.subscription = pianoService.notePlayed$.subscribe((note: PianoNote)=>this.handleNotePlayed(note));
    quizService.quizResult$.subscribe((result: QuizResult)=>this.handleQuizResult(result));
  }

  ngOnInit() {
    // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
    this.notationAsSVG = this.notationService.renderNotation();
    this.noteColor = [];
  }

  ngAfterViewChecked() {
    let self=this;
    // $("g.note").off().on('click', () => {self.noteClicked(this.id); });

    for(let i=0;i<this.noteColor.length; i++)
    {
      if(this.noteColor[i]) {
        $("#"+i).attr("fill", this.noteColor[i])
      }
    }
  }

  handleNotePlayed(note: PianoNote){
    if( this.mode==PianoMode.Play ) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    }
  }

  handleQuizResult(result: QuizResult) {
    let color = "";
    if(result.selectedKeyId == result.actualNote.keyId){
      // Correct
      color = "#4CAF50"; // Green
    }
    else {
      // Incorrect
      color = "#f44336"; // Ref
    }
    this.noteColor.push(color);
  }

  noteClicked(id:number) {
    //console.log('noteClicked: ' + id);
    this.pianoService.playNote(this.notationService.notes[id].noteId);
  }

  clear() {
    this.noteColor.length = 0;
    this.notationService.clear();
    this.notationAsSVG = this.notationService.renderNotation();
  }

  addNote(note:PianoNote) {
    this.notationService.addNote(note);
    this.notationAsSVG = this.notationService.renderNotation();
  }
}
