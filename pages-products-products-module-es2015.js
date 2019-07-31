(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/product/product-zoom/product-zoom.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/product/product.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n        \r\n        <mat-card class=\"product-image\">\r\n            <mat-chip-list *ngIf=\"product?.discount\">\r\n                <mat-chip color=\"warn\" selected=\"true\">{{product?.discount}}% OFF</mat-chip>\r\n            </mat-chip-list>\r\n            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md><mat-icon>fullscreen</mat-icon></button>\r\n            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\"/>\r\n        </mat-card>       \r\n\r\n        <div class=\"small-carousel\"> \r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\"> \r\n                    <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                            <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                            <div class=\"swiper-lazy-preloader\"></div>\r\n                        </mat-card>\r\n                    </div>                    \r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        \r\n        <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n            <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n        </div>\r\n\r\n        <h2>{{product?.name}}</h2>\r\n        <div class=\"py-1 lh\">\r\n            <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product?.categoryId )?.name }}</span></p>\r\n            <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product?.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\r\n        </div>                 \r\n        <div class=\"py-1\">\r\n            <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n        </div>\r\n        <p class=\"py-1 text-muted lh\">{{product?.description}}</p>\r\n\r\n        <div class=\"divider mt-1\"></div>\r\n        <div class=\"py-2\">\r\n            <h3 class=\"old-price text-muted\"><span *ngIf=\"product?.oldPrice\">${{product?.oldPrice | number : '1.2-2'}}</span></h3>\r\n            <h2 class=\"new-price\">${{product?.newPrice}}</h2>\r\n        </div>        \r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"details text-muted py-1\">\r\n            <div *ngIf=\"product?.color\" class=\"color\">\r\n                <span class=\"fw-500\">Select Color:</span>\r\n                <button mat-raised-button *ngFor=\"let color of product?.color\" [style.background]=\"color\">&nbsp;</button>              \r\n            </div>\r\n            <div *ngIf=\"product?.size\" class=\"size\" ngClass.xs=\"mt-1\">\r\n                <span class=\"fw-500\">Select Size:</span>\r\n                <button mat-raised-button *ngFor=\"let size of product?.size\">{{size}}</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"py-1\">\r\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls> \r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\r\n            <button mat-button><mat-icon>mail_outline</mat-icon> Email to a Friend</button>\r\n            <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxHide fxShow.gt-md> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>BONUS PLUS</p> \r\n                        <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n                    </div> \r\n                </mat-card> \r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>FREE SHIPPING</p> \r\n                        <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\"fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>MONEY BACK GUARANTEE</p> \r\n                        <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>ONLINE SUPPORT 24/7</p> \r\n                        <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" class=\"mt-2\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"78\" fxFlex.md=\"74\">\r\n        <mat-card> \r\n            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">       \r\n                <mat-tab label=\"Description\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat.</li>\r\n                        </ul>\r\n                        <p class=\"mt-1\">Duis eu felis ultricies urna pharetra efficitur nec non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur posuere eu justo eget mollis. Sed semper accumsan urna vel rutrum. Nulla condimentum quis lacus ut semper. Quisque at massa pretium, porta ligula ut, rutrum elit. Pellentesque et orci sit amet dolor laoreet tempor sed eu sem. Morbi lacinia pellentesque tellus euismod eleifend.</p>\r\n                        <p class=\"mt-1\">Quisque fringilla eros id ligula luctus, a gravida augue sodales. Sed eget augue ut lectus condimentum volutpat. Morbi quis nunc viverra, gravida arcu quis, varius metus. Praesent tincidunt ipsum est, quis molestie ligula efficitur ut. Nunc interdum erat eu tortor maximus suscipit. Vivamus nec laoreet dui. Nullam dignissim laoreet metus quis pretium.</p>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Additional information\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                            <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                            <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                            <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                        </ul>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        </ul>\r\n                    </div>\r\n                \r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Reviews\">\r\n                    <div class=\"full-desc lh\">\r\n                        <mat-list class=\"reviews\">\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Bruno Vespa</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Dissatisfied\" matTooltipPosition=\"after\">sentiment_dissatisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>13 January, 2018 at 7:09</small></p>\r\n                                <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Julia Aniston</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Very Satisfied\" matTooltipPosition=\"after\">sentiment_very_satisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>04 February, 2018 at 10:22</small></p>\r\n                                <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Andy Warhol</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Neutral\" matTooltipPosition=\"after\">sentiment_neutral</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>14 February, 2018 at 11:10</small></p>\r\n                                <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        \r\n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                        <div class=\"divider\"></div>\r\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                            <span>Your Rating:</span>\r\n                            <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon></button>\r\n                        </h3>\r\n\r\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row wrap\">\r\n                            <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your review</mat-label>\r\n                                    <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required rows=\"5\"></textarea>\r\n                                    <mat-error *ngIf=\"form.controls.review.errors?.required\">Review is required</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your name</mat-label>\r\n                                    <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\r\n                                    <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your email</mat-label>\r\n                                    <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\r\n                                    <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\">SUBMIT REVIEW</button>\r\n                            </div>\r\n                        </form>\r\n\r\n                        \r\n                    </div>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"22\" fxFlex.md=\"26\" ngClass.gt-sm=\"pl-3\" fxHide fxShow.gt-sm>\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%201\" alt=\"\" class=\"mw-100 d-block\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%202\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%203\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-2 mt-2\">\r\n    <h2>Related Products</h2>\r\n    <div class=\"divider\"></div>\r\n    <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <!-- <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        \r\n        <mat-accordion displayMode=\"flat\" multi=\"true\">\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Categories</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Price</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                    <span>From: <b>${{priceFrom}}</b></span>\r\n                    <span>To: <b>${{priceTo}}</b></span>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n                    <mat-slider color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n                    <mat-slider color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Color</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let color of colors\" [style.background]=\"color.name\" (click)=\"color.selected = !color.selected\">\r\n                        <span *ngIf=\"!color.selected\">&nbsp;</span>\r\n                        <mat-icon *ngIf=\"color.selected\">check</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Size</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let size of sizes\" (click)=\"size.selected = !size.selected\" [class.selected]=\"size.selected\">\r\n                        {{size.name}}                      \r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Condition</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"column\">\r\n                    <mat-checkbox color=\"primary\">New</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Used</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Not Specified</mat-checkbox>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Brands</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">                  \r\n                    <button mat-raised-button *ngFor=\"let brand of brands\" (click)=\"brand.selected = !brand.selected\" [class.selected]=\"brand.selected\">\r\n                        <img [src]=\"brand.image\"/>\r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Now starting at $1379</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                   <a [routerLink]=\"['/products/electronics']\"><img src=\"assets/images/products/probook/2-medium.png\" alt=\"\" class=\"mw-100\"></a>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n    </mat-sidenav> -->\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.discount\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                        <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                            <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                        </div>\r\n                        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                    </div>                            \r\n                    <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div  *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                                <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                </div>\r\n                                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                            </div>                            \r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\"> \r\n                <mat-card class=\"p-0 text-center\">           \r\n                    <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.zoom-dialog .mat-dialog-container .controls {\n  position: relative;\n}\n.zoom-dialog .mat-dialog-container .controls button {\n  position: absolute;\n  top: -44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-in {\n  right: 44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-out {\n  right: 0;\n}\n.zoom-dialog .mat-dialog-container .controls .close {\n  right: -44px;\n}\n.zoom-dialog .mat-dialog-container .viewer {\n  width: 100%;\n  text-align: center;\n}\n.zoom-dialog .mat-dialog-container .viewer img {\n  max-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vRDpcXENhcHN0b24tUHJvamVjdFxcS2lzaG9yZURpYW1vbmRzL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RcXHByb2R1Y3Qtem9vbVxccHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3Qtem9vbS9wcm9kdWN0LXpvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw0QkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNFaEI7QURBWTtFQUNJLFdBQUE7QUNFaEI7QURBWTtFQUNJLFFBQUE7QUNFaEI7QURBWTtFQUNJLFlBQUE7QUNFaEI7QURDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxjQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20tZGlhbG9ne1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRyb2xze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20taW57XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDRweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20tb3V0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDRweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXdlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59IiwiLnpvb20tZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jb250cm9scyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi56b29tLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLmNvbnRyb2xzIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDRweDtcbn1cbi56b29tLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLmNvbnRyb2xzIC56b29tLWluIHtcbiAgcmlnaHQ6IDQ0cHg7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jb250cm9scyAuem9vbS1vdXQge1xuICByaWdodDogMDtcbn1cbi56b29tLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLmNvbnRyb2xzIC5jbG9zZSB7XG4gIHJpZ2h0OiAtNDRweDtcbn1cbi56b29tLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLnZpZXdlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC52aWV3ZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ProductZoomComponent = class ProductZoomComponent {
    constructor(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
    zoomIn() {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    }
    zoomOut() {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage', { static: true }),
    __metadata("design:type", Object)
], ProductZoomComponent.prototype, "zoomImage", void 0);
ProductZoomComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-zoom',
        template: __webpack_require__(/*! raw-loader!./product-zoom.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./product-zoom.component.scss */ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss")]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], ProductZoomComponent);



/***/ }),

