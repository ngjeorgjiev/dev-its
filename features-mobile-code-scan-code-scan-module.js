(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-mobile-code-scan-code-scan-module"],{

/***/ "8xHL":
/*!****************************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/invalid-qr-code/invalid-qr-code.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InValidQrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InValidQrCodeComponent", function() { return InValidQrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function InValidQrCodeComponent_ng_template_1_Template(rf, ctx) { }
function InValidQrCodeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InValidQrCodeComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.valid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "invalidQRCode"));
} }
function InValidQrCodeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
class InValidQrCodeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    valid() {
        this.router.navigateByUrl('/code-scan/valid-qr-code');
    }
}
InValidQrCodeComponent.ɵfac = function InValidQrCodeComponent_Factory(t) { return new (t || InValidQrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InValidQrCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InValidQrCodeComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "invalid-pin-wrapper"], [1, "col", "invalid-pin-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "invalid-pin-base"], ["src", "assets/svg/code-scan-qr-wrapper.svg", "alt", "image", 1, "position-absolute", "invalid-pin-card"], ["src", "assets/svg/invalid-pin-icon.svg", "alt", "image", 1, "position-absolute", "invalid-pin-icon"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function InValidQrCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InValidQrCodeComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InValidQrCodeComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InValidQrCodeComponent_ng_template_5_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 50px 0;\r\n}\r\n\r\n.invalid-pin-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.invalid-pin-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.invalid-pin-icon[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 45%;\r\n  left: 56%;\r\n  animation: invalid-pin-animate-icon-mobile 5s infinite linear;\r\n}\r\n\r\n.invalid-pin-card[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 26%;\r\n  left: 33%;\r\n  transform: rotate(155deg);\r\n  animation: invalid-pin-animate-card-mobile 5s infinite linear;\r\n}\r\n\r\n@keyframes invalid-pin-animate-card-mobile {\r\n  0%{transform: rotate(180deg);}\r\n  50%{transform: rotate(155deg)}\r\n  100%{transform: rotate(180deg);}\r\n}\r\n\r\n@keyframes invalid-pin-animate-icon-mobile {\r\n  0%{width: 38%;top: 45%;left: 56%;}\r\n  50%{width: 28%;top: 40%;left: 64%;}\r\n  100%{width: 38%;top: 45%;left: 56%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmFsaWQtcXItY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLEdBQUcseUJBQXlCLENBQUM7RUFDN0IsSUFBSSx5QkFBeUI7RUFDN0IsS0FBSyx5QkFBeUIsQ0FBQztBQUNqQzs7QUFFQTtFQUNFLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDakMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNsQyxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQ3JDIiwiZmlsZSI6ImludmFsaWQtcXItY29kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIGgxIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLmludmFsaWQtcGluLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlIDA7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXBpbi1iYXNlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXBpbi1pY29uIHtcclxuICB3aWR0aDogMzglO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDU2JTtcclxuICBhbmltYXRpb246IGludmFsaWQtcGluLWFuaW1hdGUtaWNvbi1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uaW52YWxpZC1waW4tY2FyZCB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICB0b3A6IDI2JTtcclxuICBsZWZ0OiAzMyU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU1ZGVnKTtcclxuICBhbmltYXRpb246IGludmFsaWQtcGluLWFuaW1hdGUtY2FyZC1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGludmFsaWQtcGluLWFuaW1hdGUtY2FyZC1tb2JpbGUge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxyXG4gIDUwJXt0cmFuc2Zvcm06IHJvdGF0ZSgxNTVkZWcpfVxyXG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW52YWxpZC1waW4tYW5pbWF0ZS1pY29uLW1vYmlsZSB7XHJcbiAgMCV7d2lkdGg6IDM4JTt0b3A6IDQ1JTtsZWZ0OiA1NiU7fVxyXG4gIDUwJXt3aWR0aDogMjglO3RvcDogNDAlO2xlZnQ6IDY0JTt9XHJcbiAgMTAwJXt3aWR0aDogMzglO3RvcDogNDUlO2xlZnQ6IDU2JTt9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InValidQrCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './invalid-qr-code.component.html',
                styleUrls: ['./invalid-qr-code.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "91mn":
/*!************************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/valid-qr-code/valid-qr-code.component.ts ***!
  \************************************************************************************/
/*! exports provided: ValidQrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidQrCodeComponent", function() { return ValidQrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function ValidQrCodeComponent_ng_template_1_Template(rf, ctx) { }
function ValidQrCodeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidQrCodeComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validQRCode"));
} }
function ValidQrCodeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), "");
} }
class ValidQrCodeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    next() {
        this.router.navigateByUrl('/code-scan/valid-qr-code/registration');
    }
}
ValidQrCodeComponent.ɵfac = function ValidQrCodeComponent_Factory(t) { return new (t || ValidQrCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ValidQrCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidQrCodeComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "valid-pin-wrapper"], [1, "col", "valid-pin-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "valid-pin-base"], ["src", "assets/svg/code-scan-qr-wrapper.svg", "alt", "image", 1, "position-absolute", "valid-pin-card"], ["src", "assets/svg/valid-pin-icon.svg", "alt", "image", 1, "position-absolute", "valid-pin-icon"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function ValidQrCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidQrCodeComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValidQrCodeComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ValidQrCodeComponent_ng_template_5_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 50px 0;\r\n}\r\n\r\n.valid-pin-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.valid-pin-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.valid-pin-icon[_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  top: 34%;\r\n  left: 43%;\r\n  animation: valid-pin-animate-icon-mobile 5s infinite linear;\r\n}\r\n\r\n.valid-pin-card[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 26%;\r\n  left: 33%;\r\n  transform: rotate(155deg);\r\n  animation: valid-pin-animate-card-mobile 5s infinite linear;\r\n}\r\n\r\n@keyframes valid-pin-animate-card-mobile {\r\n  0%{transform: rotate(180deg);}\r\n  50%{transform: rotate(155deg)}\r\n  100%{transform: rotate(180deg);}\r\n}\r\n\r\n@keyframes valid-pin-animate-icon-mobile {\r\n  0%{width: 65%;top: 34%;left: 43%;}\r\n  50%{width: 45%;top: 33%;left: 54%;}\r\n  100%{width: 65%;top: 34%;left: 43%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkLXFyLWNvZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxHQUFHLHlCQUF5QixDQUFDO0VBQzdCLElBQUkseUJBQXlCO0VBQzdCLEtBQUsseUJBQXlCLENBQUM7QUFDakM7O0FBRUE7RUFDRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2pDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDbEMsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNyQyIsImZpbGUiOiJ2YWxpZC1xci1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWxvZ28tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXIgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4udmFsaWQtcGluLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlIDA7XHJcbn1cclxuXHJcbi52YWxpZC1waW4tYmFzZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4udmFsaWQtcGluLWljb24ge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgdG9wOiAzNCU7XHJcbiAgbGVmdDogNDMlO1xyXG4gIGFuaW1hdGlvbjogdmFsaWQtcGluLWFuaW1hdGUtaWNvbi1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4udmFsaWQtcGluLWNhcmQge1xyXG4gIHdpZHRoOiAzOCU7XHJcbiAgdG9wOiAyNiU7XHJcbiAgbGVmdDogMzMlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1NWRlZyk7XHJcbiAgYW5pbWF0aW9uOiB2YWxpZC1waW4tYW5pbWF0ZS1jYXJkLW1vYmlsZSA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtcGluLWFuaW1hdGUtY2FyZC1tb2JpbGUge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxyXG4gIDUwJXt0cmFuc2Zvcm06IHJvdGF0ZSgxNTVkZWcpfVxyXG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmFsaWQtcGluLWFuaW1hdGUtaWNvbi1tb2JpbGUge1xyXG4gIDAle3dpZHRoOiA2NSU7dG9wOiAzNCU7bGVmdDogNDMlO31cclxuICA1MCV7d2lkdGg6IDQ1JTt0b3A6IDMzJTtsZWZ0OiA1NCU7fVxyXG4gIDEwMCV7d2lkdGg6IDY1JTt0b3A6IDM0JTtsZWZ0OiA0MyU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidQrCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './valid-qr-code.component.html',
                styleUrls: ['./valid-qr-code.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9voa":
/*!**********************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/verification/verification.component.ts ***!
  \**********************************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");







function VerificationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VerificationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "verification"), "");
} }
function VerificationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationComponent_ng_template_5_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToVerify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "enterCode"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "poweredBy"), " ");
} }
class VerificationComponent {
    constructor(router, route, location) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.progress = 0;
        this.loading = false;
        this.phoneId = '';
        this.sub = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((params) => params.params))
            .subscribe((params) => {
            this.phoneId = params['phoneId'];
        });
    }
    goBack() {
        this.location.back();
    }
    goToVerify() {
        this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification/unverified`);
    }
    verification() {
        this.interval = setInterval(() => {
            this.loading = true;
            if (this.progress < 100) {
                this.progress = this.progress + 15;
            }
            else {
                this.loading = false;
                const isValid = true;
                if (isValid) {
                    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/${this.phoneId}/verification/verified`);
                }
                else {
                    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/${this.phoneId}/verification/unverified`);
                }
            }
        }, 200);
    }
    resendCode() { }
    ngOnDestroy() {
        clearInterval(this.interval);
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
VerificationComponent.ɵfac = function VerificationComponent_Factory(t) { return new (t || VerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
VerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerificationComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "content-header", "w-100", "text-center"], [1, "w-100", "text-center"], [1, "row", "thank-you-wrapper"], [1, "col", "thank-you-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/verification-person.svg", "alt", "image", 1, "position-absolute", "thank-you-background"], ["src", "assets/svg/verification-icon.svg", "alt", "image", 1, "position-absolute", "thank-you-bubble"], [1, "row"], [1, "pb-5", "w-100", "text-center"], [1, "position-relative", "py-3"], [1, "small-heading", "font-size-30", "mb-3"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "row", 3, "click"], ["src", "assets/svg/verification-input.svg", "alt", "image", 1, "m-auto", "input-mask"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function VerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerificationComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerificationComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerificationComponent_ng_template_5_Template, 13, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoPipe"]], styles: [".back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.thank-you-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin: 15% 0;\r\n}\r\n\r\n.thank-you-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-background[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  top: 30%;\r\n  left: 42%;\r\n  animation: verification-person-mobile 5s infinite linear;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 22px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 15%;\r\n}\r\n\r\n@keyframes verification-bubble-mobile {\r\n  0%{transform: rotate(0);}\r\n  50%{transform: rotate(30deg)}\r\n  100%{transform: rotate(0);}\r\n}\r\n\r\n@keyframes verification-person-mobile {\r\n  0%{width: 16%; top: 30%; left: 42%;}\r\n  50%{width: 40%; top: 18%; left: 29%;}\r\n  100%{width: 16%; top: 30%; left: 42%;}\r\n}\r\n\r\n.thank-you-bubble[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  left: 36%;\r\n  top: 23%;\r\n  animation: verification-bubble-mobile 5s infinite linear;\r\n}\r\n\r\n.thank-you-base-tip[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 25%;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLEdBQUcsb0JBQW9CLENBQUM7RUFDeEIsSUFBSSx3QkFBd0I7RUFDNUIsS0FBSyxvQkFBb0IsQ0FBQztBQUM1Qjs7QUFFQTtFQUNFLEdBQUcsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7RUFDbkMsSUFBSSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztFQUNwQyxLQUFLLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO0FBQ3ZDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsR0FBRywwQkFBMEI7RUFDN0IsSUFBSSw0QkFBNEI7RUFDaEMsS0FBSywwQkFBMEI7QUFDakM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJ2ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTBweDtcclxuICBsZWZ0OiAtMzVweDtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbn1cclxuXHJcbi5mb250LXNpemUtMzAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1pbWFnZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDM4NXB4O1xyXG4gIG1hcmdpbjogMTUlIDA7XHJcbn1cclxuXHJcbi50aGFuay15b3UtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4udGhhbmsteW91LWJhc2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTYlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDQyJTtcclxuICBhbmltYXRpb246IHZlcmlmaWNhdGlvbi1wZXJzb24tbW9iaWxlIDVzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmNhcmQtdGV4dC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICB0b3A6IDQzJTtcclxuICBsZWZ0OiAxNSU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdmVyaWZpY2F0aW9uLWJ1YmJsZS1tb2JpbGUge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDApO31cclxuICA1MCV7dHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpfVxyXG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoMCk7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHZlcmlmaWNhdGlvbi1wZXJzb24tbW9iaWxlIHtcclxuICAwJXt3aWR0aDogMTYlOyB0b3A6IDMwJTsgbGVmdDogNDIlO31cclxuICA1MCV7d2lkdGg6IDQwJTsgdG9wOiAxOCU7IGxlZnQ6IDI5JTt9XHJcbiAgMTAwJXt3aWR0aDogMTYlOyB0b3A6IDMwJTsgbGVmdDogNDIlO31cclxufVxyXG5cclxuLnRoYW5rLXlvdS1idWJibGUge1xyXG4gIHdpZHRoOiAzOCU7XHJcbiAgbGVmdDogMzYlO1xyXG4gIHRvcDogMjMlO1xyXG4gIGFuaW1hdGlvbjogdmVyaWZpY2F0aW9uLWJ1YmJsZS1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4udGhhbmsteW91LWJhc2UtdGlwIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogLTIlO1xyXG4gIHotaW5kZXg6IDI1O1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXIgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudC1zcHJlYWQge1xyXG4gIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxyXG4gIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxyXG4gIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcxZGVnLCAjZmZmZmZmLCAjMzMzMzMzKTtcclxuICBhbmltYXRpb246IGdyYWRpZW50LXNwcmVhZCA0cyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnNjYWxhYmxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './verification.component.html',
                styleUrls: ['./verification.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "LLuX":
/*!***********************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/code-scan-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CodeScanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeScanRoutingModule", function() { return CodeScanRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _code_scan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-scan.component */ "jqza");
/* harmony import */ var _invalid_qr_code_invalid_qr_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid-qr-code/invalid-qr-code.component */ "8xHL");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "v0ct");
/* harmony import */ var _unverified_unverified_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unverified/unverified.component */ "cs+O");
/* harmony import */ var _valid_qr_code_valid_qr_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./valid-qr-code/valid-qr-code.component */ "91mn");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification/verification.component */ "9voa");
/* harmony import */ var _verified_verified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verified/verified.component */ "VaPx");











