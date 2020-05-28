function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-login-signup-login-signup-module"], {
  /***/
  "./src/app/main-website/login-signup/login-signup.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main-website/login-signup/login-signup.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoginSignupComponent */

  /***/
  function srcAppMainWebsiteLoginSignupLoginSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function () {
      return LoginSignupComponent;
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

    function LoginSignupComponent_h2_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Freelancer Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginSignupComponent_h2_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employer Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginSignupComponent_h2_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Freelancer SignUp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginSignupComponent_h2_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employer SignUp ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginSignupComponent = /*#__PURE__*/function () {
      function LoginSignupComponent(role, router) {
        _classCallCheck(this, LoginSignupComponent);

        this.role = role;
        this.router = router;
      }

      _createClass(LoginSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.role.params.subscribe(function (result) {
            _this.roleSelected = result.role;
            _this.toRender = result.render;
            console.log(_this.roleSelected);

            if (_this.roleSelected == 'freelancer') {
              _this.isFreelancer = true;
            } else {
              _this.isFreelancer = false;
            }

            if (_this.toRender == 'signup') _this.showSignup();else _this.showLogin();
          });
          this.formFunctions();
        }
      }, {
        key: "verifyFreelancer",
        value: function verifyFreelancer() {
          this.router.navigate(['/register-freelancer']);
        }
      }, {
        key: "loginFreelancer",
        value: function loginFreelancer() {
          this.router.navigate(['/freelancer']);
        }
      }, {
        key: "formFunctions",
        value: function formFunctions() {
          $(document).ready(function () {
            'use strict';

            var usernameError = true,
                emailError = true,
                passwordError = true,
                passConfirm = true; // Detect browser for css purpose

            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
              $('.form form label').addClass('fontSwitch');
            } // Label effect


            $('input').focus(function () {
              $(this).siblings('label').addClass('active');
            }); // Reload page

            $('a.profile').on('click', function () {
              location.reload(true);
            });
          });
        }
      }, {
        key: "showSignup",
        value: function showSignup() {
          $('.signup-piece').removeClass('switched');
          $('.login-piece').addClass('switched');
        }
      }, {
        key: "showLogin",
        value: function showLogin() {
          $('.signup-piece').addClass('switched');
          $('.login-piece').removeClass('switched');
        }
      }, {
        key: "showVerify",
        value: function showVerify() {
          $('.signup-piece').addClass('switched');
          $('.login-piece').addClass('switched');
          $('.verify-piece').removeClass('switched');
        }
      }]);

      return LoginSignupComponent;
    }();

    LoginSignupComponent.ɵfac = function LoginSignupComponent_Factory(t) {
      return new (t || LoginSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginSignupComponent,
      selectors: [["app-login-signup"]],
      decls: 83,
      vars: 4,
      consts: [[1, "wrapper"], [1, "container"], ["id", "formHolder"], [1, "row"], [1, "col-lg-6", "brand"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo.PNG", "alt", ""], [1, "heading"], ["src", "assets/img/login-img.svg", "alt", "login image", 1, "login-img"], [1, "col-lg-6", "form"], [1, "login", "form-peice", "login-piece", "switched"], [1, "form-head"], ["class", "gradient-text-color", 4, "ngIf"], ["action", "#", "method", "post", 1, "login-form"], [1, "form-group"], ["for", "loginemail"], ["type", "email", "name", "loginemail", "id", "loginemail", "required", ""], ["for", "loginPassword"], ["type", "password", "name", "loginPassword", "id", "loginPassword", "required", ""], [1, "CTA"], ["type", "button", "value", "Login", 3, "click"], [1, "switch", 3, "click"], [1, "signup", "form-peice", "signup-piece", "switched"], ["action", "#", "method", "post", 1, "signup-form"], ["for", "name"], ["type", "text", "name", "username", "id", "name", 1, "name"], [1, "error"], ["for", "email"], ["type", "email", "name", "emailAdress", "id", "email", 1, "email"], ["for", "phone"], ["type", "text", "name", "phone", "id", "phone"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "pass"], ["for", "passwordCon"], ["type", "password", "name", "passwordCon", "id", "passwordCon", 1, "passConfirm"], ["type", "button", "value", "Signup Now", 3, "click"], [1, "verify", "form-peice", "verify-piece", "switched"], [1, "gradient-text-color"], ["for", "code"], ["type", "text", "name", "code", "id", "code", "required", ""], ["type", "submit", "value", "Verify", 3, "click"], [1, "switch"]],
      template: function LoginSignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Codex on Althash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Leading Software Innovation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginSignupComponent_h2_16_Template, 2, 0, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginSignupComponent_h2_17_Template, 2, 0, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email Adderss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_input_click_28_listener() {
            return ctx.loginFreelancer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_a_click_29_listener() {
            return ctx.showSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "I'm new here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LoginSignupComponent_h2_33_Template, 2, 0, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginSignupComponent_h2_34_Template, 2, 0, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email Adderss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone Number - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Optional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_input_click_63_listener() {
            return ctx.showVerify();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_a_click_64_listener() {
            return ctx.showLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "I already have an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Welcome to the platform. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Verify your email. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " A code has been sent to your registered email ID. Enter the code below to get started. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Verification code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_Template_input_click_80_listener() {
            return ctx.verifyFreelancer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Resend Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFreelancer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFreelancer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFreelancer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFreelancer);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 0 2rem;\n  background-image: linear-gradient(135deg, #301ce0d0 0%, rgba(83, 159, 253, 0.781) 30%, #51eca6c0 100%), url(/assets/img/wrapper-bg.jpeg);\n  background-position: bottom right;\n  background-repeat: no-repeat;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\na[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none !important;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n}\n\nsection#formHolder[_ngcontent-%COMP%] {\n  padding: 30px 0 50px;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  margin: 3rem 0 1rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.brand[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: url(https://goo.gl/A0ynht);\n  background-size: cover;\n  background-position: center center;\n  color: #fff;\n  min-height: 630px;\n  position: relative;\n  transition: all 0.6s cubic-bezier(1, -0.375, 0.285, 0.995);\n  z-index: 500;\n}\n\n.brand.active[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.brand[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-radius: 2rem;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: linear-gradient(to bottom right, #0082c1, #009379);\n  z-index: -1;\n}\n\n.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  color: #f95959;\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: none;\n  line-height: 1em;\n}\n\n.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n\n.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  transition: all 0.6s;\n}\n\n.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%] {\n  top: 100px;\n  left: 100px;\n  transform: translate(0);\n}\n\n.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 800;\n  text-transform: capitalize;\n  letter-spacing: -0.1rem;\n  margin-bottom: 0;\n}\n\n.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  margin-top: 1rem;\n  text-transform: capitalize;\n  letter-spacing: -0.02rem;\n  white-space: 4px;\n}\n\n.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(-10%, -50%);\n}\n\n.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 400;\n}\n\n.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 8px 30px;\n  background: #f95959;\n  text-decoration: none;\n  color: #fff;\n  border-radius: 30px;\n}\n\n.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.9s;\n  transform: translateY(20px);\n  opacity: 0;\n}\n\n.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p.active[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.login-img[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 300px;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%] {\n  background: #111111;\n  min-height: 630px;\n  border-radius: 2rem;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  color: #bbbbbb;\n  padding: 30px 0 60px;\n  transition: all 0.9s cubic-bezier(1, -0.375, 0.285, 0.995);\n  position: absolute;\n  top: 0;\n  left: -30%;\n  width: 130%;\n  overflow: hidden;\n}\n\n@-webkit-keyframes fade_in {\n  0% {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes fade_in {\n  0% {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n.form-head[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 75%;\n  float: right;\n}\n\n.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  font-family: \"Raleway\", sans-serif;\n  text-transform: capitalize;\n}\n\n.form-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  padding: 0 1rem;\n}\n\n.form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n  width: 100%;\n  left: 0;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  margin: 0;\n  width: 70%;\n  position: absolute;\n  top: 52%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #f95959 !important;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #f95959 !important;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n  transform: translateY(40px);\n  transition: all 0.4s;\n  cursor: text;\n  z-index: -1;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%] {\n  transform: translateY(10px);\n  font-size: 10px;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.fontSwitch[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif !important;\n  font-weight: 600;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]) {\n  background: none;\n  outline: none;\n  border: none;\n  display: block;\n  padding: 10px 0;\n  width: 100%;\n  border-bottom: 1px solid #eee;\n  color: #fff;\n  font-weight: 600;\n  font-size: 15px;\n  font-family: \"Raleway\", sans-serif;\n  z-index: 1;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]).hasError {\n  border-color: #f95959;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span.error[_ngcontent-%COMP%] {\n  color: #f95959;\n  font-size: 10px;\n  position: absolute;\n  font-weight: 400;\n  bottom: -25px;\n  letter-spacing: 0.5px;\n  right: 0;\n  display: none;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  color: #f95959;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: capitalize;\n  padding: 0.5rem 1.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f95959;\n  color: #fff;\n  border-radius: 30px;\n  margin-right: 20px;\n  border: none;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  margin-top: 1rem;\n  float: right;\n  font-family: \"Raleway\", sans-serif;\n  color: #bbbbbb;\n  text-decoration: underline;\n  transition: all 0.3s;\n}\n\n.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%]:hover {\n  color: #f95959;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-internal-autofill-selected {\n  background-color: transparent !important;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n\n  section#formHolder[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%] {\n    min-height: 200px !important;\n    display: none;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   div.brand.active[_ngcontent-%COMP%] {\n    min-height: 100vh !important;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%] {\n    top: 200px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 30px;\n    font-size: 10px;\n  }\n\n  .form-head[_ngcontent-%COMP%] {\n    width: 100%;\n    float: none;\n    padding: 0 1rem 1rem;\n  }\n  .form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n  }\n\n  .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    transform: translate(0, 0);\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%] {\n    margin: auto;\n    top: 0;\n    left: 0;\n    position: relative;\n    width: 95vw !important;\n    border-radius: 2px;\n    max-width: 500px;\n    transform: translate(0, 0);\n    transition: all 0.9s cubic-bezier(1, -0.375, 0.285, 0.995);\n    -webkit-animation: fade_in 0.5s cubic-bezier(1, -0.375, 0.285, 0.995) forwards;\n            animation: fade_in 0.5s cubic-bezier(1, -0.375, 0.285, 0.995) forwards;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    left: 0;\n  }\n\n  section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding: 1rem 2rem;\n    left: 0%;\n  }\n}\n\n@media (max-width: 480px) {\n  section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100vw;\n    margin-left: 0;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 50px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi13ZWJzaXRlL2xvZ2luLXNpZ251cC9IOlxcV09SS1xcQU5HVUxBUlxcRnJlZWxhbmNpbmcgUHJvamVjdFxcQ29kZXhcXGNvZGV4L3NyY1xcYXBwXFxtYWluLXdlYnNpdGVcXGxvZ2luLXNpZ251cFxcbG9naW4tc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXdlYnNpdGUvbG9naW4tc2lnbnVwL2xvZ2luLXNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdJQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtBQ0NKOztBRENFO0VBQ0UsbUJBQUE7QUNFSjs7QURESTtFQUNFLFdBQUE7QUNHTjs7QURDRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBEQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtFQUNBLGVB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RUNrQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4td2Vic2l0ZS9sb2dpbi1zaWdudXAvbG9naW4tc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMDFjZTBkMCAwJSwgcmdiYSg4MywgMTU5LCAyNTMsIDAuNzgxKSAzMCUsICM1MWVjYTZjMCAxMDAlKSwgdXJsKC9hc3NldHMvaW1nL3dyYXBwZXItYmcuanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaHRtbCxib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNmb3JtSG9sZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMCA1MHB4O1xyXG4gIH1cclxuICAud2VsY29tZS10ZXh0e1xyXG4gICAgbWFyZ2luOiAzcmVtIDAgMXJlbTtcclxuICAgIGgxe1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5icmFuZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ29vLmdsL0EweW5odCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWluLWhlaWdodDogNjMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL2JveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMSwgLTAuMzc1LCAwLjI4NSwgMC45OTUpO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gIH1cclxuICAuYnJhbmQuYWN0aXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnJhbmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czoycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDA4MmMxLCAjMDA5Mzc5KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuYnJhbmQgYS5sb2dvIHtcclxuICAgIGNvbG9yOiAjZjk1OTU5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgfVxyXG4gIC5icmFuZCBhLmxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxuICB9XHJcbiAgLmJyYW5kIC5oZWFkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICB9XHJcbiAgLmJyYW5kIC5oZWFkaW5nLmFjdGl2ZSB7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgLmJyYW5kIC5oZWFkaW5nIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5icmFuZCAuaGVhZGluZyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogNHB4O1xyXG4gIH1cclxuICAuYnJhbmQgLnN1Y2Nlc3MtbXNnIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIC5icmFuZCAuc3VjY2Vzcy1tc2cgcCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5NTk1OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbiAgLmJyYW5kIC5zdWNjZXNzLW1zZyBwLCAuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYnJhbmQgLnN1Y2Nlc3MtbXNnIHAuYWN0aXZlLCAuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5sb2dpbi1pbWd7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgIHdpZHRoOjMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZm9ybSAuZm9ybS1wZWljZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTExMTExO1xyXG4gICAgbWluLWhlaWdodDogNjMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGNvbG9yOiAjYmJiYmJiO1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cyBjdWJpYy1iZXppZXIoMSwgLTAuMzc1LCAwLjI4NSwgMC45OTUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTMwJTtcclxuICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBmYWRlX2luIHtcclxuICAgIDAle1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgLmZvcm0taGVhZHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgfVxyXG4gICAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuZm9ybSAuZm9ybS1wZWljZS5zd2l0Y2hlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAuZm9ybSBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyJTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAuZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmZvcm0gZm9ybSAuZm9ybS1ncm91cC5oYXNFcnJvciBpbnB1dCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOTU5NTkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvcm0gZm9ybSAuZm9ybS1ncm91cC5oYXNFcnJvciBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y5NTk1OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9ybSBmb3JtIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5mb3JtIGZvcm0gbGFiZWwuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmZvcm0gZm9ybSBsYWJlbC5mb250U3dpdGNoIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmZvcm0gZm9ybSBpbnB1dDpub3QoW3R5cGU9c3VibWl0XSkge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5mb3JtIGZvcm0gaW5wdXQ6bm90KFt0eXBlPXN1Ym1pdF0pLmhhc0Vycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5NTk1OTtcclxuICB9XHJcbiAgLmZvcm0gZm9ybSBzcGFuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZjk1OTU5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtIGZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgY29sb3I6ICNmOTU5NTk7XHJcbiAgfVxyXG4gIC5mb3JtIGZvcm0gLkNUQSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuZm9ybSBmb3JtIC5DVEEgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmOTU5NTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtIGZvcm0gLkNUQSBhLnN3aXRjaCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNiYmJiYmI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICAuZm9ybSBmb3JtIC5DVEEgYS5zd2l0Y2g6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmOTU5NTk7XHJcbiAgfVxyXG5cclxuICAuZm9ybXtcclxuICAgIGlucHV0Oi1pbnRlcm5hbC1hdXRvZmlsbC1zZWxlY3RlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZWN0aW9uI2Zvcm1Ib2xkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiNmb3JtSG9sZGVyIGRpdi5icmFuZCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uI2Zvcm1Ib2xkZXIgZGl2LmJyYW5kLmFjdGl2ZSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uI2Zvcm1Ib2xkZXIgZGl2LmJyYW5kIC5oZWFkaW5nLmFjdGl2ZSB7XHJcbiAgICAgIHRvcDogMjAwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uI2Zvcm1Ib2xkZXIgZGl2LmJyYW5kIC5zdWNjZXNzLW1zZyBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiNmb3JtSG9sZGVyIGRpdi5icmFuZCAuc3VjY2Vzcy1tc2cgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1oZWFke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc2VjdGlvbiNmb3JtSG9sZGVyIC5mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgXHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5mb3JtIGZvcm17XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgIH1cclxuICAgIHNlY3Rpb24jZm9ybUhvbGRlciAuZm9ybSAuZm9ybS1wZWljZSB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOXMgY3ViaWMtYmV6aWVyKDEsIC0wLjM3NSwgMC4yODUsIDAuOTk1KTtcclxuICAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlX2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIC0wLjM3NSwgMC4yODUsIDAuOTk1KSBmb3J3YXJkcztcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uI2Zvcm1Ib2xkZXIgLmZvcm0gLmZvcm0tcGVpY2Uuc3dpdGNoZWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIHNlY3Rpb24jZm9ybUhvbGRlciAuZm9ybSAuZm9ybS1wZWljZSA+IGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIHNlY3Rpb24jZm9ybUhvbGRlciAuZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAwIDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMDFjZTBkMCAwJSwgcmdiYSg4MywgMTU5LCAyNTMsIDAuNzgxKSAzMCUsICM1MWVjYTZjMCAxMDAlKSwgdXJsKC9hc3NldHMvaW1nL3dyYXBwZXItYmcuanBlZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnNlY3Rpb24jZm9ybUhvbGRlciB7XG4gIHBhZGRpbmc6IDMwcHggMCA1MHB4O1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgbWFyZ2luOiAzcmVtIDAgMXJlbTtcbn1cbi53ZWxjb21lLXRleHQgaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJyYW5kIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ29vLmdsL0EweW5odCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMSwgLTAuMzc1LCAwLjI4NSwgMC45OTUpO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5icmFuZC5hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJyYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMDgyYzEsICMwMDkzNzkpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJyYW5kIGEubG9nbyB7XG4gIGNvbG9yOiAjZjk1OTU5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbn1cblxuLmJyYW5kIGEubG9nbyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbn1cblxuLmJyYW5kIC5oZWFkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cblxuLmJyYW5kIC5oZWFkaW5nLmFjdGl2ZSB7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbn1cblxuLmJyYW5kIC5oZWFkaW5nIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJyYW5kIC5oZWFkaW5nIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAycmVtO1xuICB3aGl0ZS1zcGFjZTogNHB4O1xufVxuXG4uYnJhbmQgLnN1Y2Nlc3MtbXNnIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTUwJSk7XG59XG5cbi5icmFuZCAuc3VjY2Vzcy1tc2cgcCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJyYW5kIC5zdWNjZXNzLW1zZyBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYmFja2dyb3VuZDogI2Y5NTk1OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmJyYW5kIC5zdWNjZXNzLW1zZyBwLCAuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC45cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYnJhbmQgLnN1Y2Nlc3MtbXNnIHAuYWN0aXZlLCAuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW4taW1nIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0gLmZvcm0tcGVpY2Uge1xuICBiYWNrZ3JvdW5kOiAjMTExMTExO1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICNiYmJiYmI7XG4gIHBhZGRpbmc6IDMwcHggMCA2MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC45cyBjdWJpYy1iZXppZXIoMSwgLTAuMzc1LCAwLjI4NSwgMC45OTUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTMwJTtcbiAgd2lkdGg6IDEzMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuLmZvcm0taGVhZCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiA3NSU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5mb3JtLWhlYWQgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5mb3JtLWhlYWQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4uZm9ybSAuZm9ybS1wZWljZS5zd2l0Y2hlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuXG4uZm9ybSBmb3JtIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGxlZnQ6IDYwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mb3JtIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0gZm9ybSAuZm9ybS1ncm91cC5oYXNFcnJvciBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI2Y5NTk1OSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybSBmb3JtIC5mb3JtLWdyb3VwLmhhc0Vycm9yIGxhYmVsIHtcbiAgY29sb3I6ICNmOTU5NTkgIWltcG9ydGFudDtcbn1cblxuLmZvcm0gZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGN1cnNvcjogdGV4dDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5mb3JtIGZvcm0gbGFiZWwuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb3JtIGZvcm0gbGFiZWwuZm9udFN3aXRjaCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybSBmb3JtIGlucHV0Om5vdChbdHlwZT1zdWJtaXRdKSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mb3JtIGZvcm0gaW5wdXQ6bm90KFt0eXBlPXN1Ym1pdF0pLmhhc0Vycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjk1OTU5O1xufVxuXG4uZm9ybSBmb3JtIHNwYW4uZXJyb3Ige1xuICBjb2xvcjogI2Y5NTk1OTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvdHRvbTogLTI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtIGZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBjb2xvcjogI2Y5NTk1OTtcbn1cblxuLmZvcm0gZm9ybSAuQ1RBIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvcm0gZm9ybSAuQ1RBIGlucHV0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZjk1OTU5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0gZm9ybSAuQ1RBIGEuc3dpdGNoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2JiYmJiYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uZm9ybSBmb3JtIC5DVEEgYS5zd2l0Y2g6aG92ZXIge1xuICBjb2xvcjogI2Y5NTk1OTtcbn1cblxuLmZvcm0gaW5wdXQ6LWludGVybmFsLWF1dG9maWxsLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBzZWN0aW9uI2Zvcm1Ib2xkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBzZWN0aW9uI2Zvcm1Ib2xkZXIgZGl2LmJyYW5kIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBzZWN0aW9uI2Zvcm1Ib2xkZXIgZGl2LmJyYW5kLmFjdGl2ZSB7XG4gICAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIHNlY3Rpb24jZm9ybUhvbGRlciBkaXYuYnJhbmQgLmhlYWRpbmcuYWN0aXZlIHtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIHNlY3Rpb24jZm9ybUhvbGRlciBkaXYuYnJhbmQgLnN1Y2Nlc3MtbXNnIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIHNlY3Rpb24jZm9ybUhvbGRlciBkaXYuYnJhbmQgLnN1Y2Nlc3MtbXNnIGEge1xuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWhlYWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICB9XG4gIC5mb3JtLWhlYWQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgc2VjdGlvbiNmb3JtSG9sZGVyIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuZm9ybSBmb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cblxuICBzZWN0aW9uI2Zvcm1Ib2xkZXIgLmZvcm0gLmZvcm0tcGVpY2Uge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cyBjdWJpYy1iZXppZXIoMSwgLTAuMzc1LCAwLjI4NSwgMC45OTUpO1xuICAgIGFuaW1hdGlvbjogZmFkZV9pbiAwLjVzIGN1YmljLWJlemllcigxLCAtMC4zNzUsIDAuMjg1LCAwLjk5NSkgZm9yd2FyZHM7XG4gIH1cblxuICBzZWN0aW9uI2Zvcm1Ib2xkZXIgLmZvcm0gLmZvcm0tcGVpY2Uuc3dpdGNoZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIHNlY3Rpb24jZm9ybUhvbGRlciAuZm9ybSAuZm9ybS1wZWljZSA+IGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGxlZnQ6IDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgc2VjdGlvbiNmb3JtSG9sZGVyIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-signup',
          templateUrl: './login-signup.component.html',
          styleUrls: ['./login-signup.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-website/login-signup/login-signup.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main-website/login-signup/login-signup.module.ts ***!
    \******************************************************************/

  /*! exports provided: LoginSignupModule */

  /***/
  function srcAppMainWebsiteLoginSignupLoginSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSignupModule", function () {
      return LoginSignupModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-signup.component */
    "./src/app/main-website/login-signup/login-signup.component.ts");

    var routes = [{
      path: '',
      component: _login_signup_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupComponent"]
    }];

    var LoginSignupModule = function LoginSignupModule() {
      _classCallCheck(this, LoginSignupModule);
    };

    LoginSignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginSignupModule
    });
    LoginSignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginSignupModule_Factory(t) {
        return new (t || LoginSignupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginSignupModule, {
        declarations: [_login_signup_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_signup_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=main-website-login-signup-login-signup-module-es5.js.map