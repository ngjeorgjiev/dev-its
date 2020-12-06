(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-purchase-credits-purchase-credits-module"],{

/***/ "F1YC":
/*!******************************************************************************!*\
  !*** ./src/app/features/purchase-credits/purchase-credits-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PurchaseCreditsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCreditsRoutingModule", function() { return PurchaseCreditsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _purchase_credits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-credits.component */ "VVNn");





const routes = [
    {
        path: '',
        component: _purchase_credits_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseCreditsComponent"]
    }
];
class PurchaseCreditsRoutingModule {
}
PurchaseCreditsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseCreditsRoutingModule });
PurchaseCreditsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseCreditsRoutingModule_Factory(t) { return new (t || PurchaseCreditsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseCreditsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCreditsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KUiO":
/*!**********************************************************************!*\
  !*** ./src/app/features/purchase-credits/purchase-credits.module.ts ***!
  \**********************************************************************/
/*! exports provided: PurchaseCreditsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCreditsModule", function() { return PurchaseCreditsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _purchase_credits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-credits-routing.module */ "F1YC");
/* harmony import */ var _purchase_credits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-credits.component */ "VVNn");






class PurchaseCreditsModule {
}
PurchaseCreditsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseCreditsModule });
PurchaseCreditsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseCreditsModule_Factory(t) { return new (t || PurchaseCreditsModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'purchase-credits' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _purchase_credits_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseCreditsRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseCreditsModule, { declarations: [_purchase_credits_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseCreditsComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _purchase_credits_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseCreditsRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCreditsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _purchase_credits_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseCreditsRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _purchase_credits_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseCreditsComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'purchase-credits' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "VVNn":
/*!*************************************************************************!*\
  !*** ./src/app/features/purchase-credits/purchase-credits.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseCreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCreditsComponent", function() { return PurchaseCreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/divider/divider.component */ "JmOq");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");







function PurchaseCreditsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCreditsComponent_ng_template_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "poweredBy"), " ");
} }
function PurchaseCreditsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "required"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "credits"), "");
} }
function PurchaseCreditsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCreditsComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.cash(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCreditsComponent_ng_template_5_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.card(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "10.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "cash"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, "cash"), "");
} }
class PurchaseCreditsComponent {
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
}
PurchaseCreditsComponent.ɵfac = function PurchaseCreditsComponent_Factory(t) { return new (t || PurchaseCreditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
PurchaseCreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCreditsComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "position-relative"], [1, "rotate-50-y", "rotating-header", "position-absolute"], [1, "rotate-50-y", "rotating-credits", "position-absolute"], ["src", "assets/svg/nfc-rotating-image-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "scalable-image"], ["src", "assets/svg/nfc-medal-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "rotating-medal", "scalable-image", "position-absolute"], ["src", "assets/svg/nfc-star-icon.svg", "alt", "image", 1, "m-auto", "rotating-star", "scalable-image", "position-absolute"], ["id", "cash", 1, "link", "position-relative", 3, "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], [1, "rotating-cash"], ["src", "assets/svg/cash-background-phone.svg", "alt", "image", 1, "position-absolute", "cash-background"], ["src", "assets/svg/cash-rotating-circle-v2.svg", "alt", "image", 1, "position-absolute", "cash-rotating-circle"], [1, "rotating-cash-copy"], ["id", "card", 1, "link", "position-relative", 3, "click"], [1, "rotating-card"], ["src", "assets/svg/card-base-icon.svg", "alt", "image", 1, "position-absolute", "card-base"], ["src", "assets/svg/card-phone-icon.svg", "alt", "image", 1, "position-absolute", "card-phone"], [1, "side-content", "pr-2"]], template: function PurchaseCreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseCreditsComponent_ng_template_1_Template, 7, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseCreditsComponent_ng_template_3_Template, 10, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PurchaseCreditsComponent_ng_template_5_Template, 24, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"], _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__["DividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoPipe"]], styles: [".link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  right: 37%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.rotate-50-y[_ngcontent-%COMP%] {\r\n  animation: rotate-50-y 3s infinite linear;\r\n  animation-direction: alternate;\r\n  z-index: 10;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 9%;\r\n}\r\n\r\n.cash-background[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n  left: 50px;\r\n  height: 100%;\r\n  z-index: 6;\r\n}\r\n\r\n@keyframes rotate-50-y {\r\n  0% {\r\n    transform: rotateY(0);\r\n  }\r\n  100% {\r\n    transform: rotateY(50deg);\r\n  }\r\n}\r\n\r\n.rotating-medal[_ngcontent-%COMP%] {\r\n  top: 87px;\r\n  left: 177px;\r\n}\r\n\r\n.rotating-star[_ngcontent-%COMP%] {\r\n  top: 180px;\r\n  left: 281px;\r\n  animation: rotate-360 6s infinite linear;\r\n  z-index: 10;\r\n}\r\n\r\n.rotating-credits[_ngcontent-%COMP%] {\r\n  top: 78%;\r\n  left: 40%;\r\n  z-index: 20;\r\n  font-size: 30px;\r\n}\r\n\r\n.rotating-header[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  top: 4%;\r\n  left: 42%;\r\n  z-index: 20;\r\n  color: #0ed8d8;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 26%;\r\n}\r\n\r\n.cash-background[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n  left: 50px;\r\n  height: 100%;\r\n  z-index: 6;\r\n}\r\n\r\n.cash-rotating-circle[_ngcontent-%COMP%] {\r\n  top: 63px;\r\n  height: 50%;\r\n  left: 60px;\r\n  z-index: 6;\r\n  animation:spin 4s linear infinite;\r\n}\r\n\r\n.rotating-cash-copy[_ngcontent-%COMP%]   .cash-background[_ngcontent-%COMP%] {\r\n  transform: rotate(-20deg);\r\n  left: 30px;\r\n  top: 35px;\r\n  z-index: 5;\r\n}\r\n\r\n.rotating-cash-copy[_ngcontent-%COMP%]   .cash-rotating-circle[_ngcontent-%COMP%] {\r\n  left: 37px;\r\n  top: 61px;\r\n  z-index: 5;\r\n}\r\n\r\n@keyframes rotate-50-y {\r\n  0% {\r\n    transform: rotateY(0);\r\n  }\r\n  100% {\r\n    transform: rotateY(50deg);\r\n  }\r\n}\r\n\r\n@keyframes spin  {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-backwards {0%{left:-45px;} 50%{left:-55px;} 100%{left:-45px;}}\r\n\r\n@keyframes animate-forward {0%{left:90px;} 50%{left:100px;} 100%{left:90px;}}\r\n\r\n@keyframes animate-up {0%{top:20px;} 50%{top:-10px;} 100%{top:20px;}}\r\n\r\n.card-base[_ngcontent-%COMP%] {\r\n  top: 134px;\r\n  z-index: 6;\r\n  left: 16px;\r\n}\r\n\r\n.card-phone[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: -23px;\r\n  animation: animate-up 5s infinite linear;\r\n}\r\n\r\n@keyframes rotate-360 {\r\n  0%{transform: rotate(0deg) rotateY(0);}\r\n  50%{transform: rotate(360deg) rotateY(50deg);}\r\n  100%{transform: rotate(0) rotateY(0);}\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLWNyZWRpdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUdWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFHRSx1QkFBdUI7RUFDekI7RUFDQTtJQUdFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLDhCQUE4QixHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQzs7QUFDaEYsNEJBQTRCLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDOztBQUM1RSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7O0FBRXBFO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLEdBQUcsa0NBQWtDLENBQUM7RUFDdEMsSUFBSSx3Q0FBd0MsQ0FBQztFQUM3QyxLQUFLLCtCQUErQixDQUFDO0FBQ3ZDOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJwdXJjaGFzZS1jcmVkaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lkZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICByaWdodDogMzclO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucm90YXRlLTUwLXkge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlLTUwLXkgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNhcmQtdGV4dC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICB0b3A6IDQzJTtcclxuICBsZWZ0OiA5JTtcclxufVxyXG5cclxuLmNhc2gtYmFja2dyb3VuZCB7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLTUwLXkge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNTBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0aW5nLW1lZGFsIHtcclxuICB0b3A6IDg3cHg7XHJcbiAgbGVmdDogMTc3cHg7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1zdGFyIHtcclxuICB0b3A6IDE4MHB4O1xyXG4gIGxlZnQ6IDI4MXB4O1xyXG4gIGFuaW1hdGlvbjogcm90YXRlLTM2MCA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1jcmVkaXRzIHtcclxuICB0b3A6IDc4JTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ucm90YXRpbmctaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdG9wOiA0JTtcclxuICBsZWZ0OiA0MiU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgY29sb3I6ICMwZWQ4ZDg7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHRvcDogNDMlO1xyXG4gIGxlZnQ6IDI2JTtcclxufVxyXG5cclxuLmNhc2gtYmFja2dyb3VuZCB7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5jYXNoLXJvdGF0aW5nLWNpcmNsZSB7XHJcbiAgdG9wOiA2M3B4O1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgei1pbmRleDogNjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246c3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1jYXNoLWNvcHkgLmNhc2gtYmFja2dyb3VuZCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHRvcDogMzVweDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ucm90YXRpbmctY2FzaC1jb3B5IC5jYXNoLXJvdGF0aW5nLWNpcmNsZSB7XHJcbiAgbGVmdDogMzdweDtcclxuICB0b3A6IDYxcHg7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtNTAteSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg1MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4gLyogU2FmYXJpIGFuZCBDaHJvbWUgKi8ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlLWJhY2t3YXJkcyB7MCV7bGVmdDotNDVweDt9IDUwJXtsZWZ0Oi01NXB4O30gMTAwJXtsZWZ0Oi00NXB4O319XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS1mb3J3YXJkIHswJXtsZWZ0OjkwcHg7fSA1MCV7bGVmdDoxMDBweDt9IDEwMCV7bGVmdDo5MHB4O319XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS11cCB7MCV7dG9wOjIwcHg7fSA1MCV7dG9wOi0xMHB4O30gMTAwJXt0b3A6MjBweDt9fVxyXG5cclxuLmNhcmQtYmFzZSB7XHJcbiAgdG9wOiAxMzRweDtcclxuICB6LWluZGV4OiA2O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLXBob25lIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTIzcHg7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlLXVwIDVzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtMzYwIHtcclxuICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSByb3RhdGVZKDApO31cclxuICA1MCV7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSByb3RhdGVZKDUwZGVnKTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwKSByb3RhdGVZKDApO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2NhbGFibGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './purchase-credits.component.html',
                styleUrls: ['./purchase-credits.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-purchase-credits-purchase-credits-module.js.map