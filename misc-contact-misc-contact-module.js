(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["misc-contact-misc-contact-module"],{

/***/ "./src/app/misc/contact/components/contact-page/contact-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/contact-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h1 class=\"about-title\"><b>Contact Us</b></h1><br>\n      <h3>\n        Contact Number\n      </h3>\n      <p>\n        245-876-9999\n      </p>\n      <h3>\n       Address\n      </h3>\n      <p>\n        299 Doon Valley Dr, Kitchener\n      </p>\n      <p>\n        765 Fairview Rd, Kitchener\n      </p>\n      <h3>\n       Email: \n      </h3>\n      <p>\n        thesilverleaf@gmail.com\n\t\t</p>\n    </div>\n\t  <div class=\"col-6\">\n\t  <div id=\"googleMap\" style=\"width:100%;height:400px;\"></div>\n\n<script>\nfunction myMap() {\nvar mapProp= {\n  center:new google.maps.LatLng(51.508742,-0.120850),\n  zoom:5,\n};\nvar map = new google.maps.Map(document.getElementById(\"googleMap\"),mapProp);\n}\n</script>\n\n<script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap\"></script>\n\t\t  \n\t  </div>\n\t  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/misc/contact/components/contact-page/contact-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/contact-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/misc/contact/components/contact-page/contact-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/contact-page.styles.scss */ "./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss")]
        })
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-about-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-about-page .about-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9jb250YWN0L2NvbXBvbmVudHMvY29udGFjdC1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxtaXNjXFxjb250YWN0XFxjb21wb25lbnRzXFxjb250YWN0LXBhZ2VcXHN0eWxlc1xcY29udGFjdC1wYWdlLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9taXNjL2NvbnRhY3QvY29tcG9uZW50cy9jb250YWN0LXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLGlDQUE2QztFQUM3QyxxQkFBb0IsRUFVckI7RUFiRDtJQU1JLGtCQUFpQjtJQUNqQixvQkFBbUI7SUFDbkIsZUNUVztJRFVYLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWlzYy9jb250YWN0L2NvbXBvbmVudHMvY29udGFjdC1wYWdlL3N0eWxlcy9jb250YWN0LXBhZ2Uuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3NoYXJlZCc7XG5cbmFwcC1hYm91dC1wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyAkbmF2YmFyLWhlaWdodCB9KTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG5cbiAgLmFib3V0LXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMxZTFlMWU7XG4kZGFya2dyZXk6ICMzZjNmM2Y7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzllOWU5ZTtcbiRncmV5LTI6ICNkN2Q3ZDc7XG4kZ3JleS0zOiAjZTVlNWU1O1xuXG4kYXF1YW1hcmluYTogIzUwZTNjMjtcbiRwdXJwbGU6ICM5MDEzZmU7XG4kY2hlcnJ5OiAjZjgyYzUxO1xuJHJlZDogI2Q2MTgzYTtcbiRnb2xkOiAjZmNiMzAwO1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG5cbi8vIFNpemVzXG4kbmF2YmFyLWhlaWdodDogJG5hdi1saW5rLWhlaWdodCArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHByZWxvYWQtaW1hZ2UtYmc6IHJnYmEoZGFya2VuKCR3aGl0ZSwgMTApLCAuMjUpO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHNwaW5uZXItc2l6ZTogMjhweDtcbiRzcGlubmVyLWNvbG9yOiAkZ3JleTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/misc/contact/misc-contact.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/misc/contact/misc-contact.module.ts ***!
  \*****************************************************/
/*! exports provided: miscContactRoutes, MiscContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscContactRoutes", function() { return miscContactRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscContactModule", function() { return MiscContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-page/contact-page.component */ "./src/app/misc/contact/components/contact-page/contact-page.component.ts");
/* harmony import */ var _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/contact-page.resolver */ "./src/app/misc/contact/resolvers/contact-page.resolver.ts");






var miscContactRoutes = [
    {
        path: '',
        component: _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"],
        resolve: {
            data: _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__["ContactPageResolver"]
        }
    }
];
var MiscContactModule = /** @class */ (function () {
    function MiscContactModule() {
    }
    MiscContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(miscContactRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__["ContactPageResolver"]
            ]
        })
    ], MiscContactModule);
    return MiscContactModule;
}());



/***/ }),

/***/ "./src/app/misc/contact/resolvers/contact-page.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/misc/contact/resolvers/contact-page.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: ContactPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageResolver", function() { return ContactPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageResolver = /** @class */ (function () {
    function ContactPageResolver() {
    }
    ContactPageResolver.prototype.resolve = function () {
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
    ContactPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContactPageResolver);
    return ContactPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=misc-contact-misc-contact-module.js.map