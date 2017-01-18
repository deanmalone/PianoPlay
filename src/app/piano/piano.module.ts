import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PianoComponent } from './piano.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotationComponent } from './notation/notation.component';
import { PlayControlComponent } from './play-control/play-control.component';
import { NoteInfoComponent } from './note-info/note-info.component';
import { PianoService } from './piano.service';
import { SoundService } from './sound.service';
import { NotationService } from './notation/notation.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [KeyboardComponent, NotationComponent, PlayControlComponent, NoteInfoComponent, PianoComponent],
  providers: [
    PianoService,
    SoundService,
    NotationService],
  exports: [PianoComponent]
})
export class PianoModule { }