const routes = [
    {
        path: '',
        component: _code_scan_component__WEBPACK_IMPORTED_MODULE_2__["CodeScanComponent"]
    },
    {
        path: 'valid-qr-code',
        component: _valid_qr_code_valid_qr_code_component__WEBPACK_IMPORTED_MODULE_6__["ValidQrCodeComponent"]
    },
    {
        path: 'invalid-qr-code',
        component: _invalid_qr_code_invalid_qr_code_component__WEBPACK_IMPORTED_MODULE_3__["InValidQrCodeComponent"]
    },
    {
        path: 'valid-qr-code/registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    },
    {
        path: 'valid-qr-code/registration/verification',
        component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_7__["VerificationComponent"]
    },
    {
        path: 'valid-qr-code/registration/verification/verified',
        component: _verified_verified_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedComponent"]
    },
    {
        path: 'valid-qr-code/registration/verification/unverified',
        component: _unverified_unverified_component__WEBPACK_IMPORTED_MODULE_5__["UnverifiedComponent"]
    }
];
class CodeScanRoutingModule {
}
CodeScanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodeScanRoutingModule });
CodeScanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodeScanRoutingModule_Factory(t) { return new (t || CodeScanRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeScanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeScanRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "VaPx":
/*!**************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/verified/verified.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifiedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedComponent", function() { return VerifiedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function VerifiedComponent_ng_template_1_Template(rf, ctx) { }
function VerifiedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifiedComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "verified"));
} }
function VerifiedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
class VerifiedComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // setTimeout( () => {
        //   this.router.navigateByUrl('/code-scan/checkout');
        // }, 2000);
    }
    goToCheckout() {
        this.router.navigateByUrl('/code-scan/checkout');
    }
}
VerifiedComponent.ɵfac = function VerifiedComponent_Factory(t) { return new (t || VerifiedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
VerifiedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifiedComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "unverified-wrapper"], [1, "col", "unverified-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "unverified-base"], ["src", "assets/svg/verification-person.svg", "alt", "image", 1, "position-absolute", "unverified-card"], ["src", "assets/svg/valid-pin-icon.svg", "alt", "image", 1, "position-absolute", "unverified-icon"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function VerifiedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerifiedComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerifiedComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerifiedComponent_ng_template_5_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 50px 0;\r\n}\r\n\r\n.unverified-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.unverified-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.unverified-icon[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 45%;\r\n  left: 56%;\r\n  animation: unverified-animate-icon-mobile 5s infinite linear;\r\n}\r\n\r\n.unverified-card[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 26%;\r\n  left: 33%;\r\n  animation: unverified-animate-card-mobile 5s infinite linear;\r\n}\r\n\r\n@keyframes unverified-animate-card-mobile {\r\n  0%{transform: rotate(0);}\r\n  50%{transform: rotate(-15deg)}\r\n  100%{transform: rotate(0);}\r\n}\r\n\r\n@keyframes unverified-animate-icon-mobile {\r\n  0%{width: 38%;top: 45%;left: 56%;}\r\n  50%{width: 28%;top: 40%;left: 64%;}\r\n  100%{width: 38%;top: 45%;left: 56%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxHQUFHLG9CQUFvQixDQUFDO0VBQ3hCLElBQUkseUJBQXlCO0VBQzdCLEtBQUssb0JBQW9CLENBQUM7QUFDNUI7O0FBRUE7RUFDRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2pDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDbEMsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNyQyIsImZpbGUiOiJ2ZXJpZmllZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIGgxIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLnVudmVyaWZpZWQtaW1hZ2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAzODVweDtcclxuICBtYXJnaW4tdG9wOiAxNSUgMDtcclxufVxyXG5cclxuLnVudmVyaWZpZWQtYmFzZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4udW52ZXJpZmllZC1pY29uIHtcclxuICB3aWR0aDogMzglO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDU2JTtcclxuICBhbmltYXRpb246IHVudmVyaWZpZWQtYW5pbWF0ZS1pY29uLW1vYmlsZSA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi51bnZlcmlmaWVkLWNhcmQge1xyXG4gIHdpZHRoOiAzOCU7XHJcbiAgdG9wOiAyNiU7XHJcbiAgbGVmdDogMzMlO1xyXG4gIGFuaW1hdGlvbjogdW52ZXJpZmllZC1hbmltYXRlLWNhcmQtbW9iaWxlIDVzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyB1bnZlcmlmaWVkLWFuaW1hdGUtY2FyZC1tb2JpbGUge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDApO31cclxuICA1MCV7dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKX1cclxuICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDApO31cclxufVxyXG5cclxuQGtleWZyYW1lcyB1bnZlcmlmaWVkLWFuaW1hdGUtaWNvbi1tb2JpbGUge1xyXG4gIDAle3dpZHRoOiAzOCU7dG9wOiA0NSU7bGVmdDogNTYlO31cclxuICA1MCV7d2lkdGg6IDI4JTt0b3A6IDQwJTtsZWZ0OiA2NCU7fVxyXG4gIDEwMCV7d2lkdGg6IDM4JTt0b3A6IDQ1JTtsZWZ0OiA1NiU7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifiedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './verified.component.html',
                styleUrls: ['./verified.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "cs+O":
/*!******************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/unverified/unverified.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnverifiedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedComponent", function() { return UnverifiedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





function UnverifiedComponent_ng_template_1_Template(rf, ctx) { }
function UnverifiedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnverifiedComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.verified(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "unverified"));
} }
function UnverifiedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "poweredBy"), " ");
} }
class UnverifiedComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.router.navigateByUrl(`/code-scan/valid-qr-code/registration`);
        // }, 2000);
    }
    verified() {
        this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification/verified`);
    }
}
UnverifiedComponent.ɵfac = function UnverifiedComponent_Factory(t) { return new (t || UnverifiedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UnverifiedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnverifiedComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "row", "content-header", 3, "click"], [1, "w-100", "text-center"], [1, "row", "unverified-wrapper"], [1, "col", "unverified-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "unverified-base"], ["src", "assets/svg/verification-person.svg", "alt", "image", 1, "position-absolute", "unverified-card"], ["src", "assets/svg/invalid-pin-icon.svg", "alt", "image", 1, "position-absolute", "unverified-icon"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function UnverifiedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnverifiedComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnverifiedComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnverifiedComponent_ng_template_5_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 50px 0;\r\n}\r\n\r\n.unverified-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.unverified-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.unverified-icon[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 45%;\r\n  left: 56%;\r\n  animation: unverified-animate-icon-mobile 5s infinite linear;\r\n}\r\n\r\n.unverified-card[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  top: 26%;\r\n  left: 33%;\r\n  animation: unverified-animate-card-mobile 5s infinite linear;\r\n}\r\n\r\n@keyframes unverified-animate-card-mobile {\r\n  0%{transform: rotate(0);}\r\n  50%{transform: rotate(-15deg)}\r\n  100%{transform: rotate(0);}\r\n}\r\n\r\n@keyframes unverified-animate-icon-mobile {\r\n  0%{width: 38%;top: 45%;left: 56%;}\r\n  50%{width: 28%;top: 40%;left: 64%;}\r\n  100%{width: 38%;top: 45%;left: 56%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLEdBQUcsb0JBQW9CLENBQUM7RUFDeEIsSUFBSSx5QkFBeUI7RUFDN0IsS0FBSyxvQkFBb0IsQ0FBQztBQUM1Qjs7QUFFQTtFQUNFLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDakMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNsQyxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQ3JDIiwiZmlsZSI6InVudmVyaWZpZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi51bnZlcmlmaWVkLWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlIDA7XHJcbn1cclxuXHJcbi51bnZlcmlmaWVkLWJhc2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG5cclxuLnVudmVyaWZpZWQtaWNvbiB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICB0b3A6IDQ1JTtcclxuICBsZWZ0OiA1NiU7XHJcbiAgYW5pbWF0aW9uOiB1bnZlcmlmaWVkLWFuaW1hdGUtaWNvbi1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4udW52ZXJpZmllZC1jYXJkIHtcclxuICB3aWR0aDogMzglO1xyXG4gIHRvcDogMjYlO1xyXG4gIGxlZnQ6IDMzJTtcclxuICBhbmltYXRpb246IHVudmVyaWZpZWQtYW5pbWF0ZS1jYXJkLW1vYmlsZSA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdW52ZXJpZmllZC1hbmltYXRlLWNhcmQtbW9iaWxlIHtcclxuICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwKTt9XHJcbiAgNTAle3RyYW5zZm9ybTogcm90YXRlKC0xNWRlZyl9XHJcbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdW52ZXJpZmllZC1hbmltYXRlLWljb24tbW9iaWxlIHtcclxuICAwJXt3aWR0aDogMzglO3RvcDogNDUlO2xlZnQ6IDU2JTt9XHJcbiAgNTAle3dpZHRoOiAyOCU7dG9wOiA0MCU7bGVmdDogNjQlO31cclxuICAxMDAle3dpZHRoOiAzOCU7dG9wOiA0NSU7bGVmdDogNTYlO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnverifiedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './unverified.component.html',
                styleUrls: ['./unverified.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "jqza":
/*!******************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/code-scan.component.ts ***!
  \******************************************************************/
/*! exports provided: CodeScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeScanComponent", function() { return CodeScanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/layout-divider.component */ "Iych");





function CodeScanComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeScanComponent_ng_template_1_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CodeScanComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CodeScanComponent_ng_template_1_div_0_Template, 2, 0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.validating);
} }
function CodeScanComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeScanComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goToValidate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "QR code scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Align QR code with the frame to scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeScanComponent_ng_template_3_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToInvalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Validating Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.scanning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.validating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.progress * 10, "px");
} }
function CodeScanComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeScanComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.scanCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scan Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Powered by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r5.scanning);
} }
class CodeScanComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.scanning = false;
        this.validating = false;
        this.progress = 0;
    }
    goBack() {
        this.location.back();
    }
    scanCode() {
        this.scanning = true;
    }
    goToValidate() {
        if (this.scanning) {
            this.validating = true;
            this.interval = setInterval(() => {
                if (this.progress < 35) {
                    this.progress = this.progress + 1;
                }
            }, 200);
        }
    }
    goToInvalid() {
        this.router.navigateByUrl('/code-scan/invalid-qr-code');
    }
    ngOnInit() { }
}
CodeScanComponent.ɵfac = function CodeScanComponent_Factory(t) { return new (t || CodeScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
CodeScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeScanComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], ["class", "back-button-container", 3, "click", 4, "ngIf"], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "row", "content-header", 3, "hidden", "click"], [1, "w-100", "text-center"], [1, "row", "content-header", 3, "hidden"], [1, "small-heading", "w-100", "text-center"], [1, "row", "code-scan-wrapper", 3, "hidden"], [1, "col", "code-scan-image"], ["src", "assets/svg/thank-you-base.svg", "alt", "image", 1, "position-absolute", "code-scan-base"], ["src", "assets/svg/code-scan-qr.svg", "alt", "image", 1, "position-absolute", "code-scan-animate"], ["src", "assets/svg/code-scan-qr-mask.svg", "alt", "image", 1, "position-absolute", "code-scan-icon"], ["src", "assets/svg/code-scan-qr-wrapper.svg", "alt", "image", 1, "position-absolute", "code-scan-base-image", 3, "hidden"], [1, "code-scan-validation", "flex", "flex-column", "text-center", 3, "hidden", "click"], [1, "progress-heading"], [1, "progress-bar"], ["id", "cash", 1, "link", "position-relative", "mt-3", 3, "hidden", "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function CodeScanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeScanComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CodeScanComponent_ng_template_3_Template, 16, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CodeScanComponent_ng_template_5_Template, 7, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding: 25% 0 30px 0;\r\n}\r\n\r\n.small-heading[_ngcontent-%COMP%] {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.code-scan-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin-top: 15% 0;\r\n}\r\n\r\n.code-scan-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.code-scan-base-image[_ngcontent-%COMP%] {\r\n  top: 27%;\r\n  left: 30%;\r\n}\r\n\r\n.code-scan-animate[_ngcontent-%COMP%] {\r\n  top: 100px;\r\n  left: 27%;\r\n  animation: code-scan-animate-line-mobile 5s infinite linear;\r\n}\r\n\r\n.code-scan-icon[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  top: 23%;\r\n  left: 26%;\r\n  animation: code-scan-animate-icon-mobile 5s infinite linear;\r\n}\r\n\r\n@keyframes code-scan-animate-icon-mobile {\r\n  0%{width: 48%;top: 23%;left: 26%;}\r\n  50%{width: 50%;top: 22%;left: 25%;}\r\n  100%{width: 48%;top: 23%;left: 26%;}\r\n}\r\n\r\n@keyframes code-scan-animate-line-mobile {\r\n  0%{top: 100px;}\r\n  50%{top: 250px;}\r\n  100%{top: 100px;}\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n.side-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-family: \"Montserrat\";\r\n  right: 37%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 9%;\r\n}\r\n\r\n.code-scan-validation[_ngcontent-%COMP%] {\r\n  height: 90vh;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  background-color: rgb(14, 216, 216);\r\n  width: 350px;\r\n  border-radius: 25px;\r\n}\r\n\r\n.progress-heading[_ngcontent-%COMP%] {\r\n  color: rgb(14, 216, 216);\r\n  font-size: 20px;\r\n  font-family: \"Montserrat\";\r\n  padding-top: 50%;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtc2Nhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNqQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQ2xDLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDckM7O0FBRUE7RUFDRSxHQUFHLFVBQVUsQ0FBQztFQUNkLElBQUksVUFBVSxDQUFDO0VBQ2YsS0FBSyxVQUFVLENBQUM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiY29kZS1zY2FuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgbGVmdDogLTM1cHg7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXIgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZzogMjUlIDAgMzBweCAwO1xyXG59XHJcblxyXG4uc21hbGwtaGVhZGluZyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb2RlLXNjYW4taW1hZ2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAzODVweDtcclxuICBtYXJnaW4tdG9wOiAxNSUgMDtcclxufVxyXG5cclxuLmNvZGUtc2Nhbi1iYXNlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi5jb2RlLXNjYW4tYmFzZS1pbWFnZSB7XHJcbiAgdG9wOiAyNyU7XHJcbiAgbGVmdDogMzAlO1xyXG59XHJcblxyXG4uY29kZS1zY2FuLWFuaW1hdGUge1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMjclO1xyXG4gIGFuaW1hdGlvbjogY29kZS1zY2FuLWFuaW1hdGUtbGluZS1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uY29kZS1zY2FuLWljb24ge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgdG9wOiAyMyU7XHJcbiAgbGVmdDogMjYlO1xyXG4gIGFuaW1hdGlvbjogY29kZS1zY2FuLWFuaW1hdGUtaWNvbi1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvZGUtc2Nhbi1hbmltYXRlLWljb24tbW9iaWxlIHtcclxuICAwJXt3aWR0aDogNDglO3RvcDogMjMlO2xlZnQ6IDI2JTt9XHJcbiAgNTAle3dpZHRoOiA1MCU7dG9wOiAyMiU7bGVmdDogMjUlO31cclxuICAxMDAle3dpZHRoOiA0OCU7dG9wOiAyMyU7bGVmdDogMjYlO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBjb2RlLXNjYW4tYW5pbWF0ZS1saW5lLW1vYmlsZSB7XHJcbiAgMCV7dG9wOiAxMDBweDt9XHJcbiAgNTAle3RvcDogMjUwcHg7fVxyXG4gIDEwMCV7dG9wOiAxMDBweDt9XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHJpZ2h0OiAzNyU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgdG9wOiA0MyU7XHJcbiAgbGVmdDogOSU7XHJcbn1cclxuXHJcbi5jb2RlLXNjYW4tdmFsaWRhdGlvbiB7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAyMTYsIDIxNik7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWFkaW5nIHtcclxuICBjb2xvcjogcmdiKDE0LCAyMTYsIDIxNik7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zY2FsYWJsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeScanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './code-scan.component.html',
                styleUrls: ['./code-scan.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "qxYu":
/*!***************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/code-scan.module.ts ***!
  \***************************************************************/
/*! exports provided: CodeScanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeScanModule", function() { return CodeScanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _code_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-scan-routing.module */ "LLuX");
/* harmony import */ var _code_scan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-scan.component */ "jqza");
/* harmony import */ var _invalid_qr_code_invalid_qr_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invalid-qr-code/invalid-qr-code.component */ "8xHL");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "v0ct");
/* harmony import */ var _unverified_unverified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unverified/unverified.component */ "cs+O");
/* harmony import */ var _valid_qr_code_valid_qr_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid-qr-code/valid-qr-code.component */ "91mn");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification/verification.component */ "9voa");
/* harmony import */ var _verified_verified_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verified/verified.component */ "VaPx");












