(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wishlist/wishlist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"appService.Data.wishList.length == 0\">\r\n    <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN WISH LIST.</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card *ngIf=\"appService.Data.wishList?.length > 0\" class=\"p-0\">\r\n\r\n  <div class=\"mat-table wishlist-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Product</div>\r\n      <div class=\"mat-header-cell\">Name</div>\r\n      <div class=\"mat-header-cell\">Price</div>\r\n      <div class=\"mat-header-cell\">Availability</div>\r\n      <div class=\"mat-header-cell\">Quantity</div>\r\n      <div class=\"mat-header-cell\">\r\n        <div class=\"px-1\">\r\n          <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let product of appService.Data.wishList\" class=\"mat-row\">\r\n      <div class=\"mat-cell\"><img [src]=\"product.images[0].small\"></div>\r\n      <div class=\"mat-cell\"><a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a></div>\r\n      <div class=\"mat-cell\">${{product.newPrice | number : '1.2-2'}}</div>\r\n      <div class=\"mat-cell\">{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</div>\r\n      <div class=\"mat-cell text-muted\">\r\n        <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getQuantity($event)\"></app-controls>\r\n      </div>\r\n      <div class=\"mat-cell\">\r\n        <div class=\"p-1\">          \r\n          <button mat-mini-fab color=\"primary\" (click)=\"addToCart(product)\" matTooltip=\"Add to cart\">\r\n              <mat-icon>add_shopping_cart</mat-icon>\r\n          </button>\r\n          <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" class=\"remove\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.wishlist-table.mat-table .mat-row, .wishlist-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.wishlist-table.mat-table .mat-row {\n  min-height: 100px;\n}\n.wishlist-table.mat-table .mat-cell, .wishlist-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.wishlist-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.wishlist-table.mat-table .mat-cell img {\n  width: 100px;\n}\n.wishlist-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.wishlist-table.mat-table .mat-cell .remove {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lzaGxpc3QvRDpcXENhcHN0b24tUHJvamVjdFxcS2lzaG9yZURpYW1vbmRzL3NyY1xcYXBwXFxwYWdlc1xcd2lzaGxpc3RcXHdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksaUJBQUE7QUNFUjtBREFJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdC10YWJsZS5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICAubWF0LXJvdywgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogODcwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJvd3tcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZXtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbW92ZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4ud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtcm93LCAud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWluLXdpZHRoOiA4NzBweDtcbn1cbi53aXNobGlzdC10YWJsZS5tYXQtdGFibGUgLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi53aXNobGlzdC10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsLCAud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAucHJvZHVjdC1uYW1lIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi53aXNobGlzdC10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5yZW1vdmUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
  \******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(appService, snackBar) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.quantity = 1;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.Data.cartList.forEach(function (cartProduct) {
            _this.appService.Data.wishList.forEach(function (product) {
                if (cartProduct.id == product.id) {
                    product.cartCount = cartProduct.cartCount;
                }
            });
        });
    };
    WishlistComponent.prototype.remove = function (product) {
        var index = this.appService.Data.wishList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.wishList.splice(index, 1);
        }
    };
    WishlistComponent.prototype.clear = function () {
        this.appService.Data.wishList.length = 0;
    };
    WishlistComponent.prototype.getQuantity = function (val) {
        this.quantity = val.soldQuantity;
    };
    WishlistComponent.prototype.addToCart = function (product) {
        var currentProduct = this.appService.Data.cartList.filter(function (item) { return item.id == product.id; })[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + this.quantity) <= product.availibilityCount) {
                product.cartCount = currentProduct.cartCount + this.quantity;
            }
            else {
                this.snackBar.open('You can not add more items than available. In stock ' + product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', { panelClass: 'error', verticalPosition: 'top', duration: 5000 });
                return false;
            }
        }
        else {
            product.cartCount = this.quantity;
        }
        this.appService.addToCart(product);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/pages/wishlist/wishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: routes, WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist.component */ "./src/app/pages/wishlist/wishlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"], pathMatch: 'full' }
];
var WishlistModule = /** @class */ (function () {
    function WishlistModule() {
    }
    WishlistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"]
            ]
        })
    ], WishlistModule);
    return WishlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module-es5.js.map