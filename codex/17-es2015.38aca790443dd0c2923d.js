(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"kcl+":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerPostBlogModule",(function(){return v}));var l=n("ofXK"),r=n("3Pt+"),a=n("kzlf"),o=n.n(a),i=(n("gJae"),n("TDHc")),d=n.n(i),m=n("PSD3"),s=n.n(m),u=n("fXoL"),c=n("N+K7"),p=n("dz5x"),g=n("tyNb"),h=n("CzEO");const b=[{path:"",component:(()=>{class e{constructor(e,t,n){this.http=e,this.share=t,this.router=n,this.image=new r.f({image:new r.d(null)}),this.blogForm=new r.f({title:new r.d(null,{validators:[r.v.required]}),category:new r.d(null,{validators:[r.v.required]}),image:new r.d(null,{validators:[r.v.required]}),content:new r.d(null,{validators:[r.v.required]}),hashTag:new r.d([])}),this.submitted=!1,this.config={imageUpload:{upload:e=>{this.image.patchValue({image:e}),this.image.get("image").updateValueAndValidity();const t=new FormData;return t.append("image",this.image.value.image),t.append("userName",this.share.user.username),new Promise((e,n)=>{this.http.postToBackend("/users/addimage",t).then(t=>{e(t.data)}).catch(e=>{n(e)})})}}}}ngOnInit(){o.a.register("modules/imageUpload",d.a)}addImage(e){const t=e.target.files[0];if("image"!=t.type.split("/")[0])return alert("Please Select Image file!");this.blogForm.patchValue({image:t});const n=new FileReader;n.onload=()=>{this.imagePreview=n.result},n.readAsDataURL(t)}postBlog(){if($("#post-btn").addClass("running"),$("#post-btn").prop("disabled",!0),this.blogForm.invalid)return $("#post-btn").removeClass("running"),void $("#post-btn").prop("disabled",!1);const e=new FormData;e.append("title",this.blogForm.value.title),e.append("category",this.blogForm.value.category),e.append("image",this.blogForm.value.image),e.append("content",this.blogForm.value.content),e.append("hashTag",JSON.stringify(this.blogForm.value.hashTag)),e.append("userName",this.share.user.username),e.append("isFreelancer","false"),e.append("employerId",this.share.user.id),this.http.postToBackend("/users/add/blog",e).then(e=>{$("#post-btn").removeClass("running"),$("#post-btn").prop("disabled",!1),7e3===e.statusCode?s.a.fire("Posted","Congratulations  your blogs has been successfully posted!","success").then(e=>{this.router.navigate(["/employer/blogs/all"])}):s.a.fire("Failed",e.message,"error")}).catch(e=>{s.a.fire("Failed","Sorry an internal server error occured. Please try later","error")})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](p.a),u["\u0275\u0275directiveInject"](g.d))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employer-post-blog"]],decls:61,vars:2,consts:[[1,"header","bg-blue-gradient","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],[1,"container-fluid","mt--6"],[1,"card"],[1,"card-header","bg-transparent"],[1,"mb-0"],[1,"card-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-md-10"],[1,"form-group"],["for","blog-title"],["formControlName","title","type","text","id","blog-title","placeholder","Enter the title of blog",1,"form-control"],["formControlName","category","id","country",1,"form-control"],["value","null"],["value","cryptocurrencies"],["value","blockchain"],["value","smart_contract"],["value","business"],["value","software"],["value","personal"],["value","news"],["value","htmlcoin"],["value","tech"],["for","blog-thumb"],["type","file","id","blog-thumb",1,"form-control",3,"change"],[1,"col-md-10","px-3"],["formControlName","content",3,"modules"],[1,"row","justify-content-center"],[1,"col"],["type","submit","id","post-btn",1,"btn","btn-primary","edit-btn","ld-ext-right"],[1,"ld","ld-ring","ld-spin"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"div",1),u["\u0275\u0275elementStart"](2,"div",2),u["\u0275\u0275elementStart"](3,"div",3),u["\u0275\u0275elementStart"](4,"div",4),u["\u0275\u0275elementStart"](5,"h6",5),u["\u0275\u0275text"](6,"Post New Blog"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",6),u["\u0275\u0275elementStart"](8,"div",7),u["\u0275\u0275elementStart"](9,"div",8),u["\u0275\u0275elementStart"](10,"h2",9),u["\u0275\u0275text"](11,"Blog Editor"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"div",10),u["\u0275\u0275elementStart"](13,"form",11),u["\u0275\u0275listener"]("submit",(function(){return t.postBlog()})),u["\u0275\u0275elementStart"](14,"div",12),u["\u0275\u0275elementStart"](15,"div",13),u["\u0275\u0275elementStart"](16,"div",14),u["\u0275\u0275elementStart"](17,"label",15),u["\u0275\u0275text"](18,"Blog Title"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](19,"input",16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"div",13),u["\u0275\u0275elementStart"](21,"div",14),u["\u0275\u0275elementStart"](22,"label",15),u["\u0275\u0275text"](23,"Blog Category"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"select",17),u["\u0275\u0275elementStart"](25,"option",18),u["\u0275\u0275text"](26,"Select your blog category"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](27,"option",19),u["\u0275\u0275text"](28,"Cryptocurrencies"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"option",20),u["\u0275\u0275text"](30,"Blockchain"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](31,"option",21),u["\u0275\u0275text"](32,"Smart Contract"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"option",22),u["\u0275\u0275text"](34,"Business Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](35,"option",23),u["\u0275\u0275text"](36,"Software Development"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"option",24),u["\u0275\u0275text"](38,"Personal Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](39,"option",25),u["\u0275\u0275text"](40,"News Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](41,"option",26),u["\u0275\u0275text"](42,"HTMLCoin"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](43,"option",27),u["\u0275\u0275text"](44,"Tech Blog"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](45,"div",13),u["\u0275\u0275elementStart"](46,"div",14),u["\u0275\u0275elementStart"](47,"label",28),u["\u0275\u0275text"](48,"Blog Thumbnail"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](49,"input",29),u["\u0275\u0275listener"]("change",(function(e){return t.addImage(e)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](50,"div",30),u["\u0275\u0275element"](51,"quill-editor",31),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](52,"hr"),u["\u0275\u0275elementStart"](53,"div",32),u["\u0275\u0275elementStart"](54,"div",33),u["\u0275\u0275elementStart"](55,"button",34),u["\u0275\u0275text"](56,"Post "),u["\u0275\u0275element"](57,"div",35),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](58,"div",32),u["\u0275\u0275elementStart"](59,"div",33),u["\u0275\u0275element"](60,"div",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](13),u["\u0275\u0275property"]("formGroup",t.blogForm),u["\u0275\u0275advance"](38),u["\u0275\u0275property"]("modules",t.config))},directives:[r.x,r.m,r.g,r.b,r.l,r.e,r.u,r.p,r.w,h.a],styles:[".header[_ngcontent-%COMP%]{background-image:linear-gradient(135deg,rgba(17,17,17,.904),rgba(17,17,17,.842)),url(/assets/img/banner/pattern-3.png)}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.CommonModule,g.h.forChild(b),r.s,r.h,h.b]]}),e})()}}]);