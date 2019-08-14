(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compare-compare-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/compare/compare.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/compare/compare.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"appService.Data.compareList.length == 0\">\r\n    <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS TO COMPARE.</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card *ngIf=\"appService.Data.compareList?.length > 0\" class=\"p-0\">\r\n\r\n  <div class=\"mat-table compare-table\">\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n          product       \r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-icon-button color=\"accent\" class=\"remove\" (click)=\"remove(product)\"><mat-icon>close</mat-icon></button>\r\n        <img [src]=\"product.images[0].small\" alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        name\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        price\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <b class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        availability\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n          <b class=\"text-muted\">{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        rating\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\"></app-rating>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        description\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span class=\"text-muted lh\">{{product.description}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        color\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-raised-button *ngFor=\"let color of product.color\" [style.background]=\"color\" class=\"color\">&nbsp;</button>              \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        size\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span *ngFor=\"let size of product.size\" class=\"size\">{{size}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        weight\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span *ngIf=\"product.weight\">{{product.weight}} g</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-raised-button color=\"primary\" class=\"add\" (click)=\"addToCart(product)\">\r\n          <mat-icon>shopping_cart</mat-icon>Add to cart</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  \r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/compare/compare.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/compare/compare.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compare-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.compare-table.mat-table .mat-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  min-width: 920px;\n}\n.compare-table.mat-table .mat-row:last-child .mat-cell {\n  padding: 20px 16px;\n}\n.compare-table.mat-table .mat-cell {\n  position: relative;\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n  align-items: center;\n  min-height: 36px;\n  padding: 8px 16px;\n  justify-content: center;\n}\n.compare-table.mat-table .mat-cell img {\n  max-width: 100%;\n}\n.compare-table.mat-table .mat-cell:first-child {\n  width: 100px;\n  flex: unset;\n  justify-content: flex-end;\n  text-transform: capitalize;\n  background: rgba(0, 0, 0, 0.03);\n  font-weight: 500;\n  color: #757575;\n}\n.compare-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n}\n.compare-table.mat-table .mat-cell .new-price {\n  font-size: 16px;\n}\n.compare-table.mat-table .mat-cell button.color {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell button.remove {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.compare-table.mat-table .mat-cell button.add .mat-icon {\n  margin-right: 6px;\n}\n.compare-table.mat-table .mat-cell .size {\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell .size:after {\n  content: \",\";\n}\n.compare-table.mat-table .mat-cell .size:last-child:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFyZS9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLZXNoYXZEaWFtb25kcy9zcmNcXGFwcFxccGFnZXNcXGNvbXBhcmVcXGNvbXBhcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBWTtFQUNJLGtCQUFBO0FDRWhCO0FERUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDWjtBRENRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7QUNDWjtBREVZO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FoQjtBREVZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0FoQjtBREVZO0VBQ0ksaUJBQUE7QUNBaEI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURFWTtFQUNJLFlBQUE7QUNBaEI7QURFWTtFQUNJLGFBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYXJlL2NvbXBhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFyZS10YWJsZS5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICAubWF0LXJvd3sgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkOyAgICAgICAgXHJcbiAgICAgICAgbWluLXdpZHRoOiA5MjBweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIC5tYXQtY2VsbHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgZmxleDogdW5zZXQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZXtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmV3LXByaWNle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgJi5jb2xvcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5yZW1vdmV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFkZCAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2l6ZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgbWluLXdpZHRoOiA5MjBweDtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LXJvdzpsYXN0LWNoaWxkIC5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmbGV4OiB1bnNldDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAucHJvZHVjdC1uYW1lIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAubmV3LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBidXR0b24uY29sb3Ige1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIGJ1dHRvbi5yZW1vdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIGJ1dHRvbi5hZGQgLm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5zaXplIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLnNpemU6YWZ0ZXIge1xuICBjb250ZW50OiBcIixcIjtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLnNpemU6bGFzdC1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/compare/compare.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CompareComponent = class CompareComponent {
    constructor(appService, snackBar) {
        this.appService = appService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.appService.Data.cartList.forEach(cartProduct => {
            this.appService.Data.compareList.forEach(product => {
                if (cartProduct.id == product.id) {
                    product.cartCount = cartProduct.cartCount;
                }
            });
        });
    }
    remove(product) {
        const index = this.appService.Data.compareList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
        }
    }
    clear() {
        this.appService.Data.compareList.length = 0;
    }
    addToCart(product) {
        product.cartCount = product.cartCount + 1;
        if (product.cartCount <= product.availibilityCount) {
            this.appService.addToCart(product);
        }
        else {
            product.cartCount = product.availibilityCount;
            this.snackBar.open('You can not add more items than available. In stock ' + product.availibilityCount + ' items and you already added ' + product.cartCount + ' item to your cart', '×', { panelClass: 'error', verticalPosition: 'top', duration: 5000 });
        }
    }
};
CompareComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-compare',
        template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/compare/compare.component.html"),
        styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/pages/compare/compare.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
], CompareComponent);



/***/ }),

/***/ "./src/app/pages/compare/compare.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.module.ts ***!
  \*************************************************/
/*! exports provided: routes, CompareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareModule", function() { return CompareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare.component */ "./src/app/pages/compare/compare.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"], pathMatch: 'full' }
];
let CompareModule = class CompareModule {
};
CompareModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        declarations: [
            _compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"]
        ]
    })
], CompareModule);



/***/ })

}]);
//# sourceMappingURL=pages-compare-compare-module-es2015.js.map