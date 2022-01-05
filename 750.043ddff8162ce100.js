"use strict";(self.webpackChunkangular_blog=self.webpackChunkangular_blog||[]).push([[750],{5750:(et,c,s)=>{s.r(c),s.d(c,{AdminModule:()=>tt});var a=s(6019),u=s(9840),t=s(3668),g=s(2727);const Z=function(){return["/admin","dashboard"]},v=function(){return["/admin","create"]};function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ul"),t.TgZ(1,"li",4),t.TgZ(2,"a",5),t._uU(3,"Home"),t.qZA(),t.qZA(),t.TgZ(4,"li",4),t.TgZ(5,"a",5),t._uU(6,"Create"),t.qZA(),t.qZA(),t.TgZ(7,"li"),t.TgZ(8,"a",6),t.NdJ("click",function(r){return t.CHM(e),t.oxw().logout(r)}),t._uU(9,"Log Out"),t.qZA(),t.qZA(),t.qZA()}2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,Z)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,v)))}let A=(()=>{class n{constructor(e,i){this.router=e,this.auth=i}ngOnInit(){}logout(e){e.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-layout"]],decls:7,vars:1,consts:[[1,"navbar","bg-primary"],["routerLink","/"],[4,"ngIf"],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"h1"),t.TgZ(2,"a",1),t._uU(3,"Angular Admin"),t.qZA(),t.qZA(),t.YNc(4,T,10,4,"ul",2),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"router-outlet"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",i.auth.isAuthenticated()))},directives:[u.yS,a.O5,u.lC,u.Od],styles:[""]}),n})();var l=s(7537);function q(n,o){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const e=o.ngIf;t.xp6(1),t.Oqu(e)}}function C(n,o){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.message)}}function x(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Email is Required "),t.qZA())}function b(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Email must be correct "),t.qZA())}function w(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,x,2,0,"small",13),t.YNc(2,b,2,0,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.email||null==e.email.errors?null:e.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.email||null==e.email.errors?null:e.email.errors.email)}}function I(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Password is Required "),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.AsE("Password must be at least ",null==e.password||null==e.password.errors?null:e.password.errors.minlength.requiredLength," characters long. Now ",null==e.password||null==e.password.errors?null:e.password.errors.minlength.actualLength," ")}}function J(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,I,2,0,"small",13),t.YNc(2,P,2,2,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.password||null==e.password.errors?null:e.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.password||null==e.password.errors?null:e.password.errors.minlength)}}const f=function(n){return{invalid:n}};let y=(()=>{class n{constructor(e,i,r){this.auth=e,this.router=i,this.route=r,this.submitted=!1,this.message="",this.form=new l.cw({email:new l.NI(null,[l.kI.required,l.kI.email]),password:new l.NI(null,[l.kI.required,l.kI.minLength(6)])})}ngOnInit(){this.route.queryParams.subscribe(e=>{e.LoginAgain?this.message="Please Log in Again":e.authFailed&&(this.message="End of time, please try again")})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}submit(){var e,i;if(this.form.invalid)return;this.submitted=!0;const r={email:null===(e=this.email)||void 0===e?void 0:e.value,password:null===(i=this.password)||void 0===i?void 0:i.value};this.auth.login(r).subscribe(()=>{this.form.reset(),this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.e),t.Y36(u.F0),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],decls:18,vars:14,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["type","email","id","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[1,"alert","alert-info"],[1,"validation"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(1,"h2"),t._uU(2,"Sign In"),t.qZA(),t.YNc(3,q,2,1,"div",1),t.ALo(4,"async"),t.YNc(5,C,2,1,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"label",4),t._uU(8,"Email:"),t.qZA(),t._UZ(9,"input",5),t.YNc(10,w,3,2,"div",6),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"label",7),t._uU(13,"Email:"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,J,3,2,"div",6),t.qZA(),t.TgZ(16,"button",9),t._uU(17," Log In "),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("ngIf",t.lcZ(4,8,i.auth.error$)),t.xp6(2),t.Q6J("ngIf",i.message),t.xp6(1),t.Q6J("ngClass",t.VKq(10,f,(null==i.email?null:i.email.touched)&&(null==i.email?null:i.email.invalid))),t.xp6(4),t.Q6J("ngIf",(null==i.email?null:i.email.touched)&&(null==i.email?null:i.email.invalid)),t.xp6(1),t.Q6J("ngClass",t.VKq(12,f,(null==i.password?null:i.password.touched)&&(null==i.password?null:i.password.invalid))),t.xp6(4),t.Q6J("ngIf",(null==i.password?null:i.password.touched)&&(null==i.password?null:i.password.invalid)),t.xp6(1),t.Q6J("disabled",i.form.invalid||i.submitted))},directives:[l._Y,l.JL,l.sg,a.O5,a.mk,l.Fj,l.JJ,l.u],pipes:[a.Ov],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var p=s(9027);let L=(()=>{class n{transform(e,i=""){return i.trim()?e.filter(r=>r.title.toLowerCase().includes(i.toLowerCase())):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"search",type:n,pure:!0}),n})();const U=function(n){return["/admin","post",n,"edit"]};function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"button",5),t._uU(12,"Open "),t.qZA(),t.TgZ(13,"a",6),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw(2).remove(d.id)}),t._uU(14," Remove"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.author),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.gM2(9,5,e.date,"medium","","en")),t.xp6(3),t.Q6J("routerLink",t.VKq(10,U,e.id))}}function Y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",2),t.TgZ(2,"input",3),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().search=r}),t.qZA(),t.qZA(),t.TgZ(3,"table"),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Author"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Date"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Options"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,N,15,12,"tr",4),t.ALo(18,"search"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.search),t.xp6(15),t.Q6J("ngForOf",t.xi3(18,2,e.posts,e.search))}}function Q(n,o){1&n&&(t.TgZ(0,"h3",7),t._uU(1,"Loading..."),t.qZA())}let O=(()=>{class n{constructor(e){this.postService=e,this.search="",this.posts=[]}ngOnInit(){this.postSub=this.postService.getAll().subscribe(e=>{this.posts=e})}remove(e){e&&this.postService.remove(e).subscribe(()=>{this.posts=this.posts.filter(i=>i.id!==e)})}ngOnDestroy(){this.postSub&&this.postSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"form-control"],["type","text","placeholder","Search post",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"btn","btn-link","open",3,"routerLink"],[3,"click"],[1,"text-center"]],template:function(e,i){if(1&e&&(t.YNc(0,Y,19,5,"div",0),t.YNc(1,Q,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",i.posts.length)("ngIfElse",r)}},directives:[a.O5,l.Fj,l.JJ,l.On,a.sg,u.rH],pipes:[L,a.uU],styles:[".open[_ngcontent-%COMP%]{margin-right:10px}"]}),n})();var _=s(1394);function S(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Title is Required "),t.qZA())}function E(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,S,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.title||null==e.title.errors?null:e.title.errors.required)}}function F(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Text is Required "),t.qZA())}function M(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,F,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.text||null==e.text.errors?null:e.text.errors.required)}}function k(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Author is Required "),t.qZA())}function D(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,k,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.author||null==e.author.errors?null:e.author.errors.required)}}const h=function(n){return{invalid:n}};let G=(()=>{class n{constructor(e){this.postsService=e,this.form=new l.cw({title:new l.NI(null,[l.kI.required]),author:new l.NI(null,[l.kI.required]),text:new l.NI(null,[l.kI.required])})}ngOnInit(){}get title(){return this.form.get("title")}get author(){return this.form.get("author")}get text(){return this.form.get("text")}submit(){if(this.form.invalid)return;const e={title:this.form.value.title,text:this.form.value.text,author:this.form.value.author,date:new Date};this.postsService.create(e).subscribe(()=>{this.form.reset()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-page"]],decls:20,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["type","email","id","title","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["for","author"],["type","email","id","author","formControlName","author"],["type","submit",1,"btn","btn-primary","btn-dark"],[1,"validation"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(1,"h1"),t._uU(2,"Create new post"),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"label",2),t._uU(5,"Title:"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,E,2,1,"div",4),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"label"),t._uU(10,"Context: "),t.qZA(),t._UZ(11,"quill-editor",6),t.YNc(12,M,2,1,"div",4),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"label",7),t._uU(15,"Author:"),t.qZA(),t._UZ(16,"input",8),t.YNc(17,D,2,1,"div",4),t.qZA(),t.TgZ(18,"button",9),t._uU(19," ADD POST "),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("ngClass",t.VKq(6,h,(null==i.title?null:i.title.touched)&&(null==i.title?null:i.title.invalid))),t.xp6(4),t.Q6J("ngIf",(null==i.title?null:i.title.touched)&&(null==i.title?null:i.title.invalid)),t.xp6(5),t.Q6J("ngIf",(null==i.text?null:i.text.touched)&&(null==i.text?null:i.text.invalid)),t.xp6(1),t.Q6J("ngClass",t.VKq(8,h,(null==i.author?null:i.author.touched)&&(null==i.author?null:i.author.invalid))),t.xp6(4),t.Q6J("ngIf",(null==i.author?null:i.author.touched)&&(null==i.author?null:i.author.invalid)))},directives:[l._Y,l.JL,l.sg,a.mk,l.Fj,l.JJ,l.u,a.O5,_.g6],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var j=s(3067);function R(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Title is Required "),t.qZA())}function z(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,R,2,0,"small",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.title||null==e.title.errors?null:e.title.errors.required)}}function H(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Text is Required "),t.qZA())}function K(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,H,2,0,"small",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.text||null==e.text.errors?null:e.text.errors.required)}}const V=function(n){return{invalid:n}};function X(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"form",2),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(2,"div",3),t.TgZ(3,"label",4),t._uU(4,"Title:"),t.qZA(),t._UZ(5,"input",5),t.YNc(6,z,2,1,"div",6),t.qZA(),t.TgZ(7,"div",7),t._UZ(8,"quill-editor",8),t.YNc(9,K,2,1,"div",6),t.qZA(),t.TgZ(10,"button",9),t._uU(11,"Save"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(1),t.Q6J("ngClass",t.VKq(5,V,(null==e.title?null:e.title.touched)&&(null==e.title?null:e.title.invalid))),t.xp6(4),t.Q6J("ngIf",(null==e.title?null:e.title.touched)&&(null==e.title?null:e.title.invalid)),t.xp6(3),t.Q6J("ngIf",(null==e.text?null:e.text.touched)&&(null==e.text?null:e.text.invalid)),t.xp6(1),t.Q6J("disabled",e.form.invalid||e.submitted)}}function B(n,o){1&n&&(t.TgZ(0,"h2",12),t._uU(1,"Loading..."),t.qZA())}let $=(()=>{class n{constructor(e,i){this.route=e,this.postsService=i,this.submitted=!1}get title(){return this.form.get("title")}get text(){return this.form.get("text")}ngOnInit(){this.route.params.pipe((0,j.w)(e=>this.postsService.getPostById(e.id))).subscribe(e=>{this.post=e,this.form=new l.cw({title:new l.NI(e.title,l.kI.required),text:new l.NI(e.text,l.kI.required)})})}submit(){this.form.invalid||(this.submitted=!0,this.postsService.update(Object.assign(Object.assign({},this.post),{title:this.form.value.title,text:this.form.value.text})).subscribe(()=>{this.submitted=!1}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["type","email","id","title","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"text-center"]],template:function(e,i){if(1&e&&(t.YNc(0,X,12,7,"div",0),t.YNc(1,B,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",i.form)("ngIfElse",r)}},directives:[a.O5,l._Y,l.JL,l.sg,a.mk,l.Fj,l.JJ,l.u,_.g6],styles:[""]}),n})();var W=s(1382);let m=(()=>{class n{constructor(e,i){this.authService=e,this.route=i}canActivate(e,i){return!!this.authService.isAuthenticated()||(this.authService.logout(),this.route.navigate(["/admin","login"],{queryParams:{LoginAgain:!0}}),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.e),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[m],imports:[[a.ez,l.u5,W.m,l.UX,u.Bz.forChild([{path:"",component:A,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:y},{path:"dashboard",component:O,canActivate:[m]},{path:"create",component:G,canActivate:[m]},{path:"post/:id/edit",component:$,canActivate:[m]}]}])],u.Bz]}),n})()}}]);