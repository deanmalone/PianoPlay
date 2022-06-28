import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoService } from './core/piano.service';
import { QuizService } from './core/quiz.service';
import { SoundService } from './core/sound.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotationComponent } from './notation/notation.component';
import { NotationService } from './notation/notation.service';
import { NoteInfoComponent } from './note-info/note-info.component';
import { PlayControlComponent } from './play-control/play-control.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
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
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    PianoService,
    SoundService,
    NotationService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
