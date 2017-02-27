webpackJsonp([0,4],{

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__piano_note__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PianoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PianoService = (function () {
    function PianoService() {
        var _this = this;
        this.pianoKeyMap = {};
        this.pianoNoteMap = {};
        // Observable sources
        this.pianoNotePlayedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable streams
        this.notePlayed$ = this.pianoNotePlayedSource.asObservable();
        this.pianoKeyMap = {
            16: ["c2"],
            17: ["c2s", "d2f"],
            18: ["d2"],
            19: ["d2s", "e2f"],
            20: ["e2"],
            21: ["f2"],
            22: ["f2s", "g2f"],
            23: ["g2"],
            24: ["g2s", "a2f"],
            25: ["a2"],
            26: ["a2s", "b2f"],
            27: ["b2"],
            28: ["c3"],
            29: ["c3s", "d3f"],
            30: ["d3"],
            31: ["d3s", "e3f"],
            32: ["e3"],
            33: ["f3"],
            34: ["f3s", "g3f"],
            35: ["g3"],
            36: ["g3s", "a3f"],
            37: ["a3"],
            38: ["a3s", "b3f"],
            39: ["b3"],
            40: ["c4"],
            41: ["c4s", "d4f"],
            42: ["d4"],
            43: ["d4s", "e4f"],
            44: ["e4"],
            45: ["f4"],
            46: ["f4s", "g4f"],
            47: ["g4"],
            48: ["g4s", "a4f"],
            49: ["a4"],
            50: ["a4s", "b4f"],
            51: ["b4"],
            52: ["c5"],
            53: ["c5s", "d5f"],
            54: ["d5"],
            55: ["d5s", "e5f"],
            56: ["e5"],
            57: ["f5"],
            58: ["f5s", "g5f"],
            59: ["g5"],
            60: ["g5s", "a5f"],
            61: ["a5"],
            62: ["a5s", "b5f"],
            63: ["b5"],
            64: ["c6"]
        };
        // create pianoNoteMap, mapping noteIds to keyIds.
        Object.keys(this.pianoKeyMap).forEach(function (keyId) { return _this.pianoKeyMap[keyId].forEach(function (note) { return _this.pianoNoteMap[note] = keyId; }); });
    }
    PianoService.prototype.getNote = function (noteId) {
        if (this.pianoNoteMap.hasOwnProperty(noteId)) {
            var keyId = parseInt(this.pianoNoteMap[noteId]);
            return new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, noteId);
        }
        else {
            throw new Error("Invalid noteId.");
        }
    };
    PianoService.prototype.getNoteByKeyId = function (keyId) {
        if (this.pianoKeyMap.hasOwnProperty(keyId)) {
            var noteId = this.pianoKeyMap[keyId][0]; // default to first note for keyId
            return new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, noteId);
        }
        else {
            throw new Error("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
    };
    PianoService.prototype.playNote = function (noteId) {
        var note = this.getNote(noteId);
        this.pianoNotePlayedSource.next(note);
    };
    PianoService.prototype.playNoteByKeyId = function (keyId) {
        var note = this.getNoteByKeyId(keyId);
        this.pianoNotePlayedSource.next(note);
    };
    PianoService.prototype.getAlternateNote = function (noteId) {
        if (!this.pianoNoteMap.hasOwnProperty(noteId)) {
            throw new Error("Invalid noteId");
        }
        var alternateNote;
        var keyId = parseInt(this.pianoNoteMap[noteId]);
        var notes = this.pianoKeyMap[keyId];
        if (notes.length > 1) {
            if (notes[0] == noteId) {
                alternateNote = new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, notes[1]);
            }
            else {
                alternateNote = new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, notes[0]);
                ;
            }
        }
        return alternateNote;
    };
    PianoService.prototype.getAllNoteIds = function () {
        return Object.keys(this.pianoNoteMap);
    };
    PianoService.prototype.getAllNaturalNoteIds = function (lowerOctave, upperOctave) {
        if (lowerOctave === void 0) { lowerOctave = 2; }
        if (upperOctave === void 0) { upperOctave = 6; }
        var naturalNotes = [];
        Object.keys(this.pianoNoteMap).forEach(function (note) {
            if (note.length == 2) {
                var n = parseInt(note[1]);
                if (n >= lowerOctave && n <= upperOctave) {
                    naturalNotes.push(note);
                }
            }
        });
        return naturalNotes;
    };
    PianoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PianoService);
    return PianoService;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano.service.js.map

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PianoMode; });
var PianoMode;
(function (PianoMode) {
    PianoMode[PianoMode["Play"] = 0] = "Play";
    PianoMode[PianoMode["Quiz"] = 1] = "Quiz";
})(PianoMode || (PianoMode = {}));
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano-mode.enum.js.map

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuizStatus; });
var QuizStatus;
(function (QuizStatus) {
    QuizStatus[QuizStatus["Starting"] = 0] = "Starting";
    QuizStatus[QuizStatus["InProgress"] = 1] = "InProgress";
    QuizStatus[QuizStatus["Finished"] = 2] = "Finished";
    QuizStatus[QuizStatus["None"] = 3] = "None";
})(QuizStatus || (QuizStatus = {}));
//# sourceMappingURL=C:/Projects/PianoPlay/src/quiz-status.enum.js.map

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoundService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundService = (function () {
    function SoundService() {
        this.buffers = {};
    }
    SoundService.prototype.initialize = function () {
        // load wav files for each piano key.
        console.log("initializing audio and loading sounds");
        try {
            // Hack to support AudioContext on iOS
            if (typeof AudioContext !== 'undefined') {
                this.context = new AudioContext();
            }
            else if (typeof window.webkitAudioContext !== 'undefined') {
                this.context = new window.webkitAudioContext();
            }
            this.loadSounds();
        }
        catch (e) {
            alert("Web Audio API is not supported in this browser");
        }
    };
    SoundService.prototype.playNote = function (keyId) {
        if (keyId < 16 || keyId > 64) {
            new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        if (this.buffers.hasOwnProperty(keyId)) {
            console.log("SoundService: playing key=" + keyId);
            var source = this.context.createBufferSource();
            source.buffer = this.buffers[keyId];
            source.connect(this.context.destination);
            source.start(0);
        }
        else {
            console.log("Audio not loaded for key=" + keyId);
        }
    };
    SoundService.prototype.loadSounds = function () {
        // load the wav files for each piano key.
        for (var i = 16; i < 65; i++) {
            var soundPath = "./assets/sounds/" + i + ".wav";
            this.loadBuffer(i.toString(), soundPath);
        }
    };
    SoundService.prototype.loadBuffer = function (name, path) {
        var request = new XMLHttpRequest();
        request.open("GET", path, true);
        request.responseType = "arraybuffer";
        var context = this.context;
        var buffers = this.buffers;
        request.onload = function () {
            context.decodeAudioData(request.response, function (buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + path);
                    return;
                }
                buffers[name] = buffer;
            }, function (error) {
                console.error('decodeAudioData error', error);
            });
        };
        request.onerror = function () {
            alert('BufferLoader: XHR error');
        };
        request.send();
    };
    SoundService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SoundService);
    return SoundService;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/sound.service.js.map

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notation_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_piano_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotationComponent = (function () {
    function NotationComponent(pianoService, notationService, quizService) {
        var _this = this;
        this.pianoService = pianoService;
        this.notationService = notationService;
        this.quizService = quizService;
        this.subscription = pianoService.notePlayed$.subscribe(function (note) { return _this.handleNotePlayed(note); });
        quizService.quizResult$.subscribe(function (result) { return _this.handleQuizResult(result); });
    }
    NotationComponent.prototype.ngOnInit = function () {
        // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
        this.notationAsSVG = this.notationService.renderNotation();
        this.noteColor = [];
    };
    NotationComponent.prototype.ngAfterViewChecked = function () {
        var self = this;
        $("g.note").off().on('click', function () { self.noteClicked(this.id); });
        for (var i = 0; i < this.noteColor.length; i++) {
            if (this.noteColor[i]) {
                $("#" + i).attr("fill", this.noteColor[i]);
            }
        }
    };
    NotationComponent.prototype.handleNotePlayed = function (note) {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */].Play) {
            this.notationService.addNote(note);
            this.notationAsSVG = this.notationService.renderNotation();
        }
    };
    NotationComponent.prototype.handleQuizResult = function (result) {
        var color = "";
        if (result.selectedKeyId == result.actualNote.keyId) {
            // Correct
            color = "#4CAF50"; // Green
        }
        else {
            // Incorrect
            color = "#f44336"; // Ref
        }
        this.noteColor.push(color);
    };
    NotationComponent.prototype.noteClicked = function (id) {
        //console.log('noteClicked: ' + id);
        this.pianoService.playNote(this.notationService.notes[id].noteId);
    };
    NotationComponent.prototype.clear = function () {
        this.noteColor.length = 0;
        this.notationService.clear();
        this.notationAsSVG = this.notationService.renderNotation();
    };
    NotationComponent.prototype.addNote = function (note) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */]) === 'function' && _a) || Object)
    ], NotationComponent.prototype, "mode", void 0);
    NotationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'notation',
            template: __webpack_require__(628),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__notation_service__["a" /* NotationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notation_service__["a" /* NotationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__["a" /* QuizService */]) === 'function' && _d) || Object])
    ], NotationComponent);
    return NotationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/notation.component.js.map

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotationService = (function () {
    function NotationService() {
        this.maxNotes = 16;
        this.spacingNotesXml = [];
        this.notes = [];
        this.vrvToolkit = new verovio.toolkit();
        // create hidden notes to ensure the staff is drawn full width. Notes are hidden via css.
        for (var i = 0; i < this.maxNotes; i++) {
            this.spacingNotesXml.push("<note xml:id=\"rest-hidden-" + i.toString() + "\" dur=\"4\" oct=\"6\" pname=\"c\" stem.dir=\"up\" />");
        }
    }
    NotationService.prototype.clear = function () {
        this.notes.length = 0;
    };
    NotationService.prototype.addNote = function (note) {
        if (this.notes.length == this.maxNotes) {
            this.notes.length = 0;
        }
        this.notes.push(note);
    };
    NotationService.prototype.renderNotation = function () {
        var trepleNotesXml = [];
        var bassNotesXml = [];
        for (var i = 0; i < this.notes.length; i++) {
            var noteXml = "<note xml:id=\"" + i + "\" dur=\"4\" oct=\"" + this.notes[i].octave + "\" pname=\"" + this.notes[i].name + "\" " + (this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : '') + " />";
            var restXml = "<rest xml:id=\"rest-" + i + "\" dur=\"4\" oct=\"" + this.notes[i].octave + "\" pname=\"" + this.notes[i].name + "\" " + (this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : '') + "/>";
            if (this.notes[i].octave > 3) {
                trepleNotesXml.push(noteXml);
                bassNotesXml.push(restXml);
            }
            else {
                trepleNotesXml.push(restXml);
                bassNotesXml.push(noteXml);
            }
        }
        var notationXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <?xml-model href=\"http://music-encoding.org/schema/3.0.0/mei-all.rng\" type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>\n    <?xml-model href=\"http://music-encoding.org/schema/3.0.0/mei-all.rng\" type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>\n    <mei xmlns=\"http://www.music-encoding.org/ns/mei\" meiversion=\"3.0.0\">\n      <music>\n          <body>\n                <mdiv>\n                  <score>\n                      <scoreDef>\n                            <staffGrp symbol=\"brace\" label=\"\">\n                              <staffDef clef.shape=\"G\" clef.line=\"2\" n=\"1\" lines=\"5\" />\n                              <staffDef clef.shape=\"F\" clef.line=\"4\" n=\"2\" lines=\"5\" />\n                            </staffGrp>\n                      </scoreDef>\n                      <section>\n                            <measure>\n                              <staff n=\"1\">\n                                  <layer n=\"1\" xml:id=\"layer-treple\">\n                                        " + trepleNotesXml.join("") + "\n                                  </layer>\n                                  <layer xml:id=\"layer-spacing\" n=\"2\">\n                                        " + this.spacingNotesXml.join("") + "\n                                  </layer>\n                              </staff>\n                              <staff n=\"2\">\n                                  <layer xml:id=\"layer-bass\" n=\"1\">\n                                        " + bassNotesXml.join("") + "\n                                  </layer>\n                              </staff>\n                            </measure>\n                      </section>\n                  </score>\n                </mdiv>\n          </body>\n      </music>\n    </mei>";
        var options = {
            // make these options in the notationservice
            pageWidth: 1000,
            border: 25,
            scale: 80,
            adjustPageHeight: 1
        };
        var renderedNotation = this.vrvToolkit.renderData(notationXML, options);
        return renderedNotation;
    };
    NotationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NotationService);
    return NotationService;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/notation.service.js.map

/***/ },

