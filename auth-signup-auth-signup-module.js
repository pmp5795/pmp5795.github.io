(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"],{

/***/ "./src/app/auth/signup/auth-signup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/auth-signup.module.ts ***!
  \***************************************************/
/*! exports provided: authSignupRoutes, AuthSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSignupRoutes", function() { return authSignupRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function() { return AuthSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_signup_page_auth_signup_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup-page/auth-signup-page.component */ "./src/app/auth/signup/components/signup-page/auth-signup-page.component.ts");
/* harmony import */ var _resolvers_auth_signup_page_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/auth-signup-page.resolver */ "./src/app/auth/signup/resolvers/auth-signup-page.resolver.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./src/app/auth/index.ts");






var authSignupRoutes = [
    {
        path: '',
        component: _components_signup_page_auth_signup_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupPageComponent"],
        resolve: {
            data: _resolvers_auth_signup_page_resolver__WEBPACK_IMPORTED_MODULE_4__["AuthSignupPageResolver"]
        }
    }
];
var AuthSignupModule = /** @class */ (function () {
    function AuthSignupModule() {
    }
    AuthSignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_signup_page_auth_signup_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authSignupRoutes),
                ___WEBPACK_IMPORTED_MODULE_5__["AuthSharedModule"]
            ],
            providers: [
                _resolvers_auth_signup_page_resolver__WEBPACK_IMPORTED_MODULE_4__["AuthSignupPageResolver"]
            ]
        })
    ], AuthSignupModule);
    return AuthSignupModule;
}());



/***/ }),

