(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"appService.Data.cartList.length == 0\">\r\n  <mat-chip-list>\r\n      <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</mat-chip>\r\n  </mat-chip-list>\r\n  <a [routerLink]=\"['/']\" mat-raised-button color=\"primary\" class=\"mt-2\">Continue shopping</a>\r\n</div>\r\n\r\n<mat-card *ngIf=\"appService.Data.cartList?.length > 0\" class=\"p-0\">\r\n\r\n  <div class=\"mat-table cart-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Product</div>\r\n      <div class=\"mat-header-cell\">Name</div>\r\n      <div class=\"mat-header-cell\">Price</div>      \r\n      <div class=\"mat-header-cell\">Quantity</div>\r\n      <div class=\"mat-header-cell\">Total</div>\r\n      <div class=\"mat-header-cell text-center\">\r\n        <div class=\"px-1\">\r\n          <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let product of appService.Data.cartList\" class=\"mat-row\">\r\n      <div class=\"mat-cell\"><img [src]=\"product.images[0].small\"></div>\r\n      <div class=\"mat-cell\"><a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a></div>\r\n      <div class=\"mat-cell\">${{product.newPrice | number : '1.2-2'}}</div>      \r\n      <div class=\"mat-cell text-muted\">\r\n        <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"updateCart($event)\"></app-controls>\r\n      </div>\r\n      <div class=\"mat-cell\">${{total[product.id] | number : '1.2-2'}}</div>\r\n      <div class=\"mat-cell text-center\">\r\n        <div class=\"p-1\">\r\n          <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\"><a [routerLink]=\"['/']\" mat-raised-button color=\"primary\">Continue shopping</a></div>\r\n      <div class=\"mat-cell\"></div>\r\n      <div class=\"mat-cell\"></div>\r\n      <div class=\"mat-cell text-right\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center end\" class=\"grand-total px-2\">\r\n          <span>SubTotal:</span>\r\n          <span class=\"text-muted\">Discount:</span>\r\n          <span class=\"new-price\">Grand total:</span>\r\n        </div>        \r\n      </div>\r\n      <div class=\"mat-cell\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"grand-total\">\r\n          <span>${{ grandTotal | number : '1.2-2'}}</span>\r\n          <span class=\"text-muted\">15%</span>\r\n          <span class=\"new-price\">${{ (grandTotal - (grandTotal*0.15)) | number : '1.2-2'}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-cell text-center\"><a [routerLink]=\"['/checkout']\" mat-raised-button color=\"primary\">Proceed To Checkout</a></div>\r\n    </div>\r\n  </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.cart-table.mat-table .mat-row, .cart-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.cart-table.mat-table .mat-row {\n  min-height: 100px;\n}\n.cart-table.mat-table .mat-cell, .cart-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.cart-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.cart-table.mat-table .mat-cell img {\n  width: 100px;\n}\n.cart-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.cart-table.mat-table .mat-cell .grand-total {\n  font-weight: 500;\n}\n.cart-table.mat-table .mat-cell .grand-total span:nth-child(3) {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxccGFnZXNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksaUJBQUE7QUNFUjtBREFJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC10YWJsZS5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICAubWF0LXJvdywgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogODcwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJvd3tcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZXtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyYW5kLXRvdGFse1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jYXJ0LXRhYmxlLm1hdC10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtcm93LCAuY2FydC10YWJsZS5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtaW4td2lkdGg6IDg3MHB4O1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4uY2FydC10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsLCAuY2FydC10YWJsZS5tYXQtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4uY2FydC10YWJsZS5tYXQtdGFibGUgLm1hdC1jZWxsIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAuZ3JhbmQtdG90YWwgc3BhbjpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CartComponent = class CartComponent {
    constructor(appService) {
        this.appService = appService;
        this.total = [];
        this.grandTotal = 0;
        this.cartItemCount = [];
        this.cartItemCountTotal = 0;
    }
    ngOnInit() {
        this.appService.Data.cartList.forEach(product => {
            this.total[product.id] = product.cartCount * product.newPrice;
            this.grandTotal += product.cartCount * product.newPrice;
            this.cartItemCount[product.id] = product.cartCount;
            this.cartItemCountTotal += product.cartCount;
        });
    }
    updateCart(value) {
        if (value) {
            this.total[value.productId] = value.total;
            this.cartItemCount[value.productId] = value.soldQuantity;
            this.grandTotal = 0;
            this.total.forEach(price => {
                this.grandTotal += price;
            });
            this.cartItemCountTotal = 0;
            this.cartItemCount.forEach(count => {
                this.cartItemCountTotal += count;
            });
            this.appService.Data.totalPrice = this.grandTotal;
            this.appService.Data.totalCartCount = this.cartItemCountTotal;
            this.appService.Data.cartList.forEach(product => {
                this.cartItemCount.forEach((count, index) => {
                    if (product.id == index) {
                        product.cartCount = count;
                    }
                });
            });
        }
    }
    remove(product) {
        const index = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.grandTotal = this.grandTotal - this.total[product.id];
            this.appService.Data.totalPrice = this.grandTotal;
            this.total.forEach(val => {
                if (val == this.total[product.id]) {
                    this.total[product.id] = 0;
                }
            });
            this.cartItemCountTotal = this.cartItemCountTotal - this.cartItemCount[product.id];
            this.appService.Data.totalCartCount = this.cartItemCountTotal;
            this.cartItemCount.forEach(val => {
                if (val == this.cartItemCount[product.id]) {
                    this.cartItemCount[product.id] = 0;
                }
            });
            this.appService.resetProductCartCount(product);
        }
    }
    clear() {
        this.appService.Data.cartList.forEach(product => {
            this.appService.resetProductCartCount(product);
        });
        this.appService.Data.cartList.length = 0;
        this.appService.Data.totalPrice = 0;
        this.appService.Data.totalCartCount = 0;
    }
};
CartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: routes, CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.component */ "./src/app/pages/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], pathMatch: 'full' }
];
let CartModule = class CartModule {
};
CartModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        declarations: [
            _cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
        ]
    })
], CartModule);



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es2015.js.map