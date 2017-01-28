import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotationComponent } from './notation/notation.component';
import { PlayControlComponent } from './play-control/play-control.component';
import { NoteInfoComponent } from './note-info/note-info.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { PianoService } from './core/piano.service';
import { QuizService } from './core/quiz.service';
import { SoundService } from './core/sound.service';
import { NotationService } from './notation/notation.service';
import { SafePipe } from './shared/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    NotationComponent,
    PlayControlComponent,
    NoteInfoComponent,
    QuizInfoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    PianoService,
    SoundService,
    NotationService,
    QuizService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
