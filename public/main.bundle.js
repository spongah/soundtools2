webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".main {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".chakratuner {\n\tdisplay: inline-block;\n\tmin-width: 325px;\n\theight: 365px;\n\twidth: 50vw;\n\tborder: 1px solid black;\n\tborder-radius: 5%;\n}\n\n.tunercontainer {\n\n}\n\n.tunertable {\n\twidth: 100%;\n}\n\n.keys {\n\tfont-size: 2em;\n\tpadding: 0px 15px 0px 15px;\n}\n\n.tableslider {\n\tpadding: 5px 0px 0px 5px;\n}\n\n.tdslider {\n\tpadding-top: 22px;\n\tpadding-bottom: 22px;\n}\n\n#slider-1, #slider-2 {\n\twidth: 90%\n}\n\n.tdlabel {\n\twidth: 200px;\n\ttext-align: left;\n\tpadding-left: 10px;\n}\n\n.tdlabel input{\n\twidth: 79px;\n\tfont-size: 1.5em;\n\ttext-align: center;\n}\n\n.key {\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tcursor: pointer;\n}\n\n.keyactive {\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\tcolor: white;\n\tbackground-color: green;\n}\n\n.keyoctave {\n\tfont-size: 0.6em;\n}\n\n.keynote {\n\tfont-size: 1.3em;\n}\n\n.keyfrequency {\n\tfont-size: 0.2em;\n\tfont-style: italic;\n\tcolor: #AAAAAA;\n}\n\n.freqslider {\n\n}\n\n.freqslider h3 {\n\tpadding-bottom: 0px;\n}\n\n.frequency input {\n\tmargin-top: 1vw;\n\tfont-size: 6em;\n\tborder: 0px solid black;\n\tborder-radius: 10px;\n  padding-left: 1.5vw;\n  text-align: center;\n}\n\n.frequency input:focus {\n\toutline: none;\n}\n\n@media (max-width: 960px){\n\t.keynote {\n\t\tfont-size: 1em;\n\t}\n}\n\n@media (max-width: 720px){\n\t.keynote {\n\t\tfont-size: .75em\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>Sound Tools</h1>\n  <app-chakratuner></app-chakratuner>\n</div>\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<h3>Chakra Tuner</h3>\n<div class=\"chakratuner\">\n  <div class=\"tunercontainer\">\n    <table class=\"tunertable tableslider\">\n      <tr>\n        <td class=\"tdlabel\">Master Tuning: <input type=\"number\" min=\"220\" max=\"880\" [(ngModel)]=\"masterfreq\" (ngModelChange)=\"masterChange()\"></td>\n        <td class=\"tdslider\">\n          <div class=\"ui-slider\">\n            <input type=\"range\" name=\"mastertune\" id=\"slider-1\" min=\"220\" max=\"880\" step=\"1\" value=\"440\" [(ngModel)]=\"masterfreq\" (ngModelChange)=\"masterChange()\">\n          </div>\n        </td>\n      </tr>\n    </table>\n    <table class=\"tunertable keys\">\n      <tr>\n        <td *ngFor=\"let key of keyfreqs\" [ngClass]=\"{ 'keyactive': (key.active), 'key': (!key.active) }\" (click)=\"keyClick(key);\">\n          <div class=\"keyoctave\"></div>\n          <div class=\"keynote\">{{key.key}}{{key.octave}}</div>\n        </td>\n      </tr>\n      <tr>\n        <td *ngFor=\"let key of keyfreqs\">\n          <div class=\"keyfrequency\">{{key.value}}</div>\n        </td>\n      </tr>\n    </table>\n    <div class=\"freqslider\">\n      <h3>Frequency:  </h3>\n      <div class=\"ui-slider\">\n        <input type=\"range\" name=\"slider-2\" id=\"slider-2\" min=\"44\" max=\"4400\" step=\"1\" value=\"440\" [(ngModel)]=\"calcfreq\" (ngModelChange)=\"freqChange()\">\n      </div>\n    </div>\n    <div class=\"frequency\">\n      <input type=\"number\" min=\"44\" max=\"4400\" [(ngModel)]=\"calcfreq\" (ngModelChange)=\"freqChange()\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(135)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chakratuner_chakratuner_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_chakratuner_chakratuner_component__["a" /* ChakratunerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChakratunerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChakratunerComponent = (function () {
    function ChakratunerComponent() {
    }
    ChakratunerComponent.prototype.Constructor = function () {
    };
    ChakratunerComponent.prototype.ngOnInit = function () {
        this.masterfreq = 440;
        this.calcfreq = 440;
        this.masteroctave = 4;
        this.keyfreqs = [
            { key: "C", offset: -9, octave: 3 },
            { key: "D", offset: -7, octave: 3 },
            { key: "E", offset: -5, octave: 3 },
            { key: "F", offset: -4, octave: 3 },
            { key: "G", offset: -2, octave: 3 },
            { key: "A", offset: 0, octave: 4, active: true },
            { key: "B", offset: 2, octave: 4 }
        ];
        this.TWELTH_ROOT = Math.pow(2, (1 / 12));
        this.masterChange();
    };
    ChakratunerComponent.prototype.masterChange = function () {
        this.updateKeyFreqs(); /* set frequencies of each key */
        this.updateKeyOctaves(); /* set octaves of each key */
        this.activateKey("A"); /* light up A key */
    };
    ChakratunerComponent.prototype.freqChange = function () {
        this.updateKeyOctaves(); /* set octaves according to frequency slider */
        this.activateClosestKey();
        /* there should be a function here that lights up the nearest key relative to master octave */
    };
    ChakratunerComponent.prototype.keyClick = function (key) {
        /* this should actually pull a recalculated frequency based on the key.octave */
        this.calcfreq = key.value;
        this.updateKeyOctaves(); /* this currently resets octaves back to 3 and 4 */
        this.activateKey(key.key); /* light up key when clicked */
    };
    ChakratunerComponent.prototype.activateKey = function (keyNote) {
        this.keyfreqs.map(function (key) {
            key.active = (key.key == keyNote) ? true : false;
        });
    };
    ChakratunerComponent.prototype.updateKeyFreqs = function () {
        var _this = this;
        this.keyfreqs.map(function (key) {
            /* calculate the frequency based on master frequency and key.offset */
            key.value = Math.round(_this.masterfreq * Math.pow(_this.TWELTH_ROOT, key.offset));
        });
        this.calcfreq = this.masterfreq; /* set frequency slider to master frequency */
    };
    ChakratunerComponent.prototype.updateKeyOctaves = function () {
        var _this = this;
        this.keyfreqs.map(function (key) {
            var oct_top = key.value * 2;
            var oct_bottom = Math.round(key.value / 2);
            var calculatedoctave = key.octave;
            while (_this.calcfreq > oct_top) {
                oct_top = oct_top * 2;
                calculatedoctave++;
            }
            while (oct_bottom >= _this.calcfreq) {
                oct_bottom = oct_bottom - Math.round(oct_bottom / 2);
                calculatedoctave--;
            }
            var octavediff = calculatedoctave - key.octave;
            var freqdiff = key.value;
            while (octavediff < 0) {
                freqdiff = Math.round(freqdiff / 2);
                octavediff++;
            }
            while (octavediff > 0) {
                freqdiff = freqdiff * 2;
                octavediff--;
            }
            key.value = freqdiff;
            key.octave = calculatedoctave;
            if (key.key == "A") {
                _this.masteroctave = calculatedoctave;
            }
        });
    };
    ChakratunerComponent.prototype.activateClosestKey = function () {
        var _this = this;
        var closestKey = this.keyfreqs.find(function (key) { return key.active == true; });
        var keyDifference = Math.abs(this.calcfreq - closestKey.value);
        this.keyfreqs.map(function (key) {
            keyDifference = Math.abs(_this.calcfreq - closestKey.value);
            if (Math.abs(_this.calcfreq - key.value) < keyDifference) {
                closestKey = key;
            }
            key.active = false;
        });
        closestKey.active = true;
    };
    return ChakratunerComponent;
}());
ChakratunerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-chakratuner',
        template: __webpack_require__(138),
        styles: [__webpack_require__(136)]
    })
], ChakratunerComponent);

//# sourceMappingURL=chakratuner.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[163]);
//# sourceMappingURL=main.bundle.js.map