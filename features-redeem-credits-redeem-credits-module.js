(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-redeem-credits-redeem-credits-module"],{

/***/ "/SpL":
/*!***************************************************************************************!*\
  !*** ./src/app/features/redeem-credits/components/valid/valid-phone-tap.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ValidPhoneTapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidPhoneTapComponent", function() { return ValidPhoneTapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function ValidPhoneTapComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
function ValidPhoneTapComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ValidPhoneTapComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "valid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "transaction"));
} }
class ValidPhoneTapComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid/thank-you');
        }, 1500);
    }
}
ValidPhoneTapComponent.ɵfac = function ValidPhoneTapComponent_Factory(t) { return new (t || ValidPhoneTapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ValidPhoneTapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidPhoneTapComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "invalid-nfc-wrapper"], [1, "col", "invalid-nfc-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-base"], ["src", "assets/svg/nfc-payment-phone-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-background"], ["src", "assets/svg/nfc-payment-wallet-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-beacon"], ["src", "assets/svg/nfc-payment-signal-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-signal"], ["src", "assets/svg/valid-pin-icon.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-icon"], [1, "row", "content-header"], [1, "col", "offset-md-3"], [1, "heading"]], template: function ValidPhoneTapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidPhoneTapComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValidPhoneTapComponent_ng_template_3_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ValidPhoneTapComponent_ng_template_5_Template, 8, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.invalid-nfc-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.invalid-nfc-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 648px;\r\n  margin-top: 30%;\r\n}\r\n\r\n.invalid-nfc-base[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.invalid-nfc-icon[_ngcontent-%COMP%] {\r\n  width: 36%;\r\n  top: 62%;\r\n  left: 53%;\r\n  animation: valid-nfc-animate-icon 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-background[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  top: 2%;\r\n  left: 15%;\r\n}\r\n\r\n.invalid-nfc-beacon[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  top: 24%;\r\n  left: 8%;\r\n  animation: valid-nfc-animate-beacon 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-signal[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  top: 38%;\r\n  left: 54%;\r\n  animation: valid-nfc-animate-signal 4s infinite linear;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 60px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes valid-nfc-animate-icon {\r\n  0%{width: 36%;top: 62%;left: 53%;}\r\n  50%{width: 55%;top: 53%;left: 45%;}\r\n  100%{width: 36%;top: 62%;left: 53%;}\r\n}\r\n\r\n@keyframes valid-nfc-animate-beacon {\r\n  0%{left: 8%;}\r\n  50%{left: 4%;}\r\n  100%{left: 8%;}\r\n}\r\n\r\n@keyframes valid-nfc-animate-signal {\r\n  0%{left: 54%;}\r\n  50%{left: 60%;}\r\n  100%{left: 54%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkLXBob25lLXRhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixRQUFRO0VBQ1Isc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNqQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2xDLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDckM7O0FBRUE7RUFDRSxHQUFHLFFBQVEsQ0FBQztFQUNaLElBQUksUUFBUSxDQUFDO0VBQ2IsS0FBSyxRQUFRLENBQUM7QUFDaEI7O0FBRUE7RUFDRSxHQUFHLFNBQVMsQ0FBQztFQUNiLElBQUksU0FBUyxDQUFDO0VBQ2QsS0FBSyxTQUFTLENBQUM7QUFDakIiLCJmaWxlIjoidmFsaWQtcGhvbmUtdGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWxvZ28tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1JTtcclxuICBsZWZ0OiA3JTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNjQ4cHg7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmFzZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLWljb24ge1xyXG4gIHdpZHRoOiAzNiU7XHJcbiAgdG9wOiA2MiU7XHJcbiAgbGVmdDogNTMlO1xyXG4gIGFuaW1hdGlvbjogdmFsaWQtbmZjLWFuaW1hdGUtaWNvbiA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHRvcDogMiU7XHJcbiAgbGVmdDogMTUlO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmVhY29uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGxlZnQ6IDglO1xyXG4gIGFuaW1hdGlvbjogdmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uIDRzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLXNpZ25hbCB7XHJcbiAgd2lkdGg6IDE2JTtcclxuICB0b3A6IDM4JTtcclxuICBsZWZ0OiA1NCU7XHJcbiAgYW5pbWF0aW9uOiB2YWxpZC1uZmMtYW5pbWF0ZS1zaWduYWwgNHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjgwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtbmZjLWFuaW1hdGUtaWNvbiB7XHJcbiAgMCV7d2lkdGg6IDM2JTt0b3A6IDYyJTtsZWZ0OiA1MyU7fVxyXG4gIDUwJXt3aWR0aDogNTUlO3RvcDogNTMlO2xlZnQ6IDQ1JTt9XHJcbiAgMTAwJXt3aWR0aDogMzYlO3RvcDogNjIlO2xlZnQ6IDUzJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uIHtcclxuICAwJXtsZWZ0OiA4JTt9XHJcbiAgNTAle2xlZnQ6IDQlO31cclxuICAxMDAle2xlZnQ6IDglO31cclxufVxyXG5cclxuQGtleWZyYW1lcyB2YWxpZC1uZmMtYW5pbWF0ZS1zaWduYWwge1xyXG4gIDAle2xlZnQ6IDU0JTt9XHJcbiAgNTAle2xlZnQ6IDYwJTt9XHJcbiAgMTAwJXtsZWZ0OiA1NCU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidPhoneTapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './valid-phone-tap.component.html',
                styleUrls: ['./valid-phone-tap.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "GaLx":
/*!******************************************************************!*\
  !*** ./src/app/features/redeem-credits/redeem-credits.module.ts ***!
  \******************************************************************/
/*! exports provided: RedeemCreditsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemCreditsModule", function() { return RedeemCreditsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invalid/invalid-phone-tap.component */ "sumf");
/* harmony import */ var _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/valid/valid-phone-tap.component */ "/SpL");
/* harmony import */ var _redeem_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-credits-routing.module */ "K3GZ");
/* harmony import */ var _redeem_credits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem-credits.component */ "yOj3");