class CodeScanModule {
}
CodeScanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodeScanModule });
CodeScanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodeScanModule_Factory(t) { return new (t || CodeScanModule)(); }, providers: [
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'code-scan' }
    ], imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _code_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CodeScanRoutingModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeScanModule, { declarations: [_code_scan_component__WEBPACK_IMPORTED_MODULE_4__["CodeScanComponent"],
        _valid_qr_code_valid_qr_code_component__WEBPACK_IMPORTED_MODULE_8__["ValidQrCodeComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
        _invalid_qr_code_invalid_qr_code_component__WEBPACK_IMPORTED_MODULE_5__["InValidQrCodeComponent"],
        _verification_verification_component__WEBPACK_IMPORTED_MODULE_9__["VerificationComponent"],
        _verified_verified_component__WEBPACK_IMPORTED_MODULE_10__["VerifiedComponent"],
        _unverified_unverified_component__WEBPACK_IMPORTED_MODULE_7__["UnverifiedComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _code_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CodeScanRoutingModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeScanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _code_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CodeScanRoutingModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"]
                ],
                declarations: [
                    _code_scan_component__WEBPACK_IMPORTED_MODULE_4__["CodeScanComponent"],
                    _valid_qr_code_valid_qr_code_component__WEBPACK_IMPORTED_MODULE_8__["ValidQrCodeComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                    _invalid_qr_code_invalid_qr_code_component__WEBPACK_IMPORTED_MODULE_5__["InValidQrCodeComponent"],
                    _verification_verification_component__WEBPACK_IMPORTED_MODULE_9__["VerificationComponent"],
                    _verified_verified_component__WEBPACK_IMPORTED_MODULE_10__["VerifiedComponent"],
                    _unverified_unverified_component__WEBPACK_IMPORTED_MODULE_7__["UnverifiedComponent"]
                ],
                entryComponents: [],
                providers: [
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TRANSLOCO_SCOPE"], useValue: 'code-scan' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "v0ct":
/*!**********************************************************************************!*\
  !*** ./src/app/features-mobile/code-scan/registration/registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/layout/layout-divider.component */ "Iych");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");






function RegistrationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "registration"), "");
} }
function RegistrationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_ng_template_5_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.enableSendCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_ng_template_5_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.scanCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "enterPhoneNumber"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.sendCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 5, "poweredBy"), " ");
} }
class RegistrationComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.phoneEnteredId = '123-45-678-910';
        this.sendCode = false;
    }
    verification(phoneId) {
        this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/${phoneId}/verification`);
    }
    goBack() {
        this.location.back();
    }
    enableSendCode() {
        this.sendCode = true;
    }
    scanCode() {
        this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification`);
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["static", ""], ["left", ""], ["right", ""], [1, "back-button-container", 3, "click"], ["src", "assets/svg/back-button-bg.svg", "alt", "image"], [1, "content-header", "w-100", "text-center"], [1, "w-100", "text-center"], [1, "row", "thank-you-wrapper"], [1, "col", "thank-you-image"], ["src", "assets/svg/box-wrapper-border-mask.svg", "alt", "image", 1, "position-absolute", "thank-you-base"], ["src", "assets/svg/nfc-background-phone.svg", "alt", "image", 1, "position-absolute", "thank-you-background"], ["src", "assets/svg/registration-bubble.svg", "alt", "image", 1, "position-absolute", "thank-you-bubble"], [1, "row"], [1, "pb-5", "w-100", "text-center"], [1, "position-relative", "py-3"], [1, "small-heading", "font-size-30", "mb-3"], ["src", "assets/svg/insert-money-gradient.svg", "alt", "image", 1, "gradient-line"], [1, "row", 3, "click"], ["src", "assets/svg/nfc-header-input.svg", "alt", "image", 1, "m-auto", "input-mask"], ["id", "cash", 1, "link", "position-relative", "mt-3", 3, "hidden", "click"], [1, "card-text-content"], ["src", "assets/svg/card-background.svg", "alt", "image", 1, "pt-3", "scalable-image"], [1, "footer-logo-container"], ["src", "assets/svg/footer-logo.svg", "alt", "image"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_ng_template_5_Template, 17, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_divider_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDividerComponent"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"]], styles: [".back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: -35px;\r\n  z-index: 20;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 40px 0 20px 0;\r\n  text-align: center;\r\n  font-family: \"Montserrat\";\r\n}\r\n\r\n.font-size-30[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.thank-you-image[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 385px;\r\n  margin: 15% 0;\r\n}\r\n\r\n.thank-you-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-base[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: 0%;\r\n}\r\n\r\n.thank-you-background[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  top: -3%;\r\n  animation: registration-card-mobile 5s infinite linear;\r\n}\r\n\r\n.card-text-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 22px;\r\n  font-family: \"Montserrat\";\r\n  top: 43%;\r\n  left: 15%;\r\n}\r\n\r\n@keyframes registration-card-mobile {\r\n  0%{transform: rotate(0);}\r\n  50%{transform: rotate(-15deg)}\r\n  100%{transform: rotate(0);}\r\n}\r\n\r\n.thank-you-bubble[_ngcontent-%COMP%] {\r\n  width: 38%;\r\n  left: 47%;\r\n  top: 6%;\r\n}\r\n\r\n.thank-you-base-tip[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  top: -2%;\r\n  z-index: 25;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\";\r\n  font-size: 40px;\r\n  padding-top: 25%;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  height: 30%;\r\n  z-index: 5;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes gradient-spread {\r\n  0%{background-position:0% 50%}\r\n  50%{background-position:100% 50%}\r\n  100%{background-position:0% 50%}\r\n}\r\n\r\n.gradient-background[_ngcontent-%COMP%] {\r\n  background: linear-gradient(271deg, #ffffff, #333333);\r\n  animation: gradient-spread 4s ease infinite;\r\n}\r\n\r\n.gradient-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  top: 0;\r\n  left: 280px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .scalable-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsR0FBRyxvQkFBb0IsQ0FBQztFQUN4QixJQUFJLHlCQUF5QjtFQUM3QixLQUFLLG9CQUFvQixDQUFDO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxHQUFHLDBCQUEwQjtFQUM3QixJQUFJLDRCQUE0QjtFQUNoQyxLQUFLLDBCQUEwQjtBQUNqQzs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01MHB4O1xyXG4gIGxlZnQ6IC0zNXB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmZvbnQtc2l6ZS0zMCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGhhbmsteW91LWltYWdlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luOiAxNSUgMDtcclxufVxyXG5cclxuLnRoYW5rLXlvdS1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuXHJcbi50aGFuay15b3UtYmFzZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcblxyXG4udGhhbmsteW91LWJhY2tncm91bmQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdG9wOiAtMyU7XHJcbiAgYW5pbWF0aW9uOiByZWdpc3RyYXRpb24tY2FyZC1tb2JpbGUgNXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHRvcDogNDMlO1xyXG4gIGxlZnQ6IDE1JTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByZWdpc3RyYXRpb24tY2FyZC1tb2JpbGUge1xyXG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDApO31cclxuICA1MCV7dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKX1cclxuICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDApO31cclxufVxyXG5cclxuLnRoYW5rLXlvdS1idWJibGUge1xyXG4gIHdpZHRoOiAzOCU7XHJcbiAgbGVmdDogNDclO1xyXG4gIHRvcDogNiU7XHJcbn1cclxuXHJcbi50aGFuay15b3UtYmFzZS10aXAge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdG9wOiAtMiU7XHJcbiAgei1pbmRleDogMjU7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nLXRvcDogMjUlO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50LXNwcmVhZCB7XHJcbiAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbiAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XHJcbiAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzFkZWcsICNmZmZmZmYsICMzMzMzMzMpO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQtc3ByZWFkIDRzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyODBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2NhbGFibGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-mobile-code-scan-code-scan-module.js.map