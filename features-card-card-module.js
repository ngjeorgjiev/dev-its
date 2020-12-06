(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-card-card-module"],{

/***/ "3Jtq":
/*!**********************************************!*\
  !*** ./src/app/features/card/card.module.ts ***!
  \**********************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-routing.module */ "pznN");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.component */ "U0Pg");






class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'card' }
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
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'card' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "U0Pg":
/*!*************************************************!*\
  !*** ./src/app/features/card/card.component.ts ***!
  \*************************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "poweredBy"), " ");
} }
function CardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.insertCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 15);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "30.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "please"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "insert"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "card"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "amountDue"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, "amount"));
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
        this.router.navigateByUrl('/checkout/card/insert-card');
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "insert-card-wrapper"], [1, "col", "insert-card-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "insert-card-base"], ["src", "assets/svg/box-wrapper-header-large.svg", "alt", "image", 1, "position-absolute", "insert-card-base"], ["src", "assets/svg/box-wrapper-header-small.svg", "alt", "image", 1, "position-absolute", "insert-card-base-tip"], ["src", "assets/svg/insert-card-card.svg", "alt", "image", 1, "position-absolute", "insert-card-card"], [1, "row", "content-header", 3, "click"], [1, "col", "offset-md-3"], [1, "heading"], [1, "row"], [1, "col", "offset-md-3", "pb-5"], [1, "position-relative"], [1, "small-heading", "mb-3"], [1, "currency"], [1, "price-tag"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_1_Template, 6, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_template_5_Template, 24, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.insert-card-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.insert-card-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 648px;\r\n  margin-top: 30%;\r\n}\r\n\r\n.insert-card-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.insert-card-card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  left: 21%;\r\n  top: -40%;\r\n  animation: card-animate-up 4s infinite linear;\r\n}\r\n\r\n.insert-card-base[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.insert-card-base-tip[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  padding-bottom: 250px;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@keyframes card-animate-up {\r\n  0%{top:100%;}\r\n  20%{top:50%;}\r\n  40%{top:10%;}\r\n  60%{top:10%;}\r\n  80%{top:-10%;}\r\n  100%{top:-40%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0VBQ1QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsR0FBRywwQkFBMEI7RUFDN0IsSUFBSSw0QkFBNEI7RUFDaEMsS0FBSywwQkFBMEI7QUFDakM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsR0FBRyxRQUFRLENBQUM7RUFDWixJQUFJLE9BQU8sQ0FBQztFQUNaLElBQUksT0FBTyxDQUFDO0VBQ1osSUFBSSxPQUFPLENBQUM7RUFDWixJQUFJLFFBQVEsQ0FBQztFQUNiLEtBQUssUUFBUSxDQUFDO0FBQ2hCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uZm9udC1zaXplLTMwIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pbnNlcnQtY2FyZC13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmluc2VydC1jYXJkLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNjQ4cHg7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG59XHJcblxyXG4uaW5zZXJ0LWNhcmQtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4uaW5zZXJ0LWNhcmQtY2FyZCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBsZWZ0OiAyMSU7XHJcbiAgdG9wOiAtNDAlO1xyXG4gIGFuaW1hdGlvbjogY2FyZC1hbmltYXRlLXVwIDRzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmluc2VydC1jYXJkLWJhc2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbnNlcnQtY2FyZC1iYXNlLXRpcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAtMiU7XHJcbiAgei1pbmRleDogMjU7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50LXNwcmVhZCB7XHJcbiAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbiAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XHJcbiAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzFkZWcsICNmZmZmZmYsICMzMzMzMzMpO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQtc3ByZWFkIDRzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyODBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJkLWFuaW1hdGUtdXAge1xyXG4gIDAle3RvcDoxMDAlO31cclxuICAyMCV7dG9wOjUwJTt9XHJcbiAgNDAle3RvcDoxMCU7fVxyXG4gIDYwJXt0b3A6MTAlO31cclxuICA4MCV7dG9wOi0xMCU7fVxyXG4gIDEwMCV7dG9wOi00MCU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "pznN":
/*!******************************************************!*\
  !*** ./src/app/features/card/card-routing.module.ts ***!
  \******************************************************/
/*! exports provided: CardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRoutingModule", function() { return CardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "U0Pg");





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


/***/ })

}]);
//# sourceMappingURL=features-card-card-module.js.map