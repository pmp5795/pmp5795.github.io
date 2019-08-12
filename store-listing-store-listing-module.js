(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-listing-store-listing-module"],{

/***/ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js ***!
  \*****************************************************************************/
/*! exports provided: BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */
        this.insideClick = false;
    }
    BsDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var /** @type {?} */ dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    BsDropdownContainerComponent.prototype._contains = /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this._element.nativeElement.contains(el);
    };
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) { return value; }))
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var /** @type {?} */ _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var /** @type {?} */ _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    BsDropdownDirective.prototype._contains = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            // clean up subscriptions and destroy dropdown
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addBs4Polyfills = /**
     * @return {?}
     */
    function () {
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addShowClass = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.removeShowClass = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.checkRightAlignment = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var /** @type {?} */ isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addDropupStyles = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.removeDropupStyles = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
        }
    };
    BsDropdownDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], },
        { type: BsDropdownConfig, },
        { type: BsDropdownState, },
    ]; };
    BsDropdownDirective.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "insideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    // tslint:disable:no-any
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element, dropdown) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.dropdown = dropdown;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target) &&
            !(this._state.insideClick && this.dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDropdownToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: BsDropdownDirective, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [],] },],
        "onDocumentClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    BsDropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return BsDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24uc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCBkcm9wZG93biBjb25maWd1cmF0aW9uICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbmZpZyB7XG4gIC8qKiBkZWZhdWx0IGRyb3Bkb3duIGF1dG8gY2xvc2luZyBiZWhhdmlvciAqL1xuICBhdXRvQ2xvc2UgPSB0cnVlO1xuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cbiAgaW5zaWRlQ2xpY2sgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blN0YXRlIHtcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xuICBhdXRvQ2xvc2U6IGJvb2xlYW47XG4gIGluc2lkZUNsaWNrOiBib29sZWFuO1xuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHRvZ2dsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGRyb3Bkb3duTWVudTogUHJvbWlzZTxCc0NvbXBvbmVudFJlZjxhbnk+PjtcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kcm9wZG93bi1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7J1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmRyb3B1cF09XCJkaXJlY3Rpb24gPT09ICd1cCdcIlxuICAgICAgICAgW2NsYXNzLmRyb3Bkb3duXT1cImRpcmVjdGlvbiA9PT0gJ2Rvd24nXCJcbiAgICAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXG4gICAgICAgICBbY2xhc3Mub3Blbl09XCJpc09wZW5cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGdldCBkaXJlY3Rpb24oKTogJ2Rvd24nIHwgJ3VwJyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcbiAgfVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG4gICAgICBpZiAoZHJvcGRvd24gJiYgIWlzQnMzKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XG4gICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnKSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAnbGVmdCcsICdhdXRvJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdyaWdodCcsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICd0b3AnLCAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgZHJvcGRvd24sXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICd0cmFuc2xhdGVZKC0xMDElKSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb250YWlucyhlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9icy1kcm9wZG93bi5jb25maWcnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgJ1tjbGFzcy5vcGVuXSc6ICdpc09wZW4nLFxuICAgICdbY2xhc3Muc2hvd10nOiAnaXNPcGVuICYmIGlzQnM0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzXG4gICAqL1xuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhdXRvQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkbid0IGNsb3NlIG9uIGluc2lkZSBjbGljayB3aGVuIGF1dG9DbG9zZSBpcyBzZXQgdG8gdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2lkZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBpbnNpZGVDbGljaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2s7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bi5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGlzT3BlbiBjaGFuZ2VcbiAgICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcml2YXRlIF9kcm9wZG93bjogQ29tcG9uZW50TG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZ2V0IF9zaG93SW5saW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb250YWluZXI7XG4gIH1cblxuICAvLyB0b2RvOiBtb3ZlIHRvIGNvbXBvbmVudCBsb2FkZXJcbiAgcHJpdmF0ZSBfaXNJbmxpbmVPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaW5saW5lZE1lbnU6IEVtYmVkZGVkVmlld1JlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT47XG4gIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2lzSW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb25maWc6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUpIHtcbiAgICAvLyBzZXQgaW5pdGlhbCBkcm9wZG93biBzdGF0ZSBmcm9tIGNvbmZpZ1xuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2U7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB0aGlzLl9jb25maWcuaW5zaWRlQ2xpY2s7XG5cbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxuICAgIHRoaXMuX2Ryb3Bkb3duID0gdGhpcy5fY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlfSk7XG5cbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5vbkhpZGRlbjtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcbiAgICB0aGlzLl9kcm9wZG93bi5saXN0ZW4oe1xuICAgICAgLy8gYmVjYXVzZSBvZiBkcm9wZG93biBpbmxpbmUgbW9kZVxuICAgICAgb3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKVxuICAgICk7XG5cbiAgICAvLyBoaWRlIGRyb3Bkb3duIGlmIHNldCBkaXNhYmxlZCB3aGlsZSBvcGVuZWRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigodmFsdWU6IGJvb2xlYW4pID0+IHZhbHVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLmhpZGUoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIGlmICghdGhpcy5faW5saW5lZE1lbnUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oXG4gICAgICAgICAgKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kcm9wZG93bi5hdHRhY2hJbmxpbmUoXG4gICAgICAgICAgICAgIGRyb3Bkb3duTWVudS52aWV3Q29udGFpbmVyLFxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9pbmxpbmVkTWVudSA9IHRoaXMuX2Ryb3Bkb3duLl9pbmxpbmVWaWV3UmVmO1xuICAgICAgICAgICAgdGhpcy5hZGRCczRQb2x5ZmlsbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnNcbiAgICAgICAgICAuY2F0Y2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihkcm9wZG93bk1lbnUgPT4ge1xuICAgICAgLy8gY2hlY2sgZGlyZWN0aW9uIGluIHdoaWNoIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWRcbiAgICAgIGNvbnN0IF9kcm9wdXAgPVxuICAgICAgICB0aGlzLmRyb3B1cCB8fFxuICAgICAgICAodHlwZW9mIHRoaXMuZHJvcHVwICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmRyb3B1cCk7XG4gICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGNvbnN0IF9wbGFjZW1lbnQgPVxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCAoX2Ryb3B1cCA/ICd0b3AgbGVmdCcgOiAnYm90dG9tIGxlZnQnKTtcblxuICAgICAgLy8gc2hvdyBkcm9wZG93blxuICAgICAgdGhpcy5fZHJvcGRvd25cbiAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogX3BsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsXG4gICAgICAgICAgcGxhY2VtZW50OiBfcGxhY2VtZW50XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9KVxuICAgIC8vIHN3YWxsb3cgZXJyb3JcbiAgICAgIC5jYXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLnJlbW92ZVNob3dDbGFzcygpO1xuICAgICAgdGhpcy5yZW1vdmVEcm9wdXBTdHlsZXMoKTtcbiAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuIFdpdGggcGFyYW1ldGVyIDxjb2RlPnRydWU8L2NvZGU+IGFsbG93cyB0b2dnbGluZywgd2l0aCBwYXJhbWV0ZXIgPGNvZGU+ZmFsc2U8L2NvZGU+XG4gICAqIG9ubHkgaGlkZXMgb3BlbmVkIGRyb3Bkb3duLiBQYXJhbWV0ZXIgdXNhZ2Ugd2lsbCBiZSByZW1vdmVkIGluIG5neC1ib290c3RyYXAgdjNcbiAgICovXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29udGFpbnMoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgKHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlICYmIHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlLl9jb250YWlucyhldmVudC50YXJnZXQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIGRlc3Ryb3kgZHJvcGRvd25cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGRvd24uZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRCczRQb2x5ZmlsbHMoKTogdm9pZCB7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLmFkZFNob3dDbGFzcygpO1xuICAgICAgdGhpcy5jaGVja1JpZ2h0QWxpZ25tZW50KCk7XG4gICAgICB0aGlzLmFkZERyb3B1cFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU2hvd0NsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNob3dDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0QWxpZ25tZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIGNvbnN0IGlzUmlnaHRBbGlnbmVkID0gdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICdhdXRvJyA6ICcwJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgIGlzUmlnaHRBbGlnbmVkID8gJzAnIDogJ2F1dG8nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIC8vIGEgbGl0dGxlIGhhY2sgdG8gbm90IGJyZWFrIHN1cHBvcnQgb2YgYm9vdHN0cmFwIDQgYmV0YVxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ2F1dG8nIDogJzEwMCUnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ3RyYW5zbGF0ZVkoLTEwMSUpJyA6ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZURyb3B1cFN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICd0b3AnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3RyYW5zZm9ybScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duTWVudV0sW2Ryb3Bkb3duTWVudV0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLW1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIHtcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICBfc3RhdGUucmVzb2x2ZURyb3Bkb3duTWVudSh7XG4gICAgICB0ZW1wbGF0ZVJlZjogX3RlbXBsYXRlUmVmLFxuICAgICAgdmlld0NvbnRhaW5lcjogX3ZpZXdDb250YWluZXJcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhhc3BvcHVwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcblxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZSkge1xuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAodGhpcy5pc09wZW4gPSB2YWx1ZSlcbiAgICAgIClcbiAgICApO1xuICAgIC8vIHBvcHVsYXRlIGRpc2FibGVkIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlIHx8IG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgW10pXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcbiAgICAgIGV2ZW50LmJ1dHRvbiAhPT0gMiAmJlxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhKHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrICYmIHRoaXMuZHJvcGRvd24uX2NvbnRhaW5zKGV2ZW50KSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXG4gIG9uRXNjKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vYnMtZHJvcGRvd24uY29uZmlnJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JzRHJvcGRvd25Db250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Nb2R1bGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnNEcm9wZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgIEJzRHJvcGRvd25TdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyA/IGNvbmZpZyA6IHsgYXV0b0Nsb3NlOiB0cnVlLCBpbnNpZGVDbGljazogZmFsc2UgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O3lCQU1jLElBQUk7Ozs7MkJBRUYsS0FBSzs7O2dCQUxwQixVQUFVOzsyQkFIWDs7Ozs7OztBQ0FBO0lBbUJFO1FBQUEsaUJBSUM7eUJBbEIwQixNQUFNOzRCQUdsQixJQUFJLFlBQVksRUFBVztnQ0FDdkIsSUFBSSxZQUFZLEVBQVc7MkJBQ2hDLElBQUksWUFBWSxFQUFXO1FBVXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3JDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ0o7O2dCQXBCRixVQUFVOzs7OzBCQUhYOzs7Ozs7O0FDQUE7SUFrQ0Usc0NBQ1UsUUFDQSxJQUNBLFdBQ0E7UUFKVixpQkEyQkM7UUExQlMsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO1FBQ1QsYUFBUSxHQUFSLFFBQVE7c0JBYlQsS0FBSztRQWVaLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFCQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSxJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTtvQkFDdEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLFFBQVEsRUFDUixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7aUJBQ0g7YUFDRjtZQUNELEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjtJQWxDRCxzQkFBSSxtREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUM5Qjs7O09BQUE7Ozs7Ozs7SUFtQ0QsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxFQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxtQ0FBbUM7cUJBQzNDO29CQUNELFFBQVEsRUFBRSw4TUFLVDtpQkFDRjs7OztnQkFmUSxlQUFlO2dCQU50QixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRlQsVUFBVTs7dUNBSlo7Ozs7Ozs7O0lDb0pFLDZCQUFvQixXQUF1QixFQUN2QixXQUNBLG1CQUNBLE1BQ0EsU0FDQTtRQUxBLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTO1FBQ1Qsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixTQUFJLEdBQUosSUFBSTtRQUNKLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07NkJBWkYsS0FBSzs4QkFJWSxFQUFFO3lCQUN2QixLQUFLOztRQVN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7UUFHbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTthQUN2QixZQUFZLENBQ1gsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUyxDQUNmO2FBQ0EsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FFOUM7MEJBaEhHLDBDQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzlCOzs7Ozs7O2tCQU5hLEtBQWM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7OzswQkFXNUIsNENBQVc7Ozs7UUFJZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDaEM7Ozs7OztrQkFOZSxLQUFjO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7Ozs7MEJBVzlCLDJDQUFVOzs7O1FBUWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7OztrQkFWYyxLQUFjO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiOzs7OzswQkFXQyx1Q0FBTTs7Ozs7O1lBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0I7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDOzs7Ozs7UUFHaEMsVUFBVyxLQUFjO1lBQ3ZCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7Ozs7SUFpQkQsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQjs7O09BQUE7MEJBSVcsNENBQVc7Ozs7O1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7Ozs7OztJQW9DekIsc0NBQVE7OztJQUFSO1FBQUEsaUJBOEJDOzs7O1FBMUJDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7UUFHdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7O1lBRXBCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQTtTQUN4QixDQUFDLENBQUM7O1FBR0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUMxRSxDQUFDOztRQUdGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQjthQUN6QixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUMsS0FBYyxJQUFLLE9BQUEsS0FBSyxHQUFBLENBQUMsQ0FDbEM7YUFDQSxTQUFTLENBQUMsVUFBQyxLQUFjLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUM5QyxDQUFDO0tBQ0g7Ozs7Ozs7Ozs7SUFNRCxrQ0FBSTs7Ozs7SUFBSjtRQUFBLGlCQWtEQztRQWpEQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDM0IsVUFBQyxZQUFxRDtvQkFDcEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQ3pCLFlBQVksQ0FBQyxhQUFhLEVBQzFCLFlBQVksQ0FBQyxXQUFXLENBQ3pCLENBQUM7b0JBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUN4QixDQUNGO3FCQUVFLEtBQUssRUFBRSxDQUFDO2FBQ1o7WUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLFlBQVk7O1lBRXhDLHFCQUFNLE9BQU8sR0FDWCxLQUFJLENBQUMsTUFBTTtpQkFDVixPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNoRCxxQkFBTSxVQUFVLEdBQ2QsS0FBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDOzs7WUFHM0QsS0FBSSxDQUFDLFNBQVM7aUJBQ1gsTUFBTSxDQUFDLDRCQUE0QixDQUFDO2lCQUNwQyxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDO2lCQUNsQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxFQUFFLFlBQVksQ0FBQyxXQUFXO2dCQUNqQyxTQUFTLEVBQUUsVUFBVTthQUN0QixDQUFDLENBQUM7WUFFTCxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckMsQ0FBQzthQUVDLEtBQUssRUFBRSxDQUFDO0tBQ1o7Ozs7Ozs7Ozs7SUFNRCxrQ0FBSTs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7Ozs7Ozs7Ozs7SUFPRCxvQ0FBTTs7Ozs7OztJQUFOLFVBQU8sS0FBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7Ozs7OztJQUdELHVDQUFTOzs7OztJQUFULFVBQVUsS0FBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNoRjs7OztJQUVELHlDQUFXOzs7SUFBWDs7O1lBRUUsS0FBa0IsSUFBQSxLQUFBQSxTQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUE7Z0JBQWhDLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7S0FDMUI7Ozs7SUFFTyw2Q0FBZTs7OztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCOzs7OztJQUdLLDBDQUFZOzs7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTs7Ozs7SUFHSyw2Q0FBZTs7OztRQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEU7Ozs7O0lBR0ssaURBQW1COzs7O1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDdEUscUJBQXFCLENBQ3RCLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLE1BQU0sRUFDTixjQUFjLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FDOUIsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDOUIsT0FBTyxFQUNQLGNBQWMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUM5QixDQUFDO1NBQ0g7Ozs7O0lBR0ssNkNBQWU7Ozs7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUV2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLEtBQUssRUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLFdBQVcsRUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixHQUFHLGVBQWUsQ0FDcEQsQ0FBQztTQUNIOzs7OztJQUdLLGdEQUFrQjs7OztRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDekU7OztnQkF4VkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzVCLElBQUksRUFBRTt3QkFDSixnQkFBZ0IsRUFBRSxRQUFRO3dCQUMxQixjQUFjLEVBQUUsUUFBUTt3QkFDeEIsY0FBYyxFQUFFLGlCQUFpQjtxQkFDbEM7aUJBQ0Y7Ozs7Z0JBN0JDLFVBQVU7Z0JBT1YsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBSVEsc0JBQXNCO2dCQUV2QyxnQkFBZ0I7Z0JBRWhCLGVBQWU7Ozs4QkFrQnJCLEtBQUs7NkJBS0wsS0FBSzs4QkFLTCxLQUFLOzJCQUtMLEtBQUs7OEJBTUwsS0FBSztnQ0FZTCxLQUFLOytCQVlMLEtBQUs7MkJBZ0JMLEtBQUs7aUNBb0JMLE1BQU07NEJBS04sTUFBTTs2QkFLTixNQUFNOzs4QkFoSVQ7Ozs7Ozs7QUNBQTs7SUFTRSxpQ0FDRSxNQUF1QixFQUN2QixjQUFnQyxFQUNoQyxZQUE4QjtRQUU5QixNQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDekIsV0FBVyxFQUFFLFlBQVk7WUFDekIsYUFBYSxFQUFFLGNBQWM7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFMUSxlQUFlO2dCQURTLGdCQUFnQjtnQkFBN0IsV0FBVzs7a0NBQS9COzs7Ozs7OztJQzJCRSxtQ0FBb0IsTUFBdUIsRUFBVSxRQUFvQixFQUFVLFFBQTZCO1FBQWhILGlCQWFDO1FBYm1CLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQXFCOzBCQVA1RCxJQUFJOzhCQUtmLEVBQUU7O1FBSXpDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ2hDLFVBQUMsS0FBYyxJQUFLLFFBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUMsQ0FDMUMsQ0FDRixDQUFDOztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDcEMsVUFBQyxLQUFjLElBQUssUUFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUMsQ0FDdEQsQ0FDRixDQUFDO0tBQ0g7Ozs7SUFHRCwyQ0FBTzs7OztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQUlyQyxtREFBZTs7OztjQUFDLEtBQWlCO1FBQy9CLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JCLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ25ELEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQzdELEVBQUU7WUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7Ozs7O0lBSUgseUNBQUs7Ozs7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7Ozs7SUFHSCwrQ0FBVzs7O0lBQVg7O1lBQ0UsS0FBa0IsSUFBQSxLQUFBQSxTQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUE7Z0JBQWhDLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7OztLQUNGOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLElBQUksRUFBRTt3QkFDSixzQkFBc0IsRUFBRSxNQUFNO3FCQUMvQjtpQkFDRjs7OztnQkFUUSxlQUFlO2dCQVB0QixVQUFVO2dCQVFILG1CQUFtQjs7OytCQVV6QixXQUFXLFNBQUMsZUFBZTsyQkFHM0IsV0FBVyxTQUFDLG9CQUFvQjs0QkFtQmhDLFlBQVksU0FBQyxPQUFPLEVBQUUsRUFBRTtvQ0FReEIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVl6QyxZQUFZLFNBQUMsV0FBVzs7b0NBOUQzQjs7Ozs7OztBQ0FBOzs7Ozs7OztJQTRCUyx3QkFBTzs7OztJQUFkLFVBQWUsTUFBWTtRQUN6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBQ2Y7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7aUJBQ3BFO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7O2dCQTdCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6QixtQkFBbUI7cUJBQ3BCO29CQUNELGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUNoRDs7MkJBekJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/store/listing/components/products-listing-page/products-listing-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/store/listing/components/products-listing-page/products-listing-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row no-gutters d-none d-lg-flex store-categories\">\n    <div class=\"col-3\">\n      <div class=\"dropdown store-categories-dropdown\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-block dropdown-toggle categories-dropdown-btn\" aria-controls=\"dropdown-basic\">\n          <span>Categories</span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu categories-dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'men']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">INDIAN</a>\n          </li>\n\t\t\t<li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'women']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">CHINESE</a>\n          </li>\n\t\t\t<li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'kids']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">MEDITERRANEAN</a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'outdoors']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">ITALIAN</a>\n          </li>\n<!--\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'running']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">RUNNING</a>\n          </li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/products/category', 'golf']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">GOLF</a>\n          </li>\n-->\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-9\">\n      <ul class=\"nav nav-fill store-highlighted-categories\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/products/tag', 'new-collection']\">Starters</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/products/tag', 'summer']\">Main</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/products/tag', 'sale']\">Sides</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/products']\">Soups</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <app-breadcrumbs></app-breadcrumbs>\n  <div class=\"row d-flex d-lg-none products-listing-heading\">\n    <div class=\"col-12 listing-title-wrapper\">\n      <h3 class=\"listing-title\" [attr.data-listing-length]=\"products.length\">{{ (category_slug) ? category_slug + ' Category products' : ((tag_slug) ? tag_slug + ' Tag products' : 'All products') }}</h3>\n    </div>\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"d-none d-lg-flex col-lg-3 card products-filters-outer\">\n      <form [formGroup]=\"productsFiltersForm\" class=\"products-taxonomy-filters\">\n        <!-- Color filter -->\n<!--\n        <div class=\"form-group taxonomy-color-filter\">\n          <h3 class=\"taxonomy-filter-title\">COLOR</h3>\n          <div class=\"row color-options-wrapper\" formGroupName=\"color_filter\">\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_fc9961\" appColorRadioBtn=\"#fc9961\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_007bff\" appColorRadioBtn=\"#007bff\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_6610f2\" appColorRadioBtn=\"#6610f2\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_6f42c1\" appColorRadioBtn=\"#6f42c1\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_e83e8c\" appColorRadioBtn=\"#e83e8c\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_dc3545\" appColorRadioBtn=\"#dc3545\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_ffc107\" appColorRadioBtn=\"#ffc107\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_28a745\" appColorRadioBtn=\"#28a745\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_20c997\" appColorRadioBtn=\"#20c997\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_17a2b8\" appColorRadioBtn=\"#17a2b8\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_343a40\" appColorRadioBtn=\"#343a40\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_61fcc5\" appColorRadioBtn=\"#61fcc5\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_fc61ad\" appColorRadioBtn=\"#fc61ad\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_ffffff\" appColorRadioBtn=\"#ffffff\"></label>\n            </div>\n            <div class=\"color-option\">\n              <label class=\"btn color-btn\" btnCheckbox formControlName=\"_6c757d\" appColorRadioBtn=\"#6c757d\"></label>\n            </div>\n          </div>\n        </div>\n-->\n        <!-- Size filter -->\n<!--\n        <div class=\"form-group taxonomy-size-filter\">\n          <h3 class=\"taxonomy-filter-title\">SIZE</h3>\n          <div class=\"row size-options-wrapper\" formGroupName=\"size_filter\">\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_7\">7</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_7_5\">7.5</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_8\">8</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_8_5\">8.5</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_9\">9</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_9_5\">9.5</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_10\">10</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_10_5\">10.5</label>\n            </div>\n            <div class=\"size-option\">\n              <label class=\"btn size-btn\" btnCheckbox formControlName=\"_11\">11</label>\n            </div>\n          </div>\n        </div>\n-->\n      </form>\n    </div>\n    <div class=\"col-12 col-lg-9 products-listing-outer\">\n      <div class=\"row d-none d-lg-flex products-listing-filters\">\n        <div class=\"col-12 col-lg-6 col-xl-7\">\n          <app-search-bar class=\"products-search-bar\"></app-search-bar>\n        </div>\n        <div class=\"col-12 col-lg-5 offset-lg-1 col-xl-4 offset-xl-1\">\n          <div class=\"form-group row no-gutters products-sort-filter\">\n            <label class=\"col col-form-label sort-label\" [attr.for]=\"'sortBy'\">Sort by: </label>\n            <div class=\"col sort-options\">\n              <select class=\"form-control\" [id]=\"'sortBy'\">\n                <option>Newest</option>\n                <option>Recommended</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <app-products-listing [items]=\"products\"></app-products-listing>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/store/listing/components/products-listing-page/products-listing-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/store/listing/components/products-listing-page/products-listing-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductsListingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListingPageComponent", function() { return ProductsListingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ProductsListingPageComponent = /** @class */ (function () {
    function ProductsListingPageComponent(route, formBuilder) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.products = [];
    }
    ProductsListingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var listing_path = _this.route.snapshot.url[0]; // this can either be 'tag' or 'category'
            if (listing_path && listing_path.path === 'tag') {
                _this.tag_slug = _this.route.snapshot.params['slug'];
            }
            else if (listing_path && listing_path.path === 'category') {
                _this.category_slug = _this.route.snapshot.params['slug'];
            }
            _this.products = _this.route.snapshot.data['data'].products;
        });
        var color_options_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _fc9961: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _007bff: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _6610f2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _6f42c1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _e83e8c: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _dc3545: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _ffc107: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _28a745: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _20c997: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _17a2b8: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _343a40: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _61fcc5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _fc61ad: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _ffffff: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _6c757d: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        var size_options_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _7: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _7_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _8: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            _8_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _9: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _9_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _10: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _10_5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            _11: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.productsFiltersForm = this.formBuilder.group({
            color_filter: color_options_group,
            size_filter: size_options_group
        });
    };
    ProductsListingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-listing-page',
            template: __webpack_require__(/*! ./products-listing-page.component.html */ "./src/app/store/listing/components/products-listing-page/products-listing-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/products-listing-page.styles.scss */ "./src/app/store/listing/components/products-listing-page/styles/products-listing-page.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProductsListingPageComponent);
    return ProductsListingPageComponent;
}());



