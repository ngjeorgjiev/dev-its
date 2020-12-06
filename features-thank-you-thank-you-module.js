(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-thank-you-thank-you-module"],{

/***/ "/S/K":
/*!********************************************************!*\
  !*** ./src/app/features/thank-you/thank-you.module.ts ***!
  \********************************************************/
/*! exports provided: ThankYouModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouModule", function() { return ThankYouModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you-routing.module */ "wbvo");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thank-you.component */ "WuYa");






class ThankYouModule {
}
ThankYouModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThankYouModule });
ThankYouModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThankYouModule_Factory(t) { return new (t || ThankYouModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'thank-you' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThankYouModule, { declarations: [_thank_you_component__WEBPACK_IMPORTED_MODULE_4__["ThankYouComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _thank_you_component__WEBPACK_IMPORTED_MODULE_4__["ThankYouComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'thank-you' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "WuYa":
/*!***********************************************************!*\
  !*** ./src/app/features/thank-you/thank-you.component.ts ***!
  \***********************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");




function ThankYouComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
function ThankYouComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThankYouComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "thankYou"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "forUsing"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "ourServices"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "keepYourReceipt"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "return"), " X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, "minutes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 19, "andGetReward"), " SAR X");
} }
class ThankYouComponent {
    constructor() {
        this.returnTime = 'X minutes';
        this.rewardMoney = 'X';
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "thank-you-wrapper"], [1, "col", "thank-you-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/box-wrapper-header-large.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/box-wrapper-header-small.svg", "alt", "image", 1, "position-absolute", "thank-you-base-tip"], ["src", "assets/svg/thank-you-receipt.svg", "alt", "image", 1, "position-absolute", "thank-you-card"], [1, "row", "content-header"], [1, "col", "offset-md-3"], [1, "heading"], [1, "row"], [1, "col", "offset-md-3", "pb-5"], [1, "position-relative", "py-3"], [1, "small-heading", "font-size-30", "mb-3"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "position-relative"], [1, "font-size-30"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThankYouComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThankYouComponent_ng_template_3_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ThankYouComponent_ng_template_5_Template, 28, 21, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_1__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.thank-you-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.thank-you-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 648px;\r\n  margin-top: 30%;\r\n}\r\n\r\n.thank-you-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  left: 21%;\r\n  top: -40%;\r\n  animation: animate-down 4s infinite linear;\r\n}\r\n\r\n.thank-you-base[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-base-tip[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  padding-bottom: 250px;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes animate-down {\r\n  0%{top:-40%;}\r\n  20%{top:0%;}\r\n  40%{top:20%;}\r\n  60%{top:20%; opacity: 0.8}\r\n  80%{top:60%; opacity: 0.4}\r\n  100%{top:100%; opacity: 0.2}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLEdBQUcsMEJBQTBCO0VBQzdCLElBQUksNEJBQTRCO0VBQ2hDLEtBQUssMEJBQTBCO0FBQ2pDOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLEdBQUcsUUFBUSxDQUFDO0VBQ1osSUFBSSxNQUFNLENBQUM7RUFDWCxJQUFJLE9BQU8sQ0FBQztFQUNaLElBQUksT0FBTyxFQUFFLFlBQVk7RUFDekIsSUFBSSxPQUFPLEVBQUUsWUFBWTtFQUN6QixLQUFLLFFBQVEsRUFBRSxZQUFZO0FBQzdCIiwiZmlsZSI6InRoYW5rLXlvdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgbGVmdDogNyU7XHJcbn1cclxuXHJcbi5mb250LXNpemUtMzAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRoYW5rLXlvdS13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1pbWFnZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDY0OHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi50aGFuay15b3UtY2FyZCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBsZWZ0OiAyMSU7XHJcbiAgdG9wOiAtNDAlO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZS1kb3duIDRzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1iYXNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4udGhhbmsteW91LWJhc2UtdGlwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IC0yJTtcclxuICB6LWluZGV4OiAyNTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnQtc3ByZWFkIHtcclxuICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cclxuICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cclxuICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MWRlZywgI2ZmZmZmZiwgIzMzMzMzMyk7XHJcbiAgYW5pbWF0aW9uOiBncmFkaWVudC1zcHJlYWQgNHMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDI4MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtZG93biB7XHJcbiAgMCV7dG9wOi00MCU7fVxyXG4gIDIwJXt0b3A6MCU7fVxyXG4gIDQwJXt0b3A6MjAlO31cclxuICA2MCV7dG9wOjIwJTsgb3BhY2l0eTogMC44fVxyXG4gIDgwJXt0b3A6NjAlOyBvcGFjaXR5OiAwLjR9XHJcbiAgMTAwJXt0b3A6MTAwJTsgb3BhY2l0eTogMC4yfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './thank-you.component.html',
                styleUrls: ['./thank-you.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wbvo":
/*!****************************************************************!*\
  !*** ./src/app/features/thank-you/thank-you-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ThankYouRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouRoutingModule", function() { return ThankYouRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.component */ "WuYa");





const routes = [
    {
        path: '',
        component: _thank_you_component__WEBPACK_IMPORTED_MODULE_2__["ThankYouComponent"]
    },
];
class ThankYouRoutingModule {
}
ThankYouRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThankYouRoutingModule });
ThankYouRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThankYouRoutingModule_Factory(t) { return new (t || ThankYouRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThankYouRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-thank-you-thank-you-module.js.map