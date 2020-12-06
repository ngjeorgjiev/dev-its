(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-mobile-thank-you-thank-you-module"],{

/***/ "2jC2":
/*!***********************************************************************!*\
  !*** ./src/app/features-mobile/thank-you/thank-you-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThankYouRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouRoutingModule", function() { return ThankYouRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.component */ "rK5s");





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


/***/ }),

/***/ "G/Km":
/*!***************************************************************!*\
  !*** ./src/app/features-mobile/thank-you/thank-you.module.ts ***!
  \***************************************************************/
/*! exports provided: ThankYouModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouModule", function() { return ThankYouModule; });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you-routing.module */ "2jC2");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thank-you.component */ "rK5s");






class ThankYouModule {
}
ThankYouModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ThankYouModule });
ThankYouModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ThankYouModule_Factory(t) { return new (t || ThankYouModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_SCOPE"], useValue: 'thank-you' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ThankYouModule, { declarations: [_thank_you_component__WEBPACK_IMPORTED_MODULE_4__["ThankYouComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThankYouModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThankYouRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]
                ],
                declarations: [
                    _thank_you_component__WEBPACK_IMPORTED_MODULE_4__["ThankYouComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_SCOPE"], useValue: 'thank-you' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "rK5s":
/*!******************************************************************!*\
  !*** ./src/app/features-mobile/thank-you/thank-you.component.ts ***!
  \******************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");




function ThankYouComponent_ng_template_1_Template(rf, ctx) { }
function ThankYouComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "thankYou"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "forUsing"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ourServices"), "");
} }
function ThankYouComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "keepYourReceipt"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "return"), " X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "minutes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "andGetReward"), " SAR X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "poweredBy"), " ");
} }
class ThankYouComponent {
    constructor() {
        this.returnTime = 'X minutes';
        this.rewardMoney = 'X';
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", "w-100", "text-center"], [1, "w-100"], [1, "row", "thank-you-wrapper"], [1, "col", "thank-you-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/box-wrapper-header-large.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/box-wrapper-header-small.svg", "alt", "image", 1, "position-absolute", "thank-you-base-tip"], ["src", "assets/svg/thank-you-receipt.svg", "alt", "image", 1, "position-absolute", "thank-you-card"], [1, "row"], [1, "pb-5", "w-100", "text-center"], [1, "position-relative", "py-3"], [1, "small-heading", "font-size-30", "mb-3"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "position-relative", "w-100", "text-center"], [1, "font-size-30"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThankYouComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThankYouComponent_ng_template_3_Template, 14, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ThankYouComponent_ng_template_5_Template, 20, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_1__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.thank-you-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin: 15% 0;\r\n}\r\n\r\n.thank-you-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  left: 16%;\r\n  top: -40%;\r\n  animation: animate-down 4s infinite linear;\r\n}\r\n\r\n.thank-you-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-base-tip[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 50px;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes animate-down {\r\n  0%{top:-40%;}\r\n  20%{top:0%;}\r\n  40%{top:20%;}\r\n  60%{top:20%; opacity: 0.8}\r\n  80%{top:60%; opacity: 0.4}\r\n  100%{top:100%; opacity: 0.2}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsR0FBRywwQkFBMEI7RUFDN0IsSUFBSSw0QkFBNEI7RUFDaEMsS0FBSywwQkFBMEI7QUFDakM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsR0FBRyxRQUFRLENBQUM7RUFDWixJQUFJLE1BQU0sQ0FBQztFQUNYLElBQUksT0FBTyxDQUFDO0VBQ1osSUFBSSxPQUFPLEVBQUUsWUFBWTtFQUN6QixJQUFJLE9BQU8sRUFBRSxZQUFZO0VBQ3pCLEtBQUssUUFBUSxFQUFFLFlBQVk7QUFDN0IiLCJmaWxlIjoidGhhbmsteW91LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWxvZ28tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG59XHJcblxyXG4uZm9udC1zaXplLTMwIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50aGFuay15b3UtaW1hZ2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAzODVweDtcclxuICBtYXJnaW46IDE1JSAwO1xyXG59XHJcblxyXG4udGhhbmsteW91LWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1jYXJkIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGxlZnQ6IDE2JTtcclxuICB0b3A6IC00MCU7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlLWRvd24gNHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4udGhhbmsteW91LWJhc2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1iYXNlLXRpcCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IC0yJTtcclxuICB6LWluZGV4OiAyNTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIGgxIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50LXNwcmVhZCB7XHJcbiAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbiAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XHJcbiAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzFkZWcsICNmZmZmZmYsICMzMzMzMzMpO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQtc3ByZWFkIDRzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyODBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlLWRvd24ge1xyXG4gIDAle3RvcDotNDAlO31cclxuICAyMCV7dG9wOjAlO31cclxuICA0MCV7dG9wOjIwJTt9XHJcbiAgNjAle3RvcDoyMCU7IG9wYWNpdHk6IDAuOH1cclxuICA4MCV7dG9wOjYwJTsgb3BhY2l0eTogMC40fVxyXG4gIDEwMCV7dG9wOjEwMCU7IG9wYWNpdHk6IDAuMn1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './thank-you.component.html',
                styleUrls: ['./thank-you.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-mobile-thank-you-thank-you-module.js.map