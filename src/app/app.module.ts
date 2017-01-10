import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SafePipe } from './shared/safe.pipe';
import { PianoModule } from './piano/piano.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PianoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
