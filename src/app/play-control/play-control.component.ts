import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { PianoMode } from '../core/piano-mode.enum';

@Component({
  selector: 'play-control',
  templateUrl: './play-control.component.html',
  styleUrls: ['./play-control.component.scss']
})
export class PlayControlComponent implements OnInit {
  PianoMode = PianoMode; // allows template access to PianoMode enum
  @Input() title!: string;
  @Input() mode!: PianoMode;
  @Output() modeSelected = new EventEmitter<PianoMode>()

  constructor() { }

  ngOnInit() {
  }

  handlePlayBtnClick(){
    this.modeSelected.emit(PianoMode.Play);
  }

  handleQuizBtnClick(){
    this.modeSelected.emit(PianoMode.Quiz);
  }
}
