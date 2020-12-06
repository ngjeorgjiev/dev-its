(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/JB0":
/*!**********************************!*\
  !*** ./src/app/routes-mobile.ts ***!
  \**********************************/
/*! exports provided: MOBILE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_ROUTES", function() { return MOBILE_ROUTES; });
const MOBILE_ROUTES = [
    {
        path: 'code-scan',
        loadChildren: () => Promise.all(/*! import() | features-mobile-code-scan-code-scan-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-code-scan-code-scan-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/code-scan/code-scan.module */ "qxYu")).then((m) => m.CodeScanModule)
    },
    {
        path: 'code-scan/checkout',
        loadChildren: () => Promise.all(/*! import() | features-mobile-checkout-checkout-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-checkout-checkout-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/checkout/checkout.module */ "WL2S")).then((m) => m.CheckoutModule)
    },
    {
        path: 'code-scan/checkout/cash',
        loadChildren: () => Promise.all(/*! import() | features-mobile-cash-cash-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-cash-cash-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/cash/cash.module */ "hTLm")).then((m) => m.CashModule)
    },
    {
        path: 'code-scan/checkout/cash/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-mobile-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/thank-you/thank-you.module */ "G/Km")).then((m) => m.ThankYouModule)
    },
    {
        path: 'code-scan/checkout/card',
        loadChildren: () => Promise.all(/*! import() | features-mobile-card-card-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-card-card-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/card/card.module */ "5cOq")).then((m) => m.CardModule)
    },
    {
        path: 'code-scan/checkout/card/insert-card',
        loadChildren: () => Promise.all(/*! import() | features-mobile-insert-card-insert-card-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-insert-card-insert-card-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/insert-card/insert-card.module */ "qyB7")).then((m) => m.InsertCardModule)
    },
    {
        path: 'code-scan/checkout/card/insert-card/valid/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-mobile-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/thank-you/thank-you.module */ "G/Km")).then((m) => m.ThankYouModule)
    },
    {
        path: 'code-scan/checkout/nfc-payment',
        loadChildren: () => Promise.all(/*! import() | features-mobile-nfc-payment-nfc-payment-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-nfc-payment-nfc-payment-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/nfc-payment/nfc-payment.module */ "tQYk")).then((m) => m.NfcPaymentModule)
    },
    {
        path: 'code-scan/checkout/nfc-payment/redeem-credits',
        loadChildren: () => Promise.all(/*! import() | features-mobile-redeem-credits-redeem-credits-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-redeem-credits-redeem-credits-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/redeem-credits/redeem-credits.module */ "zHT3")).then((m) => m.RedeemCreditsModule)
    },
    {
        path: 'code-scan/checkout/nfc-payment/redeem-credits/valid/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-mobile-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/thank-you/thank-you.module */ "G/Km")).then((m) => m.ThankYouModule)
    },
    {
        path: 'code-scan/checkout/nfc-payment/purchase-credits',
        loadChildren: () => Promise.all(/*! import() | features-mobile-purchase-credits-purchase-credits-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-mobile-purchase-credits-purchase-credits-module")]).then(__webpack_require__.bind(null, /*! ./features-mobile/purchase-credits/purchase-credits.module */ "PJtT")).then((m) => m.PurchaseCreditsModule)
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\adeva\dev-its\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MvSs":
/*!********************************************************************!*\
  !*** ./src/app/core/interceptors/handle-http-error.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: HandleHttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleHttpErrorInterceptor", function() { return HandleHttpErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HandleHttpErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status === 401 || error.status === 403) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
            if (error.status === 404 || error.status === 405) {
                console.log(error.statusText);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
            console.log(error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
HandleHttpErrorInterceptor.ɵfac = function HandleHttpErrorInterceptor_Factory(t) { return new (t || HandleHttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HandleHttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HandleHttpErrorInterceptor, factory: HandleHttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandleHttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "PMlu":
/*!***********************************************************************!*\
  !*** ./src/app/features/language-picker/language-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: LanguagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePickerComponent", function() { return LanguagePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");





class LanguagePickerComponent {
    constructor(router, platform, service) {
        this.router = router;
        this.platform = platform;
        this.service = service;
    }
    changeSiteLanguage(language) {
        this.service.setActiveLang(language);
        localStorage.setItem('language', language);
        const isWeb = this.platform.isBrowser && window.innerWidth > 900;
        const routeToTake = isWeb ? '/checkout' : '/code-scan';
        this.router.navigateByUrl(routeToTake);
    }
}
LanguagePickerComponent.ɵfac = function LanguagePickerComponent_Factory(t) { return new (t || LanguagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"])); };
LanguagePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguagePickerComponent, selectors: [["app-language-picker"]], decls: 9, vars: 0, consts: [[1, "language-picker-wrapper"], [1, "row", "english"], [1, "content-wrapper", 3, "click"], ["transloco", "languageContinue", "translocoLang", "en"], ["src", "assets/svg/language-separator.svg", "alt", "image"], [1, "row", "arabic"], ["transloco", "languageContinue", "translocoLang", "arabic"]], template: function LanguagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagePickerComponent_Template_div_click_2_listener() { return ctx.changeSiteLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagePickerComponent_Template_div_click_6_listener() { return ctx.changeSiteLanguage("arabic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoDirective"]], styles: [".language-picker-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n\r\n.row[_ngcontent-%COMP%], .content-wrapper[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  width: 100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.english[_ngcontent-%COMP%] {\r\n  background: transparent linear-gradient(286deg, #242942 0%, #171928 100%) 0% 0% no-repeat padding-box;\r\n  box-shadow: 60px 10px 60px #0000003D;\r\n  opacity: 1;\r\n}\r\n\r\n.english[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  margin-left: auto;\r\n}\r\n\r\n.arabic[_ngcontent-%COMP%] {\r\n  background: transparent linear-gradient(106deg, #242942 0%, #171928 100%) 0% 0% no-repeat padding-box;\r\n  opacity: 1;\r\n}\r\n\r\n.arabic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  float: right;\r\n  transform: rotate(180deg)\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font: normal normal 300 60px/84px \"Montserrat-Regular\";\r\n  font-family: \"Montserrat\";\r\n  letter-spacing: 0px;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n  width: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n  .arabic[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n    font: normal normal 300 20px/27px \"Montserrat-Regular\";\r\n  }\r\n\r\n  .arabic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .english[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n  }\r\n\r\n  .english[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font: normal normal 300 20px/27px \"Montserrat-Regular\";\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUdBQXFHO0VBQ3JHLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUdBQXFHO0VBQ3JHLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNEQUFzRDtFQUN0RCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsc0RBQXNEO0VBQ3hEOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0RBQXNEO0VBQ3hEO0FBQ0YiLCJmaWxlIjoibGFuZ3VhZ2UtcGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2UtcGlja2VyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5yb3csIC5jb250ZW50LXdyYXBwZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZW5nbGlzaCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI4NmRlZywgIzI0Mjk0MiAwJSwgIzE3MTkyOCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogNjBweCAxMHB4IDYwcHggIzAwMDAwMDNEO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5lbmdsaXNoIGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYXJhYmljIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTA2ZGVnLCAjMjQyOTQyIDAlLCAjMTcxOTI4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYXJhYmljIGltZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCAzMDAgNjBweC84NHB4IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmFyYWJpYyBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyMHB4LzI3cHggXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICB9XHJcblxyXG4gIC5hcmFiaWMgaW1nLCAuZW5nbGlzaCBpbWcge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gIH1cclxuXHJcbiAgLmVuZ2xpc2ggc3BhbiB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyMHB4LzI3cHggXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language-picker',
                templateUrl: './language-picker.component.html',
                styleUrls: ['./language-picker.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_helpers_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/helpers/animations */ "om+n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(location, service) {
        this.location = location;
        this.service = service;
        this.title = 'ITS';
    }
    ngOnInit() {
        const language = localStorage.getItem('language');
        if (language) {
            this.service.setActiveLang(language);
        }
    }
    goBack() {
        this.location.back();
    }
    goForward() {
        this.location.forward();
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "body-wrapper"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".body-wrapper[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: transparent linear-gradient(119deg, #242942 0%, #171928 100%) 0% 0% no-repeat padding-box;\r\n  color: white;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.back-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.footer-logo-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHFHQUFxRztFQUNyRyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMTlkZWcsICMyNDI5NDIgMCUsICMxNzE5MjggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcbiJdfQ== */"], data: { animation: [_app_helpers_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [_app_helpers_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"] }]; }, null); })();


/***/ }),

/***/ "U8XA":
/*!*********************************************************!*\
  !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
  \*********************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _features_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/language-picker/language-picker.component */ "PMlu");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _transloco_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transloco.loader */ "xHOQ");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TRANSLOCO_CONFIG"],
            useValue: {
                availableLangs: ['en', 'arabic'],
                listenToLangChange: true,
                defaultLang: 'en',
                fallbackLang: 'arabic',
                missingHandler: {
                    logMissingKey: true
                }
            }
        }, _transloco_loader__WEBPACK_IMPORTED_MODULE_8__["translocoLoader"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _features_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_5__["LanguagePickerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _features_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_5__["LanguagePickerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoModule"]
                ],
                providers: [{
                        provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TRANSLOCO_CONFIG"],
                        useValue: {
                            availableLangs: ['en', 'arabic'],
                            listenToLangChange: true,
                            defaultLang: 'en',
                            fallbackLang: 'arabic',
                            missingHandler: {
                                logMissingKey: true
                            }
                        }
                    }, _transloco_loader__WEBPACK_IMPORTED_MODULE_8__["translocoLoader"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a4+m":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: 'checkout',
        loadChildren: () => Promise.all(/*! import() | features-checkout-checkout-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-checkout-checkout-module")]).then(__webpack_require__.bind(null, /*! ./features/checkout/checkout.module */ "r3Jd")).then((m) => m.CheckoutModule)
    },
    {
        path: 'checkout/cash',
        loadChildren: () => Promise.all(/*! import() | features-cash-cash-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-cash-cash-module")]).then(__webpack_require__.bind(null, /*! ./features/cash/cash.module */ "2cCC")).then((m) => m.CashModule)
    },
    {
        path: 'checkout/cash/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features/thank-you/thank-you.module */ "/S/K")).then((m) => m.ThankYouModule)
    },
    {
        path: 'checkout/card',
        loadChildren: () => Promise.all(/*! import() | features-card-card-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-card-card-module")]).then(__webpack_require__.bind(null, /*! ./features/card/card.module */ "3Jtq")).then((m) => m.CardModule)
    },
    {
        path: 'checkout/card/insert-card',
        loadChildren: () => Promise.all(/*! import() | features-insert-card-insert-card-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-insert-card-insert-card-module")]).then(__webpack_require__.bind(null, /*! ./features/insert-card/insert-card.module */ "00EE")).then((m) => m.InsertCardModule)
    },
    {
        path: 'checkout/card/insert-card/valid/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features/thank-you/thank-you.module */ "/S/K")).then((m) => m.ThankYouModule)
    },
    {
        path: 'checkout/nfc-payment',
        loadChildren: () => Promise.all(/*! import() | features-nfc-payment-nfc-payment-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-nfc-payment-nfc-payment-module")]).then(__webpack_require__.bind(null, /*! ./features/nfc-payment/nfc-payment.module */ "7erX")).then((m) => m.NfcPaymentModule)
    },
    {
        path: 'checkout/nfc-payment/redeem-credits',
        loadChildren: () => Promise.all(/*! import() | features-redeem-credits-redeem-credits-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-redeem-credits-redeem-credits-module")]).then(__webpack_require__.bind(null, /*! ./features/redeem-credits/redeem-credits.module */ "GaLx")).then((m) => m.RedeemCreditsModule)
    },
    {
        path: 'checkout/nfc-payment/redeem-credits/valid/thank-you',
        loadChildren: () => Promise.all(/*! import() | features-thank-you-thank-you-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-thank-you-thank-you-module")]).then(__webpack_require__.bind(null, /*! ./features/thank-you/thank-you.module */ "/S/K")).then((m) => m.ThankYouModule)
    },
    {
        path: 'checkout/nfc-payment/purchase-credits',
        loadChildren: () => Promise.all(/*! import() | features-purchase-credits-purchase-credits-module */[__webpack_require__.e("default~features-card-card-module~features-cash-cash-module~features-checkout-checkout-module~featur~9a64a139"), __webpack_require__.e("features-purchase-credits-purchase-credits-module")]).then(__webpack_require__.bind(null, /*! ./features/purchase-credits/purchase-credits.module */ "KUiO")).then((m) => m.PurchaseCreditsModule)
    }
];


