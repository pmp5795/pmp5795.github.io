(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/brands/brand/brand.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/brands/brand/brand.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        \r\n        <mat-accordion displayMode=\"flat\" multi=\"true\">\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Categories</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Price</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                    <span>From: <b>${{priceFrom}}</b></span>\r\n                    <span>To: <b>${{priceTo}}</b></span>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n                    <mat-slider color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n                    <mat-slider color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Color</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let color of colors\" [style.background]=\"color\">&nbsp;</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Size</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let size of sizes\">{{size}}</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Condition</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"column\">\r\n                    <mat-checkbox color=\"primary\">New</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Used</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Not Specified</mat-checkbox>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Now starting at $1379</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                   <a [routerLink]=\"['/products/electronics']\"><img src=\"assets/images/products/probook/2-medium.png\" alt=\"\" class=\"mw-100\"></a>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.discount\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                        <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                            <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                        </div>\r\n                        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                    </div>                            \r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div  *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                                <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                </div>\r\n                                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                            </div>                            \r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\"> \r\n                <mat-card class=\"p-0 text-center\">           \r\n                    <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/brands/brands.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/brands/brands.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n    <h3 class=\"py-1 text-center\">We've Got The Brands You're Looking For</h3>    \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-form-field  fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"w-100 brand-search\">\r\n            <input matInput placeholder=\"Search For Brands...\" [(ngModel)]=\"searchText\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\" appearance=\"legacy\" class=\"letters mt-2\">\r\n            <mat-button-toggle value=\"all\" checked=\"true\" class=\"letter\">\r\n                Pure RelationShips\r\n            </mat-button-toggle>\r\n            <mat-button-toggle *ngFor=\"let letter of letters\" [value]=\"letter\" class=\"letter\">\r\n              {{letter}}\r\n            </mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"brands-container\">\r\n    <div class=\"brand-block text-center\" *ngFor=\"let brand of brands | brandSearchPipe : searchText  | filterBrands: group.value\">\r\n        <a [routerLink]=\"['/brands', brand.name]\" class=\"brand mat-elevation-z3\">\r\n            <img [src]=\"brand.image\">\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/brands/brand/brand.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/brands/brand/brand.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kcy9icmFuZC9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLZXNoYXZEaWFtb25kc1xcc3JjXFxhcHBcXHBhZ2VzL2JyYW5kc1xcYnJhbmRcXGJyYW5kLmNvbXBvbmVudC5zY3NzIiwiYnJhbmRzL2JyYW5kL2JyYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREZJO0VBQ0ksa0JBQUE7QUNJUjtBREFBO0VBQ0ksZ0JBQUE7QUNHSjtBREZJO0VBQ0ksWUFBQTtBQ0lSO0FEQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURDSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNFUjtBREdJO0VBQ0ksZ0JBQUE7QUNBUiIsImZpbGUiOiJicmFuZHMvYnJhbmQvYnJhbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG4uZmlsdGVyLXJvd3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4uYWxsLXByb2R1Y3Rze1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi5wLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdHMtd3JhcHBlcntcclxuICAgIG1hcmdpbjogOHB4IC04cHg7XHJcbiAgICAuY29se1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhdGVnb3JpZXMtd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWJ1dHRvbnN7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHggMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXItcHJpY2V7XHJcbiAgICAubWF0LXNsaWRlci1ob3Jpem9udGFse1xyXG4gICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbn0iLCIuZmlsdGVyLXNpZGVuYXYge1xuICB3aWR0aDogMjgwcHg7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuLmZpbHRlci1zaWRlbmF2IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5maWx0ZXItcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG59XG5cbi5hbGwtcHJvZHVjdHMge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFsbC1wcm9kdWN0cy5wLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5wcm9kdWN0cy13cmFwcGVyIHtcbiAgbWFyZ2luOiA4cHggLThweDtcbn1cbi5wcm9kdWN0cy13cmFwcGVyIC5jb2wge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jYXRlZ29yaWVzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICBtYXJnaW46IDAgNnB4IDEwcHggMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZpbHRlci1wcmljZSAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/brands/brand/brand.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/brands/brand/brand.component.ts ***!
  \*******************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandComponent = /** @class */ (function () {
    function BrandComponent(activatedRoute, appService, dialog, router) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.products = [];
        this.brands = [];
        this.priceFrom = 750;
        this.priceTo = 1599;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#000000"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['name']);
        });
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
        this.getCategories();
        this.getAllProducts();
    };
    BrandComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.appService.getProducts("brand").subscribe(function (data) {
            _this.products = data;
            //for show more product  
            for (var index = 0; index < 3; index++) {
                _this.products = _this.products.concat(_this.products);
            }
        });
    };
    BrandComponent.prototype.getCategories = function () {
        var _this = this;
        if (this.appService.Data.categories.length == 0) {
            this.appService.getCategories().subscribe(function (data) {
                _this.categories = data;
                _this.appService.Data.categories = data;
            });
        }
        else {
            this.categories = this.appService.Data.categories;
        }
    };
    BrandComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BrandComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    BrandComponent.prototype.changeCount = function (count) {
        this.count = count;
        this.getAllProducts();
    };
    BrandComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
    };
    BrandComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    BrandComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
                _this.router.navigate(['/products', product.id, product.name]);
            }
        });
    };
    BrandComponent.prototype.onPageChanged = function (event) {
        this.page = event;
        this.getAllProducts();
        window.scrollTo(0, 0);
    };
    BrandComponent.prototype.onChangeCategory = function (event) {
        if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
        __metadata("design:type", Object)
    ], BrandComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BrandComponent.prototype, "onWindowResize", null);
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/brands/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.scss */ "./src/app/pages/brands/brand/brand.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/pages/brands/brands.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/brands/brands.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letters {\n  display: inline-block !important;\n  white-space: unset !important;\n  background: #fff;\n}\n\n.letter {\n  display: inline-block !important;\n}\n\n.brand-search.mat-form-field {\n  text-align: center;\n}\n\n.brands-container {\n  -webkit-column-count: 1;\n     -moz-column-count: 1;\n          column-count: 1;\n  -webkit-column-gap: 16px;\n     -moz-column-gap: 16px;\n          column-gap: 16px;\n  margin-top: 30px;\n}\n\n.brands-container .brand-block {\n  display: block;\n}\n\n.brands-container .brand-block .brand {\n  background-color: #fff;\n  padding: 16px;\n  display: inline-block;\n  margin: 8px 0;\n}\n\n.brands-container .brand-block .brand img {\n  max-width: 100%;\n}\n\n@media only screen and (min-width: 320px) {\n  .brands-container {\n    -moz-column-count: 2;\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .brands-container {\n    -moz-column-count: 3;\n    -webkit-column-count: 3;\n    column-count: 3;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .brands-container {\n    -moz-column-count: 4;\n    -webkit-column-count: 4;\n    column-count: 4;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .brands-container {\n    -moz-column-count: 5;\n    -webkit-column-count: 5;\n    column-count: 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kcy9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLZXNoYXZEaWFtb25kc1xcc3JjXFxhcHBcXHBhZ2VzL2JyYW5kc1xcYnJhbmRzLmNvbXBvbmVudC5zY3NzIiwiYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FERUE7RUFDSSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQUk7RUFDSSxjQUFBO0FDRVI7O0FERFE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNHWjs7QURGWTtFQUNJLGVBQUE7QUNJaEI7O0FERUE7RUFDSTtJQUNJLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUNBTjtBQUNGOztBRElBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSTtJQUNJLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDSE47QUFDRiIsImZpbGUiOiJicmFuZHMvYnJhbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHRlcnN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ubGV0dGVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5icmFuZC1zZWFyY2gubWF0LWZvcm0tZmllbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDE7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC5icmFuZC1ibG9ja3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAuYnJhbmR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAuYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiA0O1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA0O1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5icmFuZHMtY29udGFpbmVyIHtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogNTtcclxuICAgICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNTtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICB9XHJcbn0iLCIubGV0dGVycyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxldHRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYnJhbmQtc2VhcmNoLm1hdC1mb3JtLWZpZWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnJhbmRzLWNvbnRhaW5lciB7XG4gIGNvbHVtbi1jb3VudDogMTtcbiAgY29sdW1uLWdhcDogMTZweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5icmFuZHMtY29udGFpbmVyIC5icmFuZC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJyYW5kcy1jb250YWluZXIgLmJyYW5kLWJsb2NrIC5icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5icmFuZHMtY29udGFpbmVyIC5icmFuZC1ibG9jayAuYnJhbmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5icmFuZHMtY29udGFpbmVyIHtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmJyYW5kcy1jb250YWluZXIge1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuYnJhbmRzLWNvbnRhaW5lciB7XG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuYnJhbmRzLWNvbnRhaW5lciB7XG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDU7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDU7XG4gICAgY29sdW1uLWNvdW50OiA1O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/brands/brands.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/brands/brands.component.ts ***!
  \**************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
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


var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(appService) {
        this.appService = appService;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
        this.brands = [];
    }
    BrandsComponent.prototype.ngOnInit = function () {
        this.brands = this.appService.getBrands();
        // this.brands.sort((a, b)=>{
        //   if(a.name < b.name) return -1;
        //   if(a.name > b.name) return 1;
        //   return 0;
        // });
    };
    BrandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.scss */ "./src/app/pages/brands/brands.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/pages/brands/brands.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.module.ts ***!
  \***********************************************/
/*! exports provided: routes, BrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands.component */ "./src/app/pages/brands/brands.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/pages/brands/brand/brand.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"], pathMatch: 'full' },
    { path: ':name', component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__["BrandComponent"] }
];
var BrandsModule = /** @class */ (function () {
    function BrandsModule() {
    }
    BrandsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
            ],
            declarations: [
                _brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"],
                _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__["BrandComponent"]
            ]
        })
    ], BrandsModule);
    return BrandsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-brands-brands-module-es5.js.map