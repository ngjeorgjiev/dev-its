(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-checkout-checkout-module"],{

/***/ "E2Tr":
/*!**************************************************************!*\
  !*** ./src/app/features/checkout/checkout-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CheckoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutingModule", function() { return CheckoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component */ "aWdj");





const routes = [
    {
        path: '',
        component: _checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"],
        data: { animation: 'Checkout' },
    }
];
class CheckoutRoutingModule {
}
CheckoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckoutRoutingModule });
CheckoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckoutRoutingModule_Factory(t) { return new (t || CheckoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aWdj":
/*!*********************************************************!*\
  !*** ./src/app/features/checkout/checkout.component.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/divider/divider.component */ "JmOq");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");







function CheckoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "poweredBy"), "");
} }
function CheckoutComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.cash(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_5_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.card(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_5_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nfc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "30.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "cash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "card"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, "nfc"), "");
} }
class CheckoutComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
    cash() {
        this.router.navigateByUrl('/checkout/cash');
    }
    card() {
        this.router.navigateByUrl('/checkout/card');
    }
    nfc() {
        this.router.navigateByUrl('/checkout/nfc-payment');
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row"], ["src", "assets/svg/trolley-initial-position.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "scalable-image"], ["id", "cash", 1, "link", "position-relative", 3, "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], [1, "rotating-cash"], ["src", "assets/svg/cash-background-phone.svg", "alt", "image", 1, "position-absolute", "cash-background"], ["src", "assets/svg/cash-rotating-circle-v2.svg", "alt", "image", 1, "position-absolute", "cash-rotating-circle"], [1, "rotating-cash-copy"], ["id", "card", 1, "link", "position-relative", 3, "click"], [1, "rotating-card"], ["src", "assets/svg/card-base-icon.svg", "alt", "image", 1, "position-absolute", "card-base"], ["src", "assets/svg/card-phone-icon.svg", "alt", "image", 1, "position-absolute", "card-phone"], ["id", "nfc", 1, "link", "position-relative", 3, "click"], [1, "rotating-nfc"], ["src", "assets/svg/nfc-background-phone.svg", "alt", "image", 1, "position-absolute", "nfc-background"], ["src", "assets/svg/nfc-beacon-icon.svg", "alt", "image", 1, "position-absolute", "nfc-beacon"], ["src", "assets/svg/nfc-signal-icon.svg", "alt", "image", 1, "position-absolute", "nfc-signal"], [1, "side-content", "pr-2"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_ng_template_1_Template, 7, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_ng_template_5_Template, 33, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"], _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__["DividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoPipe"]], styles: [".link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n.max-h-custom[_ngcontent-%COMP%] {\r\n  max-height: 155px;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  right: 37%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.rotate-50-y[_ngcontent-%COMP%] {\r\n  \r\n  animation: rotate-50-y 3s infinite linear;\r\n  animation-direction: alternate;\r\n  z-index: 10;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 26%;\r\n}\r\n\r\n.cash-background[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n  left: 50px;\r\n  height: 100%;\r\n  z-index: 6;\r\n}\r\n\r\n.cash-rotating-circle[_ngcontent-%COMP%] {\r\n  top: 63px;\r\n  height: 50%;\r\n  left: 60px;\r\n  z-index: 6;\r\n  animation:spin 4s linear infinite;\r\n}\r\n\r\n.rotating-cash-copy[_ngcontent-%COMP%]   .cash-background[_ngcontent-%COMP%] {\r\n  transform: rotate(-20deg);\r\n  left: 30px;\r\n  top: 35px;\r\n  z-index: 5;\r\n}\r\n\r\n.rotating-cash-copy[_ngcontent-%COMP%]   .cash-rotating-circle[_ngcontent-%COMP%] {\r\n  left: 37px;\r\n  top: 61px;\r\n  z-index: 5;\r\n}\r\n\r\n@keyframes rotate-50-y {\r\n  0% {\r\n    transform: rotateY(0);\r\n  }\r\n  100% {\r\n    transform: rotateY(50deg);\r\n  }\r\n}\r\n\r\n@keyframes spin  {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-backwards {0%{left:-45px;} 50%{left:-55px;} 100%{left:-45px;}}\r\n\r\n@keyframes animate-forward {0%{left:90px;} 50%{left:100px;} 100%{left:90px;}}\r\n\r\n@keyframes animate-up {0%{top:20px;} 50%{top:-10px;} 100%{top:20px;}}\r\n\r\n.card-base[_ngcontent-%COMP%] {\r\n  top: 134px;\r\n  z-index: 6;\r\n  left: 16px;\r\n}\r\n\r\n.card-phone[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: -23px;\r\n  animation: animate-up 5s infinite linear;\r\n}\r\n\r\n.nfc-background[_ngcontent-%COMP%] {\r\n  top: -20px;\r\n  left: -22px;\r\n}\r\n\r\n.nfc-beacon[_ngcontent-%COMP%] {\r\n  top: 15px;\r\n  left: -50px;\r\n  animation: animate-backwards 5s infinite linear;\r\n}\r\n\r\n.nfc-signal[_ngcontent-%COMP%] {\r\n  top: 81px;\r\n  left: 90px;\r\n  animation: animate-forward 5s infinite linear;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUdWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFHRSx1QkFBdUI7RUFDekI7RUFDQTtJQUdFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLDhCQUE4QixHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQzs7QUFDaEYsNEJBQTRCLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDOztBQUM1RSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7O0FBRXBFO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmsge1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1heC1oLWN1c3RvbSB7XHJcbiAgbWF4LWhlaWdodDogMTU1cHg7XHJcbn1cclxuXHJcbi5zaWRlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHJpZ2h0OiAzNyU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGUtNTAteSB7XHJcbiAgLyogdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKTsgKi9cclxuICBhbmltYXRpb246IHJvdGF0ZS01MC15IDNzIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgdG9wOiA0MyU7XHJcbiAgbGVmdDogMjYlO1xyXG59XHJcblxyXG4uY2FzaC1iYWNrZ3JvdW5kIHtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmNhc2gtcm90YXRpbmctY2lyY2xlIHtcclxuICB0b3A6IDYzcHg7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbGVmdDogNjBweDtcclxuICB6LWluZGV4OiA2O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnJvdGF0aW5nLWNhc2gtY29weSAuY2FzaC1iYWNrZ3JvdW5kIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdG9wOiAzNXB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1jYXNoLWNvcHkgLmNhc2gtcm90YXRpbmctY2lyY2xlIHtcclxuICBsZWZ0OiAzN3B4O1xyXG4gIHRvcDogNjFweDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS01MC15IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDUwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiAvKiBTYWZhcmkgYW5kIENocm9tZSAqLyB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtYmFja3dhcmRzIHswJXtsZWZ0Oi00NXB4O30gNTAle2xlZnQ6LTU1cHg7fSAxMDAle2xlZnQ6LTQ1cHg7fX1cclxuQGtleWZyYW1lcyBhbmltYXRlLWZvcndhcmQgezAle2xlZnQ6OTBweDt9IDUwJXtsZWZ0OjEwMHB4O30gMTAwJXtsZWZ0OjkwcHg7fX1cclxuQGtleWZyYW1lcyBhbmltYXRlLXVwIHswJXt0b3A6MjBweDt9IDUwJXt0b3A6LTEwcHg7fSAxMDAle3RvcDoyMHB4O319XHJcblxyXG4uY2FyZC1iYXNlIHtcclxuICB0b3A6IDEzNHB4O1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgbGVmdDogMTZweDtcclxufVxyXG5cclxuLmNhcmQtcGhvbmUge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMjNweDtcclxuICBhbmltYXRpb246IGFuaW1hdGUtdXAgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4ubmZjLWJhY2tncm91bmQge1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogLTIycHg7XHJcbn1cclxuXHJcbi5uZmMtYmVhY29uIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogLTUwcHg7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlLWJhY2t3YXJkcyA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5uZmMtc2lnbmFsIHtcclxuICB0b3A6IDgxcHg7XHJcbiAgbGVmdDogOTBweDtcclxuICBhbmltYXRpb246IGFuaW1hdGUtZm9yd2FyZCA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zY2FsYWJsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "r3Jd":
/*!******************************************************!*\
  !*** ./src/app/features/checkout/checkout.module.ts ***!
  \******************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-routing.module */ "E2Tr");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.component */ "aWdj");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");






class CheckoutModule {
}
CheckoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TRANSLOCO_SCOPE"], useValue: 'checkout' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__["CheckoutRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__["CheckoutRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__["CheckoutRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoModule"]
                ],
                declarations: [
                    _checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TRANSLOCO_SCOPE"], useValue: 'checkout' }
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-checkout-checkout-module.js.map