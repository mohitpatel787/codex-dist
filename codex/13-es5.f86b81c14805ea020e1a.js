function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4FCr":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerBlogsModule",(function(){return b}));var l=n("ofXK"),i=n("fXoL"),o=n("tyNb"),r=n("bg57");function a(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",12),i["\u0275\u0275elementStart"](1,"a",13),i["\u0275\u0275element"](2,"i",14),i["\u0275\u0275text"](3," Filters"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",15),i["\u0275\u0275elementStart"](5,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().filterAllBlogs()})),i["\u0275\u0275element"](6,"i",17),i["\u0275\u0275elementStart"](7,"span"),i["\u0275\u0275text"](8,"All Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().filterApprovedBlogs()})),i["\u0275\u0275element"](10,"i",18),i["\u0275\u0275elementStart"](11,"span"),i["\u0275\u0275text"](12,"Approved Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().filterPendingBlogs()})),i["\u0275\u0275element"](14,"i",19),i["\u0275\u0275elementStart"](15,"span"),i["\u0275\u0275text"](16,"Pending Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().filterRejectedBlogs()})),i["\u0275\u0275element"](18,"i",20),i["\u0275\u0275elementStart"](19,"span"),i["\u0275\u0275text"](20,"Rejected Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function s(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",35),i["\u0275\u0275element"](1,"i",36),i["\u0275\u0275text"](2," Pending "),i["\u0275\u0275elementEnd"]())}function d(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",37),i["\u0275\u0275element"](1,"i",38),i["\u0275\u0275text"](2," Approved "),i["\u0275\u0275elementEnd"]())}function c(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",39),i["\u0275\u0275element"](1,"i",40),i["\u0275\u0275text"](2," Rejected "),i["\u0275\u0275elementEnd"]())}var m=function(){return["/employer/view-blog"]};function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",21),i["\u0275\u0275elementStart"](1,"div",22),i["\u0275\u0275element"](2,"img",23),i["\u0275\u0275elementStart"](3,"div",24),i["\u0275\u0275elementStart"](4,"h5",25),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",26),i["\u0275\u0275elementStart"](7,"small",27),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"hr",28),i["\u0275\u0275elementStart"](10,"div",29),i["\u0275\u0275elementStart"](11,"div",30),i["\u0275\u0275template"](12,s,3,0,"div",31),i["\u0275\u0275template"](13,d,3,0,"div",32),i["\u0275\u0275template"](14,c,3,0,"div",33),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"a",34),i["\u0275\u0275text"](16,"View Blog"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"]("",n.title," "),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](n.date),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf","pending"==n.status),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","approved"==n.status),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","rejected"==n.status),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](6,m))}}var g,u,f=[{path:"",component:(g=function(){function e(t,n){_classCallCheck(this,e),this.state=t,this.blogsArr=n,this.blogs=this.blogsArr.blogsArr}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.state.params.subscribe((function(t){e.filter=t.state,"approved"==e.filter?(e.getApprovedBlogs(),e.blogsType="approved"):"pending"==e.filter?(e.getPendingBlogs(),e.blogsType="pending"):(e.getAllBlogs(),e.blogsType="all")}))}},{key:"getAllBlogs",value:function(){this.showFilter=!0,this.blogsToDisplay=this.blogs}},{key:"getApprovedBlogs",value:function(){this.showFilter=!1,this.filterApprovedBlogs()}},{key:"getPendingBlogs",value:function(){this.showFilter=!1,this.filterPendingBlogs()}},{key:"filterAllBlogs",value:function(){this.blogsToDisplay=[],this.blogsType="all",this.blogsToDisplay=this.blogs}},{key:"filterApprovedBlogs",value:function(){var e=this;this.blogsToDisplay=[],this.blogsType="approved",this.blogs.forEach((function(t){"approved"==t.status&&e.blogsToDisplay.push(t)}))}},{key:"filterPendingBlogs",value:function(){var e=this;this.blogsToDisplay=[],this.blogsType="pending",this.blogs.forEach((function(t){"pending"==t.status&&e.blogsToDisplay.push(t)}))}},{key:"filterRejectedBlogs",value:function(){var e=this;this.blogsToDisplay=[],this.blogsType="rejected",this.blogs.forEach((function(t){"rejected"==t.status&&e.blogsToDisplay.push(t)}))}}]),e}(),g.\u0275fac=function(e){return new(e||g)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](r.a))},g.\u0275cmp=i["\u0275\u0275defineComponent"]({type:g,selectors:[["app-employer-blogs"]],decls:16,vars:5,consts:[[1,"header","bg-black-gradient","pb-2"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],["class","col-lg-6 col-5 text-right dropdown",4,"ngIf"],[1,"sub-heading","p-2","border-bottom","my-4"],[1,"row","justify-content-center"],[1,"col"],[1,"row"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-6","col-5","text-right","dropdown"],["href","#","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","btn-neutral"],["aria-hidden","true",1,"fa","fa-filter"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"icofont-list","text-primary"],[1,"icofont-check","text-success"],["aria-hidden","true",1,"icofont-clock-time","text-warning"],["aria-hidden","true",1,"icofont-trash","text-warning"],[1,"col-lg-4","col-md-6"],[1,"card"],["src","assets/img/wrapper-bg.jpeg","alt","Image placeholder",1,"card-img-top"],[1,"card-body"],[1,"h2","card-title","my-0","text-bold"],[1,"d-flex","justify-content-end","mt-2"],[1,"text-muted"],[1,"my-3"],[1,"d-flex","justify-content-between"],[1,"status"],["class","btn btn-sm btn-outline-warning mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-success mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-danger mt-2",4,"ngIf"],[1,"btn","btn-sm","btn-primary","text-white",3,"routerLink"],[1,"btn","btn-sm","btn-outline-warning","mt-2"],["aria-hidden","true",1,"icofont-clock-time"],[1,"btn","btn-sm","btn-outline-success","mt-2"],["aria-hidden","true",1,"icofont-checked"],[1,"btn","btn-sm","btn-outline-danger","mt-2"],["aria-hidden","true",1,"icofont-trash"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"h6",5),i["\u0275\u0275text"](6,"Employer Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](7,a,21,0,"div",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",1),i["\u0275\u0275elementStart"](9,"h2",7),i["\u0275\u0275text"](10),i["\u0275\u0275pipe"](11,"titlecase"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"div",8),i["\u0275\u0275elementStart"](13,"div",9),i["\u0275\u0275elementStart"](14,"div",10),i["\u0275\u0275template"](15,p,17,7,"div",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngIf",t.showFilter),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate1"]("",i["\u0275\u0275pipeBind1"](11,3,t.blogsType)," Blogs"),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngForOf",t.blogsToDisplay))},directives:[l.NgIf,l.NgForOf,o.g],pipes:[l.TitleCasePipe],styles:[""]}),g)}],b=((u=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||u)},imports:[[l.CommonModule,o.h.forChild(f)]]}),u)}}]);