/***/ "./src/app/pages/products/product/product.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center;\n}\n.mat-card.product-image button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n}\n.mat-card.product-image img {\n  max-width: 100%;\n}\n.mat-card.product-image .mat-chip-list {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  pointer-events: none;\n}\n.small-carousel {\n  margin-top: 8px;\n}\n.small-carousel .swiper-container {\n  padding: 2px;\n}\n.small-carousel .swiper-container .swiper-slide {\n  text-align: center;\n}\n.small-carousel .swiper-container .swiper-slide img {\n  max-width: 100%;\n}\n.small-carousel .swiper-button-next.swiper-button-disabled,\n.small-carousel .swiper-button-prev.swiper-button-disabled {\n  opacity: 0;\n}\n.small-carousel .swiper-button-prev {\n  left: -10px;\n}\n.small-carousel .swiper-button-next {\n  right: -10px;\n}\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px;\n}\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0;\n}\n.full-desc {\n  padding: 30px 40px;\n}\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9EOlxcQ2Fwc3Rvbi1Qcm9qZWN0XFxLaXNob3JlRGlhbW9uZHMvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRVI7QURFQTtFQUNJLGVBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0FDSWhCO0FEQUk7O0VBRUksVUFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURJQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLHNDQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tYXQtY2hpcC1saXN0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7IFxyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC1jYXJvdXNlbHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwgXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLnpvb20tdmlld2Vye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm10LTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmRldGFpbHMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1saXN0LnJldmlld3N7XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtYXZhdGFyLnJldmlldy1hdXRob3J7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHR7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxufVxyXG4uZnVsbC1kZXNje1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgeyAgXHJcbiAgICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWd7XHJcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xyXG4gICAgICAgIGN1cnNvcjp1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL3pvb20uc3ZnJykgMTAgMTAsIHpvb20taW47XHJcbiAgICB9XHJcbn0iLCIubWF0LWNhcmQucHJvZHVjdC1pbWFnZSB7XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cbi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIC5tYXQtY2hpcC1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc21hbGwtY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAycHg7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1zbGlkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbWFsbC1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5zbWFsbC1jYXJvdXNlbCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5zbWFsbC1jYXJvdXNlbCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgbGVmdDogLTEwcHg7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLm1hdC1jYXJkLnpvb20tdmlld2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiA4cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubXQtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uZGV0YWlscyBidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5tYXQtbGlzdC5yZXZpZXdzIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubWF0LWxpc3QucmV2aWV3cyAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmZ1bGwtZGVzYyB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWcge1xuICAgIGN1cnNvcjogem9vbS1pbjtcbiAgICBjdXJzb3I6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL3pvb20uc3ZnXCIpIDEwIDEwLCB6b29tLWluO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/products/product/product.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let ProductComponent = class ProductComponent {
    constructor(appService, activatedRoute, dialog, formBuilder) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.config = {};
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getProductById(params['id']);
        });
        this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])]
        });
        this.getRelatedProducts();
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    }
    getProductById(id) {
        this.appService.getProductById(id).subscribe(data => {
            this.product = data;
            this.image = data.images[0].medium;
            this.zoomImage = data.images[0].big;
            setTimeout(() => {
                this.config.observer = true;
                // this.directiveRef.setIndex(0);
            });
        });
    }
    getRelatedProducts() {
        this.appService.getProducts('related').subscribe(data => {
            this.relatedProducts = data;
        });
    }
    selectImage(image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    }
    onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSubmit(values) {
        if (this.form.valid) {
            //email sent
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer', { static: true }),
    __metadata("design:type", Object)
], ProductComponent.prototype, "zoomViewer", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"], { static: true }),
    __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
], ProductComponent.prototype, "directiveRef", void 0);
ProductComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/products/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden;\n}\n.filter-brands button img {\n  width: 66px;\n  height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvRDpcXENhcHN0b24tUHJvamVjdFxcS2lzaG9yZURpYW1vbmRzL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtBQ0VSO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0o7QURGSTtFQUNJLGtCQUFBO0FDSVI7QURBQTtFQUNJLGdCQUFBO0FDR0o7QURGSTtFQUNJLFlBQUE7QUNJUjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDRVI7QURHSTtFQUNJLGdCQUFBO0FDQVI7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1icmFuZHN7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5maWx0ZXItc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLXNpZGVuYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZpbHRlci1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbn1cblxuLmFsbC1wcm9kdWN0cyB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYWxsLXByb2R1Y3RzLnAtbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnByb2R1Y3RzLXdyYXBwZXIge1xuICBtYXJnaW46IDhweCAtOHB4O1xufVxuLnByb2R1Y3RzLXdyYXBwZXIgLmNvbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNhdGVnb3JpZXMtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5maWx0ZXItYnV0dG9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIG1hcmdpbjogMCA2cHggMTBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsdGVyLXByaWNlIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICBtaW4td2lkdGg6IDExMHB4O1xufVxuXG4uZmlsdGVyLWJyYW5kcyBidXR0b24ge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtaW4td2lkdGg6IDY2cHg7XG4gIG1hcmdpbjogMCA2cHggMTBweCAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmlsdGVyLWJyYW5kcyBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogNDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProductsComponent = class ProductsComponent {
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
        this.colors = [
            { name: "#5C6BC0", selected: false },
            { name: "#66BB6A", selected: false },
            { name: "#EF5350", selected: false },
            { name: "#BA68C8", selected: false },
            { name: "#FF4081", selected: false },
            { name: "#9575CD", selected: false },
            { name: "#90CAF9", selected: false },
            { name: "#B2DFDB", selected: false },
            { name: "#DCE775", selected: false },
            { name: "#FFD740", selected: false },
            { name: "#00E676", selected: false },
            { name: "#FBC02D", selected: false },
            { name: "#FF7043", selected: false },
            { name: "#F5F5F5", selected: false },
            { name: "#696969", selected: false }
        ];
        this.sizes = [
            { name: "S", selected: false },
            { name: "M", selected: false },
            { name: "L", selected: false },
            { name: "XL", selected: false },
            { name: "2XL", selected: false },
            { name: "32", selected: false },
            { name: "36", selected: false },
            { name: "38", selected: false },
            { name: "46", selected: false },
            { name: "52", selected: false },
            { name: "13.3\"", selected: false },
            { name: "15.4\"", selected: false },
            { name: "17\"", selected: false },
            { name: "21\"", selected: false },
            { name: "23.4\"", selected: false }
        ];
    }
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(params => {
            //console.log(params['name']);
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
        this.getBrands();
        this.getAllProducts();
    }
    getAllProducts() {
        this.appService.getProducts("featured").subscribe(data => {
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
    getBrands() {
        this.brands = this.appService.getBrands();
        this.brands.forEach(brand => { brand.selected = false; });
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
], ProductsComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsComponent.prototype, "onWindowResize", null);
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/pages/products/product/product.component.ts");
/* harmony import */ var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], pathMatch: 'full' },
    { path: ':name', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: ':id/:name', component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] }
];
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
            _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
        ],
        entryComponents: [
            _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
        ]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map