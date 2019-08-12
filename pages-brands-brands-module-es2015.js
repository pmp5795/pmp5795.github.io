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

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmRzL2JyYW5kL0Q6XFxDYXBzdG9uLVByb2plY3RcXEtpc2hvcmVEaWFtb25kcy9zcmNcXGFwcFxccGFnZXNcXGJyYW5kc1xcYnJhbmRcXGJyYW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9icmFuZHMvYnJhbmQvYnJhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7QUNFUjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0dKO0FERkk7RUFDSSxrQkFBQTtBQ0lSO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FERkk7RUFDSSxZQUFBO0FDSVI7QURBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNHSjtBRENJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0VSO0FER0k7RUFDSSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnJhbmRzL2JyYW5kL2JyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn1cclxuLmZpbHRlci1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuLmFsbC1wcm9kdWN0c3tcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICYucC1sZWZ0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3RzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IDhweCAtOHB4O1xyXG4gICAgLmNvbHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25ze1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLXByaWNle1xyXG4gICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbHtcclxuICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG59IiwiLmZpbHRlci1zaWRlbmF2IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbi5maWx0ZXItc2lkZW5hdiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmlsdGVyLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG4uYWxsLXByb2R1Y3RzIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hbGwtcHJvZHVjdHMucC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucHJvZHVjdHMtd3JhcHBlciB7XG4gIG1hcmdpbjogOHB4IC04cHg7XG59XG4ucHJvZHVjdHMtd3JhcHBlciAuY29sIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2F0ZWdvcmllcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmZpbHRlci1idXR0b25zIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5maWx0ZXItcHJpY2UgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
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





let BrandComponent = class BrandComponent {
    constructor(activatedRoute, appService, dialog, router) {
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
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(params => {
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
    }
    getAllProducts() {
        this.appService.getProducts("brand").subscribe(data => {
            this.products = data;
            //for show more product  
            for (var index = 0; index < 3; index++) {
                this.products = this.products.concat(this.products);
            }
        });
    }
    getCategories() {
        if (this.appService.Data.categories.length == 0) {
            this.appService.getCategories().subscribe(data => {
                this.categories = data;
                this.appService.Data.categories = data;
            });
        }
        else {
            this.categories = this.appService.Data.categories;
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }
    changeCount(count) {
        this.count = count;
        this.getAllProducts();
    }
    changeSorting(sort) {
        this.sort = sort;
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.getAllProducts();
        window.scrollTo(0, 0);
    }
    onChangeCategory(event) {
        if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
        }
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



/***/ }),

/***/ "./src/app/pages/brands/brands.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/brands/brands.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letters {\n  display: inline-block !important;\n  white-space: unset !important;\n  background: #fff;\n}\n\n.letter {\n  display: inline-block !important;\n}\n\n.brand-search.mat-form-field {\n  text-align: center;\n}\n\n.brands-container {\n  -webkit-column-count: 1;\n     -moz-column-count: 1;\n          column-count: 1;\n  -webkit-column-gap: 16px;\n     -moz-column-gap: 16px;\n          column-gap: 16px;\n  margin-top: 30px;\n}\n\n.brands-container .brand-block {\n  display: block;\n}\n\n.brands-container .brand-block .brand {\n  background-color: #fff;\n  padding: 16px;\n  display: inline-block;\n  margin: 8px 0;\n}\n\n.brands-container .brand-block .brand img {\n  max-width: 100%;\n}\n\n@media only screen and (min-width: 320px) {\n  .brands-container {\n    -moz-column-count: 2;\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .brands-container {\n    -moz-column-count: 3;\n    -webkit-column-count: 3;\n    column-count: 3;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .brands-container {\n    -moz-column-count: 4;\n    -webkit-column-count: 4;\n    column-count: 4;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .brands-container {\n    -moz-column-count: 5;\n    -webkit-column-count: 5;\n    column-count: 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmRzL0Q6XFxDYXBzdG9uLVByb2plY3RcXEtpc2hvcmVEaWFtb25kcy9zcmNcXGFwcFxccGFnZXNcXGJyYW5kc1xcYnJhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9icmFuZHMvYnJhbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURFQTtFQUNJLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURBSTtFQUNJLGNBQUE7QUNFUjs7QUREUTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0daOztBREZZO0VBQ0ksZUFBQTtBQ0loQjs7QURFQTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ0FOO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXR0ZXJze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxldHRlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJhbmQtc2VhcmNoLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgY29sdW1uLWdhcDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAuYnJhbmQtYmxvY2t7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLmJyYW5ke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIC5icmFuZHMtY29udGFpbmVyIHtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcclxuICAgICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDU7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDU7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgfVxyXG59IiwiLmxldHRlcnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5sZXR0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmJyYW5kLXNlYXJjaC5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyYW5kcy1jb250YWluZXIge1xuICBjb2x1bW4tY291bnQ6IDE7XG4gIGNvbHVtbi1nYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uYnJhbmRzLWNvbnRhaW5lciAuYnJhbmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5icmFuZHMtY29udGFpbmVyIC5icmFuZC1ibG9jayAuYnJhbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uYnJhbmRzLWNvbnRhaW5lciAuYnJhbmQtYmxvY2sgLmJyYW5kIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuYnJhbmRzLWNvbnRhaW5lciB7XG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDI7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5icmFuZHMtY29udGFpbmVyIHtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMztcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmJyYW5kcy1jb250YWluZXIge1xuICAgIC1tb3otY29sdW1uLWNvdW50OiA0O1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA0O1xuICAgIGNvbHVtbi1jb3VudDogNDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJyYW5kcy1jb250YWluZXIge1xuICAgIC1tb3otY29sdW1uLWNvdW50OiA1O1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA1O1xuICAgIGNvbHVtbi1jb3VudDogNTtcbiAgfVxufSJdfQ== */"

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


let BrandsComponent = class BrandsComponent {
    constructor(appService) {
        this.appService = appService;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
        this.brands = [];
    }
    ngOnInit() {
        this.brands = this.appService.getBrands();
        // this.brands.sort((a, b)=>{
        //   if(a.name < b.name) return -1;
        //   if(a.name > b.name) return 1;
        //   return 0;
        // });
    }
};
BrandsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-brands',
        template: __webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/brands/brands.component.html"),
        styles: [__webpack_require__(/*! ./brands.component.scss */ "./src/app/pages/brands/brands.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], BrandsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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









const routes = [
    { path: '', component: _brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"], pathMatch: 'full' },
    { path: ':name', component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__["BrandComponent"] }
];
let BrandsModule = class BrandsModule {
};
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



/***/ })

}]);
//# sourceMappingURL=pages-brands-brands-module-es2015.js.map