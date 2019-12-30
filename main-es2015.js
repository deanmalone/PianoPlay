(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n  <div id=\"side-content\">\r\n    <div class=\"panel\">\r\n      <play-control [title]=\"title\" [mode]=\"mode\" (modeSelected)=\"handleModeSelected($event)\"></play-control>\r\n    </div>\r\n    <div class=\"panel\">\r\n      <div *ngIf=\"(mode == PianoMode.Play)\" >\r\n         <note-info></note-info>\r\n      </div>\r\n      <div *ngIf=\"(mode == PianoMode.Quiz)\" >\r\n         <quiz-info\r\n            [status]=\"quizStatus\"\r\n            [correct]=\"quizCorrect\"\r\n            [incorrect]=\"quizIncorrect\"\r\n            [total]=\"quizLength\"\r\n            [description]=\"resultDescription\"\r\n            (buttonClicked)=\"handleButtonClicked($event)\">\r\n         </quiz-info>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"notation-component\">\r\n    <notation [mode]=\"mode\"></notation>\r\n  </div>\r\n  <div id=\"keyboard-component\">\r\n    <keyboard (keyPlayed)=\"handleKeyPlayed($event)\"></keyboard>\r\n  </div>\r\n  <p id=\"appDetails\">Built with <a href=\"https://angular.io/\" target=\"_blank\">Angular</a> (v8.2.14)- Source available on <a href=\"https://github.com/deanmalone/PianoPlay/\" target=\"_blank\">GitHub</a></p>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"p-wrapper\">\r\n    <ul id=\"piano\">\r\n        <li *ngFor=\"let pianoKey of pianoKeys\">\r\n            <div class=\"anchor\" [style.background]=\"getColor(pianoKey.whiteKeyId)\" (click)=\"keyPress(pianoKey.whiteKeyId)\"></div>\r\n            <span *ngIf=\"pianoKey.blackKeyId\" [style.background]=\"getColor(pianoKey.blackKeyId)\" (click)=\"keyPress(pianoKey.blackKeyId)\"></span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notation/notation.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notation/notation.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 0 auto; width:800px;\" [innerHTML]=\"notationAsSVG | safe: 'html'\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-info/note-info.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-info/note-info.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-secondary\">{{title}}</div>\r\n<div class=\"content\">\r\n  <div class=\"note-card\" *ngIf=\"currentNote\" (click)=\"playNote(currentNote)\">\r\n      <span class=\"name\">{{currentNote.fullname}}</span>\r\n      <span class=\"octave\">OCTAVE {{currentNote.octave}}</span>\r\n  </div>\r\n  <div class=\"note-card-or\" *ngIf=\"alternateNote\">\r\n    <span> OR </span>\r\n  </div>\r\n  <div class=\"note-card\" *ngIf=\"alternateNote\" (click)=\"playNote(alternateNote)\">\r\n    <span class=\"name\">{{alternateNote.fullname}}</span>\r\n    <span class=\"octave\">OCTAVE {{alternateNote.octave}}</span>\r\n  </div>\r\n  <div *ngIf=\"!currentNote\">\r\n    <div class=\"row\">\r\n      <span>Press a key on the <b>piano</b>&nbsp;<i>below</i>,</span><br />\r\n      <span>and see the note appear on the</span><br />\r\n      <span><b>piano score</b> to the <i>right.</i></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-control/play-control.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-control/play-control.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel\">\r\n   <div class=\"header\">{{ title }}</div>\r\n   <div class=\"content\">\r\n      <div class=\"row\">\r\n         <span>A simple and fun way for beginners to learn music notation.</span>\r\n      </div>\r\n         <div class=\"row\">\r\n            <button id=\"play-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Play\" (click)=\"handlePlayBtnClick()\">Play</button>\r\n            <button id=\"quiz-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Quiz\" (click)=\"handleQuizBtnClick()\">Quiz</button>\r\n         </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-info/quiz-info.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-info/quiz-info.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-secondary\">Quiz</div>\r\n<div class=\"content\">\r\n   <div *ngIf=\"status == QuizStatus.Starting\">\r\n      <div class=\"row\">\r\n         <span>Select level:</span>\r\n         <select #level class=\"dropdown\">\r\n            <option value=\"easy\">Easy</option>\r\n            <option value=\"medium\">Medium</option>\r\n            <option value=\"hard\">Hard</option>\r\n         </select>\r\n      </div>\r\n      <div class=\"row\">\r\n         <button id=\"start-btn\" class=\"btn btn-secondary\"(click)=\"handleStartBtnClick(level.value)\">Start</button>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"status == QuizStatus.InProgress\">\r\n      <div class=\"row\">\r\n         <span>Press the correct key on the piano.</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span class=\"score-label\">Score</span><span class=\"score correct\">{{ correct }}</span><span class=\"score incorrect\">{{ incorrect }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span>{{ message }}</span>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"status == QuizStatus.Finished\">\r\n      <div class=\"row\">\r\n         <span>Your score: </span><span><b>{{ correct }}</b> out of {{ total }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <span>{{ description }}</span>\r\n      </div>\r\n      <div class=\"row\">\r\n         <button id=\"tryagain-btn\" class=\"btn btn-secondary\"(click)=\"handleTryAgainBtnClick()\">Try Again?</button>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\r\n  width: 1128px;\r\n  margin: 20px auto 0px;\r\n}\r\n\r\n#side-content {\r\n  float: left;\r\n  width: 328px;\r\n}\r\n\r\n#notation-component {\r\n  float: right;\r\n  width: 800px;\r\n  height: 392px;\r\n  background:#fff;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 0 0 20px 0;\r\n}\r\n\r\n#keyboard-component {\r\n  clear: both;\r\n  width: 1128px;\r\n  margin: 0;\r\n}\r\n\r\n#appDetails {\r\n  text-align: right;\r\n  color: rgba(0,0,0,0.8);\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px 5px 0 0 ;\r\n}\r\n\r\n#appDetails a {\r\n  color: rgba(0,0,0,0.6);\r\n}\r\n\r\n#appDetails a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.panel {\r\n  height: 186px;\r\n  padding: 0px;\r\n  margin: 0 20px 20px 0;\r\n  background:#FFFFF2;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw0RUFBNEU7RUFDNUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDExMjhweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxuXHJcbiNzaWRlLWNvbnRlbnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzMjhweDtcclxufVxyXG5cclxuI25vdGF0aW9uLWNvbXBvbmVudCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDM5MnB4O1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxuI2tleWJvYXJkLWNvbXBvbmVudCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgd2lkdGg6IDExMjhweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNhcHBEZXRhaWxzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweCA1cHggMCAwIDtcclxufVxyXG5cclxuI2FwcERldGFpbHMgYSB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5cclxuI2FwcERldGFpbHMgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGhlaWdodDogMTg2cHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRjI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notation_notation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notation/notation.component */ "./src/app/notation/notation.component.ts");
/* harmony import */ var _core_piano_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/piano.service */ "./src/app/core/piano.service.ts");
/* harmony import */ var _core_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/sound.service */ "./src/app/core/sound.service.ts");
/* harmony import */ var _core_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/quiz.service */ "./src/app/core/quiz.service.ts");
/* harmony import */ var _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/piano-mode.enum */ "./src/app/core/piano-mode.enum.ts");
/* harmony import */ var _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/quiz-status.enum */ "./src/app/core/quiz-status.enum.ts");








