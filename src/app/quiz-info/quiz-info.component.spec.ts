/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizInfoComponent } from './quiz-info.component';
import { PianoNote } from '../core/piano-note';
import { PianoQuizService } from '../core/piano-quiz.service';

describe('QuizInfoComponent', () => {
  let component: QuizInfoComponent;
  let fixture: ComponentFixture<QuizInfoComponent>;
  let pianoQuizService: PianoQuizService = new PianoQuizService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInfoComponent ],
      providers:    [
        {provide: PianoQuizService, useValue: pianoQuizService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
