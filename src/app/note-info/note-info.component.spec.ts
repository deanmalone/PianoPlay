/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteInfoComponent } from './note-info.component';
import { PianoNote } from '../core/piano-note';
import { PianoService } from '../core/piano.service';

describe('NoteInfoComponent', () => {
  let component: NoteInfoComponent;
  let fixture: ComponentFixture<NoteInfoComponent>;
  let pianoService: PianoService = new PianoService();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteInfoComponent ],
      providers:    [
        {provide: PianoService, useValue: pianoService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
