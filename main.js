(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-task></app-task>\n<router-outlet>\n    <a href=\"/amazon.in\"></a>\n</router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nav-bar -->\n<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"false\"\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n        <mat-nav-list>\n            <div class=\"sidenav-header\">\n                <a mat-button href=\"javascript:void(0);\" class=\"left valign-wrapper\">\n                    <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\" alt=\"logo\"\n                        title=\"logo\">\n                </a>\n                <a (click)=\"drawer.toggle()\" mat-button class=\"right valign-wrapper\">\n                    <mat-icon>close</mat-icon>\n                </a>\n            </div>\n\n\n            <a mat-button href=\"javascript:void(0);\">\n                Lorem Ipsum\n            </a>\n            <a mat-button href=\"javascript:void(0);\">\n                Lorem Ipsum\n            </a>\n            <a mat-button href=\"javascript:void(0);\">\n                Lorem Ipsum\n            </a>\n            <a mat-button href=\"javascript:void(0);\">\n                Lorem Ipsum\n            </a>\n\n\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n                *ngIf=\"isHandset$ | async\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <a mat-button href=\"javascript:void(0);\" class=\"hide-on-med-and-down\">\n                <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\" alt=\"logo\"\n                    title=\"logo\">\n            </a>\n            <span class=\"menu-bar hide-on-small-only\">\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n                <a mat-button href=\"javascript:void(0);\">\n                    Lorem Ipsum\n                </a>\n\n            </span>\n            <span class=\"right login-toolbar\">\n\n                <a mat-button href=\"javascript:void(0);\">\n                    <span>Login / Signup</span>\n                </a>\n\n                <a class=\"user-profile-nav-menu\" mat-button href=\"javascript:void(0);\">\n\n                    <img class=\"profile-photo\" src=\"assets/images/user.png\">\n                </a>\n\n            </span>\n        </mat-toolbar>\n        <ng-content></ng-content>\n        <!-- Add Content Here -->\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n<!-- Task-->\n<ng-container *ngFor=\"let item of productElement\">\n    <div class=\"product-name-wrap\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col s12\">\n                    <h2>{{item.title}}</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"product-detail-main-wrap\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col xl12 l2 m12 s12\">\n                    <div class=\"box-shadow\">\n                        <div class=\"row\">\n                            <div class=\"product-slider\">\n                                <div class=\"col xl6 l6 m8 s12\">\n                                    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                                </div>\n                                <div class=\"col xl6 l6 m4 s12\">\n\n                                    <div class=\"product-name\">\n                                        <h4>{{item.name}}</h4>\n                                    </div>\n                                    <div class=\"product-prize\">\n                                        <div class=\"product-prize-left our-price\">\n                                            <span>Our Price :</span>\n                                        </div>\n                                        <div class=\"product-prize-right\">\n                                            <span>{{item.price}}</span>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                    <div class=\"product-prize\">\n                                        <div class=\"product-prize-left our-price\">\n                                            <span>Name :</span>\n                                        </div>\n                                        <div class=\"product-prize-right\">\n                                            <span>{{item.title}}</span>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                    <div class=\"product-prize\">\n                                        <div class=\"product-prize-left our-price\">\n                                            <span>Categorey :</span>\n                                        </div>\n                                        <div class=\"product-prize-right\">\n                                            <span>{{item.sourceCategory}}</span>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                    <div class=\"product-prize\">\n                                        <div class=\"product-prize-left our-price\">\n                                            <span>Product-id:</span>\n                                        </div>\n                                        <div class=\"product-prize-right\">\n                                            <span>{{item.product_id}}</span>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col xl12 l2 m12 s12\">\n                    <div class=\"box-shadow\">\n\n                        <div class=\"product-detail-wrap\">\n                            <div class=\"row\">\n                                <div class=\"col xl4 l4 m4 s12\">\n                                    <h6>DETAILS</h6>\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an\n                                        unknown printer took a galley of type and scrambled it to make a type specimen\n                                        book. It has survived not only five centuries, but also the leap into electronic\n                                        typesetting, remaining essentially unchanged</p>\n                                    <h6></h6>\n                                </div>\n                                <div class=\"col xl4 l4 m4 s12\">\n                                    <h6>OVERVIEW</h6>\n                                    <p>Creation Date:{{item.createdAt}}</p>\n                                    <p>Domain:{{item.domain}}</p>\n                                    <p>Review Date:{{item.latestReviewDate}}</p>\n                                    <p>Review Count:{{item.reviewCount}}</p>\n                                </div>\n                                <div class=\"col xl4 l4 m4 s12\">\n                                        <h6>Ratings</h6>\n                                    <div  *ngFor=\"let rating of item.topScores\">                                            \n                                            <p>{{rating.topic}}:{{rating.score}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"similar-products\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col s12\">\n                    <h5>SIMILAR PRODUCTS</h5>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col xl3 l3 m3 s12\">\n                    <div class=\"product-image-wrap\">\n                        <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\">\n                        <h6>name</h6>\n                        <div class=\"similar-product-prize\">\n                            <div class=\"original-prize\"><span class=\"mdi mdi-currency-inr\"></span>originalPrize\n                            </div>\n                            <div class=\"our-prize\"><span class=\"mdi mdi-currency-inr\"></span>Our Prize<span\n                                    class=\"discount-percentage\">(discountPercentage % off)</span></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col xl3 l3 m3 s12\">\n                    <div class=\"product-image-wrap\">\n                        <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\">\n                        <h6>name</h6>\n                        <div class=\"similar-product-prize\">\n                            <div class=\"original-prize\"><span class=\"mdi mdi-currency-inr\"></span>originalPrize\n                            </div>\n                            <div class=\"our-prize\"><span class=\"mdi mdi-currency-inr\"></span>Our Prize<span\n                                    class=\"discount-percentage\">(discountPercentage % off)</span></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col xl3 l3 m3 s12\">\n                    <div class=\"product-image-wrap\">\n                        <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\">\n                        <h6>name</h6>\n                        <div class=\"similar-product-prize\">\n                            <div class=\"original-prize\"><span class=\"mdi mdi-currency-inr\"></span>originalPrize\n                            </div>\n                            <div class=\"our-prize\"><span class=\"mdi mdi-currency-inr\"></span>Our Prize<span\n                                    class=\"discount-percentage\">(discountPercentage % off)</span></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col xl3 l3 m3 s12\">\n                    <div class=\"product-image-wrap\">\n                        <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\">\n                        <h6>name</h6>\n                        <div class=\"similar-product-prize\">\n                            <div class=\"original-prize\"><span class=\"mdi mdi-currency-inr\"></span>originalPrize\n                            </div>\n                            <div class=\"our-prize\"><span class=\"mdi mdi-currency-inr\"></span>Our Prize<span\n                                    class=\"discount-percentage\">(discountPercentage % off)</span></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n<!-- footer-->\n\n<footer class=\"black\">\n    <div class=\"container\">\n\n\n\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"sub-heading\">\n\n                    <div class=\"footer-links\">\n                        <div class=\"logo\">\n                            <img src=\"https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg\">\n                            <h6>Lorem Ipsum</h6>\n\n                            <h6 class=\"valign-wrapper\">\n                                <mat-icon>phonelink_ring</mat-icon>\n                                <a href=\"tel:+0123456789\" class=\"blondie\">0123456789</a>\n                            </h6>\n\n                            <h6 class=\"valign-wrapper\">\n                                <mat-icon>ring_volume</mat-icon>\n                                <a href=\"tel:+0123456789\" class=\"blondie\">012 345 6789</a>\n                            </h6>\n\n                            <h6 class=\"valign-wrapper\">\n                                <mat-icon>email</mat-icon>\n                                <a href=\"mailto: email:reachus@gmail.com\">reachus@gmail.com</a>\n                            </h6>\n                        </div>\n\n\n                    </div>\n\n                    <div class=\"footer-links\">\n                        <h5>About Company</h5>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"footer-links\">\n                        <h5>Consumer Service</h5>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"footer-links\">\n                        <h5>Partner Network</h5>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Lorem Ipsum</a>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"footer-links\">\n                        <h5>Contact Us</h5>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\">Faq</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Blog</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">Carrers</a>\n                            </li>\n                        </ul>\n                    </div>\n\n\n                    <div class=\"footer-links\">\n                        <iframe\n                            src=\"https://maps.google.com/maps?width=100%&height=600&hl=en&q=mumbai+(mumbai)&ie=UTF8&t=&z=11&iwloc=B&output=embed\"\n                            width=\"100%\" height=\"200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"sub-footer-links\">\n                    <div class=\"row\">\n                        <div class=\"col xl8 l8 m8 s12 \">\n                            <div class=\"sub-footer\">\n\n                                <p>Copyright © 2019 Lorem Ipsum All Rights Reserved.</p>\n\n                                <a routerLink=\"javascript:void()\">\n\n                                    Privacy Policy\n\n                                </a>\n\n                                <a routerLink=\"javascript:void()\">\n\n                                    Terms Of Use\n\n                                </a>\n                                <a routerLink=\"javascript:void()\">\n\n                                    Legal\n\n                                </a>\n                                <a routerLink=\"javascript:void()\">\n\n                                    Sitemap\n\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");




