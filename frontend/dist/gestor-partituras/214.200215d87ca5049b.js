"use strict";(self.webpackChunkgestor_partituras=self.webpackChunkgestor_partituras||[]).push([[214],{8214:(f,u,r)=>{r.r(u),r.d(u,{CoreModule:()=>Z});var c=r(6019),g=r(6516),l=(()=>{return(o=l||(l={})).ADMIN="ADMIN",o.USER="USER",l;var o})(),e=r(3668),a=r(7537);const m=[{path:"",component:(()=>{class o{constructor(n){this.router=n}ngOnInit(){}logar(){var n;let t={nomeUsuario:"",role:[""]};switch(null===(n=this.email)||void 0===n?void 0:n.toUpperCase()){case"ADMIN":t={nomeUsuario:"Admin",role:[l.ADMIN]};break;case"USER":t={nomeUsuario:"User",role:[l.USER]}}localStorage.setItem("nomeUsuario",null==t?void 0:t.nomeUsuario),localStorage.setItem("role",null==t?void 0:t.role.toString()),this.router.navigate(["/inicio"])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center","vh-100","bg-light"],[1,"row","justify-content-center"],[1,"col-12","col-lg-8"],[1,"card","bg-white","shadow","mx-3","p-5"],[1,"card-body","p-0"],[1,"row"],[1,"col-12","d-flex","justify-content-center","mt-4","mb-5"],["src","assets/img/logo/logo-grande.png","alt","",1,"logo"],[1,"col-12"],[1,"form-group","mb-4"],["for","email",1,"form-label"],["type","email","id","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mb-3"],["for","senha",1,"form-label"],["type","password","id","senha",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-end","w-100","pt-1"],["href","http://",1,"text-right"],[1,"d-grid","gap-1"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-flex","justify-content-center","pt-5"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"div",9),e.TgZ(10,"label",10),e._uU(11,"Email"),e.qZA(),e.TgZ(12,"input",11),e.NdJ("ngModelChange",function(s){return t.email=s}),e.qZA(),e.qZA(),e.TgZ(13,"div",12),e.TgZ(14,"label",13),e._uU(15,"Senha"),e.qZA(),e.TgZ(16,"input",14),e.NdJ("ngModelChange",function(s){return t.senha=s}),e.qZA(),e.TgZ(17,"div",15),e.TgZ(18,"a",16),e.TgZ(19,"small"),e._uU(20,"Esqueceu sua senha?"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",8),e.TgZ(22,"div",17),e.TgZ(23,"button",18),e.NdJ("click",function(){return t.logar()}),e._uU(24,"Entrar"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",19),e.TgZ(26,"a",16),e._uU(27,"Criar Conta"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(12),e.Q6J("ngModel",t.email),e.xp6(4),e.Q6J("ngModel",t.senha))},directives:[a.Fj,a.JJ,a.On],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.logo[_ngcontent-%COMP%]{width:6.25rem}"]}),o})()}];let p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(m)],g.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,a.u5,p]]}),o})()}}]);