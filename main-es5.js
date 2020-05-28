function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_website_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-website/homepage/homepage.component */
    "./src/app/main-website/homepage/homepage.component.ts");
    /* harmony import */


    var _main_website_main_website_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-website/main-website.component */
    "./src/app/main-website/main-website.component.ts");

    var routes = [{
      path: '',
      component: _main_website_main_website_component__WEBPACK_IMPORTED_MODULE_3__["MainWebsiteComponent"],
      children: [{
        path: '',
        component: _main_website_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }, {
        path: 'welcome/:role/:render',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-website-login-signup-login-signup-module */
          "main-website-login-signup-login-signup-module").then(__webpack_require__.bind(null,
          /*! ./main-website/login-signup/login-signup.module */
          "./src/app/main-website/login-signup/login-signup.module.ts")).then(function (m) {
            return m.LoginSignupModule;
          });
        }
      }, {
        path: 'find-job',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-website-find-job-find-job-module */
          "main-website-find-job-find-job-module").then(__webpack_require__.bind(null,
          /*! ./main-website/find-job/find-job.module */
          "./src/app/main-website/find-job/find-job.module.ts")).then(function (m) {
            return m.FindJobModule;
          });
        }
      }, {
        path: 'post-job',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-website-post-job-post-job-module */
          "main-website-post-job-post-job-module").then(__webpack_require__.bind(null,
          /*! ./main-website/post-job/post-job.module */
          "./src/app/main-website/post-job/post-job.module.ts")).then(function (m) {
            return m.PostJobModule;
          });
        }
      }, {
        path: 'register-freelancer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-website-freelancer-registration-freelancer-registration-module */
          "main-website-freelancer-registration-freelancer-registration-module").then(__webpack_require__.bind(null,
          /*! ./main-website/freelancer-registration/freelancer-registration.module */
          "./src/app/main-website/freelancer-registration/freelancer-registration.module.ts")).then(function (m) {
            return m.FreelancerRegistrationModule;
          });
        }
      }]
    }, {
      path: 'freelancer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | freelancer-freelancer-module */
        "freelancer-freelancer-module").then(__webpack_require__.bind(null,
        /*! ./freelancer/freelancer.module */
        "./src/app/freelancer/freelancer.module.ts")).then(function (m) {
          return m.FreelancerModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, location) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.location = location;
        this.title = 'codex';
        this.yScrollStack = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
          });
          this.router.events.subscribe(function (ev) {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              if (ev.url != _this.lastPoppedUrl) _this.yScrollStack.push(window.scrollY);
            } else if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (ev.url == _this.lastPoppedUrl) {
                _this.lastPoppedUrl = undefined;
                window.scrollTo(0, _this.yScrollStack.pop());
              } else window.scrollTo(0, 0);
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_website_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-website/footer/footer.component */
    "./src/app/main-website/footer/footer.component.ts");
    /* harmony import */


    var _main_website_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-website/header/header.component */
    "./src/app/main-website/header/header.component.ts");
    /* harmony import */


    var _main_website_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-website/homepage/homepage.component */
    "./src/app/main-website/homepage/homepage.component.ts");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _main_website_main_website_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-website/main-website.component */
    "./src/app/main-website/main-website.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_website_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _main_website_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _main_website_main_website_component__WEBPACK_IMPORTED_MODULE_8__["MainWebsiteComponent"], _main_website_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_website_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _main_website_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _main_website_main_website_component__WEBPACK_IMPORTED_MODULE_8__["MainWebsiteComponent"], _main_website_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-website/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main-website/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppMainWebsiteFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 117,
      vars: 0,
      consts: [["id", "footer", 1, "section-padding"], [1, "container-custom"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "footer-widget", "footer-link"], [1, "footer-logo"], ["src", "assets/img/logo.PNG", "alt", ""], [1, "text-center"], [1, "col-lg-2", "col-sm-4", "col-md-4"], ["href", "#"], [1, "col-lg-2", "col-sm-6", "col-md-4"], [1, "col-lg-4", "col-sm-6", "col-md-4"], [1, "footer-widget", "footer-text"], [1, "mail"], [1, "social-links", "social-desktop"], [1, "list-unstyled", "list-inline", "team-social", "mt-4"], [1, "list-inline-item"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-pinterest"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-google-plus"], [1, "col-12", "footer-widget"], [1, "social-links", "social-responsive"], [1, "col-lg-12", "text-center"], [1, "footer-copy"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor, sit amet consectetur adipisicing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam hic non sunt recusandae atque unde saepe nihil earum voluptatibus aliquid optio suscipit nobis quia excepturi vel quod, iure quae.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How it Works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Report Bug");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "License");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Terms & Condition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Our location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mail:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " codex@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Phone :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "+202-277-3894");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 455 West Orchard Street Kings Mountain, NC 28086,NOC building");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \xA9 2020 Codex | All Rights Reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer-logo[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 120px;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n.social-links[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.192);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.social-links[_ngcontent-%COMP%]   .team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #0d0c37;\n  display: inline-block;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #16154d;\n}\n.social-links[_ngcontent-%COMP%]   .team-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n}\n.container-custom[_ngcontent-%COMP%] {\n  padding: 1rem 8vw;\n}\n.social-responsive[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n}\n@media screen and (max-width: 991px) {\n  .social-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .social-responsive[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi13ZWJzaXRlL2Zvb3Rlci9IOlxcV09SS1xcQU5HVUxBUlxcRnJlZWxhbmNpbmcgUHJvamVjdFxcQ29kZXhcXGNvZGV4L3NyY1xcYXBwXFxtYWluLXdlYnNpdGVcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXdlYnNpdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDQ1I7QURFQTtFQUNJLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7QUNFWjtBREdBO0VBQ0ksaUJBQUE7QUNBSjtBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJO0lBQ0ksYUFBQTtFQ0VOOztFREFFO0lBQ0ksY0FBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLXdlYnNpdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbG9nb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxuICAgIH1cclxufVxyXG4uc29jaWFsLWxpbmtze1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOTIpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAgIC50ZWFtLXNvY2lhbCBsaSBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQwYzM3O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNjE1NGQ7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b217XHJcbiAgICBwYWRkaW5nOiAxcmVtIDh2dztcclxufVxyXG4uc29jaWFsLXJlc3BvbnNpdmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLnNvY2lhbC1kZXNrdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLXJlc3BvbnNpdmV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIuZm9vdGVyLWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbn1cblxuLnNvY2lhbC1saW5rcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTkyKTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uc29jaWFsLWxpbmtzIC50ZWFtLXNvY2lhbCBsaSBhIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBjMzc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE2MTU0ZDtcbn1cbi5zb2NpYWwtbGlua3MgLnRlYW0tc29jaWFsIGxpIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXItY3VzdG9tIHtcbiAgcGFkZGluZzogMXJlbSA4dnc7XG59XG5cbi5zb2NpYWwtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNvY2lhbC1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNvY2lhbC1yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-website/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main-website/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppMainWebsiteHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/find-job"];
    };

    var _c2 = function _c2() {
      return ["/post-job"];
    };

    var _c3 = function _c3() {
      return ["/welcome/", "freelancer", "signup"];
    };

    var _c4 = function _c4() {
      return ["/welcome/", "employer", "signup"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(window).on('scroll', function () {
            if ($(window).scrollTop() > 70) {
              $('.site-navigation,.trans-navigation').addClass('header-white');
            } else {
              $('.site-navigation,.trans-navigation').removeClass('header-white');
            }
          });
          $('#search-btn').on('click', function () {
            $('.search-mobile').toggleClass('show-search');
          });
          $('.nav-link').on('click', function () {
            if ($('.collapse').hasClass('show')) {
              $('.collapse').removeClass('show');
            } else $('.collapse').addClass('show');
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 54,
      vars: 10,
      consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "trans-navigation"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo.PNG", "alt", "", 1, "img-fluid", "b-logo"], [1, "navbar-buttons"], [1, "sidebar-widget", "search", "search-desktop"], ["type", "text", "placeholder", "Blockchain Developer...", 1, "form-control"], [1, "fa", "fa-search"], ["id", "search-btn", 1, "search-btn"], [1, "search-icon"], ["type", "button", "data-toggle", "collapse", "data-target", "#mainNav", "aria-controls", "mainNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars"], ["id", "mainNav", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["data-toggle", "modal", "data-target", "#roleModal", 1, "nav-link"], [1, "sidebar-widget", "search", "search-mobile"], ["id", "roleModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-segment"], [1, "text-center"], [1, "container"], [1, "row"], [1, "col-6", "text-center"], [1, "role-icon"], ["src", "assets/img/icon/freelancer.svg", "alt", ""], ["data-dismiss", "modal", 1, "btn", "btn-hero", 3, "routerLink"], ["src", "assets/img/icon/employer.svg", "alt", ""], [1, "modal-footer"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Find Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Post New Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Select your role on the platform ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Freelancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Employer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".search[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 3rem;\n  outline: none;\n  width: 350px;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 3rem;\n  height: 50px;\n}\n\n.site-navigation[_ngcontent-%COMP%], .trans-navigation[_ngcontent-%COMP%] {\n  padding: 1rem 5vw 1rem 4vw;\n}\n.site-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Raleway;\n  font-size: 1rem;\n  text-transform: capitalize;\n  font-weight: 700;\n}\n.site-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: red;\n}\n.header-white[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  background: #111;\n  z-index: 1000;\n  width: 100%;\n  left: 0;\n  transition: all 0.5s ease 0s;\n  color: #000 !important;\n}\n.navbar-expand-lg.trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar-expand-lg.site-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n  cursor: pointer;\n}\n.navbar-expand-lg.trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:last-child, .navbar-expand-lg.site-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.site-navigation[_ngcontent-%COMP%], .trans-navigation[_ngcontent-%COMP%] {\n  transition: all 0.5s ease 0s;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  margin-right: 60px;\n  font-weight: 700;\n  text-transform: capitalize;\n  color: #fff;\n}\n.navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.navbar-expand-lg.trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.trans-navigation[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.trans-navigation.header-white[_ngcontent-%COMP%] {\n  background: #111;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.trans-navigation.header-white[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.trans-navigation.header-white[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.trans-navigation.header-white[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #635CDB;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n.trans-navigation.header-white[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background: #635CDB;\n  color: #fff;\n}\n\n.navbar-expand-lg.trans-navigation[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.nav-item.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transition: all 300ms ease;\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  top: 120%;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);\n  border: 0px;\n  padding: 0px;\n  position: absolute;\n}\n.nav-item.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  top: 100%;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #635CDB;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  -webkit-animation: 0.2s forwards b;\n  animation: 0.2s forwards b;\n}\n.navbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.search-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 110%;\n  width: 90vw;\n  margin: 0;\n  padding: 0;\n  -webkit-animation: fade_up 0.3s forwards ease-out;\n          animation: fade_up 0.3s forwards ease-out;\n  display: none;\n}\n.search-mobile.show-search[_ngcontent-%COMP%] {\n  display: block;\n}\n@-webkit-keyframes fade_up {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fade_up {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.search-btn[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 10px;\n  background-color: transparent;\n  border: none;\n}\n.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2rem;\n}\n@-webkit-keyframes b {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes b {\n  to {\n    opacity: 1;\n  }\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  transition: background-color 0.1s;\n  text-transform: uppercase;\n}\n@media (min-width: 1200px) {\n  .dropdown-item[_ngcontent-%COMP%] {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-item[_ngcontent-%COMP%]    + .dropdown-item[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n  }\n}\n@media (max-width: 991px) {\n  .search-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    height: 50vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #101010;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin-bottom: 2rem;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi13ZWJzaXRlL2hlYWRlci9IOlxcV09SS1xcQU5HVUxBUlxcRnJlZWxhbmNpbmcgUHJvamVjdFxcQ29kZXhcXGNvZGV4L3NyY1xcYXBwXFxtYWluLXdlYnNpdGVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXdlYnNpdGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RKO0FERUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNBUjtBREtBOzttQ0FBQTtBQUdBOztFQUVJLDBCQUFBO0FDRko7QURLQTs7RUFFRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTs7RUFFRSxVQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRkY7QURLQTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNGRjtBREtBOztFQUVFLGtCQUFBO0FDRkY7QURLQTs7RUFFRSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtBQ0ZGO0FES0E7RUFDRSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FETUE7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDRCx1Q0FBQTtVQUFBLCtCQUFBO0FDSEQ7QURNQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7O2lDQUFBO0FBR0E7RUFDRSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUZBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNIRjtBRE1BO0VBQ0UsYUFBQTtBQ0hGO0FETUE7RUFDRSxVQUFBO0FDSEY7QURNQTtFQUNFLGtDQUFBO0VBQ1EsMEJBQUE7QUNIVjtBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRkY7QURJQTtFQUNFLGtCQUFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSxhQUFBO0FDREo7QURHQTtFQUNFLGNBQUE7QUNBRjtBREVBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNDRjtFRENBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjtBRFRBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNDRjtFRENBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjtBRENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0E7RUFDRTtJQUNFLFVBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSx3Q0FBQTtFQ0hGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsYUFBQTtFQ0pGOztFRE1BO0lBQ0UsY0FBQTtFQ0hGOztFREtBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUNGRjtFRElFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQ0ZKOztFRE1FO0lBQ0UsV0FBQTtFQ0hKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLXdlYnNpdGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnNlYXJjaHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE1FTlUgTkFWSUdBVElPTiBBUkVBXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc2l0ZS1uYXZpZ2F0aW9uLFxyXG4udHJhbnMtbmF2aWdhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDV2dyAxcmVtIDR2dztcclxufVxyXG5cclxuLnNpdGUtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiBhLFxyXG4udHJhbnMtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiBhIHtcclxuICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICBmb250LXNpemU6IDFyZW0gO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgYS5hY3RpdmUsXHJcbi50cmFucy1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IGEuYWN0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaGVhZGVyLXdoaXRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzExMTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlIDBzO1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnLnRyYW5zLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgLm5hdi1saW5rLFxyXG4ubmF2YmFyLWV4cGFuZC1sZy5zaXRlLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAwcHggMjRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnLnRyYW5zLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgLm5hdi1saW5rOmxhc3QtY2hpbGQsXHJcbi5uYXZiYXItZXhwYW5kLWxnLnNpdGUtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiAubmF2LWxpbms6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1uYXZpZ2F0aW9uLFxyXG4udHJhbnMtbmF2aWdhdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlIDBzO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnLnRyYW5zLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRyYW5zLW5hdmlnYXRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udHJhbnMtbmF2aWdhdGlvbi5oZWFkZXItd2hpdGUge1xyXG4gIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTsgXHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgLnNlYXJjaCBpbnB1dHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50cmFucy1uYXZpZ2F0aW9uLmhlYWRlci13aGl0ZSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udHJhbnMtbmF2aWdhdGlvbi5oZWFkZXItd2hpdGUgLm5hdmJhci1uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjNjM1Q0RCO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi50cmFucy1uYXZpZ2F0aW9uLmhlYWRlci13aGl0ZSAuYnRuLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjNjM1Q0RCO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiBEUk9QRE9XTiBNRU5VXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLm5hdmJhci1leHBhbmQtbGcudHJhbnMtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAxMjAlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAtMnB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm5hdi1pdGVtLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdG9wOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzVDREI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IC4ycyBmb3J3YXJkcyBiO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAuMnMgZm9yd2FyZHMgYjtcclxufVxyXG4ubmF2YmFyLWJ1dHRvbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWFyY2gtbW9iaWxle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEwJTtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZV91cCAwLjNzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2VhcmNoLW1vYmlsZS5zaG93LXNlYXJjaHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfdXB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuLnNlYXJjaC1idG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgc3BhbntcclxuICAgIGl7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGIge1xyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGIge1xyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgZm9udC1zaXplOiAuNjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5kcm9wZG93bi1pdGVtICsgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAuc2VhcmNoLWRlc2t0b3B7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc2VhcmNoLWJ0bntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubmF2YmFyLW5hdntcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAxMDEwO1xyXG5cclxuICAgIC5uYXYtbGlua3tcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLWJyYW5ke1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDM1MHB4O1xufVxuLnNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIGhlaWdodDogNTBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTUVOVSBOQVZJR0FUSU9OIEFSRUFcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNpdGUtbmF2aWdhdGlvbixcbi50cmFucy1uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZzogMXJlbSA1dncgMXJlbSA0dnc7XG59XG5cbi5zaXRlLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgYSxcbi50cmFucy1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IGEge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNpdGUtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiBhLmFjdGl2ZSxcbi50cmFucy1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhlYWRlci13aGl0ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZy50cmFucy1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IC5uYXYtbGluayxcbi5uYXZiYXItZXhwYW5kLWxnLnNpdGUtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZy50cmFucy1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IC5uYXYtbGluazpsYXN0LWNoaWxkLFxuLm5hdmJhci1leHBhbmQtbGcuc2l0ZS1uYXZpZ2F0aW9uIC5uYXZiYXItbmF2IC5uYXYtbGluazpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uc2l0ZS1uYXZpZ2F0aW9uLFxuLnRyYW5zLW5hdmlnYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItYnJhbmQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnLnRyYW5zLW5hdmlnYXRpb24gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50cmFucy1uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi50cmFucy1uYXZpZ2F0aW9uLmhlYWRlci13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4udHJhbnMtbmF2aWdhdGlvbi5oZWFkZXItd2hpdGUgLnNlYXJjaCBpbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRyYW5zLW5hdmlnYXRpb24uaGVhZGVyLXdoaXRlIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udHJhbnMtbmF2aWdhdGlvbi5oZWFkZXItd2hpdGUgLm5hdmJhci1uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzYzNUNEQjtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xufVxuXG4udHJhbnMtbmF2aWdhdGlvbi5oZWFkZXItd2hpdGUgLmJ0bi13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICM2MzVDREI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gRFJPUERPV04gTUVOVVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLm5hdmJhci1leHBhbmQtbGcudHJhbnMtbmF2aWdhdGlvbiAubmF2YmFyLW5hdiAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAxMjAlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgLTJweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXYtaXRlbS5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogMTAwJTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1Q0RCO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjJzIGZvcndhcmRzIGI7XG4gIGFuaW1hdGlvbjogMC4ycyBmb3J3YXJkcyBiO1xufVxuXG4ubmF2YmFyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLW1vYmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMTAlO1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBhbmltYXRpb246IGZhZGVfdXAgMC4zcyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaC1tb2JpbGUuc2hvdy1zZWFyY2gge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQGtleWZyYW1lcyBmYWRlX3VwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uc2VhcmNoLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zZWFyY2gtYnRuIHNwYW4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGIge1xuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiIHtcbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5kcm9wZG93bi1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRyb3Bkb3duLWl0ZW0gKyAuZHJvcGRvd24taXRlbSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zZWFyY2gtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWFyY2gtYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIH1cbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-website/homepage/homepage.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main-website/homepage/homepage.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppMainWebsiteHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);

    var _c0 = function _c0() {
      return ["/post-job"];
    };

    var _c1 = function _c1() {
      return ["/find-job"];
    };

    var _c2 = function _c2() {
      return ["owl-theme", "row", "sliding"];
    };

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);

        this.singleCarousel = {
          margin: 25,
          nav: true,
          dots: false,
          stagePadding: 5,
          navText: ['<img src="assets/img/icon/prev.svg" style="width:30px;">', '<img src="assets/img/icon/next.svg" style="width:30px;">'],
          items: 1
        };
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 138,
      vars: 7,
      consts: [[1, "banner-area", "banner-1"], [1, "overlay"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-sm-12", "col-md-12", "order-lg-first"], [1, "banner-content", "content-padding"], [1, "banner-title", "gradient-text"], [1, "banner-btns"], [1, "btn", "btn-white", "btn-circled", "mr-3", 3, "routerLink"], [1, "btn", "btn-white", "btn-circled", 3, "routerLink"], [1, "col-lg-5", "order-first"], ["src", "assets/img/banner/banner-img.png", "alt", "", 1, "banner-img"], ["id", "service-head", 1, "bg-feature"], [1, "row"], [1, "col-lg-12", "col-sm-12", "m-auto"], [1, "section-heading", "text-white"], [1, "section-title"], ["id", "service"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-sm-6", "col-md-4"], [1, "service-box"], [1, "service-img-icon"], ["src", "assets/img/icon/contact.svg", "alt", "service-icon", 1, "img-fluid"], [1, "service-inner"], ["src", "assets/img/icon/transfer.svg", "alt", "service-icon", 1, "img-fluid"], ["src", "assets/img/icon/token.svg", "alt", "service-icon", 1, "img-fluid"], ["id", "testimonial", 1, "section-padding", "gradient-bg", "pt-0"], [1, "col-lg-8", "text-center"], [1, "mb-5"], [1, "mb-2"], [1, "col-lg-8", "m-auto", "col-sm-12", "col-md-12"], [3, "options", "carouselClasses"], [1, "item"], [1, "testimonial-content", "style-2"], [1, "author-info"], [1, "author-img"], ["src", "assets/img/author/3b.jpg", "alt", "", 1, "img-fluid"], [1, "icofont", "icofont-quote-left"], [1, "icofont", "icofont-quote-right"], [1, "author-text"], ["src", "assets/img/author/5b.jpg", "alt", "", 1, "img-fluid"], [1, "section"], [1, "mb-4", "text-center"], [1, "text-center"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-lg-6", "col-sm-12", "col-md-8", "mb-4"], ["src", "assets/img/how-we-work.png", "alt", "feature bg", 1, "img-fluid"], [1, "col-lg-6", "pl-4"], [1, "about-list"], [1, "icofont", "icofont-check-circled"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We are using blockchain as a secure payment method for all employers and freelancers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "post a job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "find a job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Smart contracts enable safe and quick payments on our platform.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Smart Contracts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Safe Transfers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Utility tokens on platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Trusted by hundred over years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dignissimos?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "owl-carousel", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "They is a great platform to anyone like who want to start buisiness but not get right decision. It\u2019s really great placefor new to start the buisness in righ way! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Marine Joshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Senior designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "They is a great platform to anyone like who want to start buisiness but not get right decision. It\u2019s really great placefor new to start the buisness in righ way! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Marine Joshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Senior designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "They is a great platform to anyone like who want to start buisiness but not get right decision. It\u2019s really great placefor new to start the buisness in righ way!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Marine Joshi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Senior designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "How we work?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Strategy 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae officiis, fugit sed fuga veritatis! Ex iste soluta quibusdam possimus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Strategy 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae officiis, fugit sed fuga veritatis! Ex iste soluta quibusdam possimus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Strategy 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae officiis, fugit sed fuga veritatis! Ex iste soluta quibusdam possimus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Strategy 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae officiis, fugit sed fuga veritatis! Ex iste soluta quibusdam possimus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.singleCarousel)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"]],
      styles: [".gradient-bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #fffffffa, #ffffffd4), url(/assets/img/bg/testimonial-bg.jpg);\n  background-position: center;\n  background-size: cover;\n}\n\n.team-img[_ngcontent-%COMP%] {\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top center;\n     object-position: top center;\n}\n\n@media screen and (max-width: 991px) {\n  .banner-area[_ngcontent-%COMP%]   .content-padding[_ngcontent-%COMP%] {\n    padding: 50px 0px 50px;\n  }\n\n  .banner-btns[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .banner-img[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-top: 10vh;\n    display: none;\n  }\n\n  .banner-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .banner-1[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .banner-area[_ngcontent-%COMP%]   .content-padding[_ngcontent-%COMP%] {\n    padding: 15vh 0px 50px;\n  }\n\n  .service-box[_ngcontent-%COMP%] {\n    margin: 0 auto 40px;\n    background-image: linear-gradient(to bottom, #f1f1f1ed, #e9e9e9fa), url(/assets/img/bg/pattern-bg.jpg);\n    border: 1px solid #ccc;\n  }\n\n  .team-section[_ngcontent-%COMP%]   .team-social[_ngcontent-%COMP%], .team-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .team-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .team-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi13ZWJzaXRlL2hvbWVwYWdlL0g6XFxXT1JLXFxBTkdVTEFSXFxGcmVlbGFuY2luZyBQcm9qZWN0XFxDb2RleFxcY29kZXgvc3JjXFxhcHBcXG1haW4td2Vic2l0ZVxcaG9tZXBhZ2VcXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXdlYnNpdGUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwR0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsOEJBQUE7S0FBQSwyQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxzQkFBQTtFQ0ROOztFREdFO0lBQ0ksa0JBQUE7RUNBTjs7RURFRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUNDTjs7RURDRTtJQUNJLGtCQUFBO0VDRU47O0VEQUU7SUFDSSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFFSTtJQUNJLHNCQUFBO0VDQ047O0VEQ0U7SUFDSSxtQkFBQTtJQUNBLHNHQUFBO0lBQ0Esc0JBQUE7RUNFTjs7RURBVTtJQUNJLGtCQUFBO0VDR2Q7RUREVTtJQUNJLGdCQUFBO0VDR2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4td2Vic2l0ZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmdyYWRpZW50LWJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZmZhLCAjZmZmZmZmZDQpLCB1cmwoL2Fzc2V0cy9pbWcvYmcvdGVzdGltb25pYWwtYmcuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50ZWFtLWltZ3tcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAuYmFubmVyLWFyZWEgLmNvbnRlbnQtcGFkZGluZyB7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHggNTBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXItYnRuc3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLWltZ3tcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5iYW5uZXItdGl0bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci0xe1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpXHJcbntcclxuICAgIC5iYW5uZXItYXJlYSAuY29udGVudC1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDE1dmggMHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZS1ib3h7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjFmMWYxZWQsICNlOWU5ZTlmYSksIHVybCgvYXNzZXRzL2ltZy9iZy9wYXR0ZXJuLWJnLmpwZyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgICAgfVxyXG4gICAgICAgIC50ZWFtLXNlY3Rpb257XHJcbiAgICAgICAgICAgIC50ZWFtLXNvY2lhbCxoNCxwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuIiwiLmdyYWRpZW50LWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZmZhLCAjZmZmZmZmZDQpLCB1cmwoL2Fzc2V0cy9pbWcvYmcvdGVzdGltb25pYWwtYmcuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGVhbS1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYmFubmVyLWFyZWEgLmNvbnRlbnQtcGFkZGluZyB7XG4gICAgcGFkZGluZzogNTBweCAwcHggNTBweDtcbiAgfVxuXG4gIC5iYW5uZXItYnRucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJhbm5lci1pbWcge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJhbm5lci10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJhbm5lci0xIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5iYW5uZXItYXJlYSAuY29udGVudC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNXZoIDBweCA1MHB4O1xuICB9XG5cbiAgLnNlcnZpY2UtYm94IHtcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMWYxZjFlZCwgI2U5ZTllOWZhKSwgdXJsKC9hc3NldHMvaW1nL2JnL3BhdHRlcm4tYmcuanBnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgLnRlYW0tc2VjdGlvbiAudGVhbS1zb2NpYWwsIC50ZWFtLXNlY3Rpb24gaDQsIC50ZWFtLXNlY3Rpb24gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZWFtLXNlY3Rpb24gaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-website/main-website.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main-website/main-website.component.ts ***!
    \********************************************************/

  /*! exports provided: MainWebsiteComponent */

  /***/
  function srcAppMainWebsiteMainWebsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainWebsiteComponent", function () {
      return MainWebsiteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/main-website/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/main-website/footer/footer.component.ts");

    function MainWebsiteComponent_app_header_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
      }
    }

    function MainWebsiteComponent_app_footer_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
      }
    }

    var MainWebsiteComponent = /*#__PURE__*/function () {
      function MainWebsiteComponent(router) {
        var _this2 = this;

        _classCallCheck(this, MainWebsiteComponent);

        this.router = router;
        this.showHeader = true;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            if (event['url'].includes('/welcome/')) {
              _this2.showHeader = false;
            } else {
              _this2.showHeader = true;
            }
          }
        });
      }

      _createClass(MainWebsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainWebsiteComponent;
    }();

    MainWebsiteComponent.ɵfac = function MainWebsiteComponent_Factory(t) {
      return new (t || MainWebsiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MainWebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainWebsiteComponent,
      selectors: [["app-main-website"]],
      decls: 4,
      vars: 2,
      consts: [[1, "website-wrapper"], [4, "ngIf"]],
      template: function MainWebsiteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainWebsiteComponent_app_header_1_Template, 1, 0, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainWebsiteComponent_app_footer_3_Template, 1, 0, "app-footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4td2Vic2l0ZS9tYWluLXdlYnNpdGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainWebsiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-website',
          templateUrl: './main-website.component.html',
          styleUrls: ['./main-website.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! H:\WORK\ANGULAR\Freelancing Project\Codex\codex\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map