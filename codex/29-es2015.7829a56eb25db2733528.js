(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"6udX":function(e,t,n){"use strict";n.r(t),n.d(t,"FreelancerViewBlogModule",(function(){return s}));var r=n("ofXK"),l=n("fXoL"),i=n("N+K7"),o=n("tyNb"),d=n("dz5x");const a=[{path:"",component:(()=>{class e{constructor(e,t,n){this.http=e,this.route=t,this.share=n}ngOnInit(){this.route.params.subscribe(e=>{this.http.postToBackend("/users/blog/details",{userName:this.share.user.username,blogId:e.id,userId:this.share.user.id}).then(e=>{this.blog=e.data}).catch(e=>{})})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-freelancer-view-blog"]],decls:11,vars:2,consts:[[1,"header","bg-blue-gradient","pb-2"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],[1,"sub-heading","p-2","border-bottom","my-4"],[3,"innerHTML"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"h6",5),l["\u0275\u0275text"](6,"Single Blog View"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"div",1),l["\u0275\u0275elementStart"](8,"h2",6),l["\u0275\u0275text"](9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](10,"div",7),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate"](null==t.blog?null:t.blog.title),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("innerHTML",null==t.blog?null:t.blog.content,l["\u0275\u0275sanitizeHtml"]))},styles:[""]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.h.forChild(a)]]}),e})()}}]);