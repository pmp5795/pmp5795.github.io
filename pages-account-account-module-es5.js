(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"account-sidenav\" perfectScrollbar>\r\n        <mat-nav-list class=\"mat-elevation-z1 h-100\">\r\n            <mat-list-item *ngFor=\"let link of links\">              \r\n                <mat-icon matListIcon class=\"mat-icon-sm\">{{link.icon}}</mat-icon>\r\n                <a matLine [routerLink]=\"link.href\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">{{ link.name }}</a>\r\n            </mat-list-item>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"account-content\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"header-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <h3>My Account</h3>\r\n        </div>\r\n        <div class=\"account-wrapper mat-elevation-z1\">\r\n            <router-outlet></router-outlet>\r\n        </div>  \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/addresses/addresses.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/addresses/addresses.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group >\r\n    <mat-tab label=\"Billing address\">\r\n        <div class=\"p-2 mt-1\">\r\n            <form [formGroup]=\"billingForm\" (ngSubmit)=\"onBillingFormSubmit(billingForm.value)\">     \r\n              <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.firstName.errors?.required\">First name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.lastName.errors?.required\">Last name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\r\n                          {{country.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"billingForm.controls.country.errors?.required\">Country is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.city.errors?.required\">City is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"State/Province\" formControlName=\"state\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Zip/Postal Code\" formControlName=\"zip\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.zip.errors?.required\">Zip/Postal Code is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Address (street, apartment, suite, unit etc.)\" formControlName=\"address\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.address.errors?.required\">Address is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"text-center mt-2\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"onBillingFormSubmit(billingForm.value)\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Shipping address\">\r\n        <div class=\"p-2 mt-1\">\r\n            <form [formGroup]=\"shippingForm\" (ngSubmit)=\"onShippingFormSubmit(shippingForm.value)\">     \r\n              <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.firstName.errors?.required\">First name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.lastName.errors?.required\">Last name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\r\n                          {{country.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"shippingForm.controls.country.errors?.required\">Country is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.city.errors?.required\">City is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"State/Province\" formControlName=\"state\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Zip/Postal Code\" formControlName=\"zip\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.zip.errors?.required\">Zip/Postal Code is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Address (street, apartment, suite, unit etc.)\" formControlName=\"address\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.address.errors?.required\">Address is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"text-center mt-2\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"onShippingFormSubmit(shippingForm.value)\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/dashboard/dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/dashboard/dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-muted\">Hello, <b>Emilio Verdines!</b>\r\nFrom your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>\r\n\r\n<div fxLayout=\"row wrap\" class=\"flex-wrapper\">\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"50\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Account Information</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/information\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n              <p>Emilio Verdines</p>\r\n              <p>emilio.verdines@gmail.com</p>\r\n              <p><a routerLink=\"/account/information\" class=\"primary-text\">Change password</a></p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"50\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Addresses</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/addresses\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n            <p>Billing address</p>\r\n            <p>Shipping address</p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Orders</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/orders\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n            <p class=\"\">Completed</p>\r\n            <mat-progress-bar value=\"75\" color=\"primary\"></mat-progress-bar>\r\n            <p class=\"mt-1\">Processing</p>\r\n            <mat-progress-bar value=\"25\" color=\"accent\"></mat-progress-bar>\r\n            <p class=\"mt-1\">On hold</p>\r\n            <mat-progress-bar value=\"65\" color=\"warn\"></mat-progress-bar>\r\n            <p class=\"mt-1\">Refunded</p>\r\n            <mat-progress-bar value=\"25\" color=\"primary\"></mat-progress-bar>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/information/information.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/information/information.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n        <h2 class=\"text-muted text-center\">Account details</h2>\r\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\">\r\n            <mat-form-field class=\"w-100 mt-2\">\r\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.firstName.errors?.required\">First Name is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.firstName.hasError('minlength')\">First Name isn't long enough, minimum of 3 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.lastName.errors?.required\">Last Name is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.lastName.hasError('minlength')\">Last Name isn't long enough, minimum of 3 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"onInfoFormSubmit(infoForm.value)\">Save</button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        <h2 class=\"text-muted text-center\">Password change</h2>\r\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \r\n            <mat-form-field class=\"w-100 mt-2\">\r\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required>\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required>\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field> \r\n            <mat-form-field class=\"w-100 mt-1\">\r\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required>\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"onPasswordFormSubmit(passwordForm.value)\">Change</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/orders/orders.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/orders/orders.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-table orders-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Order</div>\r\n      <div class=\"mat-header-cell\">Date</div>\r\n      <div class=\"mat-header-cell\">Status</div>\r\n      <div class=\"mat-header-cell\">Total</div>\r\n      <div class=\"mat-header-cell\"></div>\r\n    </div>\r\n    <div *ngFor=\"let order of orders\" class=\"mat-row\">\r\n      <div class=\"mat-cell\"><span class=\"order\">{{order.number}}</span></div>\r\n      <div class=\"mat-cell\">{{order.date}}</div>\r\n      <div class=\"mat-cell\">{{order.status}}</div>\r\n      <div class=\"mat-cell\">{{order.total}}</div>     \r\n      <div class=\"mat-cell\">\r\n        <div class=\"p-1 actions\">          \r\n          <button mat-mini-fab color=\"primary\" matTooltip=\"View\">\r\n              <mat-icon>remove_red_eye</mat-icon>\r\n          </button>\r\n          <button *ngIf=\"order.invoice\" mat-mini-fab color=\"warn\" matTooltip=\"View invoice\" class=\"btn-invoice\">\r\n              <mat-icon>receipt</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-sidenav {\n  width: 280px;\n  padding: 2px;\n}\n.account-sidenav .mat-nav-list {\n  box-sizing: border-box;\n}\n.account-sidenav .mat-nav-list .mat-list-item {\n  height: 36px;\n  font-size: 14px;\n}\n.account-content {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.account-content.p-left {\n  padding-left: 16px;\n}\n.account-content .header-row {\n  background: #fff;\n  padding: 0 16px;\n  height: 56px;\n}\n.account-content .account-wrapper {\n  margin-top: 16px;\n  padding: 16px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLHNCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDR1o7QURDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURESTtFQUNJLGtCQUFBO0FDR1I7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHUjtBRERJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAubWF0LW5hdi1saXN0e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLm1hdC1saXN0LWl0ZW17XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWNjb3VudC1jb250ZW50e1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi5wLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1yb3d7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgfVxyXG4gICAgLmFjY291bnQtd3JhcHBlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLmFjY291bnQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuLmFjY291bnQtc2lkZW5hdiAubWF0LW5hdi1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hY2NvdW50LXNpZGVuYXYgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWNjb3VudC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hY2NvdW50LWNvbnRlbnQucC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmFjY291bnQtY29udGVudCAuaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmFjY291bnQtY29udGVudCAuYWNjb3VudC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(router) {
        this.router = router;
        this.sidenavOpen = true;
        this.links = [
            { name: 'Account Dashboard', href: 'dashboard', icon: 'dashboard' },
            { name: 'Account Information', href: 'information', icon: 'info' },
            { name: 'Addresses', href: 'addresses', icon: 'location_on' },
            { name: 'Order History', href: 'orders', icon: 'add_shopping_cart' },
            { name: 'Logout', href: '/sign-in', icon: 'power_settings_new' },
        ];
    }
    AccountComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
    };
    AccountComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (window.innerWidth < 960) {
                    _this.sidenav.close();
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
        __metadata("design:type", Object)
    ], AccountComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AccountComponent.prototype, "onWindowResize", null);
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: routes, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/account/dashboard/dashboard.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information/information.component */ "./src/app/pages/account/information/information.component.ts");
/* harmony import */ var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addresses/addresses.component */ "./src/app/pages/account/addresses/addresses.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/pages/account/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], data: { breadcrumb: 'Dashboard' } },
            { path: 'information', component: _information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"], data: { breadcrumb: 'Information' } },
            { path: 'addresses', component: _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"], data: { breadcrumb: 'Addresses' } },
            { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"], data: { breadcrumb: 'Orders' } }
        ]
    }
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"],
                _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/pages/account/addresses/addresses.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/addresses/addresses.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/account/addresses/addresses.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/addresses/addresses.component.ts ***!
  \****************************************************************/
/*! exports provided: AddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesComponent", function() { return AddressesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressesComponent = /** @class */ (function () {
    function AddressesComponent(appService, formBuilder, snackBar) {
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.countries = [];
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.countries = this.appService.getCountries();
        this.billingForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'middleName': '',
            'company': '',
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'state': '',
            'zip': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.shippingForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'middleName': '',
            'company': '',
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'state': '',
            'zip': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddressesComponent.prototype.onBillingFormSubmit = function (values) {
        if (this.billingForm.valid) {
            this.snackBar.open('Your billing address information updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    };
    AddressesComponent.prototype.onShippingFormSubmit = function (values) {
        if (this.shippingForm.valid) {
            this.snackBar.open('Your shipping address information updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    };
    AddressesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__(/*! raw-loader!./addresses.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/addresses/addresses.component.html"),
            styles: [__webpack_require__(/*! ./addresses.component.scss */ "./src/app/pages/account/addresses/addresses.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddressesComponent);
    return AddressesComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-wrapper {\n  margin: 8px -8px;\n}\n.flex-wrapper .col {\n  padding: 8px;\n}\n.account-card-content {\n  height: 134px;\n}\n.account-card-content a {\n  text-decoration: none;\n}\n.account-card-content a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQvRDpcXENhcHN0b24tUHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEQ0E7RUFDSSxhQUFBO0FDRUo7QURESTtFQUNJLHFCQUFBO0FDR1I7QURGUTtFQUNJLDBCQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcbi5hY2NvdW50LWNhcmQtY29udGVudHtcclxuICAgIGhlaWdodDogMTM0cHg7XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZmxleC13cmFwcGVyIHtcbiAgbWFyZ2luOiA4cHggLThweDtcbn1cbi5mbGV4LXdyYXBwZXIgLmNvbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmFjY291bnQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMzRweDtcbn1cbi5hY2NvdW50LWNhcmQtY29udGVudCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFjY291bnQtY2FyZC1jb250ZW50IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/account/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/information/information.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/account/information/information.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/account/information/information.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account/information/information.component.ts ***!
  \********************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationComponent = /** @class */ (function () {
    function InformationComponent(formBuilder, snackBar) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
    }
    InformationComponent.prototype.ngOnInit = function () {
        this.infoForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])]
        });
        this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confirmNewPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('newPassword', 'confirmNewPassword') });
    };
    InformationComponent.prototype.onInfoFormSubmit = function (values) {
        if (this.infoForm.valid) {
            this.snackBar.open('Your account information updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    };
    InformationComponent.prototype.onPasswordFormSubmit = function (values) {
        if (this.passwordForm.valid) {
            this.snackBar.open('Your password changed successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.scss */ "./src/app/pages/account/information/information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/orders/orders.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/account/orders/orders.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orders-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.orders-table.mat-table .mat-row, .orders-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.orders-table.mat-table .mat-cell, .orders-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.orders-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.orders-table.mat-table .mat-cell .order {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.orders-table.mat-table .mat-cell .btn-invoice {\n  margin-left: 8px;\n}\n.orders-table.mat-table .mat-cell .actions {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9vcmRlcnMvRDpcXENhcHN0b24tUHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxvcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0FDRVI7QURDUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJzLXRhYmxlLm1hdC10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIC5tYXQtcm93LCAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NzBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICAub3JkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4taW52b2ljZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnN7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5vcmRlcnMtdGFibGUubWF0LXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4ub3JkZXJzLXRhYmxlLm1hdC10YWJsZSAubWF0LXJvdywgLm9yZGVycy10YWJsZS5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtaW4td2lkdGg6IDg3MHB4O1xufVxuLm9yZGVycy10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsLCAub3JkZXJzLXRhYmxlLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLm9yZGVycy10YWJsZS5tYXQtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vcmRlcnMtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAub3JkZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm9yZGVycy10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5idG4taW52b2ljZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ub3JkZXJzLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLmFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/account/orders/orders.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/account/orders/orders.component.ts ***!
  \**********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        this.orders = [
            { number: '#3258', date: 'March 29, 2018', status: 'Completed', total: '$140.00 for 2 items', invoice: true },
            { number: '#3145', date: 'February 14, 2018', status: 'On hold', total: '$255.99 for 1 item', invoice: false },
            { number: '#2972', date: 'January 7, 2018', status: 'Processing', total: '$255.99 for 1 item', invoice: true },
            { number: '#2971', date: 'January 5, 2018', status: 'Completed', total: '$73.00 for 1 item', invoice: true },
            { number: '#1981', date: 'December 24, 2017', status: 'Pending Payment', total: '$285.00 for 2 items', invoice: false },
            { number: '#1781', date: 'September 3, 2017', status: 'Refunded', total: '$49.00 for 2 items', invoice: false }
        ];
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/account/orders/orders.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es5.js.map