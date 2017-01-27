import { Injectable } from '@angular/core';

import { PianoNote }  from '../core/piano-note';

declare var verovio: any;

@Injectable()
export class NotationService {

  private maxNotes: number = 16;
  private vrvToolkit: any;
  private spacingNotesXml: string[] = [];

  notes : PianoNote[]

  constructor() {
    this.notes = [];
    this.vrvToolkit = new verovio.toolkit();

    // create hidden notes to ensure the staff is drawn full width. Notes are hidden via css.
    for(let i=0; i<this.maxNotes; i++){
      this.spacingNotesXml.push(`<note xml:id="rest-hidden-${i.toString()}" dur="4" oct="6" pname="c" stem.dir="up" />`);
    }
  }

  clear() : void {
    this.notes.length = 0;
  }

  addNote(note : PianoNote) : void {
    if(this.notes.length == this.maxNotes) {
      this.notes.length = 0;
    }
    this.notes.push(note);
  }

  renderNotation() : string {

    let trepleNotesXml: string[] = [];
    let bassNotesXml: string[] = [];

    for(let i=0; i<this.notes.length; i++) {
      let noteXml =`<note xml:id="${i}" dur="4" oct="${this.notes[i].octave}" pname="${this.notes[i].name}" ${this.notes[i].accidental ? 'accid="'+this.notes[i].accidental+'"': '' } />`;
      let restXml =`<rest xml:id="rest-${i}" dur="4" oct="${this.notes[i].octave}" pname="${this.notes[i].name}" ${this.notes[i].accidental ? 'accid="'+this.notes[i].accidental+'"': '' }/>`;

      if(this.notes[i].octave > 3){
         trepleNotesXml.push(noteXml);
         bassNotesXml.push(restXml);
      }
      else
      {
         trepleNotesXml.push(restXml);
         bassNotesXml.push(noteXml);
      }
    }

    let notationXML =
    `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
    <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://purl.oclc.org/dsdl/schematron"?>
    <mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="3.0.0">
      <music>
          <body>
                <mdiv>
                  <score>
                      <scoreDef>
                            <staffGrp symbol="brace" label="">
                              <staffDef clef.shape="G" clef.line="2" n="1" lines="5" />
                              <staffDef clef.shape="F" clef.line="4" n="2" lines="5" />
                            </staffGrp>
                      </scoreDef>
                      <section>
                            <measure>
                              <staff n="1">
                                  <layer n="1" xml:id="layer-treple">
                                        ${ trepleNotesXml.join("") }
                                  </layer>
                                  <layer xml:id="layer-spacing" n="2">
                                        ${ this.spacingNotesXml.join("") }
                                  </layer>
                              </staff>
                              <staff n="2">
                                  <layer xml:id="layer-bass" n="1">
                                        ${ bassNotesXml.join("") }
                                  </layer>
                              </staff>
                            </measure>
                      </section>
                  </score>
                </mdiv>
          </body>
      </music>
    </mei>`;

    let options = {
      // make these options in the notationservice
        pageWidth: 1000,
        border: 25,
        scale: 80,
        adjustPageHeight: 1
    };

    let renderedNotation = this.vrvToolkit.renderData(notationXML, options);
    return renderedNotation;
  }
}
