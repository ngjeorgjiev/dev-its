(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-mobile-redeem-credits-redeem-credits-module"],{

/***/ "AjC0":
/*!**********************************************************************************************!*\
  !*** ./src/app/features-mobile/redeem-credits/components/valid/valid-phone-tap.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ValidPhoneTapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidPhoneTapComponent", function() { return ValidPhoneTapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function ValidPhoneTapComponent_ng_template_1_Template(rf, ctx) { }
function ValidPhoneTapComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidPhoneTapComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.valid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "valid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "transaction"));
} }
function ValidPhoneTapComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
class ValidPhoneTapComponent {
    constructor(router) {
        this.router = router;
    }
    valid() {
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits/valid/thank-you');
    }
}
ValidPhoneTapComponent.ɵfac = function ValidPhoneTapComponent_Factory(t) { return new (t || ValidPhoneTapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ValidPhoneTapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidPhoneTapComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "invalid-nfc-wrapper"], [1, "col", "invalid-nfc-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-base"], ["src", "assets/svg/nfc-payment-phone-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-background"], ["src", "assets/svg/nfc-payment-wallet-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-beacon"], ["src", "assets/svg/nfc-payment-signal-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-signal"], ["src", "assets/svg/valid-pin-icon.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-icon"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function ValidPhoneTapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidPhoneTapComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValidPhoneTapComponent_ng_template_3_Template, 14, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ValidPhoneTapComponent_ng_template_5_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 50px 0;\r\n}\r\n\r\n.invalid-nfc-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.invalid-nfc-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.invalid-nfc-icon[_ngcontent-%COMP%] {\r\n  width: 36%;\r\n  top: 60%;\r\n  left: 46%;\r\n  animation: valid-nfc-animate-icon-mobile 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-background[_ngcontent-%COMP%] {\r\n  width: 63%;\r\n  top: 2%;\r\n  left: 15%;\r\n}\r\n\r\n.invalid-nfc-beacon[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  top: 24%;\r\n  left: 8%;\r\n  animation: valid-nfc-animate-beacon-mobile 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-signal[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  top: 38%;\r\n  left: 54%;\r\n  animation: valid-nfc-animate-signal-mobile 4s infinite linear;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 60px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes valid-nfc-animate-icon-mobile {\r\n  0%{width: 36%;top: 60%;left: 46%;}\r\n  50%{width: 48%;top: 55%;left: 43%;}\r\n  100%{width: 36%;top: 60%;left: 46%;}\r\n}\r\n\r\n@keyframes valid-nfc-animate-beacon-mobile {\r\n  0%{left: 8%;}\r\n  50%{left: 4%;}\r\n  100%{left: 8%;}\r\n}\r\n\r\n@keyframes valid-nfc-animate-signal-mobile {\r\n  0%{left: 54%;}\r\n  50%{left: 60%;}\r\n  100%{left: 54%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkLXBob25lLXRhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFFBQVE7RUFDUiw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2pDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDbEMsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNyQzs7QUFFQTtFQUNFLEdBQUcsUUFBUSxDQUFDO0VBQ1osSUFBSSxRQUFRLENBQUM7RUFDYixLQUFLLFFBQVEsQ0FBQztBQUNoQjs7QUFFQTtFQUNFLEdBQUcsU0FBUyxDQUFDO0VBQ2IsSUFBSSxTQUFTLENBQUM7RUFDZCxLQUFLLFNBQVMsQ0FBQztBQUNqQiIsImZpbGUiOiJ2YWxpZC1waG9uZS10YXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1pbWFnZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDM4NXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1JSAwO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmFzZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtaWNvbiB7XHJcbiAgd2lkdGg6IDM2JTtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiA0NiU7XHJcbiAgYW5pbWF0aW9uOiB2YWxpZC1uZmMtYW5pbWF0ZS1pY29uLW1vYmlsZSA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogNjMlO1xyXG4gIHRvcDogMiU7XHJcbiAgbGVmdDogMTUlO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmVhY29uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGxlZnQ6IDglO1xyXG4gIGFuaW1hdGlvbjogdmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uLW1vYmlsZSA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1zaWduYWwge1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgdG9wOiAzOCU7XHJcbiAgbGVmdDogNTQlO1xyXG4gIGFuaW1hdGlvbjogdmFsaWQtbmZjLWFuaW1hdGUtc2lnbmFsLW1vYmlsZSA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyODBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB2YWxpZC1uZmMtYW5pbWF0ZS1pY29uLW1vYmlsZSB7XHJcbiAgMCV7d2lkdGg6IDM2JTt0b3A6IDYwJTtsZWZ0OiA0NiU7fVxyXG4gIDUwJXt3aWR0aDogNDglO3RvcDogNTUlO2xlZnQ6IDQzJTt9XHJcbiAgMTAwJXt3aWR0aDogMzYlO3RvcDogNjAlO2xlZnQ6IDQ2JTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uLW1vYmlsZSB7XHJcbiAgMCV7bGVmdDogOCU7fVxyXG4gIDUwJXtsZWZ0OiA0JTt9XHJcbiAgMTAwJXtsZWZ0OiA4JTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtbmZjLWFuaW1hdGUtc2lnbmFsLW1vYmlsZSB7XHJcbiAgMCV7bGVmdDogNTQlO31cclxuICA1MCV7bGVmdDogNjAlO31cclxuICAxMDAle2xlZnQ6IDU0JTt9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidPhoneTapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './valid-phone-tap.component.html',
                styleUrls: ['./valid-phone-tap.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "EJpT":
/*!*********************************************************************************!*\
  !*** ./src/app/features-mobile/redeem-credits/redeem-credits-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RedeemCreditsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemCreditsRoutingModule", function() { return RedeemCreditsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invalid/invalid-phone-tap.component */ "X8GA");