let AppComponent = class AppComponent {
    constructor(pianoService, soundService, quizService) {
        this.pianoService = pianoService;
        this.soundService = soundService;
        this.quizService = quizService;
        this.PianoMode = _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_6__["PianoMode"]; // allows template access to PianoMode enum
        this.title = 'Piano Play';
        this.mode = _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_6__["PianoMode"].Play;
        this.quizCorrect = 0;
        this.quizIncorrect = 0;
        this.quizLength = 16;
        this.quizStatus = _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_7__["QuizStatus"].None;
        this.resultDescription = "";
        this.delayMs = 1000;
        this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
    }
    ngOnInit() {
        this.soundService.initialize();
    }
    handleModeSelected(selectedMode) {
        if (this.mode == selectedMode)
            return;
        // Mode has been changed
        this.mode = selectedMode;
        if (this.mode == _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_6__["PianoMode"].Quiz) {
            this.newQuiz();
        }
        else {
            // Clear all notes from the notation component
            this.notation.clear();
        }
    }
    handleKeyPlayed(keyId) {
        if (this.mode == _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_6__["PianoMode"].Play) {
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
                    setTimeout(() => this.finishQuiz(), this.delayMs);
                }
            }
        }
    }
    handleNotePlayed(note) {
        this.soundService.playNote(note.keyId);
    }
    handleButtonClicked(data) {
        if (data.button == 'start') {
            this.startQuiz(data.level);
        }
        else if (data.button = 'try-again') {
            this.newQuiz();
        }
    }
    newQuiz() {
        this.notation.clear();
        this.quizStatus = _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_7__["QuizStatus"].Starting;
    }
    startQuiz(level) {
        let notes = [];
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
        this.quizStatus = _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_7__["QuizStatus"].InProgress;
        this.quizCorrect = this.quizService.correct;
        this.quizIncorrect = this.quizService.incorrect;
        this.currentTestNote = this.pianoService.getNote(this.quizService.getCurrentNoteId());
        this.notation.addNote(this.currentTestNote);
    }
    finishQuiz() {
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
        this.quizStatus = _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_7__["QuizStatus"].Finished;
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_piano_service__WEBPACK_IMPORTED_MODULE_3__["PianoService"] },
    { type: _core_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
    { type: _core_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notation_notation_component__WEBPACK_IMPORTED_MODULE_2__["NotationComponent"], { static: false })
], AppComponent.prototype, "notation", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "./src/app/keyboard/keyboard.component.ts");
/* harmony import */ var _notation_notation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notation/notation.component */ "./src/app/notation/notation.component.ts");
/* harmony import */ var _play_control_play_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play-control/play-control.component */ "./src/app/play-control/play-control.component.ts");
/* harmony import */ var _note_info_note_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note-info/note-info.component */ "./src/app/note-info/note-info.component.ts");
/* harmony import */ var _quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-info/quiz-info.component */ "./src/app/quiz-info/quiz-info.component.ts");
/* harmony import */ var _core_piano_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/piano.service */ "./src/app/core/piano.service.ts");
/* harmony import */ var _core_quiz_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/quiz.service */ "./src/app/core/quiz.service.ts");
/* harmony import */ var _core_sound_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/sound.service */ "./src/app/core/sound.service.ts");
/* harmony import */ var _notation_notation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notation/notation.service */ "./src/app/notation/notation.service.ts");
/* harmony import */ var _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/safe.pipe */ "./src/app/shared/safe.pipe.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__["KeyboardComponent"],
            _notation_notation_component__WEBPACK_IMPORTED_MODULE_7__["NotationComponent"],
            _play_control_play_control_component__WEBPACK_IMPORTED_MODULE_8__["PlayControlComponent"],
            _note_info_note_info_component__WEBPACK_IMPORTED_MODULE_9__["NoteInfoComponent"],
            _quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_10__["QuizInfoComponent"],
            _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ],
        providers: [
            _core_piano_service__WEBPACK_IMPORTED_MODULE_11__["PianoService"],
            _core_sound_service__WEBPACK_IMPORTED_MODULE_13__["SoundService"],
            _notation_notation_service__WEBPACK_IMPORTED_MODULE_14__["NotationService"],
            _core_quiz_service__WEBPACK_IMPORTED_MODULE_12__["QuizService"]
        ],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/piano-mode.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/core/piano-mode.enum.ts ***!
  \*****************************************/
/*! exports provided: PianoMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoMode", function() { return PianoMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PianoMode;
(function (PianoMode) {
    PianoMode[PianoMode["Play"] = 0] = "Play";
    PianoMode[PianoMode["Quiz"] = 1] = "Quiz";
})(PianoMode || (PianoMode = {}));


/***/ }),

/***/ "./src/app/core/piano-note.ts":
/*!************************************!*\
  !*** ./src/app/core/piano-note.ts ***!
  \************************************/
