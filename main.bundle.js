webpackJsonp([0,4],{

/***/ 298:
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
        // create hidden notes to ensure the staff is drawn full width.
        // notes are hidden via css class
        for (var i = 0; i < this.maxNotes; i++) {
            this.spacingNotesXml.push("<note xml:id=\"rest-hidden-" + i.toString() + "\" dur=\"4\" oct=\"6\" pname=\"c\" stem.dir=\"up\" />");
        }
    }
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

/***/ 299:
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
        // load wav files for each piano key.
        try {
            this.context = new AudioContext();
            this.loadSounds();
        }
        catch (e) {
            alert("Web Audio API is not supported in this browser");
        }
    }
    SoundService.prototype.playNote = function (keyId) {
        if (keyId < 16 || keyId > 64) {
            new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        console.log("SoundService: playing key=" + keyId);
        var source = this.context.createBufferSource();
        source.buffer = this.buffers[keyId];
        source.connect(this.context.destination);
        source.start(0);
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

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safe_pipe__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__safe_pipe__["a" /* SafePipe */]],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__safe_pipe__["a" /* SafePipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/shared.module.js.map

/***/ },

/***/ 342:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(455);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Projects/PianoPlay/src/main.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'about',
            template: __webpack_require__(626),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/about.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'PIANO PLAY';
        this.showAbout = false;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(627),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/app.component.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__piano_piano_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(300);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__piano_piano_module__["a" /* PianoModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/app.module.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__piano_service__ = __webpack_require__(95);
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
    function KeyboardComponent(pianoService) {
        this.pianoService = pianoService;
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
        this.pianoService.playNote(keyNumber);
    };
    KeyboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'keyboard',
            template: __webpack_require__(628),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */]) === 'function' && _a) || Object])
    ], KeyboardComponent);
    return KeyboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/keyboard.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__piano_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notation_service__ = __webpack_require__(298);
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
    function NotationComponent(pianoService, notationService) {
        var _this = this;
        this.pianoService = pianoService;
        this.notationService = notationService;
        this.subscription = pianoService.notePlayed$.subscribe(function (pianoNote) {
            _this.notationService.addNote(pianoNote);
            _this.notationAsSVG = _this.notationService.renderNotation();
        });
    }
    NotationComponent.prototype.ngOnInit = function () {
        //console.log('ngOnInit');
        // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
        this.notationAsSVG = this.notationService.renderNotation();
    };
    NotationComponent.prototype.ngAfterViewChecked = function () {
        //console.log('ngAfterViewChecked');
        var self = this;
        $("g.note").click(function () { self.noteClicked(this.id); });
    };
    NotationComponent.prototype.noteClicked = function (id) {
        console.log('noteClicked: ' + id);
        this.pianoService.playNote(this.notationService.notes[id].keyId, this.notationService.notes[id].noteId);
    };
    NotationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'notation',
            template: __webpack_require__(629),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__notation_service__["a" /* NotationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__notation_service__["a" /* NotationService */]) === 'function' && _b) || Object])
    ], NotationComponent);
    return NotationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/notation.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__piano_service__ = __webpack_require__(95);
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
        this.subscription = pianoService.notePlayed$.subscribe(function (pianoNote) {
            _this.currentNote = pianoNote;
            _this.alternateNote = _this.pianoService.getAlternateNote(pianoNote.keyId, pianoNote.noteId);
        });
    }
    NoteInfoComponent.prototype.ngOnInit = function () {
    };
    NoteInfoComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    NoteInfoComponent.prototype.playNote = function (note) {
        //console.log(note);
        this.pianoService.playNote(note.keyId, note.noteId);
    };
    NoteInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'note-info',
            template: __webpack_require__(630),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */]) === 'function' && _a) || Object])
    ], NoteInfoComponent);
    return NoteInfoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/note-info.component.js.map

/***/ },

