import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

    private context: AudioContext;
    private buffers: {} = {};

    constructor() {

      // load wav files for each piano key.
      try {
         this.context = new AudioContext();
         this.loadSounds();
      }
      catch(e) {
         alert("Web Audio API is not supported in this browser");
      }

    }

    playNote(keyId: number) : void {

      if (keyId < 16 || keyId > 64) {
        new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
      }

      console.log("SoundService: playing key=" + keyId);

      let source = this.context.createBufferSource();
      source.buffer = this.buffers[keyId];
      source.connect(this.context.destination);
      source.start(0);

    }


    private loadSounds() : void {

      // load the wav files for each piano key.
      for (let i=16;i<65;i++) {
         var soundPath = `./assets/sounds/${i}.wav`;
         this.loadBuffer(i.toString(), soundPath);
      }

    }


    private loadBuffer(name: string, path: string) : void {

         var request = new XMLHttpRequest();
         request.open("GET", path, true);
         request.responseType = "arraybuffer";

         let context = this.context;
         let buffers = this.buffers;

         request.onload = function() {
            context.decodeAudioData(
               request.response,
               function(buffer) {
                  if (!buffer) {
                     alert('error decoding file data: ' + path);
                     return;
                  }
                  buffers[name] = buffer;
               },
               function(error) {
                  console.error('decodeAudioData error', error);
               }
            );
         }

         request.onerror = function() {
            alert('BufferLoader: XHR error');
         }

         request.send();

    }

}