/***/ 345:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(457);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Projects/PianoPlay/src/main.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notation_notation_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_piano_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_sound_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_quiz_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_piano_mode_enum__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_quiz_status_enum__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(pianoService, soundService, quizService) {
        var _this = this;
        this.pianoService = pianoService;
        this.soundService = soundService;
        this.quizService = quizService;
        this.PianoMode = __WEBPACK_IMPORTED_MODULE_5__core_piano_mode_enum__["a" /* PianoMode */]; // allows template access to PianoMode enum
        this.title = 'Piano Play';
        this.mode = __WEBPACK_IMPORTED_MODULE_5__core_piano_mode_enum__["a" /* PianoMode */].Play;
        this.quizCorrect = 0;
        this.quizIncorrect = 0;
        this.quizLength = 16;
        this.quizStatus = __WEBPACK_IMPORTED_MODULE_6__core_quiz_status_enum__["a" /* QuizStatus */].None;
        this.resultDescription = "";
        this.delayMs = 1000;
        this.subscription = pianoService.notePlayed$.subscribe(function (note) { return _this.handleNotePlayed(note); });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.soundService.initialize();
    };
    AppComponent.prototype.handleModeSelected = function (selectedMode) {
        if (this.mode == selectedMode)
            return;
        // Mode has been changed
        this.mode = selectedMode;
        if (this.mode == __WEBPACK_IMPORTED_MODULE_5__core_piano_mode_enum__["a" /* PianoMode */].Quiz) {
            this.newQuiz();
        }
        else {
            // Clear all notes from the notation component
            this.notation.clear();
        }
    };
    AppComponent.prototype.handleKeyPlayed = function (keyId) {
        var _this = this;
        if (this.mode == __WEBPACK_IMPORTED_MODULE_5__core_piano_mode_enum__["a" /* PianoMode */].Play) {
            this.pianoService.playNoteByKeyId(keyId);
        }
        else {
            // We are in Quiz mode, so just play the note sound
            this.soundService.playNote(keyId);
            // Update the quiz in progress
            if (this.quizService.inProgress) {
                this.quizService.recordResult(keyId, this.currentTestNote);
                this.quizCorrect = this.quizService.correct;
                this.quizIncorrect = this.quizService.incorrect;
                if (this.quizService.next()) {
                    this.currentTestNote = this.pianoService.getNote(this.quizService.getCurrentNoteId());
                    this.notation.addNote(this.currentTestNote);
                }
                else {
                    setTimeout(function () { return _this.finishQuiz(); }, this.delayMs);
                }
            }
        }
    };
    AppComponent.prototype.handleNotePlayed = function (note) {
        this.soundService.playNote(note.keyId);
    };
    AppComponent.prototype.handleButtonClicked = function (data) {
        if (data.button == 'start') {
            this.startQuiz(data.level);
        }
        else if (data.button = 'try-again') {
            this.newQuiz();
        }
    };
    AppComponent.prototype.newQuiz = function () {
        this.notation.clear();
        this.quizStatus = __WEBPACK_IMPORTED_MODULE_6__core_quiz_status_enum__["a" /* QuizStatus */].Starting;
    };
    AppComponent.prototype.startQuiz = function (level) {
        var notes = [];
        if (level == 'easy') {
            notes = this.pianoService.getAllNaturalNoteIds(3, 4); // middle 2 octaves only!
        }
        else if (level == 'medium') {
            notes = this.pianoService.getAllNaturalNoteIds();
        }
        else {
            // hard level
            notes = this.pianoService.getAllNoteIds();
        }
        this.quizService.startQuiz(this.quizLength, notes);
        this.quizStatus = __WEBPACK_IMPORTED_MODULE_6__core_quiz_status_enum__["a" /* QuizStatus */].InProgress;
        this.quizCorrect = this.quizService.correct;
        this.quizIncorrect = this.quizService.incorrect;
        this.currentTestNote = this.pianoService.getNote(this.quizService.getCurrentNoteId());
        this.notation.addNote(this.currentTestNote);
    };
    AppComponent.prototype.finishQuiz = function () {
        if (this.quizCorrect == this.quizLength) {
            this.resultDescription = "Perfect score, awesome!";
        }
        else if (this.quizCorrect > (this.quizLength * 0.8)) {
            this.resultDescription = "Great score, well done!";
        }
        else if (this.quizCorrect > (this.quizLength * 0.6)) {
            this.resultDescription = "Good score!";
        }
        else if (this.quizCorrect > (this.quizLength * 0.4)) {
            this.resultDescription = "Not bad, keep trying.";
        }
        else {
            this.resultDescription = "Looks like you need more practice.";
        }
        this.quizStatus = __WEBPACK_IMPORTED_MODULE_6__core_quiz_status_enum__["a" /* QuizStatus */].Finished;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__notation_notation_component__["a" /* NotationComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notation_notation_component__["a" /* NotationComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notation_notation_component__["a" /* NotationComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "notation", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(626),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_sound_service__["a" /* SoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_sound_service__["a" /* SoundService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__core_quiz_service__["a" /* QuizService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/app.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notation_notation_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__play_control_play_control_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_info_note_info_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quiz_info_quiz_info_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_piano_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_quiz_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_sound_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notation_notation_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_safe_pipe__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__["a" /* KeyboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notation_notation_component__["a" /* NotationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__play_control_play_control_component__["a" /* PlayControlComponent */],
                __WEBPACK_IMPORTED_MODULE_9__note_info_note_info_component__["a" /* NoteInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quiz_info_quiz_info_component__["a" /* QuizInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__core_piano_service__["a" /* PianoService */],
                __WEBPACK_IMPORTED_MODULE_13__core_sound_service__["a" /* SoundService */],
                __WEBPACK_IMPORTED_MODULE_14__notation_notation_service__["a" /* NotationService */],
                __WEBPACK_IMPORTED_MODULE_12__core_quiz_service__["a" /* QuizService */]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/app.module.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PianoNote; });
