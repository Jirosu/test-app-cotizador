import{B as T,D as P,H as D,J as N,K as O,M as j,b as M,d as _,e as w,f as C,g as E,h as L,o as I}from"./chunk-EEFVSAF5.js";import{h as S,oa as m}from"./chunk-FR6IKARZ.js";import"./chunk-4YRY4IP2.js";import{Aa as s,Ab as y,Ba as l,Sa as b,Y as v,ab as e,bb as t,cb as o,hb as h,sb as r,wb as d,xb as u,yb as g,zb as x}from"./chunk-5PVLMKGE.js";import"./chunk-4CLCTAJ7.js";var k=class p{constructor(c,a,n){this.messageServ=c;this._authServ=a;this._router=n}user={username:"",password:""};loginLoading=!1;validateForm(){return this.user.username===""||this.user.password===""?(this.messageServ.add({severity:"error",summary:"Campos vac\xEDos.",detail:"Por favor, ingrese sus credenciales.",key:"toast-login",life:2500}),!1):!0}login(){this.validateForm()&&(this.loginLoading=!0,this.messageServ.add({severity:"success",summary:"Inicio de sesi\xF3n exitoso.",detail:"LOGIN NO VALIDADO, GUARDS DESACTIVADOS EN ROUTER",key:"toast-login",life:5e3}),setTimeout(()=>{this._router.navigate(["/cotizador"]),this.loginLoading=!1},1500))}static \u0275fac=function(a){return new(a||p)(l(m),l(j),l(S))};static \u0275cmp=v({type:p,selectors:[["app-login"]],standalone:!0,features:[x([m]),y],decls:28,vars:3,consts:[[1,"contenedor","flex","flex-col","items-center","justify-center","w-screen","h-dvh","gap-1"],[1,"flex","flex-col","justify-center","max-w-[22rem]"],[1,"flex","justify-center","w-full"],[1,"w-7/12"],[1,"w-full",3,"src"],[3,"submit"],[1,"flex","justify-center","items-center","w-full"],["src","/logo_globaltec_png.png","alt","logo_globalte",2,"height","120px"],[1,"loginBox","flex","flex-col","justify-center","items-center","rounded-border","p-8","gap-4"],[1,"font-bold","m-0","text-3xl"],[1,"flex","flex-col","justify-center","items-center","gap-2"],[1,"h-1","w-full","m-0"],[1,"text-sm","text-center"],[1,"flex","flex-col","gap-2","w-full","px-4"],[1,"flex","flex-col"],["for","username"],["pInputText","","type","text","id","username","name","username","aria-describedby","username-help",1,"focus:border","focus:border-sky-500",3,"ngModelChange","ngModel"],["for","password"],["pInputText","","type","password","id","password","name","password","aria-describedby","password-help",1,"focus:border","focus:border-sky-500",3,"ngModelChange","ngModel"],["pButton","","type","submit",1,"boton","border-0","rounded-3xl","text-surface-0","text-base","font-semibold","uppercase","py-2","px-6","text-center","align-middle",3,"loading"],["position","bottom-center","key","toast-login"]],template:function(a,n){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o(4,"img",4),t()(),e(5,"form",5),h("submit",function(){return n.login()}),e(6,"div",6),o(7,"img",7),t(),e(8,"div",8)(9,"h1",9),r(10,"Inicia Sesi\xF3n!"),t(),e(11,"div",10),o(12,"hr",11),e(13,"span",12),r(14,"Ingresa tus credenciales aqu\xED abajo e ingresa al sistema!"),t(),e(15,"div",13)(16,"div",14)(17,"label",15),r(18,"Usuario"),t(),e(19,"input",16),g("ngModelChange",function(i){return u(n.user.username,i)||(n.user.username=i),i}),t()(),e(20,"div",14)(21,"label",17),r(22,"Contrase\xF1a"),t(),e(23,"input",18),g("ngModelChange",function(i){return u(n.user.password,i)||(n.user.password=i),i}),t()()(),o(24,"hr",11),t(),e(25,"button",19),r(26," Ingresar "),t()()()(),o(27,"p-toast",20),t()),a&2&&(s(19),d("ngModel",n.user.username),s(4),d("ngModel",n.user.password),s(2),b("loading",n.loginLoading))},dependencies:[I,L,M,_,w,E,C,P,T,D,O,N],styles:[".contenedor[_ngcontent-%COMP%]{background:linear-gradient(to right,#33b5ff,#004166)}.loginBox[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif!important;background-color:#fff}hr[_ngcontent-%COMP%]{margin:10px 0;width:21rem;height:2px;border:none;background:linear-gradient(to right,#33b5ff,#004166)}.boton[_ngcontent-%COMP%]{background:linear-gradient(to right,#2ba4e9,#004166);transition:transform 80ms ease-in}.boton[_ngcontent-%COMP%]:focus{outline:none}.boton[_ngcontent-%COMP%]:active{transform:scale(.95)}"]})};export{k as LoginComponent};