/* harmony import */ var _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/valid/valid-phone-tap.component */ "AjC0");
/* harmony import */ var _redeem_credits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redeem-credits.component */ "JNS/");







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

/***/ "JNS/":
/*!****************************************************************************!*\
  !*** ./src/app/features-mobile/redeem-credits/redeem-credits.component.ts ***!
  \****************************************************************************/
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
} }
function RedeemCreditsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedeemCreditsComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.invalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "yourPhone"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "toPay"), "");
} }
function RedeemCreditsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedeemCreditsComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.invalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "amountDue"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "credits"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "poweredBy"), " ");
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
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits/valid');
    }
    invalid() {
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits/invalid');
    }
}
RedeemCreditsComponent.ɵfac = function RedeemCreditsComponent_Factory(t) { return new (t || RedeemCreditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
RedeemCreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedeemCreditsComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "redeem-credits-wrapper"], [1, "col", "redeem-credits-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "redeem-credits-base"], ["src", "assets/svg/redeem-credits-phone-icon.svg", "alt", "image", 1, "position-absolute", "redeem-credits-phone"], ["src", "assets/svg/redeem-credits-signal.svg", "alt", "image", 1, "position-absolute", "redeem-credits-signal"], [1, "row", 3, "click"], [1, "position-relative"], [1, "small-heading", "mb-3"], [1, "currency-mobile"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function RedeemCreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RedeemCreditsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RedeemCreditsComponent_ng_template_3_Template, 13, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedeemCreditsComponent_ng_template_5_Template, 15, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 25%;\r\n}\r\n\r\n.redeem-credits-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin: 15% 0;\r\n}\r\n\r\n.redeem-credits-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.redeem-credits-phone[_ngcontent-%COMP%] {\r\n  width: 67%;\r\n  top: 13%;\r\n  left: 17%;\r\n  animation: redeem-rotate-sideways-mobile 3s infinite linear;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.redeem-credits-signal[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n  top: 16%;\r\n  left: 21%;\r\n  animation: redeem-signal-grow-mobile 3s infinite linear;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes redeem-rotate-sideways-mobile {\r\n  0%{transform: rotate(0deg);}\r\n  100%{transform: rotate(-50deg);}\r\n}\r\n\r\n@keyframes redeem-signal-grow-mobile {\r\n  0%{top: 16%; left: 21%; width: 10%;}\r\n  100%{top: 10%; left: 14%; width: 18%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1jcmVkaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCwyREFBMkQ7RUFDM0QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsdURBQXVEO0VBQ3ZELDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLEdBQUcsdUJBQXVCLENBQUM7RUFDM0IsS0FBSyx5QkFBeUIsQ0FBQztBQUNqQzs7QUFFQTtFQUNFLEdBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDbkMsS0FBSyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUN2QyIsImZpbGUiOiJyZWRlZW0tY3JlZGl0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01MHB4O1xyXG4gIGxlZnQ6IC0zNXB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIGgxIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbn1cclxuXHJcbi5yZWRlZW0tY3JlZGl0cy1pbWFnZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDM4NXB4O1xyXG4gIG1hcmdpbjogMTUlIDA7XHJcbn1cclxuXHJcbi5yZWRlZW0tY3JlZGl0cy1iYXNlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5yZWRlZW0tY3JlZGl0cy1waG9uZSB7XHJcbiAgd2lkdGg6IDY3JTtcclxuICB0b3A6IDEzJTtcclxuICBsZWZ0OiAxNyU7XHJcbiAgYW5pbWF0aW9uOiByZWRlZW0tcm90YXRlLXNpZGV3YXlzLW1vYmlsZSAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4ucmVkZWVtLWNyZWRpdHMtc2lnbmFsIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIHRvcDogMTYlO1xyXG4gIGxlZnQ6IDIxJTtcclxuICBhbmltYXRpb246IHJlZGVlbS1zaWduYWwtZ3Jvdy1tb2JpbGUgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDI4MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlZGVlbS1yb3RhdGUtc2lkZXdheXMtbW9iaWxlIHtcclxuICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyByZWRlZW0tc2lnbmFsLWdyb3ctbW9iaWxlIHtcclxuICAwJXt0b3A6IDE2JTsgbGVmdDogMjElOyB3aWR0aDogMTAlO31cclxuICAxMDAle3RvcDogMTAlOyBsZWZ0OiAxNCU7IHdpZHRoOiAxOCU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemCreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './redeem-credits.component.html',
                styleUrls: ['./redeem-credits.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "X8GA":
/*!**************************************************************************************************!*\
  !*** ./src/app/features-mobile/redeem-credits/components/invalid/invalid-phone-tap.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InvalidPhoneTapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidPhoneTapComponent", function() { return InvalidPhoneTapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function InvalidPhoneTapComponent_ng_template_1_Template(rf, ctx) { }
function InvalidPhoneTapComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvalidPhoneTapComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.valid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "invalid"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "transaction"));
} }
function InvalidPhoneTapComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvalidPhoneTapComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.valid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "msg"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "poweredBy"), " ");
} }
class InvalidPhoneTapComponent {
    constructor(router) {
        this.router = router;
    }
    valid() {
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits/valid');
    }
}
InvalidPhoneTapComponent.ɵfac = function InvalidPhoneTapComponent_Factory(t) { return new (t || InvalidPhoneTapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InvalidPhoneTapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvalidPhoneTapComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "heading"], [1, "row", "invalid-nfc-wrapper"], [1, "col", "invalid-nfc-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-base"], ["src", "assets/svg/nfc-payment-phone-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-background"], ["src", "assets/svg/nfc-payment-wallet-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-beacon"], ["src", "assets/svg/nfc-payment-signal-large.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-signal"], ["src", "assets/svg/invalid-pin-icon.svg", "alt", "image", 1, "position-absolute", "invalid-nfc-icon"], [1, "row", 3, "click"], [1, "position-relative", "py-3", "w-100", "text-center", "my-3"], [1, "small-heading", "font-size-30"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function InvalidPhoneTapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvalidPhoneTapComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvalidPhoneTapComponent_ng_template_3_Template, 15, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvalidPhoneTapComponent_ng_template_5_Template, 10, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.invalid-nfc-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.invalid-nfc-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.invalid-nfc-icon[_ngcontent-%COMP%] {\r\n  width: 36%;\r\n  top: 60%;\r\n  left: 48%;\r\n  animation: invalid-nfc-animate-icon-mobile 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-background[_ngcontent-%COMP%] {\r\n  width: 63%;\r\n  top: 2%;\r\n  left: 15%;\r\n}\r\n\r\n.invalid-nfc-beacon[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  top: 24%;\r\n  left: 8%;\r\n  animation: invalid-nfc-animate-beacon-mobile 4s infinite linear;\r\n}\r\n\r\n.invalid-nfc-signal[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  top: 38%;\r\n  left: 54%;\r\n  animation: invalid-nfc-animate-signal-mobile 4s infinite linear;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 60px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes invalid-nfc-animate-icon-mobile {\r\n  0%{width: 36%;top: 60%;left: 48%;}\r\n  50%{width: 29%;top: 62%;left: 52%;}\r\n  100%{width: 36%;top: 60%;left: 48%;}\r\n}\r\n\r\n@keyframes invalid-nfc-animate-beacon-mobile {\r\n  0%{left: 8%;}\r\n  50%{left: 4%;}\r\n  100%{left: 8%;}\r\n}\r\n\r\n@keyframes invalid-nfc-animate-signal-mobile {\r\n  0%{left: 54%;}\r\n  50%{left: 60%;}\r\n  100%{left: 54%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmFsaWQtcGhvbmUtdGFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixRQUFRO0VBQ1IsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNqQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2xDLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDckM7O0FBRUE7RUFDRSxHQUFHLFFBQVEsQ0FBQztFQUNaLElBQUksUUFBUSxDQUFDO0VBQ2IsS0FBSyxRQUFRLENBQUM7QUFDaEI7O0FBRUE7RUFDRSxHQUFHLFNBQVMsQ0FBQztFQUNiLElBQUksU0FBUyxDQUFDO0VBQ2QsS0FBSyxTQUFTLENBQUM7QUFDakIiLCJmaWxlIjoiaW52YWxpZC1waG9uZS10YXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlIDA7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1iYXNlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1pY29uIHtcclxuICB3aWR0aDogMzYlO1xyXG4gIHRvcDogNjAlO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICBhbmltYXRpb246IGludmFsaWQtbmZjLWFuaW1hdGUtaWNvbi1tb2JpbGUgNHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uaW52YWxpZC1uZmMtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDYzJTtcclxuICB0b3A6IDIlO1xyXG4gIGxlZnQ6IDE1JTtcclxufVxyXG5cclxuLmludmFsaWQtbmZjLWJlYWNvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0b3A6IDI0JTtcclxuICBsZWZ0OiA4JTtcclxuICBhbmltYXRpb246IGludmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uLW1vYmlsZSA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLW5mYy1zaWduYWwge1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgdG9wOiAzOCU7XHJcbiAgbGVmdDogNTQlO1xyXG4gIGFuaW1hdGlvbjogaW52YWxpZC1uZmMtYW5pbWF0ZS1zaWduYWwtbW9iaWxlIDRzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmdyYWRpZW50LWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDI4MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludmFsaWQtbmZjLWFuaW1hdGUtaWNvbi1tb2JpbGUge1xyXG4gIDAle3dpZHRoOiAzNiU7dG9wOiA2MCU7bGVmdDogNDglO31cclxuICA1MCV7d2lkdGg6IDI5JTt0b3A6IDYyJTtsZWZ0OiA1MiU7fVxyXG4gIDEwMCV7d2lkdGg6IDM2JTt0b3A6IDYwJTtsZWZ0OiA0OCU7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludmFsaWQtbmZjLWFuaW1hdGUtYmVhY29uLW1vYmlsZSB7XHJcbiAgMCV7bGVmdDogOCU7fVxyXG4gIDUwJXtsZWZ0OiA0JTt9XHJcbiAgMTAwJXtsZWZ0OiA4JTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW52YWxpZC1uZmMtYW5pbWF0ZS1zaWduYWwtbW9iaWxlIHtcclxuICAwJXtsZWZ0OiA1NCU7fVxyXG4gIDUwJXtsZWZ0OiA2MCU7fVxyXG4gIDEwMCV7bGVmdDogNTQlO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvalidPhoneTapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './invalid-phone-tap.component.html',
                styleUrls: ['./invalid-phone-tap.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zHT3":
/*!*************************************************************************!*\
  !*** ./src/app/features-mobile/redeem-credits/redeem-credits.module.ts ***!
  \*************************************************************************/
/*! exports provided: RedeemCreditsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemCreditsModule", function() { return RedeemCreditsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _components_invalid_invalid_phone_tap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invalid/invalid-phone-tap.component */ "X8GA");
/* harmony import */ var _components_valid_valid_phone_tap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/valid/valid-phone-tap.component */ "AjC0");
/* harmony import */ var _redeem_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-credits-routing.module */ "EJpT");
/* harmony import */ var _redeem_credits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem-credits.component */ "JNS/");








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


/***/ })

}]);
//# sourceMappingURL=features-mobile-redeem-credits-redeem-credits-module.js.map