(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-mobile-nfc-payment-nfc-payment-module"],{

/***/ "65eC":
/*!***************************************************************************!*\
  !*** ./src/app/features-mobile/nfc-payment/nfc-payment-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NfcPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentRoutingModule", function() { return NfcPaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nfc_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nfc-payment.component */ "eU5R");





const routes = [
    {
        path: '',
        component: _nfc_payment_component__WEBPACK_IMPORTED_MODULE_2__["NfcPaymentComponent"]
    }
];
class NfcPaymentRoutingModule {
}
NfcPaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NfcPaymentRoutingModule });
NfcPaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NfcPaymentRoutingModule_Factory(t) { return new (t || NfcPaymentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NfcPaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcPaymentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eU5R":
/*!**********************************************************************!*\
  !*** ./src/app/features-mobile/nfc-payment/nfc-payment.component.ts ***!
  \**********************************************************************/
/*! exports provided: NfcPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentComponent", function() { return NfcPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");






function NfcPaymentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NfcPaymentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Y ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "credits"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "available"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "credits"), "");
} }
function NfcPaymentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.redeemCredits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_5_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.purchaseCredits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "redeem"), " X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "credits"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "purchase"), " X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "credits"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, "poweredBy"), " ");
} }
class NfcPaymentComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
    redeemCredits() {
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/redeem-credits');
    }
    purchaseCredits() {
        this.router.navigateByUrl('/code-scan/checkout/nfc-payment/purchase-credits');
    }
}
NfcPaymentComponent.ɵfac = function NfcPaymentComponent_Factory(t) { return new (t || NfcPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
NfcPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NfcPaymentComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "row", "position-relative", "nfc-images-wrapper"], ["src", "assets/svg/nfc-header-input.svg", "alt", "image", 1, "m-auto", "position-absolute", "input-mask"], ["src", "assets/svg/nfc-medal-small.svg", "alt", "image", 1, "m-auto", "position-absolute", "input-icon"], [1, "input-credits", "position-absolute"], [1, "rotate-50-y", "rotating-header", "position-absolute"], [1, "rotate-50-y", "rotating-credits", "position-absolute"], ["src", "assets/svg/nfc-rotating-image-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto"], ["src", "assets/svg/nfc-medal-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "rotating-medal", "position-absolute"], ["src", "assets/svg/nfc-star-icon.svg", "alt", "image", 1, "m-auto", "rotating-star", "position-absolute"], ["id", "cash", 1, "link", "position-relative", "mt-3", 3, "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], ["id", "card", 1, "link", "position-relative", 3, "click"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function NfcPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NfcPaymentComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NfcPaymentComponent_ng_template_3_Template, 16, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NfcPaymentComponent_ng_template_5_Template, 16, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  right: 37%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.rotate-50-y[_ngcontent-%COMP%] {\r\n  animation: rotate-50-y 3s infinite linear;\r\n  animation-direction: alternate;\r\n  z-index: 10;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 9%;\r\n}\r\n\r\n.cash-background[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n  left: 50px;\r\n  height: 100%;\r\n  z-index: 6;\r\n}\r\n\r\n@keyframes rotate-50-y {\r\n  0% {\r\n    transform: rotateY(0);\r\n  }\r\n  100% {\r\n    transform: rotateY(50deg);\r\n  }\r\n}\r\n\r\n.rotating-medal[_ngcontent-%COMP%] {\r\n  top: 87px;\r\n  left: 82px;\r\n}\r\n\r\n.rotating-star[_ngcontent-%COMP%] {\r\n  top: 180px;\r\n  left: 187px;\r\n  animation: rotate-360 6s infinite linear;\r\n  z-index: 10;\r\n}\r\n\r\n.rotating-credits[_ngcontent-%COMP%] {\r\n  top: 78%;\r\n  left: 36%;\r\n  z-index: 20;\r\n  font-size: 30px;\r\n}\r\n\r\n.rotating-header[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  top: 4%;\r\n  left: 39%;\r\n  z-index: 20;\r\n  color: #0ed8d8;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.nfc-images-wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n}\r\n\r\n.input-mask[_ngcontent-%COMP%] {\r\n  top: -25%;\r\n  left: 8%;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  top: -35%;\r\n  left: 0%;\r\n}\r\n\r\n.input-credits[_ngcontent-%COMP%] {\r\n  top: -20%;\r\n  left: 33%;\r\n  font-size: 22px;\r\n}\r\n\r\n@keyframes rotate-360 {\r\n  0%{transform: rotate(0deg) rotateY(0);}\r\n  50%{transform: rotate(360deg) rotateY(50deg);}\r\n  100%{transform: rotate(0) rotateY(0);}\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mYy1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsR0FBRyxrQ0FBa0MsQ0FBQztFQUN0QyxJQUFJLHdDQUF3QyxDQUFDO0VBQzdDLEtBQUssK0JBQStCLENBQUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6Im5mYy1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lkZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICByaWdodDogMzclO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucm90YXRlLTUwLXkge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlLTUwLXkgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNhcmQtdGV4dC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICB0b3A6IDQzJTtcclxuICBsZWZ0OiA5JTtcclxufVxyXG5cclxuLmNhc2gtYmFja2dyb3VuZCB7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLTUwLXkge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNTBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0aW5nLW1lZGFsIHtcclxuICB0b3A6IDg3cHg7XHJcbiAgbGVmdDogODJweDtcclxufVxyXG5cclxuLnJvdGF0aW5nLXN0YXIge1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgbGVmdDogMTg3cHg7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUtMzYwIDZzIGluZmluaXRlIGxpbmVhcjtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnJvdGF0aW5nLWNyZWRpdHMge1xyXG4gIHRvcDogNzglO1xyXG4gIGxlZnQ6IDM2JTtcclxuICB6LWluZGV4OiAyMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0b3A6IDQlO1xyXG4gIGxlZnQ6IDM5JTtcclxuICB6LWluZGV4OiAyMDtcclxuICBjb2xvcjogIzBlZDhkODtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01MHB4O1xyXG4gIGxlZnQ6IC0zNXB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLm5mYy1pbWFnZXMtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1tYXNrIHtcclxuICB0b3A6IC0yNSU7XHJcbiAgbGVmdDogOCU7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29uIHtcclxuICB0b3A6IC0zNSU7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1jcmVkaXRzIHtcclxuICB0b3A6IC0yMCU7XHJcbiAgbGVmdDogMzMlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtMzYwIHtcclxuICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSByb3RhdGVZKDApO31cclxuICA1MCV7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSByb3RhdGVZKDUwZGVnKTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwKSByb3RhdGVZKDApO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2NhbGFibGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './nfc-payment.component.html',
                styleUrls: ['./nfc-payment.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "tQYk":
/*!*******************************************************************!*\
  !*** ./src/app/features-mobile/nfc-payment/nfc-payment.module.ts ***!
  \*******************************************************************/
/*! exports provided: NfcPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentModule", function() { return NfcPaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfc-payment-routing.module */ "65eC");
/* harmony import */ var _nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nfc-payment.component */ "eU5R");






class NfcPaymentModule {
}
NfcPaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NfcPaymentModule });
NfcPaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NfcPaymentModule_Factory(t) { return new (t || NfcPaymentModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'nfc-payment' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NfcPaymentModule, { declarations: [_nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__["NfcPaymentComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcPaymentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__["NfcPaymentComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'nfc-payment' }
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-mobile-nfc-payment-nfc-payment-module.js.map