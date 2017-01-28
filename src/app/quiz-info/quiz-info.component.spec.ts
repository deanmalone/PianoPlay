/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizInfoComponent } from './quiz-info.component';
import { PianoNote } from '../core/piano-note';
import { QuizService } from '../core/quiz.service';

describe('QuizInfoComponent', () => {
  let component: QuizInfoComponent;
  let fixture: ComponentFixture<QuizInfoComponent>;
  let quizService: QuizService = new QuizService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInfoComponent ],
      providers:    [
        {provide: QuizService, useValue: quizService}
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
