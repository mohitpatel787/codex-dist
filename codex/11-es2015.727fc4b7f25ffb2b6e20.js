(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Kj3r:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("7o/Q"),o=n("quSY");class i extends o.a{constructor(e,t){super()}schedule(e,t=0){return this}}class s extends i{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(o){n=!0,r=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}let a=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class l extends a{constructor(e,t=a.now){super(e,()=>l.delegate&&l.delegate!==this?l.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return l.delegate&&l.delegate!==this?l.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}const d=new l(s);function c(e,t=d){return n=>n.lift(new m(e,t))}class m{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new u(e,this.dueTime,this.scheduler))}}class u extends r.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(f,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function f(e){e.debouncedNext()}},ldWZ:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginSignupModule",(function(){return N}));var r=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),s=n("Kj3r"),a=n("xgIS"),l=n("PSD3"),d=n.n(l);class c{static patternValidator(e,t){return n=>n.value?e.test(n.value)?null:t:null}static passwordMatchValidator(e){e.get("password").value!==e.get("confirmPassword").value&&e.get("confirmPassword").setErrors({NoPassswordMatch:!0})}}var m=n("fXoL"),u=n("N+K7"),f=n("n90K"),g=n("dz5x");function p(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h2",40),m["\u0275\u0275text"](1," Freelancer Login "),m["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h2",40),m["\u0275\u0275text"](1," Employer Login "),m["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h2",40),m["\u0275\u0275text"](1," Freelancer SignUp "),m["\u0275\u0275elementEnd"]())}function C(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h2",40),m["\u0275\u0275text"](1," Employer SignUp "),m["\u0275\u0275elementEnd"]())}function w(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",53),m["\u0275\u0275text"](1,"Please enter your name!"),m["\u0275\u0275elementEnd"]())}function P(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",53),m["\u0275\u0275text"](1,"Please enter your email!"),m["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",53),m["\u0275\u0275text"](1,"Please enter your username!"),m["\u0275\u0275elementEnd"]())}function y(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",53),m["\u0275\u0275text"](1,"Username already exist!"),m["\u0275\u0275elementEnd"]())}function O(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," Enter a valid phone number! "),m["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",53),m["\u0275\u0275template"](1,O,2,0,"p",54),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.form.get("phoneNumber").errors.minlength||e.form.get("phoneNumber").errors.maxlength)}}function x(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," Please enter password! "),m["\u0275\u0275elementEnd"]())}function M(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"Password must contain atleast 6 characters which contain 1 uppercase letter and a number!"),m["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",53),m["\u0275\u0275template"](1,x,2,0,"p",54),m["\u0275\u0275template"](2,M,2,0,"p",54),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.form.controls.password.hasError("required")),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.form.controls.password.hasError("minlength")||e.form.controls.password.hasError("hasNumber")||e.form.controls.password.hasError("hasCapitalCase"))}}const E=[{path:"",component:(()=>{class e{constructor(e,t,n,r,o,i){this.role=e,this.router=t,this.http=n,this.storage=r,this.share=o,this.fb=i,this.usernameExist=!1,this.loadingBtnContent='<i class="fa fa-circle-o-notch fa-spin"></i> Hold On...',this.submitted=!1,this.form=this.createSignupForm()}createSignupForm(){return this.fb.group({fullName:new i.d(null,{validators:[i.v.required]}),userName:new i.d(null,{validators:[i.v.required]}),phoneNumber:new i.d(null,{validators:[i.v.minLength(10),i.v.maxLength(10)]}),email:[null,i.v.compose([i.v.email,i.v.required])],password:[null,i.v.compose([i.v.required,c.patternValidator(/\d/,{hasNumber:!0}),c.patternValidator(/[A-Z]/,{hasCapitalCase:!0}),i.v.minLength(6)])],typeUser:new i.d(null,{validators:[i.v.required]})})}ngOnInit(){this.verifyCode=new i.f({userName:new i.d(null,{validators:[i.v.required]}),typeUser:new i.d(null,{validators:[i.v.required]}),verifyCode:new i.d(null,{validators:[i.v.required]})}),this.resetPasswordForm=new i.f({userName:new i.d(null,{validators:[i.v.required]}),typeUser:new i.d(null,{validators:[i.v.required]}),verifyCode:new i.d(null,{validators:[i.v.required]}),newPassword:new i.d(null,{validators:[i.v.required]}),cpassword:new i.d(null,{validators:[i.v.required]})}),this.loginform=new i.f({userName:new i.d(null,{validators:[i.v.required]}),password:new i.d(null,{validators:[i.v.required]}),typeUser:new i.d(null,{validators:[i.v.required]})}),this.role.params.subscribe(e=>{this.roleSelected=e.role,this.toRender=e.render,console.log(this.roleSelected),this.isFreelancer="freelancer"==this.roleSelected,"signup"==this.toRender?this.showSignup():this.showLogin()}),this.formFunctions(),Object(a.a)(document.getElementById("username"),"keyup").pipe(Object(s.a)(1e3)).subscribe(()=>{let e;console.log(this.form.value.userName),e=this.isFreelancer?{userName:this.form.value.userName,typeUser:0}:{userName:this.form.value.userName,typeUser:1},console.log(e),this.http.postToBackend("/users/check/username",e).then(e=>{console.log(e),7007==e.statusCode?(document.getElementById("username").style.backgroundImage="url('/assets/img/icons/close.png')",this.usernameExist=!0):(document.getElementById("username").style.backgroundImage="url('/assets/img/icons/check.png')",this.usernameExist=!1)})})}openVerifyModal(){d.a.fire({title:"Email not verified!",text:"You have not verified your email on this platform",icon:"warning",showCancelButton:!0,confirmButtonText:"Send verification link",cancelButtonText:"Close"}).then(e=>{e.value&&this.http.postToBackend("/users/resend",{username:this.loginform.value.userName,isSignup:!0,typeUser:this.loginform.value.typeUser}).then(e=>{console.log(e),7e3==e.statusCode?(this.form.patchValue({userName:this.loginform.value.userName}),this.showVerify(),d.a.fire("Mail Sent!","The link have been sent to your mail, please click the link to verify your account","success")):d.a.fire("Registeration Failed",e.msg,"error")})})}verifyFreelancer(){this.verifyCode.patchValue({userName:this.form.value.userName}),this.verifyCode.patchValue(this.isFreelancer?{typeUser:0}:{typeUser:1}),console.log(this.verifyCode.value),this.verifyCode.invalid||(console.log(this.verifyCode.value),this.http.postToBackend("/users/email/verify",this.verifyCode.value).then(e=>{console.log(e),7e3==e.statusCode?d.a.fire("Verification Successfull!","Your mail is verified successfully. You can login now","success").then(e=>{console.log(e),this.showLogin()}):d.a.fire("Verification Failed!","Your code is incorrect. Please enter the correct code.","error").then(e=>{console.log(e)})}))}loginFreelancer(){var e;e=$("#loginBtn"),this.originalBtnContent=e.val(),e.html(this.loadingBtnContent),this.loginform.patchValue(this.isFreelancer?{typeUser:0}:{typeUser:1}),console.log(this.loginform.value),this.loginform.invalid?e.html("Login"):(console.log(this.loginform.value),this.http.postToBackend("/users/login",this.loginform.value).then(t=>{if(console.log(t),e.html("Login"),7005!=t.statusCode){if(7004!=t.statusCode)return 7010==t.statusCode?this.openVerifyModal():void(7e3==t.statusCode&&(this.storage.saveUser(t.data.user),this.storage.saveToken(t.data.token),this.share.updateUser(t.data.user),this.share.updateToken(t.data.token),this.isFreelancer?(this.storage.saveUserRole("freelancer"),this.share.updateUserRole("freelancer"),this.router.navigate(t.data.user.profile_filled?["/freelancer"]:["/register-freelancer"])):(this.storage.saveUserRole("employer"),this.share.updateUserRole("employer"),this.router.navigate(["/employer"]))));d.a.fire("Login Failed!","Incorrect Password","warning")}else d.a.fire("Login Failed!","Username not exist, please enter correct Username","error")}).catch(e=>{console.log(e)}))}formFunctions(){$(document).ready((function(){navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".form form label").addClass("fontSwitch"),$("input").focus((function(){$(this).siblings("label").addClass("active")})),$("a.profile").on("click",(function(){location.reload(!0)}))}))}showSignup(){$(".signup-piece").removeClass("switched"),$(".reset-piece").addClass("switched"),$(".login-piece").addClass("switched"),$(".verify-piece").addClass("switched")}showLogin(){$(".login-piece").removeClass("switched"),$(".signup-piece").addClass("switched"),$(".reset-piece").addClass("switched"),$(".verify-piece").addClass("switched")}showVerify(){$(".signup-piece").addClass("switched"),$(".reset-piece").addClass("switched"),$(".login-piece").addClass("switched"),$(".verify-piece").removeClass("switched")}showReset(){$(".signup-piece").addClass("switched"),$(".login-piece").addClass("switched"),$(".verify-piece").addClass("switched"),$(".reset-piece").removeClass("switched")}forgotPassword(){d.a.fire({title:"Reset Password",text:"Enter your User to get the reset password",input:"text",inputPlaceholder:"Enter your Username",showCancelButton:!0,confirmButtonText:"Submit",showLoaderOnConfirm:!0,allowOutsideClick:()=>!d.a.isLoading()}).then(e=>{if(e.value){let t;this.isFreelancer?(this.resetPasswordForm.patchValue({userName:e.value,typeUser:0}),t={isSignup:!1,userName:e.value,typeUser:0}):(this.resetPasswordForm.patchValue({userName:e.value,typeUser:1}),t={isSignup:!1,userName:e.value,typeUser:1}),console.log(t),this.http.postToBackend("/users/resend",t).then(e=>{console.log(e),7e3===e.statusCode?(this.showReset(),d.a.fire("Mail Sent!","Link have been sent to your mail for reset password","success")):d.a.fire("Failed!",7005===e.statusCode?"Username not found":"Password reset failed try after sometime","error")})}})}resetPassword(){console.log(this.resetPasswordForm.value),this.resetPasswordForm.invalid||(console.log(this.resetPasswordForm.value),this.http.postToBackend("/users/password/reset",this.resetPasswordForm.value).then(e=>{console.log(e),7e3===e.statusCode?(d.a.fire("Password Reset!","Your Password is Reset Successfull","success"),this.showLogin()):d.a.fire("Failed!","Your Password is Reset is failed. Try after sometime","error")}).catch(e=>{console.log(e)}))}imagepic(e){this.form.patchValue({profile_pic:e.target.files[0]})}register(){var e;e=$("#signupBtn"),this.originalBtnContent=e.val(),e.html(this.loadingBtnContent),this.form.patchValue(this.isFreelancer?{typeUser:0}:{typeUser:1}),console.log(this.form.value),this.submitted=!0,this.form.invalid||this.usernameExist?e.html("Signup Now"):(null!=this.form.value.phoneNumber&&""!=this.form.value.phoneNumber||this.form.removeControl("phoneNumber"),console.log(this.form.value),this.http.postToBackend("/users/register",this.form.value).then(t=>{e.html("Signup Now"),console.log(this.originalBtnContent,this.loadingBtnContent),console.log(t),7007==t.statusCode?d.a.fire("Registeration Failed","Email already exits, please choose a diffrent email","error"):7e3==t.statusCode?(d.a.fire("Registeration Successfull","A code have been sent to your mail, please enter the code to verify your account","success"),this.showVerify()):d.a.fire("Registeration Failed",t.msg,"error")}).catch(e=>{console.log(e)}))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](o.d),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](f.a),m["\u0275\u0275directiveInject"](g.a),m["\u0275\u0275directiveInject"](i.c))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login-signup"]],decls:112,vars:14,consts:[[1,"wrapper"],[1,"container"],["id","formHolder"],[1,"row","no-gutters"],[1,"col-lg-6","brand"],["routerLink","/",1,"logo"],["src","assets/img/logo.PNG","alt",""],[1,"heading"],["src","assets/img/login-img.svg","alt","login image",1,"login-img"],[1,"col-lg-6","form"],[1,"login","form-peice","login-piece","switched"],[1,"form-head"],["class","gradient-text-color",4,"ngIf"],[1,"login-form",3,"formGroup","submit"],[1,"form-group"],["for","loginemail"],["formControlName","userName","type","text","name","loginusername","id","loginusername","required",""],["for","loginPassword"],["formControlName","password","type","password","name","loginPassword","id","loginPassword","required",""],[1,"CTA"],["type","submit","id","loginBtn"],[1,"switch",3,"click"],[1,"mt-4","CTA"],[1,"signup","form-peice","signup-piece","switched"],[1,"form-head","signup-head","my-1"],[1,"signup-form",3,"formGroup","submit"],["for","name"],["formControlName","fullName","type","text","id","name",1,"name"],["class","validation",4,"ngIf"],["for","email"],["formControlName","email","type","email","id","email",1,"email"],["for","username"],["formControlName","userName","type","text","id","username",1,"name"],["for","phone"],["formControlName","phoneNumber","type","number","name","phone","id","phone"],["for","password1"],["formControlName","password","type","password","id","password1"],["class","validation","class","validation",4,"ngIf"],["type","submit","id","signupBtn"],[1,"verify","form-peice","verify-piece","switched"],[1,"gradient-text-color"],["for","code"],["formControlName","verifyCode","type","text","name","code","id","code","required",""],["type","submit"],[1,"switch"],[1,"verify","form-peice","reset-piece","switched"],["for","passcode"],["formControlName","verifyCode","type","text","name","passcode","id","passcode","required",""],["for","newpassword"],["formControlName","newPassword","type","password","name","newpassword","id","newpassword","required",""],["for","confirmpassword"],["formControlName","cpassword","type","password","name","confirmpassword","id","confirmpassword","required",""],["type","submit","value","Reset"],[1,"validation"],[4,"ngIf"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"section",2),m["\u0275\u0275elementStart"](3,"div",3),m["\u0275\u0275elementStart"](4,"div",4),m["\u0275\u0275elementStart"](5,"a",5),m["\u0275\u0275element"](6,"img",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"div",7),m["\u0275\u0275elementStart"](8,"h2"),m["\u0275\u0275text"](9,"Codex on Althash"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"p"),m["\u0275\u0275text"](11,"Leading Software Innovation"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"img",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"div",9),m["\u0275\u0275elementStart"](14,"div",10),m["\u0275\u0275elementStart"](15,"div",11),m["\u0275\u0275template"](16,p,2,0,"h2",12),m["\u0275\u0275template"](17,h,2,0,"h2",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"form",13),m["\u0275\u0275listener"]("submit",(function(){return t.loginFreelancer()})),m["\u0275\u0275elementStart"](19,"div",14),m["\u0275\u0275elementStart"](20,"label",15),m["\u0275\u0275text"](21,"Username"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](22,"input",16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](23,"div",14),m["\u0275\u0275elementStart"](24,"label",17),m["\u0275\u0275text"](25,"Password"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](26,"input",18),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"div",19),m["\u0275\u0275elementStart"](28,"button",20),m["\u0275\u0275text"](29,"Login"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"a",21),m["\u0275\u0275listener"]("click",(function(){return t.forgotPassword()})),m["\u0275\u0275text"](31,"Forgot Password?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"div",22),m["\u0275\u0275elementStart"](33,"a",21),m["\u0275\u0275listener"]("click",(function(){return t.showSignup()})),m["\u0275\u0275text"](34,"I'm new here"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](35,"div",23),m["\u0275\u0275elementStart"](36,"div",24),m["\u0275\u0275template"](37,v,2,0,"h2",12),m["\u0275\u0275template"](38,C,2,0,"h2",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](39,"form",25),m["\u0275\u0275listener"]("submit",(function(){return t.register()})),m["\u0275\u0275elementStart"](40,"div",14),m["\u0275\u0275elementStart"](41,"label",26),m["\u0275\u0275text"](42,"Full Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](43,"input",27),m["\u0275\u0275template"](44,w,2,0,"span",28),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](45,"div",14),m["\u0275\u0275elementStart"](46,"label",29),m["\u0275\u0275text"](47,"Email Address"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](48,"input",30),m["\u0275\u0275template"](49,P,2,0,"span",28),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"div",14),m["\u0275\u0275elementStart"](51,"label",31),m["\u0275\u0275text"](52,"Username"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](53,"input",32),m["\u0275\u0275template"](54,b,2,0,"span",28),m["\u0275\u0275template"](55,y,2,0,"span",28),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](56,"div",14),m["\u0275\u0275elementStart"](57,"label",33),m["\u0275\u0275text"](58,"Phone Number - "),m["\u0275\u0275elementStart"](59,"small"),m["\u0275\u0275text"](60,"Optional"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](61,"input",34),m["\u0275\u0275template"](62,_,2,1,"div",28),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](63,"div",14),m["\u0275\u0275elementStart"](64,"label",35),m["\u0275\u0275text"](65,"Password"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](66,"input",36),m["\u0275\u0275template"](67,S,3,2,"div",37),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](68,"div",19),m["\u0275\u0275elementStart"](69,"button",38),m["\u0275\u0275text"](70,"Signup Now"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](71,"a",21),m["\u0275\u0275listener"]("click",(function(){return t.showLogin()})),m["\u0275\u0275text"](72,"I already have an account"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](73,"div",39),m["\u0275\u0275elementStart"](74,"div",11),m["\u0275\u0275elementStart"](75,"h2",40),m["\u0275\u0275text"](76," Welcome to the platform. "),m["\u0275\u0275element"](77,"br"),m["\u0275\u0275text"](78," Verify your email. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](79,"p"),m["\u0275\u0275text"](80," A code has been sent to your registered email ID. Enter the code below to get started. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](81,"form",13),m["\u0275\u0275listener"]("submit",(function(){return t.verifyFreelancer()})),m["\u0275\u0275elementStart"](82,"div",14),m["\u0275\u0275elementStart"](83,"label",41),m["\u0275\u0275text"](84,"Verification code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](85,"input",42),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](86,"div",19),m["\u0275\u0275elementStart"](87,"button",43),m["\u0275\u0275text"](88,"Verify"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](89,"a",44),m["\u0275\u0275text"](90,"Resend Code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](91,"div",45),m["\u0275\u0275elementStart"](92,"div",11),m["\u0275\u0275elementStart"](93,"h2",40),m["\u0275\u0275text"](94," Reset Password "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](95,"p"),m["\u0275\u0275text"](96," Fill the form below to reset the password. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](97,"form",13),m["\u0275\u0275listener"]("submit",(function(){return t.resetPassword()})),m["\u0275\u0275elementStart"](98,"div",14),m["\u0275\u0275elementStart"](99,"label",46),m["\u0275\u0275text"](100,"Verification Code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](101,"input",47),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](102,"div",14),m["\u0275\u0275elementStart"](103,"label",48),m["\u0275\u0275text"](104,"New Password"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](105,"input",49),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](106,"div",14),m["\u0275\u0275elementStart"](107,"label",50),m["\u0275\u0275text"](108,"Confirm Password"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](109,"input",51),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](110,"div",19),m["\u0275\u0275element"](111,"input",52),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](16),m["\u0275\u0275property"]("ngIf",t.isFreelancer),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",!t.isFreelancer),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.loginform),m["\u0275\u0275advance"](19),m["\u0275\u0275property"]("ngIf",t.isFreelancer),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",!t.isFreelancer),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.form),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("fullName").invalid),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("email").invalid),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("userName").invalid),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.usernameExist),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("phoneNumber").invalid),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("password").invalid),m["\u0275\u0275advance"](14),m["\u0275\u0275property"]("formGroup",t.verifyCode),m["\u0275\u0275advance"](16),m["\u0275\u0275property"]("formGroup",t.resetPasswordForm))},directives:[o.g,r.NgIf,i.x,i.m,i.g,i.b,i.l,i.e,i.t,i.q],styles:['#username[_ngcontent-%COMP%]{background-position:100%;padding-left:20px;background-size:20px}#username[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{background-repeat:no-repeat}.wrapper[_ngcontent-%COMP%]{min-height:100vh;display:flex;padding:2rem 0;align-items:center;justify-content:center;background-image:linear-gradient(135deg,rgba(48,28,224,.82),rgba(83,159,253,.781) 30%,rgba(81,236,166,.75)),url(/assets/img/wrapper-bg.jpeg);background-position:100% 100%}img[_ngcontent-%COMP%]{max-width:100%}.container[_ngcontent-%COMP%]{max-width:1000px}a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}input[_ngcontent-%COMP%]{outline:none!important}h1[_ngcontent-%COMP%]{text-align:center;font-weight:700}.welcome-text[_ngcontent-%COMP%]{margin:3rem 0 1rem}.brand[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff}.brand[_ngcontent-%COMP%]{padding:20px;background:url(https://goo.gl/A0ynht);background-size:cover;background-position:50%;min-height:700px;position:relative;transition:all .6s cubic-bezier(1,-.375,.285,.995);z-index:500}.brand.active[_ngcontent-%COMP%]{width:100%}.brand[_ngcontent-%COMP%]:before{content:"";border-radius:.5rem;display:block;width:100%;height:100%;position:absolute;left:-2px;top:0;background:linear-gradient(to bottom right,#0082c1,#009379);z-index:-1}.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]{color:#f95959;font-size:20px;font-weight:700;text-decoration:none;line-height:1em}.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;transition:all .6s}.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%]{top:100px;left:100px;transform:translate(0)}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3rem;font-weight:800;letter-spacing:-.1rem;margin-bottom:0}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;text-transform:capitalize}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;margin-top:1rem;letter-spacing:-.02rem;white-space:4px}.login-img[_ngcontent-%COMP%]{margin-top:2rem;width:300px}.form[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{background:#111;min-height:700px;border-radius:.5rem;box-shadow:3px 3px 10px rgba(0,0,0,.2);color:#bbb;padding:30px 0 60px;transition:all .9s cubic-bezier(1,-.375,.285,.995);position:absolute;top:0;left:-30%;width:130%;overflow:hidden}@-webkit-keyframes fade_in{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}@keyframes fade_in{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}.form-head[_ngcontent-%COMP%]{margin:3rem 0 0 30%}.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-size:2rem;font-family:Raleway,sans-serif;text-transform:capitalize}.form-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2rem}.signup-head[_ngcontent-%COMP%]{margin-top:.5rem}.form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%]{transform:translateX(-100%);width:100%;left:0}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:0 60px 0 0;width:70%;position:absolute;left:30%}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:5px;position:relative}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#f95959!important}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#f95959!important}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;text-transform:capitalize;transform:translateY(40px);transition:all .4s;cursor:text;z-index:-1}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]{transform:translateY(10px);font-size:10px}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.fontSwitch[_ngcontent-%COMP%]{font-family:Raleway,sans-serif!important;font-weight:600}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]){background:none;outline:none;display:block;padding:10px 0;width:100%;border:none;border-bottom:1px solid #eee;color:#fff;font-weight:600;font-size:15px;font-family:Raleway,sans-serif;z-index:1}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]).hasError{border-color:#f95959}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#f95959;font-size:10px;position:absolute;font-weight:400;bottom:-25px;letter-spacing:.5px;right:0;display:none}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{color:#f95959}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]{margin-top:30px}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;text-transform:capitalize;padding:.5rem 1.5rem;font-weight:600;cursor:pointer;background:#f95959;color:#fff;border-radius:30px;margin-right:20px;border:none;font-family:Raleway,sans-serif}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%]{font-size:13px;font-weight:400;cursor:pointer;margin-top:1rem;float:right;font-family:Raleway,sans-serif;color:#bbb;text-decoration:underline;transition:all .3s}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%]:hover{color:#f95959}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-internal-autofill-selected{background-color:transparent!important}@media (max-width:768px){.container[_ngcontent-%COMP%]{overflow:hidden}section#formHolder[_ngcontent-%COMP%]{padding:0}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]{min-height:200px!important;display:none}section#formHolder[_ngcontent-%COMP%]   div.brand.active[_ngcontent-%COMP%]{min-height:100vh!important}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%]{top:200px;left:50%;transform:translate(-50%,-50%)}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 30px;font-size:10px}.form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{min-height:auto}.form-head[_ngcontent-%COMP%]{width:100%;margin-left:0;padding:0 1rem 1rem}.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .form-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100%;margin:auto}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{position:relative;transform:translate(0)}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{margin:auto;top:0;left:0;width:100%;border-radius:2px;max-width:500px;transition:all .9s cubic-bezier(1,-.375,.285,.995);-webkit-animation:fade_in .5s cubic-bezier(1,-.375,.285,.995) forwards;animation:fade_in .5s cubic-bezier(1,-.375,.285,.995) forwards}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%]{display:none;width:100%;left:0}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{width:100%!important;padding:1rem 2rem;left:0}}@media (max-width:480px){section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100vw;margin-left:0}.form-head[_ngcontent-%COMP%]{margin:1rem 0 0}.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.2rem}}']}),e})()}];let N=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.h.forChild(E),i.h,i.s]]}),e})()},xgIS:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("HDdC"),o=n("DH7j"),i=n("n6bG"),s=n("lJxs");function a(e,t,n,l){return Object(i.a)(n)&&(l=n,n=void 0),l?a(e,t,n).pipe(Object(s.a)(e=>Object(o.a)(e)?l(...e):l(e))):new r.a(r=>{!function e(t,n,r,o,i){let s;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(n,r,i),s=()=>e.removeEventListener(n,r,i)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(n,r),s=()=>e.off(n,r)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(n,r),s=()=>e.removeListener(n,r)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let s=0,a=t.length;s<a;s++)e(t[s],n,r,o,i)}o.add(s)}(e,t,(function(e){r.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),r,n)})}}}]);