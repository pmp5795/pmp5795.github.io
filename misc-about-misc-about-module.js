(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["misc-about-misc-about-module"],{

/***/ "./src/app/misc/about/components/about-page/about-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/about-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"about-title\">About Us</h1>\n      <h3>\n        What is Lorem Ipsum?\n      </h3>\n      <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </p>\n      <h3>\n        Where does it come from?\n      </h3>\n      <p>\n        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n      </p>\n      <p>\n        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n      </p>\n      <h3>\n        Why do we use it?\n      </h3>\n      <p>\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/misc/about/components/about-page/about-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/about-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/misc/about/components/about-page/about-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/about-page.styles.scss */ "./src/app/misc/about/components/about-page/styles/about-page.styles.scss")]
        })
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/misc/about/components/about-page/styles/about-page.styles.scss":
/*!********************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/styles/about-page.styles.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-about-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-about-page .about-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9hYm91dC9jb21wb25lbnRzL2Fib3V0LXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXG1pc2NcXGFib3V0XFxjb21wb25lbnRzXFxhYm91dC1wYWdlXFxzdHlsZXNcXGFib3V0LXBhZ2Uuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21pc2MvYWJvdXQvY29tcG9uZW50cy9hYm91dC1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWM7RUFDZCxpQ0FBNkM7RUFDN0MscUJBQW9CLEVBVXJCO0VBYkQ7SUFNSSxrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLGVDVFc7SURVWCxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21pc2MvYWJvdXQvY29tcG9uZW50cy9hYm91dC1wYWdlL3N0eWxlcy9hYm91dC1wYWdlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zaGFyZWQnO1xuXG5hcHAtYWJvdXQtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3sgJG5hdmJhci1oZWlnaHQgfSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuXG4gIC5hYm91dC10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMWUxZTFlO1xuJGRhcmtncmV5OiAjM2YzZjNmO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM5ZTllOWU7XG4kZ3JleS0yOiAjZDdkN2Q3O1xuJGdyZXktMzogI2U1ZTVlNTtcblxuJGFxdWFtYXJpbmE6ICM1MGUzYzI7XG4kcHVycGxlOiAjOTAxM2ZlO1xuJGNoZXJyeTogI2Y4MmM1MTtcbiRyZWQ6ICNkNjE4M2E7XG4kZ29sZDogI2ZjYjMwMDtcbiRmYWNlYm9vay1ibHVlOiAjM2I1OTk4O1xuXG4vLyBTaXplc1xuJG5hdmJhci1oZWlnaHQ6ICRuYXYtbGluay1oZWlnaHQgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRwcmVsb2FkLWltYWdlLWJnOiByZ2JhKGRhcmtlbigkd2hpdGUsIDEwKSwgLjI1KTtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRzcGlubmVyLXNpemU6IDI4cHg7XG4kc3Bpbm5lci1jb2xvcjogJGdyZXk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/misc/about/misc-about.module.ts":
/*!*************************************************!*\
  !*** ./src/app/misc/about/misc-about.module.ts ***!
  \*************************************************/
/*! exports provided: miscAboutRoutes, MiscAboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscAboutRoutes", function() { return miscAboutRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscAboutModule", function() { return MiscAboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-page/about-page.component */ "./src/app/misc/about/components/about-page/about-page.component.ts");
/* harmony import */ var _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/about-page.resolver */ "./src/app/misc/about/resolvers/about-page.resolver.ts");






var miscAboutRoutes = [
    {
        path: '',
        component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"],
        resolve: {
            data: _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__["AboutPageResolver"]
        }
    }
];
var MiscAboutModule = /** @class */ (function () {
    function MiscAboutModule() {
    }
    MiscAboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(miscAboutRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__["AboutPageResolver"]
            ]
        })
    ], MiscAboutModule);
    return MiscAboutModule;
}());



/***/ }),

/***/ "./src/app/misc/about/resolvers/about-page.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/misc/about/resolvers/about-page.resolver.ts ***!
  \*************************************************************/
/*! exports provided: AboutPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageResolver", function() { return AboutPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageResolver = /** @class */ (function () {
    function AboutPageResolver() {
    }
    AboutPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'About Us',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AboutPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AboutPageResolver);
    return AboutPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=misc-about-misc-about-module.js.map