/*! exports provided: PianoNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoNote", function() { return PianoNote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PianoNote {
    constructor(keyId, noteId) {
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
        let accidentalSymbol = "";
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
}


/***/ }),

/***/ "./src/app/core/piano.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/piano.service.ts ***!
  \***************************************/
/*! exports provided: PianoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoService", function() { return PianoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _piano_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piano-note */ "./src/app/core/piano-note.ts");




let PianoService = class PianoService {
    constructor() {
        this.pianoKeyMap = {};
        this.pianoNoteMap = {};
        // Observable sources
        this.pianoNotePlayedSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
        Object.keys(this.pianoKeyMap).forEach(keyId => this.pianoKeyMap[keyId].forEach(note => this.pianoNoteMap[note] = keyId));
    }
    getNote(noteId) {
        if (this.pianoNoteMap.hasOwnProperty(noteId)) {
            let keyId = parseInt(this.pianoNoteMap[noteId]);
            return new _piano_note__WEBPACK_IMPORTED_MODULE_3__["PianoNote"](keyId, noteId);
        }
        else {
            throw new Error("Invalid noteId.");
        }
    }
    getNoteByKeyId(keyId) {
        if (this.pianoKeyMap.hasOwnProperty(keyId)) {
            let noteId = this.pianoKeyMap[keyId][0]; // default to first note for keyId
            return new _piano_note__WEBPACK_IMPORTED_MODULE_3__["PianoNote"](keyId, noteId);
        }
        else {
            throw new Error("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
    }
    playNote(noteId) {
        let note = this.getNote(noteId);
        this.pianoNotePlayedSource.next(note);
    }
    playNoteByKeyId(keyId) {
        let note = this.getNoteByKeyId(keyId);
        this.pianoNotePlayedSource.next(note);
    }
    getAlternateNote(noteId) {
        if (!this.pianoNoteMap.hasOwnProperty(noteId)) {
            throw new Error("Invalid noteId");
        }
        let alternateNote;
        let keyId = parseInt(this.pianoNoteMap[noteId]);
        let notes = this.pianoKeyMap[keyId];
        if (notes.length > 1) {
            if (notes[0] == noteId) {
                alternateNote = new _piano_note__WEBPACK_IMPORTED_MODULE_3__["PianoNote"](keyId, notes[1]);
            }
            else {
                alternateNote = new _piano_note__WEBPACK_IMPORTED_MODULE_3__["PianoNote"](keyId, notes[0]);
                ;
            }
        }
        return alternateNote;
    }
    getAllNoteIds() {
        return Object.keys(this.pianoNoteMap);
    }
    getAllNaturalNoteIds(lowerOctave = 2, upperOctave = 6) {
        let naturalNotes = [];
        Object.keys(this.pianoNoteMap).forEach(note => {
            if (note.length == 2) {
                let n = parseInt(note[1]);
                if (n >= lowerOctave && n <= upperOctave) {
                    naturalNotes.push(note);
                }
            }
        });
        return naturalNotes;
    }
};
PianoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PianoService);



/***/ }),

/***/ "./src/app/core/quiz-result.ts":
/*!*************************************!*\
  !*** ./src/app/core/quiz-result.ts ***!
  \*************************************/
/*! exports provided: QuizResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResult", function() { return QuizResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuizResult {
}


/***/ }),

/***/ "./src/app/core/quiz-status.enum.ts":
/*!******************************************!*\
  !*** ./src/app/core/quiz-status.enum.ts ***!
  \******************************************/
/*! exports provided: QuizStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStatus", function() { return QuizStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var QuizStatus;
(function (QuizStatus) {
    QuizStatus[QuizStatus["Starting"] = 0] = "Starting";
    QuizStatus[QuizStatus["InProgress"] = 1] = "InProgress";
    QuizStatus[QuizStatus["Finished"] = 2] = "Finished";
    QuizStatus[QuizStatus["None"] = 3] = "None";
})(QuizStatus || (QuizStatus = {}));


/***/ }),

/***/ "./src/app/core/quiz.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/quiz.service.ts ***!
  \**************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _quiz_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-result */ "./src/app/core/quiz-result.ts");
/* harmony import */ var _quiz_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-status.enum */ "./src/app/core/quiz-status.enum.ts");





let QuizService = class QuizService {
    constructor() {
        this.quizLength = 16;
        this.quizNotes = [];
        this.quizResults = [];
        this.quizIndex = 0;
        this.inProgress = false;
        this.correct = 0;
        this.incorrect = 0;
        this.status = _quiz_status_enum__WEBPACK_IMPORTED_MODULE_4__["QuizStatus"].None;
        // Observable sources
        this.quizResultSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Observable streams
        this.quizResult$ = this.quizResultSource.asObservable();
    }
    startQuiz(quizLength, availableNotes) {
        this.quizLength = quizLength;
        // clear quiz data
        this.quizNotes.length = 0;
        this.quizResults.length = 0;
        this.inProgress = true;
        this.quizIndex = 0;
        this.correct = 0;
        this.incorrect = 0;
        // generate random notes from the availableNotes array
        for (let i = 0; i < this.quizLength; i++) {
            this.quizNotes.push(availableNotes[Math.floor(Math.random() * availableNotes.length)]);
        }
    }
    getCurrentNoteId() {
        return this.quizNotes[this.quizIndex];
    }
    next() {
        // check if quiz has finished
        if (this.quizIndex == (this.quizLength - 1)) {
            this.inProgress = false;
            return false;
        }
        // otherwise move on to next quiz note.
        this.quizIndex++;
        return true;
    }
    recordResult(selectedKeyId, actualNote) {
        // update score
        if (selectedKeyId == actualNote.keyId) {
            this.correct++;
        }
        else {
            this.incorrect++;
        }
        let result = new _quiz_result__WEBPACK_IMPORTED_MODULE_3__["QuizResult"]();
        result.selectedKeyId = selectedKeyId;
        result.actualNote = actualNote;
        result.quizNumber = this.quizIndex + 1;
        this.quizResults.push(result);
        this.quizResultSource.next(result);
    }
};
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], QuizService);



/***/ }),