var routes = [
    {
        path: 'amazon.in',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bewgle';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: 'assets/images/user.png',
                medium: 'assets/images/user.png',
                big: 'assets/images/user.png'
            },
            {
                small: 'assets/images/user.png',
                medium: 'assets/images/user.png',
                big: 'assets/images/user.png'
            },
            {
                small: 'assets/images/user.png',
                medium: 'assets/images/user.png',
                big: 'assets/images/user.png'
            }
        ];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ],
            providers: [{
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  overflow: visible;\n  background: #fff;\n}\n\n.sidenav {\n  width: 100%;\n  display: block;\n}\n\n.sidenav .sidenav-header .left {\n  width: 50%;\n}\n\n.sidenav .sidenav-header .right {\n  width: 50%;\n  text-align: right;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n  background: #fff;\n}\n\n.mat-toolbar.mat-primary .mat-icon-button {\n  height: 70px;\n}\n\n.mat-toolbar-single-row {\n  height: 70px;\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);\n  display: block;\n  padding: 0px;\n}\n\n.mat-toolbar-single-row .logo {\n  padding: 10px 0px;\n}\n\n.mat-toolbar-single-row .login {\n  padding-right: 0px;\n}\n\n.mat-toolbar-single-row .container {\n  width: 100%;\n  height: auto;\n}\n\n.mat-toolbar-single-row .container {\n  position: relative;\n  width: 100%;\n  flex: 1 0 auto;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.mat-button {\n  font-size: 12px;\n  color: #000;\n  text-transform: capitalize;\n  border-radius: 0px;\n  line-height: 50px;\n  padding: 10px 16px;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.btn-search {\n  color: #fff;\n  padding: 0px;\n  line-height: 38px;\n}\n\n.mat-button.active-link {\n  position: relative;\n}\n\n.mat-button.active-link:before {\n  width: 100%;\n  height: 5px;\n  background: #ffb300;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  content: \"\";\n}\n\n.profile-photo {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n}\n\n.mat-drawer-content {\n  overflow: visible;\n  height: 100%;\n}\n\n.menu-dropdown-icon img {\n  height: 20px;\n  width: 60px;\n  margin: 0px;\n  padding-left: 10px;\n}\n\n.menu-bar {\n  margin-left: 100px;\n}\n\n.menu-bar a {\n  padding: 15px;\n}\n\n.mat-nav-list {\n  padding-top: 0px;\n}\n\n.close {\n  background-color: transparent;\n}\n\n@media only screen and (max-width: 600px) {\n  .login-toolbar .mat-button {\n    padding: 10px 5px;\n    min-width: 50px;\n  }\n  .login-toolbar .mat-button:last-of-type {\n    padding: 10px 16px;\n  }\n\n  .mat-drawer {\n    position: fixed;\n    text-align: left;\n    height: 100vh;\n  }\n\n  .mat-button .mat-icon {\n    margin-right: 10px;\n  }\n\n  .mat-button.active-link {\n    color: #fff;\n    background-color: #ffb300;\n    border-bottom: 1px solid #ffb300;\n  }\n\n  .mat-nav-list .mat-button {\n    width: 100%;\n    text-align: left;\n    padding: 10px;\n    line-height: 30px;\n  }\n\n  .mat-drawer-inner-container {\n    overflow: hidden;\n  }\n\n  .user-profile::before, .user-profile::after {\n    left: 165px;\n  }\n  .user-profile::after {\n    left: 167px;\n  }\n}\n\n.lower-text {\n  text-transform: none;\n}\n\n.product-name-wrap {\n  background: #f0f0f0;\n  padding: 15px 0px;\n  text-align: center;\n}\n\n.product-name-wrap h2 {\n  font-size: 22px;\n}\n\n.product-detail-main-wrap {\n  padding: 15px 0px;\n}\n\n.product-detail-main-wrap .product-slider {\n  padding: 15px;\n}\n\n.product-detail-main-wrap .product-slider .product-name {\n  margin-bottom: 10px;\n}\n\n.product-detail-main-wrap .product-slider .product-name h4 {\n  font-size: 26px;\n  color: #ffb300;\n}\n\n.product-detail-main-wrap .product-slider .product-prize .product-prize-left {\n  float: left;\n  width: 100px;\n  font-size: 18px;\n}\n\n.product-detail-main-wrap .product-slider .product-prize .product-prize-right {\n  float: left;\n  width: auto;\n  font-size: 18px;\n}\n\n.product-detail-main-wrap .product-slider .product-prize .product-prize-right .line-through {\n  text-decoration: line-through;\n}\n\n.product-detail-main-wrap .product-slider .product-prize .our-price {\n  font-weight: 500;\n}\n\n.product-detail-main-wrap .product-slider .product-description {\n  margin-top: 10px;\n}\n\n.product-detail-main-wrap .product-slider .product-spacifications {\n  margin-bottom: 10px;\n}\n\n.product-detail-main-wrap .product-slider .product-spacifications label {\n  display: block;\n}\n\n.product-detail-main-wrap .product-image-wrap {\n  padding: 15px;\n  text-align: center;\n}\n\n.product-detail-main-wrap .product-image-wrap img {\n  margin-bottom: 15px;\n}\n\n.product-detail-main-wrap .product-detail-wrap {\n  padding: 15px;\n  border-top: 1px solid #f0f0f0;\n  text-align: center;\n}\n\n.product-detail-main-wrap .product-detail-wrap p {\n  margin-bottom: 15px;\n  color: #6b7d85;\n}\n\n.product-detail-main-wrap .product-detail-wrap h6 {\n  margin-bottom: 15px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.product-detail-main-wrap .product-detail-wrap ul {\n  font-size: 14px;\n}\n\n.product-detail-main-wrap .product-detail-wrap ul li {\n  margin-bottom: 10px;\n}\n\n.product-detail-main-wrap .product-detail-wrap ul li:last-of-type {\n  margin-bottom: 0px;\n}\n\n.product-detail-main-wrap .product-detail-wrap ul .product-key {\n  font-weight: 500;\n}\n\n.product-detail-main-wrap .product-detail-wrap ul .product-value {\n  color: #6b7d85;\n}\n\n.similar-products {\n  padding: 40px 0px 15px;\n  background: #f0f0f0;\n  text-align: center;\n}\n\n.similar-products h5 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.similar-products .product-image-wrap {\n  margin-top: 40px;\n  cursor: pointer;\n}\n\n.similar-products .product-image-wrap img {\n  width: auto;\n}\n\n.similar-products .product-image-wrap h6 {\n  margin: 10px 0px;\n}\n\n.similar-products .product-image-wrap .similar-product-prize {\n  display: flex;\n  align-items: center;\n}\n\n.similar-products .product-image-wrap .similar-product-prize .original-prize {\n  text-decoration: line-through;\n  font-size: 14px;\n  float: left;\n  text-align: right;\n  width: 30%;\n  margin-right: 5px;\n}\n\n.similar-products .product-image-wrap .similar-product-prize .our-prize {\n  font-size: 16px;\n  font-weight: 500;\n  float: left;\n  text-align: left;\n}\n\n.similar-products .product-image-wrap .similar-product-prize .our-prize .discount-percentage {\n  color: #ffb300;\n  margin-left: 10px;\n}\n\nfooter {\n  background-color: #000;\n  top: 0px;\n  position: relative;\n  padding: 50px 0px 15px;\n}\n\nfooter p, footer h6, footer a, footer h4 {\n  color: #fff;\n}\n\nfooter h1 {\n  margin-bottom: 20px;\n  color: #fff;\n  font-size: 40px;\n}\n\nfooter p {\n  font-size: 12px;\n  line-height: 2;\n}\n\nfooter .sub-heading {\n  display: flex;\n}\n\n@media only screen and (max-width: 600px) {\n  footer .sub-heading {\n    display: block;\n  }\n}\n\nfooter .sub-heading .footer-links {\n  height: 100%;\n  float: left;\n  width: auto;\n  margin-right: 62px;\n}\n\n@media only screen and (max-width: 600px) {\n  footer .sub-heading .footer-links {\n    width: 100%;\n    margin-right: 0px;\n    margin-bottom: 25px;\n  }\n}\n\nfooter .sub-heading .footer-links:last-of-type {\n  margin-right: 0px;\n  width: calc(100% - 970px);\n}\n\n@media only screen and (max-width: 600px) {\n  footer .sub-heading .footer-links:last-of-type {\n    width: 100%;\n  }\n}\n\nfooter .sub-heading h6 .mat-icon {\n  margin-right: 10px;\n  margin-top: 6px;\n}\n\nfooter .sub-heading .create-spaces img {\n  width: 200px;\n}\n\nfooter .sub-heading .create-spaces h6 {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fff;\n  margin: 10px 0px;\n}\n\nfooter .sub-heading h5 {\n  font-weight: bold;\n  font-size: 12px;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\nfooter .sub-heading h6 {\n  margin: 5px 0px;\n}\n\nfooter .sub-heading ul li a {\n  margin-bottom: 8px;\n  display: block;\n  text-transform: capitalize;\n  font-size: 11px;\n}\n\nfooter .sub-heading ul li:last-of-type {\n  margin-bottom: 0px;\n}\n\nfooter .sub-footer-links {\n  border-top: 1px solid #fff;\n  padding-top: 15px;\n  margin-top: 15px;\n}\n\n@media only screen and (max-width: 600px) {\n  footer .sub-footer-links .sub-footer {\n    margin-bottom: 10px;\n  }\n}\n\nfooter .sub-footer-links .sub-footer p, footer .sub-footer-links .sub-footer a {\n  display: inline-block;\n  font-size: 11px;\n  margin-right: 10px;\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 600px) {\n  footer {\n    padding-bottom: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9DOlxcVXNlcnNcXE1paGlyXFxEZXNrdG9wXFxCZXdnbGVcXGJld2dsZS9zcmNcXGFwcFxcdGFza1xcdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERVE7RUFDSSxVQUFBO0FDQVo7O0FER1E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNEWjs7QURTQTtFQUNJLG1CQUFBO0FDTko7O0FEVUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFNJO0VBQ0ksWUFBQTtBQ1BSOztBRFlBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNUSjs7QURXSTtFQUNJLGlCQUFBO0FDVFI7O0FEWUk7RUFDSSxrQkFBQTtBQ1ZSOztBRGFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNYUjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZFI7O0FEdUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNwRUo7O0FEZ0ZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQzdFSjs7QURnRkE7RUFDSSxrQkFBQTtBQzdFSjs7QURnRkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUM3RUo7O0FEK0VBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDNUVKOztBRCtFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQzVFSjs7QURpRkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzlFUjs7QURrRkE7RUFDSSxrQkFBQTtBQy9FSjs7QURpRlE7RUFDSSxhQUFBO0FDL0VaOztBRG9GQTtFQUNJLGdCQUFBO0FDakZKOztBRHFGQTtFQUNJLDZCQUFBO0FDbEZKOztBRHNGQTtFQUVRO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDcEZWO0VEc0ZVO0lBQ0ksa0JBQUE7RUNwRmQ7O0VEeUZFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQ3RGTjs7RUR5Rk07SUFDSSxrQkFBQTtFQ3RGVjs7RUR5RkU7SUFDSSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxnQ0FBQTtFQ3RGTjs7RUR5RkU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUN0Rk47O0VEeUZFO0lBQ0ksZ0JBQUE7RUN0Rk47O0VEMEZNO0lBQ0ksV0FBQTtFQ3ZGVjtFRDBGTTtJQUNJLFdBQUE7RUN4RlY7QUFDRjs7QUQ0RkE7RUFDSSxvQkFBQTtBQzFGSjs7QUQ4RkE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzRko7O0FENEZJO0VBQ0ksZUFBQTtBQzFGUjs7QUQ2RkE7RUFDSSxpQkFBQTtBQzFGSjs7QUQyRkk7RUFDSSxhQUFBO0FDekZSOztBRDBGUTtFQUNJLG1CQUFBO0FDeEZaOztBRHlGWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDdkZoQjs7QUQyRlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN6RmhCOztBRDJGWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3pGaEI7O0FEMEZnQjtFQUNJLDZCQUFBO0FDeEZwQjs7QUQyRlk7RUFDSSxnQkFBQTtBQ3pGaEI7O0FENEZRO0VBQ0ksZ0JBQUE7QUMxRlo7O0FENEZRO0VBQ0ksbUJBQUE7QUMxRlo7O0FEMkZZO0VBQ0ksY0FBQTtBQ3pGaEI7O0FENkZJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDM0ZSOztBRDRGUTtFQUNJLG1CQUFBO0FDMUZaOztBRDhGSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDNUZSOztBRDZGUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQzNGWjs7QUQ2RlE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzNGWjs7QUQ2RlE7RUFDSSxlQUFBO0FDM0ZaOztBRDRGWTtFQUNJLG1CQUFBO0FDMUZoQjs7QUQyRmdCO0VBQ0ksa0JBQUE7QUN6RnBCOztBRDRGWTtFQUNJLGdCQUFBO0FDMUZoQjs7QUQ0Rlk7RUFDSSxjQUFBO0FDMUZoQjs7QURnR0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUM3Rko7O0FEOEZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDNUZSOztBRDhGSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQzVGUjs7QUQ2RlE7RUFDSSxXQUFBO0FDM0ZaOztBRDZGUTtFQUNJLGdCQUFBO0FDM0ZaOztBRDZGUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQzNGWjs7QUQ0Rlk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMxRmhCOztBRDRGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzFGaEI7O0FEMkZnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ3pGcEI7O0FEa0dBO0VBQ0ksc0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQy9GSjs7QURpR0k7RUFDSSxXQUFBO0FDL0ZSOztBRGlHSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMvRlI7O0FEaUdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMvRlI7O0FEa0dJO0VBQ0ksYUFBQTtBQ2hHUjs7QURpR1E7RUFGSjtJQUdRLGNBQUE7RUM5RlY7QUFDRjs7QUQrRlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzdGWjs7QUQrRlk7RUFOSjtJQU9RLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDNUZkO0FBQ0Y7O0FENkZZO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQzNGaEI7O0FENEZnQjtFQUhKO0lBSVEsV0FBQTtFQ3pGbEI7QUFDRjs7QURnR1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUM5RmhCOztBRG1HWTtFQUNJLFlBQUE7QUNqR2hCOztBRG1HWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pHaEI7O0FEcUdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDbkdaOztBRHFHUTtFQUNJLGVBQUE7QUNuR1o7O0FEdUdnQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ3JHcEI7O0FEd0dZO0VBQ0ksa0JBQUE7QUN0R2hCOztBRDJHSTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3pHUjs7QUQ0R1k7RUFESjtJQUVRLG1CQUFBO0VDekdkO0FBQ0Y7O0FEMEdZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ3hHaEI7O0FEK0dJO0VBN0dKO0lBOEdRLG9CQUFBO0VDNUdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIC5zaWRlbmF2LWhlYWRlciB7XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuXHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAubWF0LWljb24tYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNjb250ZW50IHtcclxuICAgIC8vICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC8vICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8vICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMjY0cHg7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAjY29udGVudCB7XHJcbiAgICAvLyAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gI2NvbnRlbnQsXHJcbiAgICAvLyAjbWFpbi1jb250ZW50IHtcclxuICAgIC8vICAgICAmOjpiZWZvcmUsXHJcbiAgICAvLyAgICAgJjo6YWZ0ZXIge1xyXG4gICAgLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLy8gICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgICY6OmFmdGVyIHtcclxuICAgIC8vICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC5yb3cge1xyXG5cclxuICAgIC8vICAgICBoNSB7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIC8vICAgICAgICAgY29sb3I6ICNmZmIzMDA7XHJcbiAgICAvLyAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjY2M7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBidXR0b24ge1xyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8vICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgLy8gICAgICAgICAmOmhvdmVyIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAjZmZiMzAwO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG5cclxuLmZvcm0tc2VhcmNoIHtcclxuICAgIC5tYXQtYm9keS13cmFwIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIC8vaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24uYWN0aXZlLWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi5hY3RpdmUtbGluazpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmIzMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLnByb2ZpbGUtcGhvdG8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1lbnUtZHJvcGRvd24taWNvbiB7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4ubWVudS1iYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcbi5tYXQtbmF2LWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuXHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5sb2dpbi10b29sYmFyIHtcclxuICAgICAgICAubWF0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1kcmF3ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAubWF0LWJ1dHRvbiB7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLmFjdGl2ZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZiMzAwO1xyXG5cclxuICAgIH1cclxuICAgIC5tYXQtbmF2LWxpc3QgLm1hdC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuXHJcbiAgICB9XHJcbiAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAudXNlci1wcm9maWxlIHtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNjdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb3dlci10ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vLyBUYXNrIC8vXHJcbi5wcm9kdWN0LW5hbWUtd3JhcHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwe1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICAucHJvZHVjdC1zbGlkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAucHJvZHVjdC1uYW1le1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmIzMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1wcml6ZXtcclxuICAgICAgICAgICAgLnByb2R1Y3QtcHJpemUtbGVmdHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXByaXplLXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIC5saW5lLXRocm91Z2h7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm91ci1wcmljZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc3BhY2lmaWNhdGlvbnN7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtaW1hZ2Utd3JhcHtcclxuICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtZGV0YWlsLXdyYXB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjojNmI3ZDg1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3Qta2V5e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM2YjdkODU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaW1pbGFyLXByb2R1Y3Rze1xyXG4gICAgcGFkZGluZzo0MHB4IDBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1pbWFnZS13cmFwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaW1pbGFyLXByb2R1Y3QtcHJpemV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5vcmlnaW5hbC1wcml6ZXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdXItcHJpemV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgLmRpc2NvdW50LXBlcmNlbnRhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmYjMwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRk9PVEVSIC8vXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcclxuICAgIHRvcDogMHB4OyAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOjUwcHggMHB4IDE1cHg7XHJcblxyXG4gICAgcCxoNixhLGg0e1xyXG4gICAgICAgIGNvbG9yOiNmZmY7ICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1oZWFkaW5ne1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyLWxpbmtze1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYycHg7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5NzBweCk7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG5cclxuXHJcbiAgICAgICAgaDZ7IFxyXG4gICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcmVhdGUtc3BhY2Vze1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHsgICAgICAgIFxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGk6bGFzdC1vZi10eXBle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0gICAgXHJcblxyXG4gICAgLnN1Yi1mb290ZXItbGlua3N7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBcclxuICAgICAgICAuc3ViLWZvb3RlcntcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAsYXsgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gIFxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGVuYXYgLnNpZGVuYXYtaGVhZGVyIC5sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zaWRlbmF2IC5zaWRlbmF2LWhlYWRlciAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkgLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG59XG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyAubG9nbyB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgLmxvZ2luIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMSAwIGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuLXNlYXJjaCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4ubWF0LWJ1dHRvbi5hY3RpdmUtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1idXR0b24uYWN0aXZlLWxpbms6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZiMzAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5wcm9maWxlLXBob3RvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LWRyb3Bkb3duLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm1lbnUtYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLm1lbnUtYmFyIGEge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubWF0LW5hdi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxvZ2luLXRvb2xiYXIgLm1hdC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgfVxuICAubG9naW4tdG9vbGJhciAubWF0LWJ1dHRvbjpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLm1hdC1idXR0b24gLm1hdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAubWF0LWJ1dHRvbi5hY3RpdmUtbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjMwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYjMwMDtcbiAgfVxuXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC51c2VyLXByb2ZpbGU6OmJlZm9yZSwgLnVzZXItcHJvZmlsZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDE2NXB4O1xuICB9XG4gIC51c2VyLXByb2ZpbGU6OmFmdGVyIHtcbiAgICBsZWZ0OiAxNjdweDtcbiAgfVxufVxuLmxvd2VyLXRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnByb2R1Y3QtbmFtZS13cmFwIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LW5hbWUtd3JhcCBoMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1zbGlkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1zbGlkZXIgLnByb2R1Y3QtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1uYW1lIGg0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmYjMwMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1tYWluLXdyYXAgLnByb2R1Y3Qtc2xpZGVyIC5wcm9kdWN0LXByaXplIC5wcm9kdWN0LXByaXplLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1wcml6ZSAucHJvZHVjdC1wcml6ZS1yaWdodCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1zbGlkZXIgLnByb2R1Y3QtcHJpemUgLnByb2R1Y3QtcHJpemUtcmlnaHQgLmxpbmUtdGhyb3VnaCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1zbGlkZXIgLnByb2R1Y3QtcHJpemUgLm91ci1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1zcGFjaWZpY2F0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1zcGFjaWZpY2F0aW9ucyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1pbWFnZS13cmFwIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1pbWFnZS13cmFwIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LWRldGFpbC13cmFwIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWRldGFpbC1tYWluLXdyYXAgLnByb2R1Y3QtZGV0YWlsLXdyYXAgcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNmI3ZDg1O1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1kZXRhaWwtd3JhcCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1tYWluLXdyYXAgLnByb2R1Y3QtZGV0YWlsLXdyYXAgdWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtbWFpbi13cmFwIC5wcm9kdWN0LWRldGFpbC13cmFwIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1tYWluLXdyYXAgLnByb2R1Y3QtZGV0YWlsLXdyYXAgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1kZXRhaWwtd3JhcCB1bCAucHJvZHVjdC1rZXkge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLW1haW4td3JhcCAucHJvZHVjdC1kZXRhaWwtd3JhcCB1bCAucHJvZHVjdC12YWx1ZSB7XG4gIGNvbG9yOiAjNmI3ZDg1O1xufVxuXG4uc2ltaWxhci1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDQwcHggMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaW1pbGFyLXByb2R1Y3RzIGg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNpbWlsYXItcHJvZHVjdHMgLnByb2R1Y3QtaW1hZ2Utd3JhcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaW1pbGFyLXByb2R1Y3RzIC5wcm9kdWN0LWltYWdlLXdyYXAgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG4uc2ltaWxhci1wcm9kdWN0cyAucHJvZHVjdC1pbWFnZS13cmFwIGg2IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5zaW1pbGFyLXByb2R1Y3RzIC5wcm9kdWN0LWltYWdlLXdyYXAgLnNpbWlsYXItcHJvZHVjdC1wcml6ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2ltaWxhci1wcm9kdWN0cyAucHJvZHVjdC1pbWFnZS13cmFwIC5zaW1pbGFyLXByb2R1Y3QtcHJpemUgLm9yaWdpbmFsLXByaXplIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5zaW1pbGFyLXByb2R1Y3RzIC5wcm9kdWN0LWltYWdlLXdyYXAgLnNpbWlsYXItcHJvZHVjdC1wcml6ZSAub3VyLXByaXplIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zaW1pbGFyLXByb2R1Y3RzIC5wcm9kdWN0LWltYWdlLXdyYXAgLnNpbWlsYXItcHJvZHVjdC1wcml6ZSAub3VyLXByaXplIC5kaXNjb3VudC1wZXJjZW50YWdlIHtcbiAgY29sb3I6ICNmZmIzMDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1MHB4IDBweCAxNXB4O1xufVxuZm9vdGVyIHAsIGZvb3RlciBoNiwgZm9vdGVyIGEsIGZvb3RlciBoNCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbmZvb3RlciBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjtcbn1cbmZvb3RlciAuc3ViLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIgLnN1Yi1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuZm9vdGVyIC5zdWItaGVhZGluZyAuZm9vdGVyLWxpbmtzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNjJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZm9vdGVyIC5zdWItaGVhZGluZyAuZm9vdGVyLWxpbmtzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5mb290ZXIgLnN1Yi1oZWFkaW5nIC5mb290ZXItbGlua3M6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5NzBweCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGZvb3RlciAuc3ViLWhlYWRpbmcgLmZvb3Rlci1saW5rczpsYXN0LW9mLXR5cGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5mb290ZXIgLnN1Yi1oZWFkaW5nIGg2IC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuZm9vdGVyIC5zdWItaGVhZGluZyAuY3JlYXRlLXNwYWNlcyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5mb290ZXIgLnN1Yi1oZWFkaW5nIC5jcmVhdGUtc3BhY2VzIGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5mb290ZXIgLnN1Yi1oZWFkaW5nIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5mb290ZXIgLnN1Yi1oZWFkaW5nIGg2IHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuZm9vdGVyIC5zdWItaGVhZGluZyB1bCBsaSBhIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbmZvb3RlciAuc3ViLWhlYWRpbmcgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuZm9vdGVyIC5zdWItZm9vdGVyLWxpbmtzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIgLnN1Yi1mb290ZXItbGlua3MgLnN1Yi1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbmZvb3RlciAuc3ViLWZvb3Rlci1saW5rcyAuc3ViLWZvb3RlciBwLCBmb290ZXIgLnN1Yi1mb290ZXItbGlua3MgLnN1Yi1mb290ZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.productElement = [
            {
                "price": " 1,799.00",
                "latestReviewDate": "2018-10-21T00:00:00.000Z",
                "domain": "amazon.in",
                "imageUrl": "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
                "name": "Bluetooth Speakers",
                "title": "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)",
                "sourceCategory": "Bluetooth Speakers",
                "product_id": "ABCD1234",
                "createdAt": "2018-08-31T09:36:08.448Z",
                "reviewCount": 3013,
                "topScores": [
                    { "topic": "Sound Quality", "score": 4.6 },
                    { "topic": "Bass", "score": 4.2 },
                    { "topic": "Design and Build", "score": 4.2 },
                    { "topic": "Battery Backup", "score": 4.2 }
                ]
            }
        ];
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                medium: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                big: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg'
            },
            {
                small: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                medium: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                big: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg'
            },
            {
                small: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                medium: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                big: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg'
            },
            {
                small: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                medium: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
                big: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg'
            }
        ];
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
        })
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mihir\Desktop\Bewgle\bewgle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map