/***/ }),

/***/ "./src/app/store/listing/components/products-listing-page/styles/products-listing-page.styles.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/store/listing/components/products-listing-page/styles/products-listing-page.styles.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-products-listing-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-products-listing-page .store-categories {\n    padding: 2rem 0 0; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn {\n      background-color: #50e3c2;\n      color: #FFFFFF;\n      border: 2px solid transparent;\n      border-radius: 0px;\n      cursor: pointer;\n      font-size: 1.2rem;\n      font-weight: 600;\n      letter-spacing: 0.12rem;\n      transition: color .5s, background-color .5s;\n      border: none;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn:hover:not([disabled]) {\n        background-color: rgba(58, 223, 186, 0.7);\n        color: #FFFFFF;\n        text-decoration: none; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn:active:not([disabled]), app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn.active:not([disabled]), app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn:focus:not([disabled]), app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn.focus:not([disabled]) {\n        background-color: #3adfba;\n        color: #FFFFFF;\n        text-decoration: none; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn[disabled] {\n        cursor: not-allowed;\n        opacity: .5; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-btn:focus {\n        box-shadow: none; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-menu {\n      width: 100%;\n      background: #66e7ca;\n      margin: 0px;\n      border-radius: 0px; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-menu .dropdown-item {\n        opacity: 0.8;\n        color: #FFFFFF;\n        font-size: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.07rem; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-menu .dropdown-item:hover, app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-menu .dropdown-item.active {\n          opacity: 1;\n          background: transparent; }\n  app-products-listing-page .store-categories .store-categories-dropdown .categories-dropdown-menu .dropdown-divider {\n        border-color: #24dcb3; }\n  app-products-listing-page .store-categories .store-highlighted-categories {\n      height: 100%;\n      align-items: center;\n      background: #3f3f3f; }\n  app-products-listing-page .store-categories .store-highlighted-categories .nav-item .nav-link {\n        opacity: 0.9;\n        color: #e5e5e5;\n        font-size: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.07rem; }\n  app-products-listing-page .store-categories .store-highlighted-categories .nav-item .nav-link:hover {\n          opacity: 1; }\n  app-products-listing-page .store-categories .store-highlighted-categories .nav-item.active .nav-link {\n        opacity: 1;\n        color: #FFFFFF; }\n  app-products-listing-page .products-listing-heading {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper::before, app-products-listing-page .products-listing-heading .listing-title-wrapper::after {\n        content: '';\n        background: #1e1e1e;\n        height: 2px;\n        flex: 1 1 auto; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper::before {\n        content: unset; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper .listing-title {\n        color: #1e1e1e;\n        font-size: 1.2rem;\n        font-weight: 900;\n        letter-spacing: 0.4rem;\n        text-align: center;\n        margin: 0px;\n        padding: 0px 30px; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper .listing-title:first-child {\n          padding-left: 0px; }\n  app-products-listing-page .products-listing-heading .listing-title-wrapper .listing-title[data-listing-length]::after {\n          content: \"(\" attr(data-listing-length) \")\";\n          font-size: 0.8rem;\n          font-weight: 400;\n          opacity: 0.6;\n          padding-left: 0.5rem;\n          vertical-align: middle; }\n  @media (max-width: 767.98px) {\n        app-products-listing-page .products-listing-heading .listing-title-wrapper::before, app-products-listing-page .products-listing-heading .listing-title-wrapper::after {\n          background: #FFFFFF; }\n        app-products-listing-page .products-listing-heading .listing-title-wrapper .listing-title {\n          color: #FFFFFF;\n          font-size: 1.6rem; } }\n  @media (max-width: 767.98px) {\n      app-products-listing-page .products-listing-heading {\n        margin-bottom: 40px;\n        background: #1e1e1e; } }\n  app-products-listing-page .products-listing-outer {\n    padding-left: 30px !important; }\n  @media (max-width: 991.98px) {\n      app-products-listing-page .products-listing-outer {\n        padding-left: 0px !important; } }\n  app-products-listing-page .products-listing-outer .products-listing-filters {\n      margin-bottom: 1rem; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-search-bar {\n        color: #9e9e9e;\n        border-color: #9e9e9e;\n        background-color: #FFFFFF; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-search-bar .search-bar-input:focus {\n          color: #3f3f3f; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-sort-filter {\n        margin-bottom: 0px;\n        height: 100%; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-sort-filter .sort-label {\n          padding-right: 1rem;\n          max-width: -webkit-fit-content;\n          max-width: -moz-fit-content;\n          max-width: fit-content;\n          color: #9e9e9e; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-sort-filter .sort-options {\n          flex-grow: 2; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-sort-filter .sort-options select.form-control {\n            height: 100%;\n            border-width: 2px;\n            border-color: #9e9e9e;\n            color: #9e9e9e; }\n  app-products-listing-page .products-listing-outer .products-listing-filters .products-sort-filter .sort-options select.form-control:focus {\n              color: #3f3f3f; }\n  app-products-listing-page .products-filters-outer {\n    background: rgba(229, 229, 229, 0.4); }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters {\n      margin: 0 1rem; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-filter-title {\n        color: #FFFFFF;\n        background: #9013fe;\n        font-size: 0.9rem;\n        font-weight: 500;\n        margin-bottom: 1rem;\n        margin-left: calc(-1rem - 1px);\n        margin-right: calc(-1rem - 1px);\n        padding: 0.5rem 0;\n        padding-left: calc(1rem + 1px);\n        padding-right: calc(1rem + 1px); }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters > :first-child .taxonomy-filter-title {\n        border-radius: 0.25rem 0.25rem 0 0; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper {\n        margin: 0px;\n        margin-left: -0.3rem;\n        margin-right: -0.3rem; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option {\n          padding: 0px;\n          flex: 0 0 25%;\n          max-width: 25%; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn {\n            border: 2px solid transparent;\n            box-shadow: 1px 1px 3px 1px rgba(117, 117, 117, 0.3);\n            border-radius: 50%;\n            padding: 0px;\n            margin: 0px 0.3rem 0.6rem;\n            height: 0px;\n            width: calc(100% - (0.6rem));\n            padding-bottom: calc(100% - (0.6rem + 4px));\n            opacity: 0.4; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn:hover {\n              opacity: 0.8; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn:focus {\n              opacity: 1; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn.active, app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn:active {\n              opacity: 1;\n              border-color: #9e9e9e !important;\n              box-shadow: none; }\n  @media (min-width: 992px) {\n          app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option {\n            flex: 0 0 16.66666667%;\n            max-width: 16.66666667%; } }\n  @media (max-width: 767.98px) {\n          app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper {\n            margin-left: -0.5rem;\n            margin-right: -0.5rem; }\n            app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-color-filter .color-options-wrapper .color-option .color-btn {\n              margin: 0px 0.5rem 1rem;\n              width: calc(100% - (1rem));\n              padding-bottom: calc(100% - (1rem + 4px)); } }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-options-wrapper {\n        margin: 0px;\n        margin-left: -0.3rem;\n        margin-right: -0.3rem; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option {\n        padding: 0px;\n        flex: 0 0 50%;\n        max-width: 50%;\n        font-size: 1rem; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn {\n          background-color: #FFFFFF;\n          color: #9e9e9e;\n          border-style: solid;\n          border-width: 2px;\n          border-color: #9e9e9e;\n          border-radius: 0px;\n          cursor: pointer;\n          font-size: 1.2rem;\n          font-weight: 600;\n          letter-spacing: 0.12rem;\n          transition: border-color .5s, color .5s, background-color .5s;\n          border-width: 2px;\n          font-size: inherit;\n          font-weight: 500;\n          margin: 0px 0.3rem 0.6rem;\n          width: calc(100% - (0.6rem)); }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn:hover:not([disabled]) {\n            background-color: rgba(158, 158, 158, 0.7);\n            border-color: rgba(158, 158, 158, 0.7);\n            color: #FFFFFF;\n            text-decoration: none; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn:active:not([disabled]), app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn.active:not([disabled]), app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn:focus:not([disabled]), app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn.focus:not([disabled]) {\n            background-color: #9e9e9e;\n            border-color: #9e9e9e;\n            color: #FFFFFF;\n            text-decoration: none; }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option .size-btn[disabled] {\n            cursor: not-allowed;\n            opacity: .5; }\n  @media (min-width: 992px) {\n        app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option {\n          flex: 0 0 33.33333333%;\n          max-width: 33.33333333%; } }\n  app-products-listing-page .products-filters-outer .products-taxonomy-filters .taxonomy-size-filter .size-option {\n        font-size: 0.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvbGlzdGluZy9jb21wb25lbnRzL3Byb2R1Y3RzLWxpc3RpbmctcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3RvcmVcXGxpc3RpbmdcXGNvbXBvbmVudHNcXHByb2R1Y3RzLWxpc3RpbmctcGFnZVxcc3R5bGVzXFxwcm9kdWN0cy1saXN0aW5nLXBhZ2Uuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3N0b3JlL2xpc3RpbmcvY29tcG9uZW50cy9wcm9kdWN0cy1saXN0aW5nLXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9zdG9yZS9saXN0aW5nL2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdGluZy1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc3RvcmUvbGlzdGluZy9jb21wb25lbnRzL3Byb2R1Y3RzLWxpc3RpbmctcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvc3RvcmUvbGlzdGluZy9jb21wb25lbnRzL3Byb2R1Y3RzLWxpc3RpbmctcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxjb21tb25cXGNvbG9yLWNob29zZXItaW5wdXQuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3N0b3JlL2xpc3RpbmcvY29tcG9uZW50cy9wcm9kdWN0cy1saXN0aW5nLXBhZ2Uvc3R5bGVzL0U6XFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xc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QUFnQjtVQUNoQiwwQkFBeUI7VUFDekIsNkJBQTRCLEVBQzdCO0VMdkJMO1lDa0NNLDJDQ2xDUTtZRG1DUix1Q0NuQ1E7WURvQ1IsZUNyQ1M7WURzQ1Qsc0JBQXFCLEVBQ3RCO0VEdENMO1lDOENNLDBCQzlDUTtZRCtDUixzQkMvQ1E7WURnRFIsZUNqRFM7WURrRFQsc0JBQXFCLEVBQ3RCO0VEbERMO1lDc0RJLG9CQUFtQjtZQUNuQixZQUFXLEVBQ1o7RUVBQztRSHhESjtVSzZCTSx1QkE1QnVEO1VBNkJ2RCx3QkE3QnVELEVBOEJ4RCxFQUFBO0VML0JMO1FBd09VLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2xpc3RpbmcvY29tcG9uZW50cy9wcm9kdWN0cy1saXN0aW5nLXBhZ2Uvc3R5bGVzL3Byb2R1Y3RzLWxpc3RpbmctcGFnZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fc2hhcmVkJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24vY29sb3ItY2hvb3Nlci1pbnB1dC5zdHlsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi9zaXplLWNob29zZXItaW5wdXQuc3R5bGVzJztcblxuYXBwLXByb2R1Y3RzLWxpc3RpbmctcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3sgJG5hdmJhci1oZWlnaHQgfSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuXG4gIC5zdG9yZS1jYXRlZ29yaWVzIHtcbiAgICBwYWRkaW5nOiAycmVtIDAgMDtcblxuICAgIC5zdG9yZS1jYXRlZ29yaWVzLWRyb3Bkb3duIHtcbiAgICAgIC5jYXRlZ29yaWVzLWRyb3Bkb3duLWJ0biB7XG4gICAgICAgIEBpbmNsdWRlIGZpbGwtYnV0dG9uKCR3aGl0ZSwgJGFxdWFtYXJpbmEpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNhdGVnb3JpZXMtZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRhcXVhbWFyaW5hLCA1JSk7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3cmVtO1xuXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRyb3Bkb3duLWRpdmlkZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRhcXVhbWFyaW5hLCAxMCUpO1xuICAgICAgICB9XG4gICAgICB9Ly8gLmNhdGVnb3JpZXMtZHJvcGRvd24tbWVudVxuICAgIH0vLyAuc3RvcmUtY2F0ZWdvcmllcy1kcm9wZG93blxuXG4gICAgLnN0b3JlLWhpZ2hsaWdodGVkLWNhdGVnb3JpZXMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXJrZ3JleTtcblxuICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgY29sb3I6ICRncmV5LTM7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdyZW07XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9Ly8gLnN0b3JlLWhpZ2hsaWdodGVkLWNhdGVnb3JpZXNcblxuICB9Ly8gLnN0b3JlLWNhdGVnb3JpZXNcblxuICAvLyBUaGlzIGhlYWRpbmcgaXMgb25seSB2aXNpYmxlIGJlbG93IGxnIHZpZXdwb3J0c1xuICAucHJvZHVjdHMtbGlzdGluZy1oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAubGlzdGluZy10aXRsZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC8vIExpbmUgZGVjb3JhdGlvblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIGxlZnQgZGVjb3JhdGlvblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdW5zZXQ7XG4gICAgICB9XG5cbiAgICAgIC5saXN0aW5nLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuXG4gICAgICAgIC8vIE5vIGxlZnQgZGVjb3JhdGlvblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAmW2RhdGEtbGlzdGluZy1sZW5ndGhdIHtcbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnKCcgYXR0cihkYXRhLWxpc3RpbmctbGVuZ3RoKSAnKSc7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAubGlzdGluZy10aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0vLyAubGlzdGluZy10aXRsZS13cmFwcGVyXG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgfVxuICB9Ly8gLnByb2R1Y3RzLWxpc3RpbmctaGVhZGluZ1xuXG4gIC5wcm9kdWN0cy1saXN0aW5nLW91dGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgICAgLy8gQmVsb3cgbGcgdmlld3BvcnQgdGhlIHRheG9ub215IHNpZGViYXIgaXMgaGlkZGVuXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wcm9kdWN0cy1saXN0aW5nLWZpbHRlcnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgLnByb2R1Y3RzLXNlYXJjaC1iYXIge1xuICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGdyZXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAuc2VhcmNoLWJhci1pbnB1dCB7XG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJGRhcmtncmV5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfS8vIC5wcm9kdWN0cy1zZWFyY2gtYmFyXG5cbiAgICAgIC5wcm9kdWN0cy1zb3J0LWZpbHRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC5zb3J0LWxhYmVsIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvcnQtb3B0aW9ucyB7XG4gICAgICAgICAgZmxleC1ncm93OiAyO1xuXG4gICAgICAgICAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyZXk7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBjb2xvcjogJGRhcmtncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfS8vIHByb2R1Y3RzLXNvcnQtZmlsdGVyXG4gICAgfS8vIC5wcm9kdWN0cy1saXN0aW5nLWZpbHRlcnNcbiAgfS8vIC5wcm9kdWN0cy1saXN0aW5nLW91dGVyXG5cbiAgLnByb2R1Y3RzLWZpbHRlcnMtb3V0ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyZXktMywgMC40KTtcblxuICAgIC5wcm9kdWN0cy10YXhvbm9teS1maWx0ZXJzIHtcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xuXG4gICAgICAudGF4b25vbXktZmlsdGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogJHB1cnBsZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC8vIEFjY291bnQgZm9yIHBhcmVudCdzICguY2FyZCkgYm9yZGVyLWxlZnQtd2lkdGggKDFweCkgYW5kIGJvcmRlci1yaWdodC13aWR0aCAoMXB4KVxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygtMXJlbSAtIDFweCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYygtMXJlbSAtIDFweCk7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDFweCk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMXJlbSArIDFweCk7XG4gICAgICB9XG5cbiAgICAgICYgPiA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAudGF4b25vbXktZmlsdGVyLXRpdGxlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50YXhvbm9teS1jb2xvci1maWx0ZXIge1xuICAgICAgICBAaW5jbHVkZSBjb2xvci1jaG9vc2VyLWlucHV0KDQpO1xuICAgICAgfVxuXG4gICAgICAudGF4b25vbXktc2l6ZS1maWx0ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaXplLWNob29zZXItaW5wdXQoMik7XG5cbiAgICAgICAgLnNpemUtb3B0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGxpbmstYnV0dG9uKCRjb2xvciwgJGhvdmVyLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gb3V0bGluZS1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlciwgJGhvdmVyLWNvbG9yOiAkYmFja2dyb3VuZCwgJGhvdmVyLWJhY2tncm91bmQ6ICRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoJGJvcmRlciwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gZmlsbC1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGhvdmVyLWNvbG9yOiAkY29sb3IsICRob3Zlci1iYWNrZ3JvdW5kOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkaG92ZXItYmFja2dyb3VuZCwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMxZTFlMWU7XG4kZGFya2dyZXk6ICMzZjNmM2Y7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzllOWU5ZTtcbiRncmV5LTI6ICNkN2Q3ZDc7XG4kZ3JleS0zOiAjZTVlNWU1O1xuXG4kYXF1YW1hcmluYTogIzUwZTNjMjtcbiRwdXJwbGU6ICM5MDEzZmU7XG4kY2hlcnJ5OiAjZjgyYzUxO1xuJHJlZDogI2Q2MTgzYTtcbiRnb2xkOiAjZmNiMzAwO1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG5cbi8vIFNpemVzXG4kbmF2YmFyLWhlaWdodDogJG5hdi1saW5rLWhlaWdodCArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHByZWxvYWQtaW1hZ2UtYmc6IHJnYmEoZGFya2VuKCR3aGl0ZSwgMTApLCAuMjUpO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHNwaW5uZXItc2l6ZTogMjhweDtcbiRzcGlubmVyLWNvbG9yOiAkZ3JleTtcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDJweCwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9fc2hhcmVkJztcblxuQG1peGluIGNvbG9yLWNob29zZXItaW5wdXQoJGNvbG9yLW9wdGlvbnMtcGVyLXJvdzogOCkge1xuICAvLyA4IHBlciByb3cgPT4gKDEwMCUgLyA4KSA9IDEyLjUlXG4gICRjb2xvci1vcHRpb24td2lkdGg6ICgxMDAlIC8gJGNvbG9yLW9wdGlvbnMtcGVyLXJvdyk7XG4gICRjb2xvci1vcHRpb24td2lkdGgtbGc6ICgxMDAlIC8gKCRjb2xvci1vcHRpb25zLXBlci1yb3cgKyAyKSk7XG5cbiAgLmNvbG9yLW9wdGlvbnMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4zcmVtO1xuXG4gICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBmbGV4OiAwIDAgJGNvbG9yLW9wdGlvbi13aWR0aDtcbiAgICAgIG1heC13aWR0aDogJGNvbG9yLW9wdGlvbi13aWR0aDtcblxuICAgICAgLmNvbG9yLWJ0biB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSgxMTcsMTE3LDExNywwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMC4zcmVtIDAuNnJlbTtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIC8vIFByZXNlcnZlIDE6MSBhc3BlY3QgcmF0aW9cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICgwLjZyZW0pKTsvLyBTdWJzdHJhY3QgMC4zcmVtIG9mIG1hcmdpbi1sZWZ0IGFuZCBtYXJnaW4tcmlnaHQgcmVzcGVjdGl2ZWx5XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMCUgLSAoMC42cmVtICsgNHB4KSk7Ly8gU3Vic3RyYWN0IDAuNnJlbSBvZiBtYXJnaW4tYm90dHRvbSBhbmQgMnB4IG9mIGJvcmRlci10b3Atd2lkdGggYW5kIGJvcmRlci1ib3R0b20td2lkdGggcmVzcGVjdGl2ZWx5XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyZXkgIWltcG9ydGFudDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfS8vIC5jb2xvci1vcHRpb25cblxuICAgIC8vIFJlc3BvbnNpdmUgc3R5bGVzXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgIGZsZXg6IDAgMCAkY29sb3Itb3B0aW9uLXdpZHRoLWxnO1xuICAgICAgICBtYXgtd2lkdGg6ICRjb2xvci1vcHRpb24td2lkdGgtbGc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcblxuICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgIC5jb2xvci1idG4ge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDAuNXJlbSAxcmVtO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoMXJlbSkpOy8vIFN1YnN0cmFjdCAwLjVyZW0gb2YgbWFyZ2luLWxlZnQgYW5kIG1hcmdpbi1yaWdodCByZXNwZWN0aXZlbHlcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDAlIC0gKDFyZW0gKyA0cHgpKTsvLyBTdWJzdHJhY3QgMXJlbSBvZiBtYXJnaW4tYm90dHRvbSBhbmQgMnB4IG9mIGJvcmRlci10b3Atd2lkdGggYW5kIGJvcmRlci1ib3R0b20td2lkdGggcmVzcGVjdGl2ZWx5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0vLyAuY29sb3Itb3B0aW9ucy13cmFwcGVyXG59XG4iLCJAaW1wb3J0ICcuLi9fc2hhcmVkJztcblxuQG1peGluIHNpemUtY2hvb3Nlci1pbnB1dCgkc2l6ZS1vcHRpb25zLXBlci1yb3c6IDQpIHtcbiAgLy8gNCBwZXIgcm93ID0+ICgxMDAlIC8gNCkgPSAyNSVcbiAgJHNpemUtb3B0aW9uLXdpZHRoOiAoMTAwJSAvICRzaXplLW9wdGlvbnMtcGVyLXJvdyk7XG4gICRzaXplLW9wdGlvbi13aWR0aC1sZzogKDEwMCUgLyAoJHNpemUtb3B0aW9ucy1wZXItcm93ICsgMSkpO1xuXG4gIC5zaXplLW9wdGlvbnMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4zcmVtO1xuICB9XG5cbiAgLnNpemUtb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZmxleDogMCAwICRzaXplLW9wdGlvbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRzaXplLW9wdGlvbi13aWR0aDtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuc2l6ZS1idG4ge1xuICAgICAgQGluY2x1ZGUgb3V0bGluZS1idXR0b24oJGdyZXksICR3aGl0ZSwgJGdyZXkpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAvLyBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwcHggMC4zcmVtIDAuNnJlbTtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoMC42cmVtKSk7Ly8gU3Vic3RyYWN0IDAuM3JlbSBvZiBtYXJnaW4tbGVmdCBhbmQgbWFyZ2luLXJpZ2h0IHJlc3BlY3RpdmVseVxuICAgIH1cbiAgfS8vIC5zaXplLW9wdGlvblxuXG4gIC8vIFJlc3BvbnNpdmUgc3R5bGVzXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICAuc2l6ZS1vcHRpb24ge1xuICAgICAgZmxleDogMCAwICRzaXplLW9wdGlvbi13aWR0aC1sZztcbiAgICAgIG1heC13aWR0aDogJHNpemUtb3B0aW9uLXdpZHRoLWxnO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/store/listing/resolvers/products-listing-page.resolver.ts":
/*!***************************************************************************!*\
  !*** ./src/app/store/listing/resolvers/products-listing-page.resolver.ts ***!
  \***************************************************************************/