/***/ "./src/app/core/sound.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/sound.service.ts ***!
  \***************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SoundService = class SoundService {
    constructor() {
        this.buffers = {};
    }
    initialize() {
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
    }
    playNote(keyId) {
        if (keyId < 16 || keyId > 64) {
            new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        if (this.buffers.hasOwnProperty(keyId)) {
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
    loadSounds() {
        // load the wav files for each piano key.
        for (let i = 16; i < 65; i++) {
            var soundPath = `./assets/sounds/${i}.wav`;
            this.loadBuffer(i.toString(), soundPath);
        }
    }
    loadBuffer(name, path) {
        var request = new XMLHttpRequest();
        request.open("GET", path, true);
        request.responseType = "arraybuffer";
        let context = this.context;
        let buffers = this.buffers;
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
    }
};
SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SoundService);



/***/ }),

/***/ "./src/app/keyboard/keyboard.component.css":
/*!*************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\r\n * Pure CSS3 Piano by Taufik Nurrohman\r\n * On: 1 December 2011\r\n * URL: http://hompimpaalaihumgambreng.blogspot.com/\r\n * Note: This experiment is under the God Almighty License.\r\n * Please do not replace or remove the attribution above if you want to save/modify this project legally.\r\n * Good luck!\r\n */\r\n\r\n#p-wrapper > * {\r\n    margin:0px;\r\n    padding:0px;\r\n    list-style:none;\r\n}\r\n\r\n#p-wrapper {\r\n    margin-top: 20px;\r\n    background:#000;\r\n    background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\r\n    width: 1114px;\r\n    position:relative;\r\n    left: 0;\r\n    padding-left: 10px;\r\n    padding-top: 5px;\r\n    box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\r\n    border:2px solid #333;\r\n    border-radius:0 0 5px 5px;\r\n    -webkit-animation:taufik 2s;\r\n    animation:taufik 2s;\r\n}\r\n\r\n/* Tuts */\r\n\r\nul#piano {\r\n  display:block;\r\n  width:100%;\r\n  height:240px;\r\n  border-top:2px solid #222;\r\n}\r\n\r\nul#piano li {\r\n  list-style:none;\r\n  float:left;\r\n  display:inline;\r\n  background:#aaa;\r\n  width:38px;\r\n  position:relative;\r\n  cursor: pointer;\r\n}\r\n\r\nul#piano li a,ul#piano li div.anchor {\r\n  display:block;\r\n  height:220px;\r\n  background:#fff;\r\n  background:linear-gradient(-30deg,#f5f5f5,#fff);\r\n  border:1px solid #ccc;\r\n  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\r\n  border-radius:0 0 3px 3px;\r\n}\r\n\r\nul#piano li.middlec a,ul#piano li.middlec div.anchor {\r\n    background: #dddddd;\r\n}\r\n\r\nul#piano li a:active,ul#piano li div.anchor:active {\r\n  box-shadow:0 2px 2px rgba(0,0,0,0.4);\r\n  position:relative;\r\n  top:2px;\r\n  height:216px;\r\n}\r\n\r\nul#piano li a:active:before,ul#piano li div.anchor:active:before {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent transparent transparent rgba(0,0,0,0.1);\r\n  position:absolute;\r\n  left:0px;\r\n  top:0px;\r\n}\r\n\r\nul#piano li a:active:after,ul#piano li div.anchor:active:after {\r\n  content:\"\";\r\n  width:0px;\r\n  height:0px;\r\n  border-width:216px 5px 0px;\r\n  border-style:solid;\r\n  border-color:transparent rgba(0,0,0,0.1) transparent transparent;\r\n  position:absolute;\r\n  right:0px;\r\n  top:0px;\r\n}\r\n\r\n/* Black Tuts */\r\n\r\nul#piano li span {\r\n  position:absolute;\r\n  top:0px;\r\n  left:-12px;\r\n  width:20px;\r\n  height:120px;\r\n  background:#333;\r\n  background:linear-gradient(-20deg,#333,#000,#333);\r\n  z-index:10;\r\n  border-width:1px 2px 7px;\r\n  border-style:solid;\r\n  border-color:#666 #222 #111 #555;\r\n  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\r\n  border-radius:0 0 2px 2px;\r\n}\r\n\r\nul#piano li span:active {\r\n  border-bottom-width:2px;\r\n  height:123px;\r\n  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n\r\n@keyframes taufik {\r\n  from {opacity:0;}\r\n  to {opacity:1;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FOztBQUVGO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFLZiwrREFBK0Q7SUFDL0QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUdoQixtSUFBbUk7SUFDbkkscUJBQXFCO0lBR3JCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFFM0IsbUJBQW1CO0FBQ3ZCOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBS2YsK0NBQStDO0VBQy9DLHFCQUFxQjtFQUdyQiw4SEFBOEg7RUFHOUgseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBR0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnRUFBZ0U7RUFDaEUsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdFQUFnRTtFQUNoRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBS2YsaURBQWlEO0VBQ2pELFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUdoQyw2RUFBNkU7RUFHN0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFHWix1SEFBdUg7QUFDekg7O0FBRUEsY0FBYzs7QUFDZDtFQUNFLE1BQU0sU0FBUyxDQUFDO0VBQ2hCLElBQUksU0FBUyxDQUFDO0FBQ2hCOztBQUtBO0VBQ0UsTUFBTSxTQUFTLENBQUM7RUFDaEIsSUFBSSxTQUFTLENBQUM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFB1cmUgQ1NTMyBQaWFubyBieSBUYXVmaWsgTnVycm9obWFuXHJcbiAqIE9uOiAxIERlY2VtYmVyIDIwMTFcclxuICogVVJMOiBodHRwOi8vaG9tcGltcGFhbGFpaHVtZ2FtYnJlbmcuYmxvZ3Nwb3QuY29tL1xyXG4gKiBOb3RlOiBUaGlzIGV4cGVyaW1lbnQgaXMgdW5kZXIgdGhlIEdvZCBBbG1pZ2h0eSBMaWNlbnNlLlxyXG4gKiBQbGVhc2UgZG8gbm90IHJlcGxhY2Ugb3IgcmVtb3ZlIHRoZSBhdHRyaWJ1dGlvbiBhYm92ZSBpZiB5b3Ugd2FudCB0byBzYXZlL21vZGlmeSB0aGlzIHByb2plY3QgbGVnYWxseS5cclxuICogR29vZCBsdWNrIVxyXG4gKi9cclxuXHJcbiNwLXdyYXBwZXIgPiAqIHtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxufVxyXG5cclxuI3Atd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDojMDAwO1xyXG4gICAgYmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNjBkZWcsIzAwMCwjMzMzLCMwMDAsIzY2NiwjMzMzIDcwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KC02MGRlZywjMDAwLCMzMzMsIzAwMCwjNjY2LCMzMzMgNzAlKTtcclxuICAgIGJhY2tncm91bmQ6LW1zLWxpbmVhci1ncmFkaWVudCgtNjBkZWcsIzAwMCwjMzMzLCMwMDAsIzY2NiwjMzMzIDcwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCgtNjBkZWcsIzAwMCwjMzMzLCMwMDAsIzY2NiwjMzMzIDcwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgtNjBkZWcsIzAwMCwjMzMzLCMwMDAsIzY2NiwjMzMzIDcwJSk7XHJcbiAgICB3aWR0aDogMTExNHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzowIDJweCAwcHggIzY2NiwwIDNweCAwcHggIzU1NSwwIDRweCAwcHggIzQ0NCwwIDZweCA2cHggIzAwMCxpbnNldCAwIC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KSxpbnNldCAwIC00cHggNXB4ICMwMDA7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MCAycHggMHB4ICM2NjYsMCAzcHggMHB4ICM1NTUsMCA0cHggMHB4ICM0NDQsMCA2cHggNnB4ICMwMDAsaW5zZXQgMCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSksaW5zZXQgMCAtNHB4IDVweCAjMDAwO1xyXG4gICAgYm94LXNoYWRvdzowIDJweCAwcHggIzY2NiwwIDNweCAwcHggIzU1NSwwIDRweCAwcHggIzQ0NCwwIDZweCA2cHggIzAwMCxpbnNldCAwIC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KSxpbnNldCAwIC00cHggNXB4ICMwMDA7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMzMzM7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MCAwIDVweCA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MCAwIDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjAgMCA1cHggNXB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246dGF1ZmlrIDJzO1xyXG4gICAgLW1vei1hbmltYXRpb246dGF1ZmlrIDJzO1xyXG4gICAgYW5pbWF0aW9uOnRhdWZpayAycztcclxufVxyXG5cclxuLyogVHV0cyAqL1xyXG51bCNwaWFubyB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNDBweDtcclxuICBib3JkZXItdG9wOjJweCBzb2xpZCAjMjIyO1xyXG59XHJcblxyXG51bCNwaWFubyBsaSB7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgZGlzcGxheTppbmxpbmU7XHJcbiAgYmFja2dyb3VuZDojYWFhO1xyXG4gIHdpZHRoOjM4cHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCNwaWFubyBsaSBhLHVsI3BpYW5vIGxpIGRpdi5hbmNob3Ige1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgaGVpZ2h0OjIyMHB4O1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0zMGRlZywjZjVmNWY1LCNmZmYpO1xyXG4gIGJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQoLTMwZGVnLCNmNWY1ZjUsI2ZmZik7XHJcbiAgYmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KC0zMGRlZywjZjVmNWY1LCNmZmYpO1xyXG4gIGJhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KC0zMGRlZywjZjVmNWY1LCNmZmYpO1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KC0zMGRlZywjZjVmNWY1LCNmZmYpO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMHB4ICNmZmYsaW5zZXQgMCAtMXB4IDBweCAjZmZmLGluc2V0IDFweCAwcHggMHB4ICNmZmYsaW5zZXQgLTFweCAwcHggMHB4ICNmZmYsMCA0cHggM3B4IHJnYmEoMCwwLDAsMC43KTtcclxuICAtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMHB4ICNmZmYsaW5zZXQgMCAtMXB4IDBweCAjZmZmLGluc2V0IDFweCAwcHggMHB4ICNmZmYsaW5zZXQgLTFweCAwcHggMHB4ICNmZmYsMCA0cHggM3B4IHJnYmEoMCwwLDAsMC43KTtcclxuICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDBweCAjZmZmLGluc2V0IDAgLTFweCAwcHggI2ZmZixpbnNldCAxcHggMHB4IDBweCAjZmZmLGluc2V0IC0xcHggMHB4IDBweCAjZmZmLDAgNHB4IDNweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjAgMCAzcHggM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czowIDAgM3B4IDNweDtcclxuICBib3JkZXItcmFkaXVzOjAgMCAzcHggM3B4O1xyXG59XHJcblxyXG51bCNwaWFubyBsaS5taWRkbGVjIGEsdWwjcGlhbm8gbGkubWlkZGxlYyBkaXYuYW5jaG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbn1cclxuXHJcbnVsI3BpYW5vIGxpIGE6YWN0aXZlLHVsI3BpYW5vIGxpIGRpdi5hbmNob3I6YWN0aXZlIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6MCAycHggMnB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAtbW96LWJveC1zaGFkb3c6MCAycHggMnB4IHJnYmEoMCwwLDAsMC40KTtcclxuICBib3gtc2hhZG93OjAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjJweDtcclxuICBoZWlnaHQ6MjE2cHg7XHJcbn1cclxuXHJcbnVsI3BpYW5vIGxpIGE6YWN0aXZlOmJlZm9yZSx1bCNwaWFubyBsaSBkaXYuYW5jaG9yOmFjdGl2ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICB3aWR0aDowcHg7XHJcbiAgaGVpZ2h0OjBweDtcclxuICBib3JkZXItd2lkdGg6MjE2cHggNXB4IDBweDtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwwLDAsMC4xKTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjBweDtcclxuICB0b3A6MHB4O1xyXG59XHJcblxyXG51bCNwaWFubyBsaSBhOmFjdGl2ZTphZnRlcix1bCNwaWFubyBsaSBkaXYuYW5jaG9yOmFjdGl2ZTphZnRlciB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHdpZHRoOjBweDtcclxuICBoZWlnaHQ6MHB4O1xyXG4gIGJvcmRlci13aWR0aDoyMTZweCA1cHggMHB4O1xyXG4gIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICBib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgcmdiYSgwLDAsMCwwLjEpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjBweDtcclxuICB0b3A6MHB4O1xyXG59XHJcblxyXG4vKiBCbGFjayBUdXRzICovXHJcbnVsI3BpYW5vIGxpIHNwYW4ge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowcHg7XHJcbiAgbGVmdDotMTJweDtcclxuICB3aWR0aDoyMHB4O1xyXG4gIGhlaWdodDoxMjBweDtcclxuICBiYWNrZ3JvdW5kOiMzMzM7XHJcbiAgYmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMjBkZWcsIzMzMywjMDAwLCMzMzMpO1xyXG4gIGJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQoLTIwZGVnLCMzMzMsIzAwMCwjMzMzKTtcclxuICBiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQoLTIwZGVnLCMzMzMsIzAwMCwjMzMzKTtcclxuICBiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCgtMjBkZWcsIzMzMywjMDAwLCMzMzMpO1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KC0yMGRlZywjMzMzLCMwMDAsIzMzMyk7XHJcbiAgei1pbmRleDoxMDtcclxuICBib3JkZXItd2lkdGg6MXB4IDJweCA3cHg7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjojNjY2ICMyMjIgIzExMSAjNTU1O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwcHggLTFweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjQpLDAgMnB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93Omluc2V0IDBweCAtMXB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksMCAycHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuICBib3gtc2hhZG93Omluc2V0IDBweCAtMXB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksMCAycHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjAgMCAycHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MCAwIDJweCAycHg7XHJcbn1cclxuXHJcbnVsI3BpYW5vIGxpIHNwYW46YWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOjJweDtcclxuICBoZWlnaHQ6MTIzcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDBweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksMCAxcHggMHB4IHJnYmEoMCwwLDAsMC44KSwwIDJweCAycHggcmdiYSgwLDAsMCwwLjQpLDAgLTFweCAwcHggIzAwMDtcclxuICAtbW96LWJveC1zaGFkb3c6aW5zZXQgMHB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KSwwIDFweCAwcHggcmdiYSgwLDAsMCwwLjgpLDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNCksMCAtMXB4IDBweCAjMDAwO1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgMHB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KSwwIDFweCAwcHggcmdiYSgwLDAsMCwwLjgpLDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNCksMCAtMXB4IDBweCAjMDAwO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRhdWZpayB7XHJcbiAgZnJvbSB7b3BhY2l0eTowO31cclxuICB0byB7b3BhY2l0eToxO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgdGF1ZmlrIHtcclxuICBmcm9tIHtvcGFjaXR5OjA7fVxyXG4gIHRvIHtvcGFjaXR5OjE7fVxyXG59XHJcbkBrZXlmcmFtZXMgdGF1ZmlrIHtcclxuICBmcm9tIHtvcGFjaXR5OjA7fVxyXG4gIHRvIHtvcGFjaXR5OjE7fVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.ts":
/*!************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.ts ***!
  \************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quiz.service */ "./src/app/core/quiz.service.ts");