class RedeemCreditsModule {
}
RedeemCreditsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RedeemCreditsModule });
RedeemCreditsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RedeemCreditsModule_Factory(t) { return new (t || RedeemCreditsModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'redeem-credits' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _redeem_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemCreditsRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RedeemCreditsModule, { declarations: [_redeem_credits_component__WEBPACK_IMPORTED_MODULE_6__["RedeemCreditsComponent"],
        _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__["InvalidPhoneTapComponent"],
        _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_4__["ValidPhoneTapComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _redeem_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemCreditsRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemCreditsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _redeem_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemCreditsRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _redeem_credits_component__WEBPACK_IMPORTED_MODULE_6__["RedeemCreditsComponent"],
                    _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__["InvalidPhoneTapComponent"],
                    _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_4__["ValidPhoneTapComponent"]
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'redeem-credits' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "K3GZ":
/*!**************************************************************************!*\
  !*** ./src/app/features/redeem-credits/redeem-credits-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RedeemCreditsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemCreditsRoutingModule", function() { return RedeemCreditsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invalid/invalid-phone-tap.component */ "sumf");
/* harmony import */ var _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/valid/valid-phone-tap.component */ "/SpL");
/* harmony import */ var _redeem_credits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redeem-credits.component */ "yOj3");







const routes = [
    {
        path: '',
        component: _redeem_credits_component__WEBPACK_IMPORTED_MODULE_4__["RedeemCreditsComponent"]
    },
    {
        path: 'invalid',
        component: _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_2__["InvalidPhoneTapComponent"]
    },
    {
        path: 'valid',
        component: _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__["ValidPhoneTapComponent"]
    }
];
class RedeemCreditsRoutingModule {
}
RedeemCreditsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RedeemCreditsRoutingModule });
RedeemCreditsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RedeemCreditsRoutingModule_Factory(t) { return new (t || RedeemCreditsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RedeemCreditsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemCreditsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sumf":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/redeem-credits/components/invalid/invalid-phone-tap.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: InvalidPhoneTapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidPhoneTapComponent", function() { return InvalidPhoneTapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function InvalidPhoneTapComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
function InvalidPhoneTapComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvalidPhoneTapComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "invalid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "transaction"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "msg"), "");
} }
class InvalidPhoneTapComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid');
        }, 1500);
    }
}
InvalidPhoneTapComponent.ɵfac = function InvalidPhoneTapComponent_Factory(t) { return new (t || InvalidPhoneTapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InvalidPhoneTapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvalidPhoneTapComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "invalid-nfc-wrapper"], [1, "col", "invalid-nfc-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-base"], ["src", "assets/svg/nfc-payment-phone-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-background"], ["src", "assets/svg/nfc-payment-wallet-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-beacon"], ["src", "assets/svg/nfc-payment-signal-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-signal"], ["src", "assets/svg/invalid-pin-icon.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-icon"], [1, "row", "content-header"], [1, "col", "offset-md-3"], [1, "heading"], [1, "spacer"], [1, "row"], [1, "col", "offset-md-3", "pb-5"], [1, "position-relative", "py-3"], [1, "small-heading", "font-size-30", "mb-3"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"]], template: function InvalidPhoneTapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvalidPhoneTapComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvalidPhoneTapComponent_ng_template_3_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvalidPhoneTapComponent_ng_template_5_Template, 16, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.invalid-nfc-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.invalid-nfc-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 648px;\r\n  margin-top: 30%;\r\n}\r\n\r\n.invalid-nfc-base[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.invalid-nfc-icon[_ngcontent-%COMP%] {\r\n  width: 36%;\r\n  top: 62%;\r\n  left: 53%;\r\n  animation: invalid-nfc-animate-icon 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-background[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  top: 2%;\r\n  left: 15%;\r\n}\r\n\r\n.invalid-nfc-beacon[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  top: 24%;\r\n  left: 8%;\r\n  animation: invalid-nfc-animate-beacon 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-signal[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  top: 38%;\r\n  left: 54%;\r\n  animation: invalid-nfc-animate-signal 4s infinite linear;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 60px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes invalid-nfc-animate-icon {\r\n  0%{width: 36%;top: 62%;left: 53%;}\r\n  50%{width: 29%;top: 65%;left: 56%;}\r\n  100%{width: 36%;top: 62%;left: 53%;}\r\n}\r\n\r\n@keyframes invalid-nfc-animate-beacon {\r\n  0%{left: 8%;}\r\n  50%{left: 4%;}\r\n  100%{left: 8%;}\r\n}\r\n\r\n@keyframes invalid-nfc-animate-signal {\r\n  0%{left: 54%;}\r\n  50%{left: 60%;}\r\n  100%{left: 54%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmFsaWQtcGhvbmUtdGFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFFBQVE7RUFDUix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2pDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDbEMsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNyQzs7QUFFQTtFQUNFLEdBQUcsUUFBUSxDQUFDO0VBQ1osSUFBSSxRQUFRLENBQUM7RUFDYixLQUFLLFFBQVEsQ0FBQztBQUNoQjs7QUFFQTtFQUNFLEdBQUcsU0FBUyxDQUFDO0VBQ2IsSUFBSSxTQUFTLENBQUM7RUFDZCxLQUFLLFNBQVMsQ0FBQztBQUNqQiIsImZpbGUiOiJpbnZhbGlkLXBob25lLXRhcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgbGVmdDogNyU7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtd3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1pbWFnZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDY0OHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLWJhc2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1pY29uIHtcclxuICB3aWR0aDogMzYlO1xyXG4gIHRvcDogNjIlO1xyXG4gIGxlZnQ6IDUzJTtcclxuICBhbmltYXRpb246IGludmFsaWQtbmZjLWFuaW1hdGUtaWNvbiA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHRvcDogMiU7XHJcbiAgbGVmdDogMTUlO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmVhY29uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGxlZnQ6IDglO1xyXG4gIGFuaW1hdGlvbjogaW52YWxpZC1uZmMtYW5pbWF0ZS1iZWFjb24gNHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtc2lnbmFsIHtcclxuICB3aWR0aDogMTYlO1xyXG4gIHRvcDogMzglO1xyXG4gIGxlZnQ6IDU0JTtcclxuICBhbmltYXRpb246IGludmFsaWQtbmZjLWFuaW1hdGUtc2lnbmFsIDRzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmdyYWRpZW50LWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDI4MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludmFsaWQtbmZjLWFuaW1hdGUtaWNvbiB7XHJcbiAgMCV7d2lkdGg6IDM2JTt0b3A6IDYyJTtsZWZ0OiA1MyU7fVxyXG4gIDUwJXt3aWR0aDogMjklO3RvcDogNjUlO2xlZnQ6IDU2JTt9XHJcbiAgMTAwJXt3aWR0aDogMzYlO3RvcDogNjIlO2xlZnQ6IDUzJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW52YWxpZC1uZmMtYW5pbWF0ZS1iZWFjb24ge1xyXG4gIDAle2xlZnQ6IDglO31cclxuICA1MCV7bGVmdDogNCU7fVxyXG4gIDEwMCV7bGVmdDogOCU7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludmFsaWQtbmZjLWFuaW1hdGUtc2lnbmFsIHtcclxuICAwJXtsZWZ0OiA1NCU7fVxyXG4gIDUwJXtsZWZ0OiA2MCU7fVxyXG4gIDEwMCV7bGVmdDogNTQlO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvalidPhoneTapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './invalid-phone-tap.component.html',
                styleUrls: ['./invalid-phone-tap.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "yOj3":
/*!*********************************************************************!*\
  !*** ./src/app/features/redeem-credits/redeem-credits.component.ts ***!
  \*********************************************************************/
/*! exports provided: RedeemCreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemCreditsComponent", function() { return RedeemCreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");






function RedeemCreditsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedeemCreditsComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "poweredBy"), " ");
} }
function RedeemCreditsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedeemCreditsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedeemCreditsComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.invalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "please"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "yourPhone"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "toPay"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "amountDue"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, "credits"), " ");
} }
class RedeemCreditsComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
    valid() {
        this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/valid');
    }
    invalid() {
        this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits/invalid');
    }
}
RedeemCreditsComponent.ɵfac = function RedeemCreditsComponent_Factory(t) { return new (t || RedeemCreditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
RedeemCreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedeemCreditsComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "redeem-credits-wrapper"], [1, "col", "redeem-credits-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "redeem-credits-base"], ["src", "assets/svg/redeem-credits-phone-icon.svg", "alt", "image", 1, "position-absolute", "redeem-credits-phone"], ["src", "assets/svg/redeem-credits-signal.svg", "alt", "image", 1, "position-absolute", "redeem-credits-signal"], [1, "row", "content-header", 3, "click"], [1, "col", "offset-md-3"], [1, "heading"], [1, "row"], [1, "col", "offset-md-3", "pb-5"], [1, "position-relative"], [1, "small-heading", "mb-3"], [1, "currency"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"]], template: function RedeemCreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RedeemCreditsComponent_ng_template_1_Template, 6, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RedeemCreditsComponent_ng_template_3_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedeemCreditsComponent_ng_template_5_Template, 22, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.redeem-credits-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.redeem-credits-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 648px;\r\n  margin-top: 30%;\r\n}\r\n\r\n.redeem-credits-base[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.redeem-credits-phone[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  top: 13%;\r\n  left: 17%;\r\n  animation: redeem-rotate-sideways 3s infinite linear;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.redeem-credits-signal[_ngcontent-%COMP%] {\r\n  top: 16%;\r\n  left: 21%;\r\n  animation: redeem-signal-grow 3s infinite linear;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  padding-bottom: 250px;\r\n  cursor: pointer;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes redeem-rotate-sideways {\r\n  0%{transform: rotate(0deg);}\r\n  100%{transform: rotate(-50deg);}\r\n}\r\n\r\n@keyframes redeem-signal-grow {\r\n  0%{top: 16%; left: 21%; width: 11%;}\r\n  100%{top: 10%; left: 14%; width: 22%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1jcmVkaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULG9EQUFvRDtFQUNwRCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdEQUFnRDtFQUNoRCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLEdBQUcsdUJBQXVCLENBQUM7RUFDM0IsS0FBSyx5QkFBeUIsQ0FBQztBQUNqQzs7QUFFQTtFQUNFLEdBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDbkMsS0FBSyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUN2QyIsImZpbGUiOiJyZWRlZW0tY3JlZGl0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgbGVmdDogNyU7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5mb250LXNpemUtMzAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnJlZGVlbS1jcmVkaXRzLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucmVkZWVtLWNyZWRpdHMtaW1hZ2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA2NDhweDtcclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuXHJcbi5yZWRlZW0tY3JlZGl0cy1iYXNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4ucmVkZWVtLWNyZWRpdHMtcGhvbmUge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgdG9wOiAxMyU7XHJcbiAgbGVmdDogMTclO1xyXG4gIGFuaW1hdGlvbjogcmVkZWVtLXJvdGF0ZS1zaWRld2F5cyAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4ucmVkZWVtLWNyZWRpdHMtc2lnbmFsIHtcclxuICB0b3A6IDE2JTtcclxuICBsZWZ0OiAyMSU7XHJcbiAgYW5pbWF0aW9uOiByZWRlZW0tc2lnbmFsLWdyb3cgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjgwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVkZWVtLXJvdGF0ZS1zaWRld2F5cyB7XHJcbiAgMCV7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVkZWVtLXNpZ25hbC1ncm93IHtcclxuICAwJXt0b3A6IDE2JTsgbGVmdDogMjElOyB3aWR0aDogMTElO31cclxuICAxMDAle3RvcDogMTAlOyBsZWZ0OiAxNCU7IHdpZHRoOiAyMiU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemCreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './redeem-credits.component.html',
                styleUrls: ['./redeem-credits.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-redeem-credits-redeem-credits-module.js.map