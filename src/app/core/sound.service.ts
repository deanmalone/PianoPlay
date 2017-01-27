import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private context: AudioContext;
  private buffers: {} = {};

  constructor() {
  }

  initialize() {
    // load wav files for each piano key.
    console.log("initializing audio and loading sounds");
    try {
      // Hack to support AudioContext on iOS
      if (typeof AudioContext !== 'undefined') {
          this.context = new AudioContext();
      } else if (typeof (window as any).webkitAudioContext !== 'undefined') {
          this.context = new (window as any).webkitAudioContext();
      }
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

    if(this.buffers.hasOwnProperty(keyId)) {
        console.log("SoundService: playing key=" + keyId);
        let source = this.context.createBufferSource();
        source.buffer = this.buffers[keyId];
        source.connect(this.context.destination);
        source.start(0);
    }
    else {
        console.log("Audio not loaded for key=" + keyId);
    }
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