let KeyboardComponent = class KeyboardComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.keyPlayed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlightedKeyId = 0;
        quizService.quizResult$.subscribe(result => this.handleQuizResult(result));
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
    ngOnInit() {
    }
    keyPress(keyNumber) {
        this.keyPlayed.emit(keyNumber);
    }
    handleQuizResult(result) {
        console.log("handleQuizResult: " + result);
        if (result.selectedKeyId != result.actualNote.keyId) {
            this.highlightedKeyId = result.actualNote.keyId;
            setTimeout(() => this.highlightedKeyId = 0, 1000);
        }
    }
    getColor(keyId) {
        if (keyId == this.highlightedKeyId) {
            return "#f0e68c";
        }
        else {
            return "";
        }
    }
};
KeyboardComponent.ctorParameters = () => [
    { type: _core_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], KeyboardComponent.prototype, "keyPlayed", void 0);
KeyboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'keyboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./keyboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./keyboard.component.css */ "./src/app/keyboard/keyboard.component.css")).default]
    })
], KeyboardComponent);



/***/ }),

/***/ "./src/app/notation/notation.component.css":
/*!*************************************************!*\
  !*** ./src/app/notation/notation.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n   background-color:#ffffff;\r\n}\r\n\r\n/* >>> is alias for /deep/ which will force style down through the child component tree. */\r\n\r\n/* match all ids that start with rest and hide them*/\r\n\r\n>>> [id^=\"rest\"] {\r\n   display: none;\r\n}\r\n\r\n>>> g.note {\r\n  /*fill: #000;*/ /* Safari */\r\n  transition: fill 0.3s;\r\n}\r\n\r\n>>> g.note:hover {\r\n  fill: #ff9800;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90YXRpb24vbm90YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQSwwRkFBMEY7O0FBQzFGLG9EQUFvRDs7QUFDcEQ7R0FDRyxhQUFhO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYyxFQUNpQixXQUFXO0VBQzFDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbm90YXRpb24vbm90YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLyogPj4+IGlzIGFsaWFzIGZvciAvZGVlcC8gd2hpY2ggd2lsbCBmb3JjZSBzdHlsZSBkb3duIHRocm91Z2ggdGhlIGNoaWxkIGNvbXBvbmVudCB0cmVlLiAqL1xyXG4vKiBtYXRjaCBhbGwgaWRzIHRoYXQgc3RhcnQgd2l0aCByZXN0IGFuZCBoaWRlIHRoZW0qL1xyXG4+Pj4gW2lkXj1cInJlc3RcIl0ge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4+Pj4gZy5ub3RlIHtcclxuICAvKmZpbGw6ICMwMDA7Ki9cclxuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zczsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzO1xyXG59XHJcblxyXG4+Pj4gZy5ub3RlOmhvdmVyIHtcclxuICBmaWxsOiAjZmY5ODAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/notation/notation.component.ts":
/*!************************************************!*\
  !*** ./src/app/notation/notation.component.ts ***!
  \************************************************/
/*! exports provided: NotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotationComponent", function() { return NotationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notation.service */ "./src/app/notation/notation.service.ts");
/* harmony import */ var _core_piano_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/piano.service */ "./src/app/core/piano.service.ts");
/* harmony import */ var _core_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quiz.service */ "./src/app/core/quiz.service.ts");
/* harmony import */ var _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/piano-mode.enum */ "./src/app/core/piano-mode.enum.ts");






