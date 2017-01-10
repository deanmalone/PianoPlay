import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PianoComponent } from './piano.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotationComponent } from './notation/notation.component';
import { PlayModeComponent } from './play-mode/play-mode.component';
import { NoteInfoComponent } from './note-info/note-info.component';
import { PianoService } from './piano.service';
import { SoundService } from './sound.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [KeyboardComponent, NotationComponent, PlayModeComponent, NoteInfoComponent, PianoComponent],
  providers: [PianoService, SoundService],
  exports: [PianoComponent]
})
export class PianoModule { }
