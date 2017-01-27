import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { PianoNote } from '../core/piano-note';
import { PianoQuizService } from '../core/piano-quiz.service';
import { QuizStatus } from '../core/quiz-status.enum';

@Component({
  selector: 'quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent implements OnInit {
  QuizStatus = QuizStatus; // allows template access to QuizStatus enum
  @Input() score: number;
  @Input() total: number;
  @Input() status: QuizStatus;
  @Input() description: string;
  @Output() buttonClicked = new EventEmitter();
  subscription: Subscription;
  message: string;

  constructor(private pianoQuizService: PianoQuizService) {
    this.subscription = pianoQuizService.quizResult$.subscribe(
      result => {
        if(result.selectedKeyId == result.actualNote.keyId){
          this.message = "\u2714 Correct, well done!";
        }
        else {
          this.message = "\u2718 Incorrect";
        }
    });
  }

  ngOnInit() {
     this.message = "Press the correct piano key";
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  handleStartBtnClick(value: string) {
     this.buttonClicked.emit( {button:'start', level:value} );
  }

  handleTryAgainBtnClick() {
     this.buttonClicked.emit( {button:'try-again'} );
     this.message = "Press the correct piano key";
  }

}
