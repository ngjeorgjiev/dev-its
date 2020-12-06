(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-mobile-card-card-module"],{

/***/ "5cOq":
/*!*****************************************************!*\
  !*** ./src/app/features-mobile/card/card.module.ts ***!
  \*****************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-routing.module */ "F5W9");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.component */ "c+qa");






class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'cash' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _card_routing_module__WEBPACK_IMPORTED_MODULE_3__["CardRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _card_routing_module__WEBPACK_IMPORTED_MODULE_3__["CardRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _card_routing_module__WEBPACK_IMPORTED_MODULE_3__["CardRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'cash' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "F5W9":
/*!*************************************************************!*\
  !*** ./src/app/features-mobile/card/card-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRoutingModule", function() { return CardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "c+qa");





const routes = [
    {
        path: '',
        component: _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
    }
];
class CardRoutingModule {
}
CardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardRoutingModule });
CardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardRoutingModule_Factory(t) { return new (t || CardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c+qa":
/*!********************************************************!*\
  !*** ./src/app/features-mobile/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");






function CardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.insertCard(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.insertCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "please"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "insert"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "card"));
} }
function CardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.insertCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "30.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "amountDue"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "poweredBy"), " ");
} }
class CardComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
    insertCard() {
        this.router.navigateByUrl('/code-scan/checkout/card/insert-card');
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "row", "content-header", "w-100", "text-center", 3, "click"], [1, "w-100", "text-center"], [1, "row", "insert-card-wrapper", 3, "click"], [1, "col", "insert-card-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "insert-card-base"], ["src", "assets/svg/box-wrapper-header-large.svg", "alt", "image", 1, "position-absolute", "insert-card-base"], ["src", "assets/svg/box-wrapper-header-small.svg", "alt", "image", 1, "position-absolute", "insert-card-base-tip"], ["src", "assets/svg/insert-card-card.svg", "alt", "image", 1, "position-absolute", "insert-card-card"], [1, "row", 3, "click"], [1, "pb-5", "w-100", "text-center"], [1, "position-relative"], [1, "small-heading", "mb-3"], [1, "currency-mobile"], [1, "price-tag-mobile"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_Template, 14, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_template_5_Template, 17, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 25%;\r\n}\r\n\r\n.insert-card-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin: 15% 0;\r\n}\r\n\r\n.insert-card-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.insert-card-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  left: 17%;\r\n  top: -40%;\r\n  animation: card-animate-up 4s infinite linear;\r\n}\r\n\r\n.insert-card-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.insert-card-base-tip[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes card-animate-up {\r\n  0%{top:100%;}\r\n  20%{top:50%;}\r\n  40%{top:10%;}\r\n  60%{top:10%;}\r\n  80%{top:-10%;}\r\n  100%{top:-40%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLEdBQUcsMEJBQTBCO0VBQzdCLElBQUksNEJBQTRCO0VBQ2hDLEtBQUssMEJBQTBCO0FBQ2pDOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLEdBQUcsUUFBUSxDQUFDO0VBQ1osSUFBSSxPQUFPLENBQUM7RUFDWixJQUFJLE9BQU8sQ0FBQztFQUNaLElBQUksT0FBTyxDQUFDO0VBQ1osSUFBSSxRQUFRLENBQUM7RUFDYixLQUFLLFFBQVEsQ0FBQztBQUNoQiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgbGVmdDogLTM1cHg7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXIgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLmluc2VydC1jYXJkLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luOiAxNSUgMDtcclxufVxyXG5cclxuLmluc2VydC1jYXJkLWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLmluc2VydC1jYXJkLWNhcmQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbGVmdDogMTclO1xyXG4gIHRvcDogLTQwJTtcclxuICBhbmltYXRpb246IGNhcmQtYW5pbWF0ZS11cCA0cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5pbnNlcnQtY2FyZC1iYXNlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbnNlcnQtY2FyZC1iYXNlLXRpcCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IC0yJTtcclxuICB6LWluZGV4OiAyNTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudC1zcHJlYWQge1xyXG4gIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxyXG4gIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxyXG4gIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcxZGVnLCAjZmZmZmZmLCAjMzMzMzMzKTtcclxuICBhbmltYXRpb246IGdyYWRpZW50LXNwcmVhZCA0cyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjgwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZC1hbmltYXRlLXVwIHtcclxuICAwJXt0b3A6MTAwJTt9XHJcbiAgMjAle3RvcDo1MCU7fVxyXG4gIDQwJXt0b3A6MTAlO31cclxuICA2MCV7dG9wOjEwJTt9XHJcbiAgODAle3RvcDotMTAlO31cclxuICAxMDAle3RvcDotNDAlO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-mobile-card-card-module.js.map