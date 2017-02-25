/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyboardComponent } from './keyboard.component';
import { PianoService } from '../core/piano.service';
import { QuizService } from '../core/quiz.service';

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;
  let pianoService: PianoService = new PianoService();
  let quizService: QuizService = new QuizService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardComponent ],
      providers:    [
        {provide: PianoService, useValue: pianoService},
        {provide: QuizService, useValue: quizService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