let NotationComponent = class NotationComponent {
    constructor(pianoService, notationService, quizService) {
        this.pianoService = pianoService;
        this.notationService = notationService;
        this.quizService = quizService;
        this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
        quizService.quizResult$.subscribe(result => this.handleQuizResult(result));
    }
    ngOnInit() {
        // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
        this.notationAsSVG = this.notationService.renderNotation();
        this.noteColor = [];
    }
    ngAfterViewChecked() {
        let self = this;
        $("g.note").off().on('click', function () { self.noteClicked(this.id); });
        for (let i = 0; i < this.noteColor.length; i++) {
            if (this.noteColor[i]) {
                $("#" + i).attr("fill", this.noteColor[i]);
            }
        }
    }
    handleNotePlayed(note) {
        if (this.mode == _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_5__["PianoMode"].Play) {
            this.notationService.addNote(note);
            this.notationAsSVG = this.notationService.renderNotation();
        }
    }
    handleQuizResult(result) {
        let color = "";
        if (result.selectedKeyId == result.actualNote.keyId) {
            // Correct
            color = "#4CAF50"; // Green
        }
        else {
            // Incorrect
            color = "#f44336"; // Ref
        }
        this.noteColor.push(color);
    }
    noteClicked(id) {
        //console.log('noteClicked: ' + id);
        this.pianoService.playNote(this.notationService.notes[id].noteId);
    }
    clear() {
        this.noteColor.length = 0;
        this.notationService.clear();
        this.notationAsSVG = this.notationService.renderNotation();
    }
    addNote(note) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    }
};
NotationComponent.ctorParameters = () => [
    { type: _core_piano_service__WEBPACK_IMPORTED_MODULE_3__["PianoService"] },
    { type: _notation_service__WEBPACK_IMPORTED_MODULE_2__["NotationService"] },
    { type: _core_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotationComponent.prototype, "mode", void 0);
NotationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'notation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notation/notation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notation.component.css */ "./src/app/notation/notation.component.css")).default]
    })
], NotationComponent);



