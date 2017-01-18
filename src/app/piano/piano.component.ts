import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { PianoService } from './piano.service';
import { SoundService } from './sound.service';

@Component({
  selector: 'piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  subscription: Subscription;

  constructor(private pianoService: PianoService, private soundService: SoundService) {

        this.subscription = pianoService.notePlayed$.subscribe(
          pianoNote => {
            soundService.playNote(pianoNote.keyId);
        });

  }

  ngOnInit() {
  }

}