/***/ }),

/***/ "om+n":
/*!***************************************!*\
  !*** ./src/app/helpers/animations.ts ***!
  \***************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('LanguagePicker <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.english, .row english', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(-100%)' })),
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.arabic, .row arabic', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(100%)' })),
                ], { optional: true }),
            ])
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> Checkout', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.divider-wrapper img', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, marginLeft: '-40%' }),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.divider-wrapper', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: 200 })),
            ])
        ]),
    ])
]);


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensure-module-loaded-once.guard */ "U8XA");
/* harmony import */ var _interceptors_handle_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/handle-http-error.interceptor */ "MvSs");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/view.service */ "vBhi");







class CoreModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"] {
    // Ensure that CoreModule is only loaded into AppModule
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _services_view_service__WEBPACK_IMPORTED_MODULE_5__["ViewService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_handle_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["HandleHttpErrorInterceptor"],
            multi: true,
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                declarations: [],
                providers: [
                    _services_view_service__WEBPACK_IMPORTED_MODULE_5__["ViewService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_handle_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["HandleHttpErrorInterceptor"],
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "vBhi":
/*!***********************************************!*\
  !*** ./src/app/core/services/view.service.ts ***!
  \***********************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");






class ViewService {
    constructor(breakpointObserver, mediaMatcher, platform) {
        this.breakpointObserver = breakpointObserver;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.viewPortSizes$ = breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Web,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => ({
            isXSmall: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall),
            isSmall: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small),
            isMedium: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium),
            isLarge: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large),
            isXLarge: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge),
            isWeb: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Web),
            isWebLandscape: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape),
            isWebPortrait: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait),
            isHandset: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset),
            isHandsetLandscape: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape),
            isHandsetPortrait: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait),
            isTablet: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet),
            isTabletLandscape: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape),
            isTabletPortrait: breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait)
        })));
    }
}
ViewService.ɵfac = function ViewService_Factory(t) { return new (t || ViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
ViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewService, factory: ViewService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _features_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/language-picker/language-picker.component */ "PMlu");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "a4+m");
/* harmony import */ var _routes_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes-mobile */ "/JB0");







const routerOptions = {
    enableTracing: true,
    useHash: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 32],
    relativeLinkResolution: 'legacy',
};
const routes = [
    {
        path: '',
        component: _features_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_2__["LanguagePickerComponent"],
        data: { animation: 'LanguagePicker' }
    },
    ..._routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"],
    ..._routes_mobile__WEBPACK_IMPORTED_MODULE_4__["MOBILE_ROUTES"],
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xHOQ":
/*!*************************************!*\
  !*** ./src/app/transloco.loader.ts ***!
  \*************************************/
/*! exports provided: HttpLoader, translocoLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoader", function() { return HttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translocoLoader", function() { return translocoLoader; });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(langPath) {
        return this.http.get(`/assets/i18n/${langPath}.json`);
    }
}
HttpLoader.ɵfac = function HttpLoader_Factory(t) { return new (t || HttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpLoader, factory: HttpLoader.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
const translocoLoader = { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_LOADER"], useClass: HttpLoader };


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map