/***/ }),

/***/ "./src/app/notation/notation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/notation/notation.service.ts ***!
  \**********************************************/
/*! exports provided: NotationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotationService", function() { return NotationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotationService = class NotationService {
    constructor() {
        this.maxNotes = 16;
        this.spacingNotesXml = [];
        this.notes = [];
        this.vrvToolkit = new verovio.toolkit();
        // create hidden notes to ensure the staff is drawn full width. Notes are hidden via css.
        for (let i = 0; i < this.maxNotes; i++) {
            this.spacingNotesXml.push(`<note xml:id="rest-hidden-${i.toString()}" dur="4" oct="6" pname="c" stem.dir="up" />`);
        }
    }
    clear() {
        this.notes.length = 0;
    }
    addNote(note) {
        if (this.notes.length == this.maxNotes) {
            this.notes.length = 0;
        }
        this.notes.push(note);
    }
    renderNotation() {
        let trepleNotesXml = [];
        let bassNotesXml = [];
        for (let i = 0; i < this.notes.length; i++) {
            let noteXml = `<note xml:id="${i}" dur="4" oct="${this.notes[i].octave}" pname="${this.notes[i].name}" ${this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : ''} />`;
            let restXml = `<rest xml:id="rest-${i}" dur="4" oct="${this.notes[i].octave}" pname="${this.notes[i].name}" ${this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : ''}/>`;
            if (this.notes[i].octave > 3) {
                trepleNotesXml.push(noteXml);
                bassNotesXml.push(restXml);
            }
            else {
                trepleNotesXml.push(restXml);
                bassNotesXml.push(noteXml);
            }
        }
        let notationXML = `<?xml version="1.0" encoding="UTF-8"?>
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
                                        ${trepleNotesXml.join("")}
                                  </layer>
                                  <layer xml:id="layer-spacing" n="2">
                                        ${this.spacingNotesXml.join("")}
                                  </layer>
                              </staff>
                              <staff n="2">
                                  <layer xml:id="layer-bass" n="1">
                                        ${bassNotesXml.join("")}
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
};
NotationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotationService);



/***/ }),

/***/ "./src/app/note-info/note-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/note-info/note-info.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n   text-align: center;\r\n   padding: 10px;\r\n}\r\n\r\n.note-card {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin: 20px 10px;\r\n  padding: 0px;\r\n  width: 90px;\r\n   background-color: #FFFFF2;\r\n  color: #0D2534 ;\r\n  border: 2px solid #435D6D ;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.note-card:hover {\r\n   color: #FFFFF2;\r\n  background-color: #617986;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.note-card-or {\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: #435D6D;\r\n  width: 30px;\r\n  padding-top: 50px;\r\n  vertical-align: top;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n  height: 60px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  padding-top: 8px;\r\n}\r\n\r\n.octave {\r\n  display: block;\r\n  font-size: 14px;\r\n  padding: 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1pbmZvL25vdGUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztHQUNWLHlCQUF5QjtFQUMxQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtHQUNHLGNBQWM7RUFDZix5QkFBeUI7RUFDekIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbm90ZS1pbmZvL25vdGUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ub3RlLWNhcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkYyO1xyXG4gIGNvbG9yOiAjMEQyNTM0IDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDM1RDZEIDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ub3RlLWNhcmQ6aG92ZXIge1xyXG4gICBjb2xvcjogI0ZGRkZGMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE3OTg2O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5ub3RlLWNhcmQtb3Ige1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjNDM1RDZEO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5vY3RhdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/note-info/note-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-info/note-info.component.ts ***!
  \**************************************************/
/*! exports provided: NoteInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteInfoComponent", function() { return NoteInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_piano_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/piano.service */ "./src/app/core/piano.service.ts");



