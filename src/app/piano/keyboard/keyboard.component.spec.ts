/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyboardComponent } from './keyboard.component';
import { PianoService } from '../piano.service';

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;
  let pianoService: PianoService = new PianoService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardComponent ],
      providers:    [
        {provide: PianoService, useValue: pianoService}
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