var PianoNote = (function () {
    function PianoNote(keyId, noteId) {
        this.keyId = keyId;
        this.noteId = noteId;
        if (keyId < 16 || keyId > 64) {
            throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        if (noteId.length < 2 || noteId.length > 3) {
            throw new RangeError("noteId is invalid");
        }
        this.name = noteId[0].toLowerCase();
        this.octave = parseInt(noteId[1]);
        var accidentalSymbol = "";
        if (noteId.length == 3) {
            this.accidental = noteId[2];
            if (this.accidental == "s") {
                accidentalSymbol = '\u266F';
            }
            else if (this.accidental == "f") {
                accidentalSymbol = '\u266D';
            }
        }
        this.fullname = this.name.toUpperCase() + accidentalSymbol;
    }
    return PianoNote;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano-note.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuizResult; });
var QuizResult = (function () {
    function QuizResult() {
    }
    return QuizResult;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/quiz-result.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeyboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardComponent = (function () {
    function KeyboardComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.keyPlayed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.highlightedKeyId = 0;
        quizService.quizResult$.subscribe(function (result) { return _this.handleQuizResult(result); });
        this.pianoKeys = [
            { whiteKeyId: 16 },
            { whiteKeyId: 18, blackKeyId: 17 },
            { whiteKeyId: 20, blackKeyId: 19 },
            { whiteKeyId: 21 },
            { whiteKeyId: 23, blackKeyId: 22 },
            { whiteKeyId: 25, blackKeyId: 24 },
            { whiteKeyId: 27, blackKeyId: 26 },
            { whiteKeyId: 28 },
            { whiteKeyId: 30, blackKeyId: 29 },
            { whiteKeyId: 32, blackKeyId: 31 },
            { whiteKeyId: 33 },
            { whiteKeyId: 35, blackKeyId: 34 },
            { whiteKeyId: 37, blackKeyId: 36 },
            { whiteKeyId: 39, blackKeyId: 38 },
            { whiteKeyId: 40 },
            { whiteKeyId: 42, blackKeyId: 41 },
            { whiteKeyId: 44, blackKeyId: 43 },
            { whiteKeyId: 45 },
            { whiteKeyId: 47, blackKeyId: 46 },
            { whiteKeyId: 49, blackKeyId: 48 },
            { whiteKeyId: 51, blackKeyId: 50 },
            { whiteKeyId: 52 },
            { whiteKeyId: 54, blackKeyId: 53 },
            { whiteKeyId: 56, blackKeyId: 55 },
            { whiteKeyId: 57 },
            { whiteKeyId: 59, blackKeyId: 58 },
            { whiteKeyId: 61, blackKeyId: 60 },
            { whiteKeyId: 63, blackKeyId: 62 },
            { whiteKeyId: 64 }
        ];
    }
    KeyboardComponent.prototype.ngOnInit = function () {
    };
    KeyboardComponent.prototype.keyPress = function (keyNumber) {
        this.keyPlayed.emit(keyNumber);
    };
    KeyboardComponent.prototype.handleQuizResult = function (result) {
        var _this = this;
        console.log("handleQuizResult: " + result);
        if (result.selectedKeyId != result.actualNote.keyId) {
            this.highlightedKeyId = result.actualNote.keyId;
            setTimeout(function () { return _this.highlightedKeyId = 0; }, 1000);
        }
    };
    KeyboardComponent.prototype.getColor = function (keyId) {
        if (keyId == this.highlightedKeyId) {
            return "#f0e68c";
        }
        else {
            return "";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], KeyboardComponent.prototype, "keyPlayed", void 0);
    KeyboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'keyboard',
            template: __webpack_require__(627),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */]) === 'function' && _a) || Object])
    ], KeyboardComponent);
    return KeyboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/keyboard.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_piano_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoteInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteInfoComponent = (function () {
    function NoteInfoComponent(pianoService) {
        var _this = this;
        this.pianoService = pianoService;
        this.title = "Play";
        this.subscription = pianoService.notePlayed$.subscribe(function (pianoNote) {
            _this.title = "Now playing";
            _this.currentNote = pianoNote;
            _this.alternateNote = _this.pianoService.getAlternateNote(pianoNote.noteId);
        });
    }
    NoteInfoComponent.prototype.ngOnInit = function () {
        //console.log("ngOnInit");
    };
    NoteInfoComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    NoteInfoComponent.prototype.playNote = function (note) {
        //console.log(note);
        this.pianoService.playNote(note.noteId);
    };
    NoteInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'note-info',
            template: __webpack_require__(629),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */]) === 'function' && _a) || Object])
    ], NoteInfoComponent);
    return NoteInfoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/note-info.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlayControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayControlComponent = (function () {
    function PlayControlComponent() {
        this.PianoMode = __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */]; // allows template access to PianoMode enum
        this.modeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    PlayControlComponent.prototype.ngOnInit = function () {
    };
    PlayControlComponent.prototype.handlePlayBtnClick = function () {
        this.modeSelected.emit(__WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */].Play);
    };
    PlayControlComponent.prototype.handleQuizBtnClick = function () {
        this.modeSelected.emit(__WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */].Quiz);
    };
    __decorate([
        // allows template access to PianoMode enum
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], PlayControlComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */]) === 'function' && _a) || Object)
    ], PlayControlComponent.prototype, "mode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], PlayControlComponent.prototype, "modeSelected", void 0);
    PlayControlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'play-control',
            template: __webpack_require__(630),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayControlComponent);
    return PlayControlComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/play-control.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuizInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizInfoComponent = (function () {
    function QuizInfoComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.QuizStatus = __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */]; // allows template access to QuizStatus enum
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.subscription = quizService.quizResult$.subscribe(function (result) {
            if (result.selectedKeyId == result.actualNote.keyId) {
                _this.message = "\u2714 Correct, well done!";
            }
            else {
                _this.message = "\u2718 Incorrect";
            }
        });
    }
    QuizInfoComponent.prototype.ngOnInit = function () {
    };
    QuizInfoComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    QuizInfoComponent.prototype.handleStartBtnClick = function (value) {
        this.buttonClicked.emit({ button: 'start', level: value });
    };
    QuizInfoComponent.prototype.handleTryAgainBtnClick = function () {
        this.buttonClicked.emit({ button: 'try-again' });
        this.message = "";
    };
    __decorate([
        // allows template access to QuizStatus enum
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "correct", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "incorrect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "total", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */]) === 'function' && _a) || Object)
    ], QuizInfoComponent.prototype, "status", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], QuizInfoComponent.prototype, "description", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], QuizInfoComponent.prototype, "buttonClicked", void 0);
    QuizInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'quiz-info',
            template: __webpack_require__(631),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */]) === 'function' && _b) || Object])
    ], QuizInfoComponent);
    return QuizInfoComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/quiz-info.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafePipe; });
