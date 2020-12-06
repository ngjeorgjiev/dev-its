(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-nfc-payment-nfc-payment-module"],{

/***/ "6cPV":
/*!***************************************************************!*\
  !*** ./src/app/features/nfc-payment/nfc-payment.component.ts ***!
  \***************************************************************/
/*! exports provided: NfcPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentComponent", function() { return NfcPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/divider/divider.component */ "JmOq");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");







function NfcPaymentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
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
function NfcPaymentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.redeemCredits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NfcPaymentComponent_ng_template_5_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.purchaseCredits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "redeem"), " X ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "credits"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "purchase"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "credits"), "");
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
        this.router.navigateByUrl('/checkout/nfc-payment/redeem-credits');
    }
    purchaseCredits() {
        this.router.navigateByUrl('/checkout/nfc-payment/purchase-credits');
    }
}
NfcPaymentComponent.ɵfac = function NfcPaymentComponent_Factory(t) { return new (t || NfcPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
NfcPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NfcPaymentComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"], [1, "row", "position-relative"], ["src", "assets/svg/nfc-header-input.svg", "alt", "image", 1, "m-auto", "position-absolute", "input-mask", "scalable-image"], ["src", "assets/svg/nfc-medal-small.svg", "alt", "image", 1, "m-auto", "position-absolute", "input-icon", "scalable-image"], [1, "input-credits", "position-absolute"], [1, "rotate-50-y", "rotating-header", "position-absolute"], [1, "rotate-50-y", "rotating-credits", "position-absolute"], ["src", "assets/svg/nfc-rotating-image-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "scalable-image"], ["src", "assets/svg/nfc-medal-empty.svg", "alt", "image", 1, "rotate-50-y", "m-auto", "rotating-medal", "scalable-image", "position-absolute"], ["src", "assets/svg/nfc-star-icon.svg", "alt", "image", 1, "m-auto", "rotating-star", "scalable-image", "position-absolute"], ["id", "cash", 1, "link", "position-relative", 3, "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], ["id", "card", 1, "link", "position-relative", 3, "click"]], template: function NfcPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NfcPaymentComponent_ng_template_1_Template, 7, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NfcPaymentComponent_ng_template_3_Template, 16, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NfcPaymentComponent_ng_template_5_Template, 12, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"], _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_4__["DividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoPipe"]], styles: [".link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  right: 37%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.rotate-50-y[_ngcontent-%COMP%] {\r\n  animation: rotate-50-y 3s infinite linear;\r\n  animation-direction: alternate;\r\n  z-index: 10;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 9%;\r\n}\r\n\r\n.cash-background[_ngcontent-%COMP%] {\r\n  top: 30px;\r\n  left: 50px;\r\n  height: 100%;\r\n  z-index: 6;\r\n}\r\n\r\n@keyframes rotate-50-y {\r\n  0% {\r\n    transform: rotateY(0);\r\n  }\r\n  100% {\r\n    transform: rotateY(50deg);\r\n  }\r\n}\r\n\r\n.rotating-medal[_ngcontent-%COMP%] {\r\n  top: 87px;\r\n  left: 177px;\r\n}\r\n\r\n.rotating-star[_ngcontent-%COMP%] {\r\n  top: 180px;\r\n  left: 281px;\r\n  animation: rotate-360 6s infinite linear;\r\n  z-index: 10;\r\n}\r\n\r\n.rotating-credits[_ngcontent-%COMP%] {\r\n  top: 78%;\r\n  left: 40%;\r\n  z-index: 20;\r\n  font-size: 30px;\r\n}\r\n\r\n.rotating-header[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  top: 4%;\r\n  left: 42%;\r\n  z-index: 20;\r\n  color: #0ed8d8;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.input-mask[_ngcontent-%COMP%] {\r\n  top: -25%;\r\n  left: 22%;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  top: -35%;\r\n  left: 18%;\r\n}\r\n\r\n.input-credits[_ngcontent-%COMP%] {\r\n  top: -20%;\r\n  left: 40%;\r\n  font-size: 22px;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\r\n\r\n@keyframes rotate-360 {\r\n  0%{transform: rotate(0deg) rotateY(0);}\r\n  50%{transform: rotate(360deg) rotateY(50deg);}\r\n  100%{transform: rotate(0) rotateY(0);}\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mYy1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxHQUFHLGtDQUFrQyxDQUFDO0VBQ3RDLElBQUksd0NBQXdDLENBQUM7RUFDN0MsS0FBSywrQkFBK0IsQ0FBQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoibmZjLXBheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHJpZ2h0OiAzNyU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGUtNTAteSB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUtNTAteSAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHRvcDogNDMlO1xyXG4gIGxlZnQ6IDklO1xyXG59XHJcblxyXG4uY2FzaC1iYWNrZ3JvdW5kIHtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtNTAteSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg1MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRpbmctbWVkYWwge1xyXG4gIHRvcDogODdweDtcclxuICBsZWZ0OiAxNzdweDtcclxufVxyXG5cclxuLnJvdGF0aW5nLXN0YXIge1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgbGVmdDogMjgxcHg7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUtMzYwIDZzIGluZmluaXRlIGxpbmVhcjtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnJvdGF0aW5nLWNyZWRpdHMge1xyXG4gIHRvcDogNzglO1xyXG4gIGxlZnQ6IDQwJTtcclxuICB6LWluZGV4OiAyMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGluZy1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0b3A6IDQlO1xyXG4gIGxlZnQ6IDQyJTtcclxuICB6LWluZGV4OiAyMDtcclxuICBjb2xvcjogIzBlZDhkODtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmlucHV0LW1hc2sge1xyXG4gIHRvcDogLTI1JTtcclxuICBsZWZ0OiAyMiU7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29uIHtcclxuICB0b3A6IC0zNSU7XHJcbiAgbGVmdDogMTglO1xyXG59XHJcblxyXG4uaW5wdXQtY3JlZGl0cyB7XHJcbiAgdG9wOiAtMjAlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS0zNjAge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHJvdGF0ZVkoMCk7fVxyXG4gIDUwJXt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHJvdGF0ZVkoNTBkZWcpO31cclxuICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDApIHJvdGF0ZVkoMCk7fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zY2FsYWJsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NfcPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './nfc-payment.component.html',
                styleUrls: ['./nfc-payment.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "7erX":
/*!************************************************************!*\
  !*** ./src/app/features/nfc-payment/nfc-payment.module.ts ***!
  \************************************************************/
/*! exports provided: NfcPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentModule", function() { return NfcPaymentModule; });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfc-payment-routing.module */ "rMgo");
/* harmony import */ var _nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nfc-payment.component */ "6cPV");






class NfcPaymentModule {
}
NfcPaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NfcPaymentModule });
NfcPaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NfcPaymentModule_Factory(t) { return new (t || NfcPaymentModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_SCOPE"], useValue: 'nfc-payment' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NfcPaymentModule, { declarations: [_nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__["NfcPaymentComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NfcPaymentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _nfc_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["NfcPaymentRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]
                ],
                declarations: [
                    _nfc_payment_component__WEBPACK_IMPORTED_MODULE_4__["NfcPaymentComponent"],
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_SCOPE"], useValue: 'nfc-payment' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "rMgo":
/*!********************************************************************!*\
  !*** ./src/app/features/nfc-payment/nfc-payment-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: NfcPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcPaymentRoutingModule", function() { return NfcPaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nfc_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nfc-payment.component */ "6cPV");





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


/***/ })

}]);
//# sourceMappingURL=features-nfc-payment-nfc-payment-module.js.map