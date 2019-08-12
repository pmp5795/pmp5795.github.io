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

module.exports = ".cart-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.cart-table.mat-table .mat-row, .cart-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.cart-table.mat-table .mat-row {\n  min-height: 100px;\n}\n.cart-table.mat-table .mat-cell, .cart-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.cart-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.cart-table.mat-table .mat-cell img {\n  width: 100px;\n}\n.cart-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.cart-table.mat-table .mat-cell .grand-total {\n  font-weight: 500;\n}\n.cart-table.mat-table .mat-cell .grand-total span:nth-child(3) {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLaXNob3JlRGlhbW9uZHMvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGlCQUFBO0FDRVI7QURBSTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUjtBRENRO0VBQ0ksWUFBQTtBQ0NaO0FEQ1E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FEQVk7RUFDSSxlQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgLm1hdC1yb3csIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDg3MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yb3d7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmFuZC10b3RhbHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY2FydC10YWJsZS5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LXJvdywgLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWluLXdpZHRoOiA4NzBweDtcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCwgLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uY2FydC10YWJsZS5tYXQtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNhcnQtdGFibGUubWF0LXRhYmxlIC5tYXQtY2VsbCAucHJvZHVjdC1uYW1lIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLmdyYW5kLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LXRhYmxlLm1hdC10YWJsZSAubWF0LWNlbGwgLmdyYW5kLXRvdGFsIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

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