// SafePipe code provided by Kim Biesbjerg
// https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562/5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'safe'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/safe.pipe.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Projects/PianoPlay/src/environment.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Projects/PianoPlay/src/polyfills.js.map

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = "#container {\r\n  width: 1128px;\r\n  margin: 20px auto 0px;\r\n}\r\n\r\n#side-content {\r\n  float: left;\r\n  width: 328px;\r\n}\r\n\r\n#notation-component {\r\n  float: right;\r\n  width: 800px;\r\n  height: 392px;\r\n  background:#fff;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 0 0 20px 0;\r\n}\r\n\r\n#keyboard-component {\r\n  clear: both;\r\n  width: 1128px;\r\n  margin: 0;\r\n}\r\n\r\n#appDetails {\r\n  text-align: right;\r\n  color: rgba(0,0,0,0.8);\r\n  font-size: 12px;\r\n  margin: 0;\r\n  padding: 10px 5px 0 0 ;\r\n}\r\n\r\n#appDetails a {\r\n  color: rgba(0,0,0,0.6);\r\n}\r\n\r\n#appDetails a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.panel {\r\n  height: 186px;\r\n  padding: 0px;\r\n  margin: 0 20px 20px 0;\r\n  background:#FFFFF2;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n"

/***/ },

/***/ 620:
/***/ function(module, exports) {

module.exports = "/**\r\n * Pure CSS3 Piano by Taufik Nurrohman\r\n * On: 1 December 2011\r\n * URL: http://hompimpaalaihumgambreng.blogspot.com/\r\n * Note: This experiment is under the God Almighty License.\r\n * Please do not replace or remove the attribution above if you want to save/modify this project legally.\r\n * Good luck!\r\n */\r\n\r\n#p-wrapper > * {\r\n    margin:0px;\r\n    padding:0px;\r\n    list-style:none;\r\n}\r\n\r\n#p-wrapper {\r\n    margin-top: 20px;\r\n    background:#000;\r\n    background:-webkit-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\r\n    background:-webkit-linear-gradient(150deg,#000,#333,#000,#666,#333 70%);\r\n    background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\r\n    width: 1114px;\r\n    position:relative;\r\n    left: 0;\r\n    padding-left: 10px;\r\n    padding-top: 5px;\r\n    box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\r\n    border:2px solid #333;\r\n    border-radius:0 0 5px 5px;\r\n    -webkit-animation:taufik 2s;\r\n    animation:taufik 2s;\r\n}\r\n\r\n/* Tuts */\r\nul#piano {\r\n  display:block;\r\n  width:100%;\r\n  height:240px;\r\n  border-top:2px solid #222;\r\n}\r\n\r\nul#piano li {\r\n  list-style:none;\r\n  float:left;\r\n  display:inline;\r\n  background:#aaa;\r\n  width:38px;\r\n  position:relative;\r\n  cursor: pointer;\r\n}\r\n\r\nul#piano li a,ul#piano li div.anchor {\r\n  display:block;\r\n  height:220px;\r\n  background:#fff;\r\n  background:-webkit-linear-gradient(-30deg,#f5f5f5,#fff);\r\n  background:-webkit-linear-gradient(120deg,#f5f5f5,#fff);\r\n  background:linear-gradient(-30deg,#f5f5f5,#fff);\r\n  border:1px solid #ccc;\r\n  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\r\n  border-radius:0 0 3px 3px;\r\n}\r\n\r\nul#piano li.middlec a,ul#piano li.middlec div.anchor {\r\n    background: #dddddd;\r\n}\r\n\r\nul#piano li a:active,ul#piano li div.anchor:active {\r\n  box-shadow:0 2px 2px rgba(0,0,0,0.4);\r\n  position:relative;\r\n  top:2px;\r\n  height:216px;\r\n}\r\n\r\nul#piano li a:active:before,ul#piano li div.anchor:active:before {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent transparent transparent rgba(0,0,0,0.1);\r\n  position:absolute;\r\n  left:0px;\r\n  top:0px;\r\n}\r\n\r\nul#piano li a:active:after,ul#piano li div.anchor:active:after {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent rgba(0,0,0,0.1) transparent transparent;\r\n  position:absolute;\r\n  right:0px;\r\n  top:0px;\r\n}\r\n\r\n/* Black Tuts */\r\nul#piano li span {\r\n  position:absolute;\r\n  top:0px;\r\n  left:-12px;\r\n  width:20px;\r\n  height:120px;\r\n  background:#333;\r\n  background:-webkit-linear-gradient(-20deg,#333,#000,#333);\r\n  background:-webkit-linear-gradient(110deg,#333,#000,#333);\r\n  background:linear-gradient(-20deg,#333,#000,#333);\r\n  z-index:10;\r\n  border-width:1px 2px 7px;\r\n  border-style:solid;\r\n  border-color:#666 #222 #111 #555;\r\n  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\r\n  border-radius:0 0 2px 2px;\r\n}\r\n\r\nul#piano li span:active {\r\n  border-bottom-width:2px;\r\n  height:123px;\r\n  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\r\n}\r\n\r\n/* Animation */\r\n@-webkit-keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n@keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n"

/***/ },