/***/ "./src/app/auth/signup/components/signup-page/auth-signup-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-page/auth-signup-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n  <div class=\"container\">\n    <div class=\"row auth-form-wrapper\">\n      <div class=\"col-12 col-lg-7 col-xl-6\">\n        <h1 class=\"auth-title\">Create a new Account</h1>\n        <app-auth-signup-form [redirectUrl]=\"'/user'\"></app-auth-signup-form>\n        <div class=\"auth-alt-options\">\n          <a class=\"btn btn-link secondary-call-to-action-btn\" [routerLink]=\"['/login']\">\n            Already have an account?\n          </a>\n        </div>\n        <div class=\"auth-form-divider\">\n          <span class=\"divider-text\">OR</span>\n        </div>\n        <button class=\"btn btn-block social-alternative-btn\" (click)=\"redirectAccount()\">\n          SIGN UP WITH FACEBOOK\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/components/signup-page/auth-signup-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-page/auth-signup-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthSignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupPageComponent", function() { return AuthSignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthSignupPageComponent = /** @class */ (function () {
    function AuthSignupPageComponent() {
    }
    AuthSignupPageComponent.prototype.redirectAccount = function () {
        console.log('Do facebook signup');
    };
    AuthSignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signup-page',
            template: __webpack_require__(/*! ./auth-signup-page.component.html */ "./src/app/auth/signup/components/signup-page/auth-signup-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-signup-page.styles.scss */ "./src/app/auth/signup/components/signup-page/styles/auth-signup-page.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthSignupPageComponent);
    return AuthSignupPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/components/signup-page/styles/auth-signup-page.styles.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-page/styles/auth-signup-page.styles.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-page {\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/imgs/home/cta-bg.png\"); }\n  @media (min-width: 1200px) {\n    .auth-page {\n      background-position: left 58.33vw top 0px; } }\n  @media (min-width: 992px) and (max-width: 1199.98px) {\n    .auth-page {\n      background-position: left 66.66vw top 0px; } }\n  @media (max-width: 991.98px) {\n    .auth-page {\n      background: none; } }\n  .auth-modal .auth-form-wrapper .auth-title {\n  padding: 0;\n  margin: 0;\n  font-size: 1.4rem; }\n  .auth-modal .modal-header {\n  align-items: center; }\n  .auth-modal .modal-header .close {\n    font-size: 1.8rem; }\n  .auth-form-wrapper .auth-title {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n  color: #1e1e1e;\n  font-size: 1.8rem;\n  font-weight: 900;\n  letter-spacing: 0.25rem; }\n  .auth-form-wrapper .auth-alt-options {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n    color: #9013fe;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    transition: color .5s; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:hover:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:focus:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.focus:not([disabled]) {\n      color: #7601dd; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn[disabled] {\n      cursor: not-allowed;\n      opacity: .5; }\n  @media (max-width: 575.98px) {\n    .auth-form-wrapper .auth-alt-options {\n      flex-wrap: wrap; }\n      .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n        width: 100%;\n        margin-bottom: 1rem; } }\n  .auth-form-wrapper .auth-form-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n  .auth-form-wrapper .auth-form-divider::before, .auth-form-wrapper .auth-form-divider::after {\n    content: '';\n    background: #9e9e9e;\n    height: 2px;\n    flex: 1 1 auto; }\n  .auth-form-wrapper .auth-form-divider .divider-text {\n    color: #1e1e1e;\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0.2rem;\n    margin: 0px;\n    padding: 0px 1rem; }\n  .auth-form-wrapper .social-alternative-btn {\n  background-color: #3b5998;\n  color: #FFFFFF;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #3b5998;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  height: 4rem; }\n  .auth-form-wrapper .social-alternative-btn:hover:not([disabled]) {\n    background-color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(59, 89, 152, 0.7);\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn:active:not([disabled]), .auth-form-wrapper .social-alternative-btn.active:not([disabled]), .auth-form-wrapper .social-alternative-btn:focus:not([disabled]), .auth-form-wrapper .social-alternative-btn.focus:not([disabled]) {\n    background-color: #FFFFFF;\n    border-color: #3b5998;\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n  app-auth-signup-page {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxjb21tb25cXGF1dGhcXGF1dGgtcGFnZXMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ251cC9jb21wb25lbnRzL3NpZ251cC1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcYXV0aFxcc2lnbnVwXFxjb21wb25lbnRzXFxzaWdudXAtcGFnZVxcc3R5bGVzXFxhdXRoLXNpZ251cC1wYWdlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUNBQTZDO0VBQzdDLHFCQUFvQjtFQUVwQix1QkFBc0I7RUFDdEIsNkJBQTRCO0VBQzVCLHNEQUFxRCxFQWV0RDtFQ3FDRztJRDFESjtNQVVJLDBDQUF5QyxFQVc1QyxFQUFBO0VDdUZHO0lENUdKO01BZUksMENBQXlDLEVBTTVDLEVBQUE7RUNrREc7SUR2RUo7TUFtQkksaUJBQWdCLEVBRW5CLEVBQUE7RUFFRDtFQUdNLFdBQVU7RUFDVixVQUFTO0VBQ1Qsa0JBQWlCLEVBQ2xCO0VBTkw7RUFVSSxvQkFBbUIsRUFLcEI7RUFmSDtJQWFNLGtCQUFpQixFQUNsQjtFQUlMO0VBRUksa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixlRTlDVztFRitDWCxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QixFQUN4QjtFQVJIO0VBV0ksY0FBYTtFQUNiLCtCQUE4QjtFQUM5Qiw0QkFBMkIsRUFjNUI7RUEzQkg7SUcxQ0UsZURRYztJQ1BkLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixzQkFBcUIsRUh1RGxCO0VBakJMO01HOUJNLGVBYnNELEVBY3ZEO0VINkJMO01HekJJLG9CQUFtQjtNQUNuQixZQUFXLEVBQ1o7RUZxREM7SUQ5Qko7TUFvQk0sZ0JBQWUsRUFPbEI7TUEzQkg7UUF1QlEsWUFBVztRQUNYLG9CQUFtQixFQUNwQixFQUFBO0VBekJQO0VBOEJJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFtQnBCO0VBckRIO0lBdUNNLFlBQVc7SUFDWCxvQkUvRVE7SUZnRlIsWUFBVztJQUNYLGVBQWMsRUFDZjtFQTNDTDtJQThDTSxlRXhGUztJRnlGVCxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gsa0JBQWlCLEVBQ2xCO0VBcERMO0VHbkJFLDBCRFhxQjtFQ1lyQixlRHRCYTtFQ3VCYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLHNCRGZxQjtFQ2dCckIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsOERBQTZEO0VIa0UzRCxhQUFZLEVBQ2I7RUExREg7SUdMTSwyQ0RuQ1M7SUNvQ1QscUNEMUJpQjtJQzJCakIsZUQzQmlCO0lDNEJqQixzQkFBcUIsRUFDdEI7RUhDTDtJR09NLDBCRC9DUztJQ2dEVCxzQkR0Q2lCO0lDdUNqQixlRHZDaUI7SUN3Q2pCLHNCQUFxQixFQUN0QjtFSFhMO0lHZUksb0JBQW1CO0lBQ25CLFlBQVcsRUFDWjtFQzFESDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2Uvc3R5bGVzL2F1dGgtc2lnbnVwLXBhZ2Uuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9fc2hhcmVkJztcblxuLmF1dGgtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyAkbmF2YmFyLWhlaWdodCB9KTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gIC8vIEhhbGYgc2NyZWVuIGJhY2tncm91bmQgaW1hZ2VcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvaG9tZS9jdGEtYmcucG5nJyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KHhsKSB7XG4gICAgLy8gY29sLXhsLTYgPT4gbGVmdCA1MHZ3ICgrIGNvbC0xIHRvIGdpdmUgc29tZSBibGFuayBzcGFjZSkgPT4gKDcqMTAwKS8xMiA9IDU4LjMzdndcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDU4LjMzdncgdG9wIDBweDtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtb25seShsZykge1xuICAgIC8vIGNvbC1sZy03ID0+IGxlZnQgNTguMzN2dyAoKyBjb2wtMSB0byBnaXZlIHNvbWUgYmxhbmsgc3BhY2UpID0+ICg4KjEwMCkvMTIgPSA2Ni42NnZ3XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA2Ni42NnZ3IHRvcCAwcHg7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59Ly8gLmF1dGgtcGFnZVxuXG4uYXV0aC1tb2RhbCB7XG4gIC5hdXRoLWZvcm0td3JhcHBlciB7XG4gICAgLmF1dGgtdGl0bGUge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICB9XG59Ly8gLmF1dGgtbW9kYWxcblxuLmF1dGgtZm9ybS13cmFwcGVyIHtcbiAgLmF1dGgtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xuICB9XG5cbiAgLmF1dGgtYWx0LW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICAgIC5zZWNvbmRhcnktY2FsbC10by1hY3Rpb24tYnRuIHtcbiAgICAgIEBpbmNsdWRlIGxpbmstYnV0dG9uKCRwdXJwbGUpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuc2Vjb25kYXJ5LWNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hdXRoLWZvcm0tZGl2aWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIC8vIExpbmUgZGVjb3JhdGlvblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQ6ICRncmV5O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAuZGl2aWRlci10ZXh0IHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggMXJlbTtcbiAgICB9XG4gIH1cblxuICAuc29jaWFsLWFsdGVybmF0aXZlLWJ0biB7XG4gICAgQGluY2x1ZGUgb3V0bGluZS1idXR0b24oJHdoaXRlLCAkZmFjZWJvb2stYmx1ZSwgJGZhY2Vib29rLWJsdWUpO1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxufS8vIC5hdXRoLWZvcm0td3JhcHBlclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMWUxZTFlO1xuJGRhcmtncmV5OiAjM2YzZjNmO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM5ZTllOWU7XG4kZ3JleS0yOiAjZDdkN2Q3O1xuJGdyZXktMzogI2U1ZTVlNTtcblxuJGFxdWFtYXJpbmE6ICM1MGUzYzI7XG4kcHVycGxlOiAjOTAxM2ZlO1xuJGNoZXJyeTogI2Y4MmM1MTtcbiRyZWQ6ICNkNjE4M2E7XG4kZ29sZDogI2ZjYjMwMDtcbiRmYWNlYm9vay1ibHVlOiAjM2I1OTk4O1xuXG4vLyBTaXplc1xuJG5hdmJhci1oZWlnaHQ6ICRuYXYtbGluay1oZWlnaHQgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRwcmVsb2FkLWltYWdlLWJnOiByZ2JhKGRhcmtlbigkd2hpdGUsIDEwKSwgLjI1KTtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRzcGlubmVyLXNpemU6IDI4cHg7XG4kc3Bpbm5lci1jb2xvcjogJGdyZXk7XG4iLCJAbWl4aW4gbGluay1idXR0b24oJGNvbG9yLCAkaG92ZXItY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBvdXRsaW5lLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkaG92ZXItY29sb3I6ICRiYWNrZ3JvdW5kLCAkaG92ZXItYmFja2dyb3VuZDogJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkYm9yZGVyLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBmaWxsLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkaG92ZXItY29sb3I6ICRjb2xvciwgJGhvdmVyLWJhY2tncm91bmQ6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uL2F1dGgvYXV0aC1wYWdlcy5zdHlsZXMnO1xuXG5hcHAtYXV0aC1zaWdudXAtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signup/resolvers/auth-signup-page.resolver.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/signup/resolvers/auth-signup-page.resolver.ts ***!
  \********************************************************************/
/*! exports provided: AuthSignupPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupPageResolver", function() { return AuthSignupPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthSignupPageResolver = /** @class */ (function () {
    function AuthSignupPageResolver() {
    }
    AuthSignupPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'Create an account',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AuthSignupPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthSignupPageResolver);
    return AuthSignupPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signup-auth-signup-module.js.map