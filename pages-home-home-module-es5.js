(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-carousel [slides]=\"slides\"></app-main-carousel> \r\n\r\n<!-- <div fxLayout=\"row wrap\" class=\"info-bar\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n            <div class=\"content\">\r\n                <p>BONUS PLUS</p> \r\n                <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n            </div> \r\n        </mat-card> \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n            <div class=\"content\">\r\n                <p>FREE SHIPPING</p> \r\n                <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n            <div class=\"content\">\r\n                <p>MONEY BACK GUARANTEE</p> \r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\"> \r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n            <div class=\"content\">\r\n                <p>ONLINE SUPPORT 24/7</p> \r\n                <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n            </div> \r\n        </mat-card>\r\n    </div>\r\n</div> -->\r\n\r\n<app-banners [banners]=\"banners\"></app-banners>\r\n\r\n<!-- <div class=\"products-tabs\">  \r\n\r\n    <mat-tab-group mat-stretch-tabs (selectedTabChange)=\"onLinkClick($event)\">\r\n       \r\n        <mat-tab label=\"Featured\">           \r\n           <app-products-carousel [products]=\"featuredProducts\"></app-products-carousel>\r\n        </mat-tab>\r\n        <mat-tab label=\"On Sale\">\r\n           <app-products-carousel [products]=\"onSaleProducts\"></app-products-carousel>\r\n        </mat-tab>\r\n        <mat-tab label=\"Top Rated\">\r\n            <app-products-carousel [products]=\"topRatedProducts\"></app-products-carousel>\r\n        </mat-tab>\r\n        <mat-tab label=\"New Arrivals\">\r\n            <app-products-carousel [products]=\"newArrivalsProducts\"></app-products-carousel>\r\n        </mat-tab>\r\n    </mat-tab-group> \r\n\r\n\r\n</div> -->\r\n\r\n<app-brands-carousel [brands]=\"brands\"></app-brands-carousel> "

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-tabs {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvRDpcXENhcHN0b24tUHJvamVjdFxcS2VzaGF2RGlhbW9uZHNcXHNyY1xcYXBwXFxwYWdlcy9ob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtdGFic3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7ICAgXHJcbn0iLCIucHJvZHVjdHMtdGFicyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService) {
        this.appService = appService;
        this.slides = [
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/banner4.jpg' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/banner5.jpg' }
        ];
        this.brands = [];
        this.banners = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBanners();
        this.getProducts("featured");
        this.getBrands();
    };
    HomeComponent.prototype.onLinkClick = function (e) {
        this.getProducts(e.tab.textLabel.toLowerCase());
    };
    HomeComponent.prototype.getProducts = function (type) {
        var _this = this;
        if (type == "featured" && !this.featuredProducts) {
            this.appService.getProducts("featured").subscribe(function (data) {
                _this.featuredProducts = data;
            });
        }
        if (type == "on sale" && !this.onSaleProducts) {
            this.appService.getProducts("on-sale").subscribe(function (data) {
                _this.onSaleProducts = data;
            });
        }
        if (type == "top rated" && !this.topRatedProducts) {
            this.appService.getProducts("top-rated").subscribe(function (data) {
                _this.topRatedProducts = data;
            });
        }
        if (type == "new arrivals" && !this.newArrivalsProducts) {
            this.appService.getProducts("new-arrivals").subscribe(function (data) {
                _this.newArrivalsProducts = data;
            });
        }
    };
    HomeComponent.prototype.getBanners = function () {
        var _this = this;
        this.appService.getBanners().subscribe(function (data) {
            _this.banners = data;
        });
    };
    HomeComponent.prototype.getBrands = function () {
        this.brands = this.appService.getBrands();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map