/***/ 621:
/***/ function(module, exports) {

module.exports = "div {\r\n   background-color:#ffffff;\r\n}\r\n\r\n/* >>> is alias for /deep/ which will force style down through the child component tree. */\r\n/* match all ids that start with rest and hide them*/\r\n>>> [id^=\"rest\"] {\r\n   display: none;\r\n}\r\n\r\n>>> g.note {\r\n  /*fill: #000;*/\r\n  -webkit-transition: fill 0.3s; /* Safari */\r\n  transition: fill 0.3s;\r\n}\r\n\r\n>>> g.note:hover {\r\n  fill: #ff9800;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 622:
/***/ function(module, exports) {

module.exports = ".content {\r\n   text-align: center;\r\n   padding: 10px;\r\n}\r\n\r\n.note-card {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin: 20px 10px;\r\n  padding: 0px;\r\n  width: 90px;\r\n   background-color: #FFFFF2;\r\n  color: #0D2534 ;\r\n  border: 2px solid #435D6D ;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.note-card:hover {\r\n   color: #FFFFF2;\r\n  background-color: #617986;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.note-card-or {\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: #435D6D;\r\n  width: 30px;\r\n  padding-top: 50px;\r\n  vertical-align: top;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n  height: 60px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  padding-top: 8px;\r\n}\r\n\r\n.octave {\r\n  display: block;\r\n  font-size: 14px;\r\n  padding: 4px;\r\n}\r\n"

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = ".content {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n   background-color: #513410;\r\n   font-weight: bold;\r\n}\r\n\r\n#play-btn {\r\n   margin-right: 10px;\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = ".content {\r\n   text-align: center;\r\n   padding: 10px;\r\n}\r\n\r\n.dropdown {\r\n   padding: 5px;\r\n   margin: 0 0 0 10px;\r\n   width: 100px;\r\n   font-size: 16px;\r\n}\r\n\r\n.score-label {\r\n  display: inline-block;\r\n  width: 100px;\r\n  font-size: 18px;\r\n  padding: 4px;\r\n  margin: 0;\r\n  color: #FFFFF2;\r\n  background-color: #617986;\r\n  border: 2px solid #617986;\r\n}\r\n\r\n.score {\r\n  display: inline-block;\r\n  width: 35px;\r\n  font-size: 18px;\r\n  padding: 4px;\r\n  margin: 0;\r\n  color: #1C3747;\r\n  background-color: #FFFFFF;\r\n  border: 2px solid #617986 ;\r\n}\r\n\r\n.correct {\r\n  color: #FFFFFF;\r\n  background-color: #4CAF50;\r\n  border: 2px solid #4CAF50 ;\r\n}\r\n\r\n.incorrect {\r\n  color: #FFFFFF;\r\n  background-color: #f44336;\r\n  border: 2px solid #f44336 ;\r\n}\r\n\r\n.red { background-color: #f44336; }\r\n.green { background-color: #4CAF50; }\r\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div id=\"side-content\">\r\n    <div class=\"panel\">\r\n      <play-control [title]=\"title\" [mode]=\"mode\" (modeSelected)=\"handleModeSelected($event)\"></play-control>\r\n    </div>\r\n    <div class=\"panel\">\r\n      <div *ngIf=\"(mode == PianoMode.Play)\" >\r\n         <note-info></note-info>\r\n      </div>\r\n      <div *ngIf=\"(mode == PianoMode.Quiz)\" >\r\n         <quiz-info\r\n            [status]=\"quizStatus\"\r\n            [correct]=\"quizCorrect\"\r\n            [incorrect]=\"quizIncorrect\"\r\n            [total]=\"quizLength\"\r\n            [description]=\"resultDescription\"\r\n            (buttonClicked)=\"handleButtonClicked($event)\">\r\n         </quiz-info>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"notation-component\">\r\n    <notation [mode]=\"mode\"></notation>\r\n  </div>\r\n  <div id=\"keyboard-component\">\r\n    <keyboard (keyPlayed)=\"handleKeyPlayed($event)\"></keyboard>\r\n  </div>\r\n  <p id=\"appDetails\">Built by <a href=\"http://deanmalone.net/\" target=\"_blank\">Dean Malone</a> using Angular 2 - Source available on <a href=\"https://github.com/deanmalone/PianoPlay/\" target=\"_blank\">GitHub</a></p>\r\n</div>\r\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = "<div id=\"p-wrapper\">\r\n    <ul id=\"piano\">\r\n        <li *ngFor=\"let pianoKey of pianoKeys\">\r\n            <div class=\"anchor\" [style.background]=\"getColor(pianoKey.whiteKeyId)\" (click)=\"keyPress(pianoKey.whiteKeyId)\"></div>\r\n            <span *ngIf=\"pianoKey.blackKeyId\" [style.background]=\"getColor(pianoKey.blackKeyId)\" (click)=\"keyPress(pianoKey.blackKeyId)\"></span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "<div style=\"margin: 0 auto; width:800px;\" [innerHTML]=\"notationAsSVG | safe: 'html'\"></div>\r\n"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<div class=\"header-secondary\">{{title}}</div>\r\n<div class=\"content\">\r\n  <div class=\"note-card\" *ngIf=\"currentNote\" (click)=\"playNote(currentNote)\">\r\n      <span class=\"name\">{{currentNote.fullname}}</span>\r\n      <span class=\"octave\">OCTAVE {{currentNote.octave}}</span>\r\n  </div>\r\n  <div class=\"note-card-or\" *ngIf=\"alternateNote\">\r\n    <span> OR </span>\r\n  </div>\r\n  <div class=\"note-card\" *ngIf=\"alternateNote\" (click)=\"playNote(alternateNote)\">\r\n    <span class=\"name\">{{alternateNote.fullname}}</span>\r\n    <span class=\"octave\">OCTAVE {{alternateNote.octave}}</span>\r\n  </div>\r\n  <div *ngIf=\"!currentNote\">\r\n    <div class=\"row\">\r\n      <span>Press a key on the <b>piano</b> <i>below</i>, </span>\r\n      <span style=\" white-space: nowrap;\">and see the note appear on the </span>\r\n      <span><b>piano score</b> to the <i>right.</i></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<div class=\"panel\">\r\n   <div class=\"header\">{{ title }}</div>\r\n   <div class=\"content\">\r\n      <div class=\"row\">\r\n         <span>A simple and fun way for beginners to learn music notation.</span>\r\n      </div>\r\n         <div class=\"row\">\r\n            <button id=\"play-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Play\" (click)=\"handlePlayBtnClick()\">Play</button>\r\n            <button id=\"quiz-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Quiz\" (click)=\"handleQuizBtnClick()\">Quiz</button>\r\n         </div>\r\n   </div>\r\n</div>\r\n"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = "<div class=\"header-secondary\">Quiz</div>\r\n<div class=\"content\">\r\n   <div *ngIf=\"status == QuizStatus.Starting\">\r\n      <div class=\"row\">\r\n         <span>Select level:</span>\r\n         <select #level class=\"dropdown\">\r\n            <option value=\"easy\">Easy</option>\r\n            <option value=\"medium\">Medium</option>\r\n            <option value=\"hard\">Hard</option>\r\n         </select>\r\n      </div>\r\n      <div class=\"row\">\r\n         <button id=\"start-btn\" class=\"btn btn-secondary\"(click)=\"handleStartBtnClick(level.value)\">Start</button>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"status == QuizStatus.InProgress\">\r\n      <div class=\"row\">\r\n         <span>Press the correct key on the piano.</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span class=\"score-label\">Score</span><span class=\"score correct\">{{ correct }}</span><span class=\"score incorrect\">{{ incorrect }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span>{{ message }}</span>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"status == QuizStatus.Finished\">\r\n      <div class=\"row\">\r\n         <span>Your score: </span><span><b>{{ correct }}</b> out of {{ total }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span>{{ description }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <button id=\"tryagain-btn\" class=\"btn btn-secondary\"(click)=\"handleTryAgainBtnClick()\">Try Again?</button>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_result__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_status_enum__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizService = (function () {
    function QuizService() {
        this.quizLength = 16;
        this.quizNotes = [];
        this.quizResults = [];
        this.quizIndex = 0;
        this.inProgress = false;
        this.correct = 0;
        this.incorrect = 0;
        this.status = __WEBPACK_IMPORTED_MODULE_3__quiz_status_enum__["a" /* QuizStatus */].None;
        // Observable sources
        this.quizResultSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable streams
        this.quizResult$ = this.quizResultSource.asObservable();
    }
    QuizService.prototype.startQuiz = function (quizLength, availableNotes) {
        this.quizLength = quizLength;
        // clear quiz data
        this.quizNotes.length = 0;
        this.quizResults.length = 0;
        this.inProgress = true;
        this.quizIndex = 0;
        this.correct = 0;
        this.incorrect = 0;
        // generate random notes from the availableNotes array
        for (var i = 0; i < this.quizLength; i++) {
            this.quizNotes.push(availableNotes[Math.floor(Math.random() * availableNotes.length)]);
        }
    };
    QuizService.prototype.getCurrentNoteId = function () {
        return this.quizNotes[this.quizIndex];
    };
    QuizService.prototype.next = function () {
        // check if quiz has finished
        if (this.quizIndex == (this.quizLength - 1)) {
            this.inProgress = false;
            return false;
        }
        // otherwise move on to next quiz note.
        this.quizIndex++;
        return true;
    };
    QuizService.prototype.recordResult = function (selectedKeyId, actualNote) {
        // update score
        if (selectedKeyId == actualNote.keyId) {
            this.correct++;
        }
        else {
            this.incorrect++;
        }
        var result = new __WEBPACK_IMPORTED_MODULE_2__quiz_result__["a" /* QuizResult */]();
        result.selectedKeyId = selectedKeyId;
        result.actualNote = actualNote;
        result.quizNumber = this.quizIndex + 1;
        this.quizResults.push(result);
        this.quizResultSource.next(result);
    };
    QuizService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], QuizService);
    return QuizService;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/quiz.service.js.map

/***/ }

},[645]);
//# sourceMappingURL=main.bundle.map