/*! exports provided: ProductsListingPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListingPageResolver", function() { return ProductsListingPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/store/services/products.service.ts");




var ProductsListingPageResolver = /** @class */ (function () {
    function ProductsListingPageResolver(productsService) {
        this.productsService = productsService;
    }
    ProductsListingPageResolver.prototype.resolve = function (route) {
        var _this = this;
        var category_slug;
        var tag_slug;
        if (route.url[0] && (route.url[0].path === 'tag')) {
            tag_slug = route.params['slug'];
        }
        else if (route.url[0] && (route.url[0].path === 'category')) {
            category_slug = route.params['slug'];
        }
        return new Promise(function (resolve, reject) {
            if (category_slug) {
                // If the user is requesting products under a specific category
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.productsService.getProductsByCategory(category_slug)).subscribe(function (data) {
                    resolve({
                        products: data[0],
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products/category/' + category_slug, label: category_slug }
                        ],
                        seo: {
                            title: category_slug + ' Category Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
            else if (tag_slug) {
                // If the user is requesting products under a specific tag
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.productsService.getProductsByTag(tag_slug)).subscribe(function (data) {
                    resolve({
                        products: data[0],
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products/tag/' + tag_slug, label: tag_slug }
                        ],
                        seo: {
                            title: tag_slug + ' Tag Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
            else {
                // Default option, when the user requests all products
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.productsService.getProducts()).subscribe(function (data) {
                    resolve({
                        products: data[0].items,
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products', label: 'ALL products' }
                        ],
                        seo: {
                            title: 'Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
        });
    };
    ProductsListingPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["StoreProductsService"]])
    ], ProductsListingPageResolver);
    return ProductsListingPageResolver;
}());



/***/ }),

/***/ "./src/app/store/listing/store-listing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/listing/store-listing.module.ts ***!
  \*******************************************************/
/*! exports provided: storeListingRoutes, StoreListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeListingRoutes", function() { return storeListingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreListingModule", function() { return StoreListingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./src/app/store/index.ts");
/* harmony import */ var _components_products_listing_page_products_listing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/products-listing-page/products-listing-page.component */ "./src/app/store/listing/components/products-listing-page/products-listing-page.component.ts");
/* harmony import */ var _resolvers_products_listing_page_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/products-listing-page.resolver */ "./src/app/store/listing/resolvers/products-listing-page.resolver.ts");










var storeListingRoutes = [
    {
        path: '',
        component: _components_products_listing_page_products_listing_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductsListingPageComponent"],
        resolve: {
            data: _resolvers_products_listing_page_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsListingPageResolver"]
        }
    },
    {
        path: 'category/:slug',
        component: _components_products_listing_page_products_listing_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductsListingPageComponent"],
        resolve: {
            data: _resolvers_products_listing_page_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsListingPageResolver"]
        }
    },
    {
        path: 'tag/:slug',
        component: _components_products_listing_page_products_listing_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductsListingPageComponent"],
        resolve: {
            data: _resolvers_products_listing_page_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsListingPageResolver"]
        }
    }
];
var StoreListingModule = /** @class */ (function () {
    function StoreListingModule() {
    }
    StoreListingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_products_listing_page_products_listing_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductsListingPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(storeListingRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ___WEBPACK_IMPORTED_MODULE_7__["StoreSharedModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"]
            ],
            providers: [
                _resolvers_products_listing_page_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsListingPageResolver"]
            ]
        })
    ], StoreListingModule);
    return StoreListingModule;
}());



/***/ })

}]);
//# sourceMappingURL=store-listing-store-listing-module.js.map