/***/ 459:
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
        // Todo: add better validation of NoteId
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

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__piano_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PianoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PianoComponent = (function () {
    function PianoComponent(pianoService, soundService) {
        this.pianoService = pianoService;
        this.soundService = soundService;
        this.subscription = pianoService.notePlayed$.subscribe(function (pianoNote) {
            soundService.playNote(pianoNote.keyId);
        });
    }
    PianoComponent.prototype.ngOnInit = function () {
    };
    PianoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'piano',
            template: __webpack_require__(631),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__piano_service__["a" /* PianoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]) === 'function' && _b) || Object])
    ], PianoComponent);
    return PianoComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__piano_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keyboard_keyboard_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notation_notation_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_control_play_control_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__note_info_note_info_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__piano_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sound_service__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notation_notation_service__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PianoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PianoModule = (function () {
    function PianoModule() {
    }
    PianoModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__keyboard_keyboard_component__["a" /* KeyboardComponent */], __WEBPACK_IMPORTED_MODULE_5__notation_notation_component__["a" /* NotationComponent */], __WEBPACK_IMPORTED_MODULE_6__play_control_play_control_component__["a" /* PlayControlComponent */], __WEBPACK_IMPORTED_MODULE_7__note_info_note_info_component__["a" /* NoteInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__piano_component__["a" /* PianoComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__piano_service__["a" /* PianoService */],
                __WEBPACK_IMPORTED_MODULE_9__sound_service__["a" /* SoundService */],
                __WEBPACK_IMPORTED_MODULE_10__notation_notation_service__["a" /* NotationService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__piano_component__["a" /* PianoComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PianoModule);
    return PianoModule;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano.module.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    PlayControlComponent.prototype.ngOnInit = function () {
    };
    PlayControlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'play-control',
            template: __webpack_require__(632),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayControlComponent);
    return PlayControlComponent;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/play-control.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(138);
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

/***/ 464:
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Projects/PianoPlay/src/polyfills.js.map

/***/ },

/***/ 618:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = "#header {\r\n  width: 1186px;\r\n  margin: 0 auto;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n"

/***/ },

/***/ 620:
/***/ function(module, exports) {

module.exports = "/**\r\n * Pure CSS3 Piano by Taufik Nurrohman\r\n * On: 1 December 2011\r\n * URL: http://hompimpaalaihumgambreng.blogspot.com/\r\n * Note: This experiment is under the God Almighty License.\r\n * Please do not replace or remove the attribution above if you want to save/modify this project legally.\r\n * Good luck!\r\n */\r\n\r\n#p-wrapper > * {\r\n    margin:0px;\r\n    padding:0px;\r\n    list-style:none;\r\n}\r\n\r\n#p-wrapper {\r\n    margin-top: 20px;\r\n    background:#000;\r\n    background:-webkit-linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\r\n    background:-webkit-linear-gradient(150deg,#000,#333,#000,#666,#333 70%);\r\n    background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\r\n    width: 1172px;\r\n    position:relative;\r\n    left: 0;\r\n    padding-left: 10px;\r\n    padding-top: 5px;\r\n    box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\r\n    border:2px solid #333;\r\n    border-radius:0 0 5px 5px;\r\n    -webkit-animation:taufik 2s;\r\n    animation:taufik 2s;\r\n}\r\n\r\n/* Tuts */\r\nul#piano {\r\n  display:block;\r\n  width:100%;\r\n  height:240px;\r\n  border-top:2px solid #222;\r\n}\r\n\r\nul#piano li {\r\n  list-style:none;\r\n  float:left;\r\n  display:inline;\r\n  background:#aaa;\r\n  width:40px;\r\n  position:relative;\r\n  cursor: pointer;\r\n}\r\n\r\nul#piano li a,ul#piano li div.anchor {\r\n  display:block;\r\n  height:220px;\r\n  background:#fff;\r\n  background:-webkit-linear-gradient(-30deg,#f5f5f5,#fff);\r\n  background:-webkit-linear-gradient(120deg,#f5f5f5,#fff);\r\n  background:linear-gradient(-30deg,#f5f5f5,#fff);\r\n  border:1px solid #ccc;\r\n  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\r\n  border-radius:0 0 3px 3px;\r\n}\r\n\r\nul#piano li.middlec a,ul#piano li.middlec div.anchor {\r\n    background: #dddddd;\r\n}\r\n\r\nul#piano li a:active,ul#piano li div.anchor:active {\r\n  box-shadow:0 2px 2px rgba(0,0,0,0.4);\r\n  position:relative;\r\n  top:2px;\r\n  height:216px;\r\n}\r\n\r\nul#piano li a:active:before,ul#piano li div.anchor:active:before {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent transparent transparent rgba(0,0,0,0.1);\r\n  position:absolute;\r\n  left:0px;\r\n  top:0px;\r\n}\r\n\r\nul#piano li a:active:after,ul#piano li div.anchor:active:after {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent rgba(0,0,0,0.1) transparent transparent;\r\n  position:absolute;\r\n  right:0px;\r\n  top:0px;\r\n}\r\n\r\n/* Black Tuts */\r\nul#piano li span {\r\n  position:absolute;\r\n  top:0px;\r\n  left:-12px;\r\n  width:20px;\r\n  height:120px;\r\n  background:#333;\r\n  background:-webkit-linear-gradient(-20deg,#333,#000,#333);\r\n  background:-webkit-linear-gradient(110deg,#333,#000,#333);\r\n  background:linear-gradient(-20deg,#333,#000,#333);\r\n  z-index:10;\r\n  border-width:1px 2px 7px;\r\n  border-style:solid;\r\n  border-color:#666 #222 #111 #555;\r\n  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\r\n  border-radius:0 0 2px 2px;\r\n}\r\n\r\nul#piano li span:active {\r\n  border-bottom-width:2px;\r\n  height:123px;\r\n  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\r\n}\r\n\r\n/* Animation */\r\n@-webkit-keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n@keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n"

/***/ },

/***/ 621:
/***/ function(module, exports) {

module.exports = "div {\r\n   background-color:#ffffff;\r\n}\r\n\r\n/* >>> is alias for /deep/ which will force style down through the child component tree. */\r\n/* match all ids that start with rest */\r\n>>> [id^=\"rest\"] {\r\n   display: none;\r\n}\r\n\r\n>>> g.note {\r\n  fill: #000;\r\n  -webkit-transition: fill 0.3s; /* Safari */\r\n  transition: fill 0.3s;\r\n}\r\n\r\n>>> g.note:hover {\r\n  fill: #CC0000;\r\n  cursor: pointer;\r\n}\r\n\r\n"

/***/ },

/***/ 622:
/***/ function(module, exports) {

module.exports = "h3 {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  margin: 0px auto;\r\n  text-align: center;\r\n  padding-left: 0px;\r\n}\r\n\r\n.note-card {\r\n  display: inline-block;\r\n  text-align: center;\r\n  background-color: #FFFFFF;\r\n  color: #0c0c0c;\r\n  margin: 10px;\r\n  padding: 0px;\r\n  width: 100px;\r\n  vertical-align: top;\r\n  border: 2px solid #A7A771;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.note-card:hover {\r\n  background-color: #C6C69D;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.note-card-or {\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: #A7A771;\r\n  width: 40px;\r\n  padding-top: 50px;\r\n  vertical-align: top;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n  height: 70px;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  padding-top: 8px;\r\n}\r\n\r\n.octave {\r\n  display: block;\r\n  font-size: 14px;\r\n  padding: 4px;\r\n}\r\n"

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = "#container {\r\n  width: 1186px;\r\n  margin: 0 auto;\r\n}\r\n\r\n#notation-component{\r\n  float: left;\r\n  width: 800px;\r\n  height: 392px;\r\n  background:#fff;\r\n  box-shadow: 0 10px 6px -6px#777;\r\n  margin: 0 20px 20px 0;\r\n}\r\n\r\n#play-control-component {\r\n  float: left;\r\n  width: 346px;\r\n  height: 166px;\r\n  padding: 10px;\r\n  margin: 0 0 20px 0;\r\n  background:#fffff2;\r\n  box-shadow: 0 10px 6px -6px#777;\r\n}\r\n\r\n#note-info-component {\r\n  float: left;\r\n  width: 366px;\r\n  height: 186px;\r\n  padding: 0px;\r\n  margin: 0 0 20px 0;\r\n  background:#fffff2;\r\n  box-shadow: 0 10px 6px -6px#777;\r\n}\r\n\r\n#keyboard-component {\r\n  clear: both;\r\n  width: 1186px;\r\n  margin: 0;\r\n}\r\n\r\n#appDetails {\r\n  text-align: right;\r\n  color: rgba(0,0,0,0.7);\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px 0 0 ;\r\n}\r\n\r\n#appDetails a {\r\n  color: rgba(0,0,0,0.5);\r\n}\r\n\r\n#appDetails a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "h3 {\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = "<div id=\"header\">\r\n  <h1>{{title}}</h1>\r\n<div>\r\n<piano></piano>\r\n"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "<div id=\"p-wrapper\">\r\n    <ul id=\"piano\">\r\n        <li *ngFor=\"let pianoKey of pianoKeys\">\r\n            <div class=\"anchor\" (click)=\"keyPress(pianoKey.whiteKeyId)\"></div>\r\n            <span *ngIf=\"pianoKey.blackKeyId \" (click)=\"keyPress(pianoKey.blackKeyId)\"></span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<div style=\"margin: 0 auto; width:800px;\" [innerHTML]=\"notationAsSVG | safe: 'html'\"></div>\r\n"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<h3>Now playing</h3>\r\n\r\n<div class=\"container\">\r\n  <div class=\"note-card\" *ngIf=\"currentNote\" (click)=\"playNote(currentNote)\">\r\n      <span class=\"name\">{{currentNote.fullname}}</span>\r\n      <span class=\"octave\">OCTAVE {{currentNote.octave}}</span>\r\n  </div>\r\n\r\n  <div class=\"note-card-or\" *ngIf=\"alternateNote\">\r\n    <span> OR </span>\r\n  </div>\r\n\r\n  <div class=\"note-card\" *ngIf=\"alternateNote\" (click)=\"playNote(alternateNote)\">\r\n    <span class=\"name\">{{alternateNote.fullname}}</span>\r\n    <span class=\"octave\">OCTAVE {{alternateNote.octave}}</span>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div id=\"notation-component\">\r\n      <notation></notation>\r\n    </div>\r\n    <div id=\"play-control-component\">\r\n      <play-control></play-control>\r\n    </div>\r\n    <div id=\"note-info-component\">\r\n      <note-info></note-info>\r\n    </div>\r\n    <div id=\"keyboard-component\">\r\n      <keyboard></keyboard>\r\n    </div>\r\n    <p id=\"appDetails\">Built with Angular 2 - Source available on <a href=\"https://github.com/deanmalone/PianoPlay/\" target=\"_blank\">GitHub</a></p>\r\n</div>\r\n"

/***/ },

/***/ 632:
/***/ function(module, exports) {

module.exports = "<h3>Learn Music Notation</h3>\r\n<p><b>Piano Play</b> is a simple and fun way for beginners to learn music notation.</p>\r\n<p>Simply press the keys on the <b>piano</b> and see the notes appear on the <b>piano score</b> and in the <b>Now playing</b> panel.</p>\r\n"

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__piano_note__ = __webpack_require__(459);
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
        // Observable sources
        this.pianoNotePlayedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable streams
        this.notePlayed$ = this.pianoNotePlayedSource.asObservable();
        this.pianoKeyNoteMap = [
            { keyId: 16, notes: ["c2"] },
            { keyId: 17, notes: ["c2s", "d2f"] },
            { keyId: 18, notes: ["d2"] },
            { keyId: 19, notes: ["d2s", "e2f"] },
            { keyId: 20, notes: ["e2"] },
            { keyId: 21, notes: ["f2"] },
            { keyId: 22, notes: ["f2s", "g2f"] },
            { keyId: 23, notes: ["g2"] },
            { keyId: 24, notes: ["g2s", "a2f"] },
            { keyId: 25, notes: ["a2"] },
            { keyId: 26, notes: ["a2s", "b2f"] },
            { keyId: 27, notes: ["b2"] },
            { keyId: 28, notes: ["c3"] },
            { keyId: 29, notes: ["c3s", "d3f"] },
            { keyId: 30, notes: ["d3"] },
            { keyId: 31, notes: ["d3s", "e3f"] },
            { keyId: 32, notes: ["e3"] },
            { keyId: 33, notes: ["f3"] },
            { keyId: 34, notes: ["f3s", "g3f"] },
            { keyId: 35, notes: ["g3"] },
            { keyId: 36, notes: ["g3s", "a3f"] },
            { keyId: 37, notes: ["a3"] },
            { keyId: 38, notes: ["a3s", "b3f"] },
            { keyId: 39, notes: ["b3"] },
            { keyId: 40, notes: ["c4"] },
            { keyId: 41, notes: ["c4s", "d4f"] },
            { keyId: 42, notes: ["d4"] },
            { keyId: 43, notes: ["d4s", "e4f"] },
            { keyId: 44, notes: ["e4"] },
            { keyId: 45, notes: ["f4"] },
            { keyId: 46, notes: ["f4s", "g4f"] },
            { keyId: 47, notes: ["g4"] },
            { keyId: 48, notes: ["g4s", "a4f"] },
            { keyId: 49, notes: ["a4"] },
            { keyId: 50, notes: ["a4s", "b4f"] },
            { keyId: 51, notes: ["b4"] },
            { keyId: 52, notes: ["c5"] },
            { keyId: 53, notes: ["c5s", "d5f"] },
            { keyId: 54, notes: ["d5"] },
            { keyId: 55, notes: ["d5s", "e5f"] },
            { keyId: 56, notes: ["e5"] },
            { keyId: 57, notes: ["f5"] },
            { keyId: 58, notes: ["f5s", "g5f"] },
            { keyId: 59, notes: ["g5"] },
            { keyId: 60, notes: ["g5s", "a5f"] },
            { keyId: 61, notes: ["a5"] },
            { keyId: 62, notes: ["a5s", "b5f"] },
            { keyId: 63, notes: ["b5"] },
            { keyId: 64, notes: ["c6"] }
        ];
    }
    PianoService.prototype.getNote = function (keyId, noteId) {
        if (keyId < 16 || keyId > 64) {
            throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        // get the IPianoKeyNoteMapping for the specified keyId
        var notes = this.pianoKeyNoteMap[keyId - 16].notes;
        // find the noteId if specified, otherwise use default note (first one).
        var note = notes.find(function (x) { return x == noteId; });
        if (!note) {
            note = notes[0];
        }
        return new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, note);
    };
    PianoService.prototype.playNote = function (keyId, noteId) {
        var pianoNote = this.getNote(keyId, noteId);
        console.log("playNote: sender=" + pianoNote.sender + ", keyId=" + pianoNote.keyId + ", noteId=" + pianoNote.noteId + ", fullname=" + pianoNote.fullname);
        this.pianoNotePlayedSource.next(pianoNote);
    };
    PianoService.prototype.getAlternateNote = function (keyId, noteId) {
        if (keyId < 16 || keyId > 64) {
            throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        var alternateNote;
        var notes = this.pianoKeyNoteMap[keyId - 16].notes;
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
    PianoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PianoService);
    return PianoService;
}());
//# sourceMappingURL=C:/Projects/PianoPlay/src/piano.service.js.map

/***/ }

},[646]);
//# sourceMappingURL=main.bundle.map