let NoteInfoComponent = class NoteInfoComponent {
    constructor(pianoService) {
        this.pianoService = pianoService;
        this.title = "Play";
        this.subscription = pianoService.notePlayed$.subscribe(pianoNote => {
            this.title = "Now playing";
            this.currentNote = pianoNote;
            this.alternateNote = this.pianoService.getAlternateNote(pianoNote.noteId);
        });
    }
    ngOnInit() {
        //console.log("ngOnInit");
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
    playNote(note) {
        //console.log(note);
        this.pianoService.playNote(note.noteId);
    }
};
NoteInfoComponent.ctorParameters = () => [
    { type: _core_piano_service__WEBPACK_IMPORTED_MODULE_2__["PianoService"] }
];
NoteInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'note-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-info/note-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-info.component.css */ "./src/app/note-info/note-info.component.css")).default]
    })
], NoteInfoComponent);



/***/ }),

/***/ "./src/app/play-control/play-control.component.css":
/*!*********************************************************!*\
  !*** ./src/app/play-control/play-control.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n   background-color: #513410;\r\n   font-weight: bold;\r\n}\r\n\r\n#play-btn {\r\n   margin-right: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS1jb250cm9sL3BsYXktY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLHlCQUF5QjtHQUN6QixpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxrQkFBa0I7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wbGF5LWNvbnRyb2wvcGxheS1jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1MTM0MTA7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jcGxheS1idG4ge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/play-control/play-control.component.ts":
/*!********************************************************!*\
  !*** ./src/app/play-control/play-control.component.ts ***!
  \********************************************************/
/*! exports provided: PlayControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayControlComponent", function() { return PlayControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/piano-mode.enum */ "./src/app/core/piano-mode.enum.ts");



let PlayControlComponent = class PlayControlComponent {
    constructor() {
        this.PianoMode = _core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_2__["PianoMode"]; // allows template access to PianoMode enum
        this.modeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handlePlayBtnClick() {
        this.modeSelected.emit(_core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_2__["PianoMode"].Play);
    }
    handleQuizBtnClick() {
        this.modeSelected.emit(_core_piano_mode_enum__WEBPACK_IMPORTED_MODULE_2__["PianoMode"].Quiz);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayControlComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayControlComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayControlComponent.prototype, "modeSelected", void 0);
PlayControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'play-control',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./play-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-control/play-control.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./play-control.component.css */ "./src/app/play-control/play-control.component.css")).default]
    })
], PlayControlComponent);



/***/ }),

/***/ "./src/app/quiz-info/quiz-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-info/quiz-info.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n   text-align: center;\r\n   padding: 10px;\r\n}\r\n\r\n.dropdown {\r\n   padding: 5px;\r\n   margin: 0 0 0 10px;\r\n   width: 100px;\r\n   font-size: 16px;\r\n}\r\n\r\n.score-label {\r\n  display: inline-block;\r\n  width: 100px;\r\n  font-size: 18px;\r\n  padding: 4px;\r\n  margin: 0;\r\n  color: #FFFFF2;\r\n  background-color: #617986;\r\n  border: 2px solid #617986;\r\n}\r\n\r\n.score {\r\n  display: inline-block;\r\n  width: 35px;\r\n  font-size: 18px;\r\n  padding: 4px;\r\n  margin: 0;\r\n  color: #1C3747;\r\n  background-color: #FFFFFF;\r\n  border: 2px solid #617986 ;\r\n}\r\n\r\n.correct {\r\n  color: #FFFFFF;\r\n  background-color: #4CAF50;\r\n  border: 2px solid #4CAF50 ;\r\n}\r\n\r\n.incorrect {\r\n  color: #FFFFFF;\r\n  background-color: #f44336;\r\n  border: 2px solid #f44336 ;\r\n}\r\n\r\n.red { background-color: #f44336; }\r\n\r\n.green { background-color: #4CAF50; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1pbmZvL3F1aXotaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7QUFDaEI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLFlBQVk7R0FDWixlQUFlO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7RUFDVCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBLE9BQU8seUJBQXlCLEVBQUU7O0FBQ2xDLFNBQVMseUJBQXlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9xdWl6LWluZm8vcXVpei1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgIHdpZHRoOiAxMDBweDtcclxuICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc2NvcmUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNGRkZGRjI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNzk4NjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNjE3OTg2O1xyXG59XHJcblxyXG4uc2NvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzFDMzc0NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MTc5ODYgO1xyXG59XHJcblxyXG4uY29ycmVjdCB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwIDtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2IDtcclxufVxyXG5cclxuLnJlZCB7IGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IH1cclxuLmdyZWVuIHsgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/quiz-info/quiz-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-info/quiz-info.component.ts ***!
  \**************************************************/
/*! exports provided: QuizInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizInfoComponent", function() { return QuizInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quiz.service */ "./src/app/core/quiz.service.ts");
/* harmony import */ var _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quiz-status.enum */ "./src/app/core/quiz-status.enum.ts");




let QuizInfoComponent = class QuizInfoComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.QuizStatus = _core_quiz_status_enum__WEBPACK_IMPORTED_MODULE_3__["QuizStatus"]; // allows template access to QuizStatus enum
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscription = quizService.quizResult$.subscribe(result => {
            if (result.selectedKeyId == result.actualNote.keyId) {
                this.message = "\u2714 Correct, well done!";
            }
            else {
                this.message = "\u2718 Incorrect";
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
    handleStartBtnClick(value) {
        this.buttonClicked.emit({ button: 'start', level: value });
    }
    handleTryAgainBtnClick() {
        this.buttonClicked.emit({ button: 'try-again' });
        this.message = "";
    }
};
QuizInfoComponent.ctorParameters = () => [
    { type: _core_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuizInfoComponent.prototype, "correct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuizInfoComponent.prototype, "incorrect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuizInfoComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuizInfoComponent.prototype, "status", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuizInfoComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuizInfoComponent.prototype, "buttonClicked", void 0);
QuizInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quiz-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-info/quiz-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz-info.component.css */ "./src/app/quiz-info/quiz-info.component.css")).default]
    })
], QuizInfoComponent);



/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/safe.pipe.ts ***!
  \*************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
// SafePipe code provided by Kim Biesbjerg
// https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562/5



let SafePipe = class SafePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, type = 'html') {
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\PianoPlay\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);