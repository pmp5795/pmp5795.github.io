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

module.exports = ".compare-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.compare-table.mat-table .mat-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  min-width: 920px;\n}\n.compare-table.mat-table .mat-row:last-child .mat-cell {\n  padding: 20px 16px;\n}\n.compare-table.mat-table .mat-cell {\n  position: relative;\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n  align-items: center;\n  min-height: 36px;\n  padding: 8px 16px;\n  justify-content: center;\n}\n.compare-table.mat-table .mat-cell img {\n  max-width: 100%;\n}\n.compare-table.mat-table .mat-cell:first-child {\n  width: 100px;\n  flex: unset;\n  justify-content: flex-end;\n  text-transform: capitalize;\n  background: rgba(0, 0, 0, 0.03);\n  font-weight: 500;\n  color: #757575;\n}\n.compare-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n}\n.compare-table.mat-table .mat-cell .new-price {\n  font-size: 16px;\n}\n.compare-table.mat-table .mat-cell button.color {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell button.remove {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.compare-table.mat-table .mat-cell button.add .mat-icon {\n  margin-right: 6px;\n}\n.compare-table.mat-table .mat-cell .size {\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell .size:after {\n  content: \",\";\n}\n.compare-table.mat-table .mat-cell .size:last-child:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFyZS9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLaXNob3JlRGlhbW9uZHMvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYXJlXFxjb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYXJlL2NvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQVk7RUFDSSxrQkFBQTtBQ0VoQjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURFWTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7QURFWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNBaEI7QURFWTtFQUNJLGlCQUFBO0FDQWhCO0FER1E7RUFDSSxnQkFBQTtBQ0RaO0FERVk7RUFDSSxZQUFBO0FDQWhCO0FERVk7RUFDSSxhQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgLm1hdC1yb3d7ICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgICAgICAgIFxyXG4gICAgICAgIG1pbi13aWR0aDogOTIwcHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5ldy1wcmljZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICYuY29sb3J7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYucmVtb3Zle1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5hZGQgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHhcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpemV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnLCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuY29tcGFyZS10YWJsZS5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIG1pbi13aWR0aDogOTIwcHg7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1yb3c6bGFzdC1jaGlsZCAubWF0LWNlbGwge1xuICBwYWRkaW5nOiAyMHB4IDE2cHg7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmxleDogdW5zZXQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzc1NzU3NTtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLm5ldy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgYnV0dG9uLmNvbG9yIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBidXR0b24ucmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBidXR0b24uYWRkIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmNvbXBhcmUtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAuc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5zaXplOmFmdGVyIHtcbiAgY29udGVudDogXCIsXCI7XG59XG4uY29tcGFyZS10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5zaXplOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufSJdfQ== */"

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