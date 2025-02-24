import{b as wt,e as Vt,f as Pt,g as Ft,h as Dt,i as Lt,l as $t,n as At,o as Bt,p as Qt,r as Nt,s as Rt,t as qt,u as jt,v as $e,w as Gt}from"./chunk-PZTGFZJW.js";import{A as Mt,B as De,F as kt,H as Le,I as Et,J as zt,a as dt,b as Ee,d as ie,g as oe,i as mt,j as ft,k as ht,l as gt,m as ne,n as Z,q as St,v as It,w as Tt,x as Fe,y as Ot}from"./chunk-5THDWSVE.js";import{$ as fe,Aa as xt,D as ze,E as X,Z as _t,aa as se,b as ut,ba as we,da as We,ia as yt,ka as Ve,oa as he,pa as Ct,qa as bt,ra as vt,sa as ge,ta as U,ua as Pe,za as J}from"./chunk-HKFDMN75.js";import"./chunk-4YRY4IP2.js";import{$a as c,Aa as F,Ab as H,Bb as G,Cb as Me,Ia as ae,Jb as xe,Ka as K,Kb as Se,La as Oe,Lb as R,M as Ye,N as L,Oa as d,Qa as C,Ra as l,S as Xe,Sa as pe,T as q,Ta as ot,Ua as j,Va as $,Vb as v,Wa as re,Wb as le,X as I,Xa as nt,Xb as He,Za as at,Zb as st,_a as rt,ab as u,bb as x,ca as Te,cb as O,da as m,db as M,ea as f,eb as k,fa as et,fb as w,ga as V,gb as h,h as Ce,hb as s,ib as ce,jb as te,jc as W,ka as S,kb as b,kc as pt,la as tt,lb as Y,lc as ue,mb as g,mc as de,n as Ie,nb as _,nc as me,oc as ct,pc as ke,qb as ve,qc as E,rb as y,sb as D,tb as A,ub as lt,vb as B,w as be,wa as it,wb as Q,xb as N,yb as P,za as r,zb as T}from"./chunk-6HEUDQBM.js";import"./chunk-4CLCTAJ7.js";var ni=t=>({disabled:t}),Ae=class t{value=null;onValueChange=new S;increment(){if(!this.value||this.value===null||this.value===0){this.value=1;return}this.value+=1,this.onValueChange.emit(this.value)}decrement(){if(!this.value||this.value===null||this.value===0){this.value=1;return}this.value!==1&&(this.value-=1,this.onValueChange.emit(this.value))}validateOnBlur(){setTimeout(()=>{if(!this.value||this.value===null||this.value===0){this.value=1,this.onValueChange.emit(this.value);return}},100),this.value&&this.onValueChange.emit(this.value)}validateOnlyNumbers(n){let e=n.key.charCodeAt(0);e>=48&&e<=57||n.preventDefault()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["quantity-input"]],inputs:{value:"value"},outputs:{onValueChange:"onValueChange"},standalone:!0,features:[T],decls:6,vars:5,consts:[[1,"inline-flex","flex-col","rounded-lg","border","bg-white","shadow-sm","w-"],[1,"rounded-none","rounded-t-lg","border","hover:bg-gray-200","h-8","border-zinc-200",3,"click"],[1,"pi","pi-plus"],["type","number",1,"h-8","w-12","border","text-center","appearance-none","border-zinc-200",3,"ngModelChange","keypress","blur","ngModel"],[1,"rounded-none","rounded-b-lg","border","hover:bg-gray-200","h-8","border-zinc-200",3,"click","disabled","ngClass"],[1,"pi","pi-minus"]],template:function(e,i){e&1&&(c(0,"div",0)(1,"button",1),h("click",function(){return i.increment()}),x(2,"span",2),u(),c(3,"input",3),N("ngModelChange",function(a){return Q(i.value,a)||(i.value=a),a}),h("keypress",function(a){return i.validateOnlyNumbers(a)})("blur",function(){return i.validateOnBlur()}),u(),c(4,"button",4),h("click",function(){return i.decrement()}),x(5,"span",5),u()()),e&2&&(r(3),B("ngModel",i.value),r(),l("disabled",i.value===1)("ngClass",G(3,ni,i.value===1)))},dependencies:[E,W,ne,Ee,mt,ie,oe],styles:[".appearance-none[_ngcontent-%COMP%]::-webkit-inner-spin-button, .appearance-none[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.disabled[_ngcontent-%COMP%]{background-color:#e4e4e7}"]})};var ai=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,ri={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Kt=(()=>{class t extends J{name="card";theme=ai;classes=ri;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var li=["header"],si=["title"],pi=["subtitle"],ci=["content"],ui=["footer"],di=["*",[["p-header"]],[["p-footer"]]],mi=["*","p-header","p-footer"];function fi(t,n){t&1&&k(0)}function hi(t,n){if(t&1&&(c(0,"div",8),te(1,1),d(2,fi,1,0,"ng-container",6),u()),t&2){let e=s();r(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function gi(t,n){if(t&1&&(O(0),y(1),M()),t&2){let e=s(2);r(),D(e.header)}}function _i(t,n){t&1&&k(0)}function yi(t,n){if(t&1&&(c(0,"div",9),d(1,gi,2,1,"ng-container",10)(2,_i,1,0,"ng-container",6),u()),t&2){let e=s();r(),l("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),r(),l("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function Ci(t,n){if(t&1&&(O(0),y(1),M()),t&2){let e=s(2);r(),D(e.subheader)}}function bi(t,n){t&1&&k(0)}function vi(t,n){if(t&1&&(c(0,"div",11),d(1,Ci,2,1,"ng-container",10)(2,bi,1,0,"ng-container",6),u()),t&2){let e=s();r(),l("ngIf",e.subheader&&!e._subtitleTemplate&&e.subtitleTemplate),r(),l("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function xi(t,n){t&1&&k(0)}function Si(t,n){t&1&&k(0)}function wi(t,n){if(t&1&&(c(0,"div",12),te(1,2),d(2,Si,1,0,"ng-container",6),u()),t&2){let e=s();r(2),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Ht=(()=>{class t extends Z{header;subheader;set style(e){we(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ae(null);_componentStyle=q(Kt);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=I({type:t,selectors:[["p-card"]],contentQueries:function(i,o,a){if(i&1&&(b(a,bt,5),b(a,vt,5),b(a,li,4),b(a,si,4),b(a,pi,4),b(a,ci,4),b(a,ui,4),b(a,ge,4)),i&2){let p;g(p=_())&&(o.headerFacet=p.first),g(p=_())&&(o.footerFacet=p.first),g(p=_())&&(o.headerTemplate=p.first),g(p=_())&&(o.titleTemplate=p.first),g(p=_())&&(o.subtitleTemplate=p.first),g(p=_())&&(o.contentTemplate=p.first),g(p=_())&&(o.footerTemplate=p.first),g(p=_())&&(o.templates=p)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},standalone:!0,features:[P([Kt]),K,T],ngContentSelectors:mi,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,o){i&1&&(ce(di),c(0,"div",0),d(1,hi,3,1,"div",1),c(2,"div",2),d(3,yi,3,2,"div",3)(4,vi,3,2,"div",4),c(5,"div",5),te(6),d(7,xi,1,0,"ng-container",6),u(),d(8,wi,3,1,"div",7),u()()),i&2&&($(o.styleClass),l("ngClass","p-card p-component")("ngStyle",o._style()),C("data-pc-name","card"),r(),l("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),r(2),l("ngIf",o.header||o.titleTemplate||o._titleTemplate),r(),l("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),r(3),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),r(),l("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[E,W,ue,me,de,U],encapsulation:2,changeDetection:0})}return t})();var Ti=()=>({width:"3rem"}),Re=class t{constructor(n){this._cartService=n}product={};onProductChange=new S;removeProduct(){this._cartService.removeProductFromCard(this.product.noProduct),this.onProductChange.emit()}updateCartProduct(){this._cartService.updateProductAmount(this.product),this.onProductChange.emit()}onQuantityChange(n){this.product.quantity=n,this.updateCartProduct()}static \u0275fac=function(e){return new(e||t)(F($e))};static \u0275cmp=I({type:t,selectors:[["cotizador-card-producto"]],inputs:{product:"product"},outputs:{onProductChange:"onProductChange"},standalone:!0,features:[P([he]),T],decls:19,vars:9,consts:[[1,""],[1,"grid","grid-cols-12","gap-4","items-center"],[1,"col-span-12","grid","grid-cols-12","gap-2","items-center"],[1,"col-span-9"],[1,"mb-2"],[1,"text-wrap","mr-3","font-semibold","text-lg"],[1,"text-sm","mr-3"],[1,"flex","items-center","gap-2","md:gap-4"],["for","currency-pe"],[1,"w-28"],["inputId","currency-pe","mode","currency","currency","PEN","locale","es-PE","fluid","true",3,"ngModelChange","ngModel","min","required"],[1,"col-span-3","flex","justify-end","gap-3","md:gap-8"],[3,"onValueChange","value"],[3,"click"],[1,"pi","pi-trash","text-red-600","hover:opacity-70","border","border-transparent","rounded-xl","text-xl"]],template:function(e,i){e&1&&(c(0,"p-card")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"p",5),y(7),u(),c(8,"p",6),y(9),u()(),c(10,"div",7)(11,"label",8),y(12,"Precio und"),u(),c(13,"div",9)(14,"p-inputnumber",10),N("ngModelChange",function(a){return Q(i.product.price,a)||(i.product.price=a),a}),h("ngModelChange",function(){return i.updateCartProduct()}),u()()()(),c(15,"div",11)(16,"quantity-input",12),h("onValueChange",function(a){return i.onQuantityChange(a)}),u(),c(17,"button",13),h("click",function(){return i.removeProduct()}),x(18,"span",14),u()()()()()()),e&2&&(r(7),D(i.product.descProduct),r(2),A("C\xF3digo ",i.product.noProduct,""),r(5),j(H(8,Ti)),B("ngModel",i.product.price),l("min",.1)("required",!0),r(2),l("value",i.product.quantity))},dependencies:[ne,ie,ft,oe,Lt,De,Ht,Ae]})};var Oi=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,Mi={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Wt=(()=>{class t extends J{name="chip";theme=Oi;classes=Mi;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ki=["removeicon"],Ei=["*"];function zi(t,n){if(t&1){let e=w();c(0,"img",4),h("error",function(o){m(e);let a=s();return f(a.imageError(o))}),u()}if(t&2){let e=s();l("src",e.image,it)("alt",e.alt)}}function Vi(t,n){if(t&1&&x(0,"span",6),t&2){let e=s(2);$(e.icon),l("ngClass","p-chip-icon"),C("data-pc-section","icon")}}function Pi(t,n){if(t&1&&d(0,Vi,1,4,"span",5),t&2){let e=s();l("ngIf",e.icon)}}function Fi(t,n){if(t&1&&(c(0,"div",7),y(1),u()),t&2){let e=s();C("data-pc-section","label"),r(),D(e.label)}}function Di(t,n){if(t&1){let e=w();c(0,"span",11),h("click",function(o){m(e);let a=s(3);return f(a.close(o))})("keydown",function(o){m(e);let a=s(3);return f(a.onKeydown(o))}),u()}if(t&2){let e=s(3);$(e.removeIcon),l("ngClass","p-chip-remove-icon"),C("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Li(t,n){if(t&1){let e=w();c(0,"TimesCircleIcon",12),h("click",function(o){m(e);let a=s(3);return f(a.close(o))})("keydown",function(o){m(e);let a=s(3);return f(a.onKeydown(o))}),u()}if(t&2){let e=s(3);$("p-chip-remove-icon"),C("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function $i(t,n){if(t&1&&(O(0),d(1,Di,1,5,"span",9)(2,Li,1,4,"TimesCircleIcon",10),M()),t&2){let e=s(2);r(),l("ngIf",e.removeIcon),r(),l("ngIf",!e.removeIcon)}}function Ai(t,n){}function Bi(t,n){t&1&&d(0,Ai,0,0,"ng-template")}function Qi(t,n){if(t&1){let e=w();c(0,"span",13),h("click",function(o){m(e);let a=s(2);return f(a.close(o))})("keydown",function(o){m(e);let a=s(2);return f(a.onKeydown(o))}),d(1,Bi,1,0,null,14),u()}if(t&2){let e=s(2);C("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),r(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Ni(t,n){if(t&1&&(O(0),d(1,$i,3,2,"ng-container",3)(2,Qi,2,3,"span",8),M()),t&2){let e=s();r(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),r(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ut=(()=>{class t extends Z{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new S;onImageError=new S;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Pe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=q(Wt);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=I({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,a){if(i&1&&(b(a,ki,4),b(a,ge,4)),i&2){let p;g(p=_())&&(o.removeIconTemplate=p.first),g(p=_())&&(o.templates=p)}},hostVars:9,hostBindings:function(i,o){i&2&&(C("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),j(o.style),$(o.containerClass()),pe("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",v],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},standalone:!0,features:[P([Wt]),Oe,K,Te,T],ngContentSelectors:Ei,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(ce(),te(0),d(1,zi,1,2,"img",1)(2,Pi,1,1,"ng-template",null,0,R)(4,Fi,2,2,"div",2)(5,Ni,3,2,"ng-container",3)),i&2){let a=ve(3);r(),l("ngIf",o.image)("ngIfElse",a),r(3),l("ngIf",o.label),r(),l("ngIf",o.removable)}},dependencies:[E,W,ue,me,Fe,U],encapsulation:2,changeDetection:0})}return t})();var qi=({dt:t})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${t("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${t("autocomplete.dropdown.width")} + ${t("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("autocomplete.dropdown.width")};
    border-start-end-radius: ${t("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${t("autocomplete.dropdown.border.radius")};
    background: ${t("autocomplete.dropdown.background")};
    border: 1px solid ${t("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("autocomplete.dropdown.color")};
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${t("autocomplete.dropdown.hover.background")};
    border-color: ${t("autocomplete.dropdown.hover.border.color")};
    color: ${t("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${t("autocomplete.dropdown.active.background")};
    border-color: ${t("autocomplete.dropdown.active.border.color")};
    color: ${t("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${t("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${t("autocomplete.dropdown.focus.ring.width")} ${t("autocomplete.dropdown.focus.ring.style")} ${t("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${t("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${t("autocomplete.overlay.background")};
    color: ${t("autocomplete.overlay.color")};
    border: 1px solid ${t("autocomplete.overlay.border.color")};
    border-radius: ${t("autocomplete.overlay.border.radius")};
    box-shadow: ${t("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${t("autocomplete.list.gap")};
    padding: ${t("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("autocomplete.option.padding")};
    border: 0 none;
    color: ${t("autocomplete.option.color")};
    background: transparent;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")};
    border-radius: ${t("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${t("autocomplete.option.focus.background")};
    color: ${t("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${t("autocomplete.option.selected.background")};
    color: ${t("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${t("autocomplete.option.selected.focus.background")};
    color: ${t("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${t("autocomplete.option.group.padding")};
    color: ${t("autocomplete.option.group.color")};
    background: ${t("autocomplete.option.group.background")};
    font-weight: ${t("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${t("autocomplete.padding.y")} / 2) ${t("autocomplete.padding.x")};
    gap: calc(${t("autocomplete.padding.y")} / 2);
    color: ${t("autocomplete.color")};
    background: ${t("autocomplete.background")};
    border: 1px solid ${t("autocomplete.border.color")};
    border-radius: ${t("autocomplete.border.radius")};
    width: 100%;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
    box-shadow: ${t("autocomplete.focus.ring.shadow")};
    outline: ${t("autocomplete.focus.ring.width")} ${t("autocomplete.focus.ring.style")} ${t("autocomplete.focus.ring.color")};
    outline-offset: ${t("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${t("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${t("autocomplete.disabled.background")};
    color: ${t("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
    border-radius: ${t("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${t("autocomplete.chip.focus.background")};
    color: ${t("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${t("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${t("autocomplete.padding.x")};
    color: ${t("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${t("autocomplete.padding.x")} + ${t("autocomplete.dropdown.width")});
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}`,ji={root:{position:"relative"}},Gi={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid()}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle()==="filled"}),chipItem:({instance:t,i:n})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===n}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:n,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(n),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(n)}),emptyMessage:"p-autocomplete-empty-message"},Jt=(()=>{class t extends J{name="autocomplete";theme=qi;classes=Gi;inlineStyles=ji;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ki=["item"],Hi=["empty"],Wi=["header"],Ui=["footer"],Ji=["selecteditem"],Zi=["group"],Yi=["loader"],Xi=["removeicon"],eo=["loadingicon"],to=["clearicon"],io=["dropdownicon"],oo=["container"],no=["focusInput"],ao=["multiIn"],ro=["multiContainer"],lo=["ddBtn"],so=["items"],po=["scroller"],co=["overlay"],uo=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),Zt=t=>({$implicit:t}),mo=()=>({class:"p-autocomplete-chip-icon"}),qe=t=>({height:t}),Yt=(t,n)=>({$implicit:t,options:n}),fo=t=>({options:t}),ho=()=>({}),go=(t,n)=>({$implicit:t,index:n});function _o(t,n){if(t&1){let e=w();c(0,"input",19,3),h("input",function(o){m(e);let a=s();return f(a.onInput(o))})("keydown",function(o){m(e);let a=s();return f(a.onKeyDown(o))})("change",function(o){m(e);let a=s();return f(a.onInputChange(o))})("focus",function(o){m(e);let a=s();return f(a.onInputFocus(o))})("blur",function(o){m(e);let a=s();return f(a.onInputBlur(o))})("paste",function(o){m(e);let a=s();return f(a.onInputPaste(o))})("keyup",function(o){m(e);let a=s();return f(a.onInputKeyUp(o))}),u()}if(t&2){let e,i=s();$(i.inputStyleClass),l("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid()),C("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function yo(t,n){if(t&1){let e=w();c(0,"TimesIcon",22),h("click",function(){m(e);let o=s(2);return f(o.clear())}),u()}t&2&&(l("styleClass","p-autocomplete-clear-icon"),C("aria-hidden",!0))}function Co(t,n){}function bo(t,n){t&1&&d(0,Co,0,0,"ng-template")}function vo(t,n){if(t&1){let e=w();c(0,"span",23),h("click",function(){m(e);let o=s(2);return f(o.clear())}),d(1,bo,1,0,null,24),u()}if(t&2){let e=s(2);C("aria-hidden",!0),r(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function xo(t,n){if(t&1&&(O(0),d(1,yo,1,2,"TimesIcon",20)(2,vo,2,2,"span",21),M()),t&2){let e=s();r(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function So(t,n){t&1&&k(0)}function wo(t,n){if(t&1){let e=w();c(0,"span",33),h("click",function(o){m(e);let a=s(3).index,p=s(2);return f(p.readonly?"":p.removeOption(o,a))}),x(1,"TimesCircleIcon",34),u()}t&2&&(r(),l("styleClass","p-autocomplete-chip-icon"),C("aria-hidden",!0))}function Io(t,n){t&1&&(O(0),d(1,wo,2,2,"ng-template",null,6,R),M())}function To(t,n){if(t&1&&(c(0,"p-chip",32),d(1,Io,3,0,"ng-container",15),u()),t&2){let e=s().$implicit,i=s(2);l("label",i.getOptionLabel(e))("removable",!0),r(),l("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function Oo(t,n){}function Mo(t,n){t&1&&d(0,Oo,0,0,"ng-template")}function ko(t,n){if(t&1&&(c(0,"span"),d(1,Mo,1,0,null,30),u()),t&2){let e=s(3);C("aria-hidden",!0),r(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)("ngTemplateOutletContext",H(3,mo))}}function Eo(t,n){if(t&1&&(c(0,"li",29,5),d(2,So,1,0,"ng-container",30)(3,To,2,3,"p-chip",31)(4,ko,2,4,"span",15),u()),t&2){let e=n.$implicit,i=n.index,o=s(2);l("ngClass",G(10,uo,o.focusedMultipleOptionIndex()===i)),C("id",o.id+"_multiple_option_"+i)("aria-label",o.getOptionLabel(e))("aria-setsize",o.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),r(2),l("ngTemplateOutlet",o.selectedItemTemplate||o._selectedItemTemplate)("ngTemplateOutletContext",G(12,Zt,e)),r(),l("ngIf",!o.selectedItemTemplate&&!o._selectedItemTemplate),r(),l("ngIf",o.removeIconTemplate||o._removeIconTemplate)}}function zo(t,n){if(t&1){let e=w();c(0,"ul",25,4),h("focus",function(o){m(e);let a=s();return f(a.onMultipleContainerFocus(o))})("blur",function(o){m(e);let a=s();return f(a.onMultipleContainerBlur(o))})("keydown",function(o){m(e);let a=s();return f(a.onMultipleContainerKeyDown(o))}),d(2,Eo,5,14,"li",26),c(3,"li",27)(4,"input",28,3),h("input",function(o){m(e);let a=s();return f(a.onInput(o))})("keydown",function(o){m(e);let a=s();return f(a.onKeyDown(o))})("change",function(o){m(e);let a=s();return f(a.onInputChange(o))})("focus",function(o){m(e);let a=s();return f(a.onInputFocus(o))})("blur",function(o){m(e);let a=s();return f(a.onInputBlur(o))})("paste",function(o){m(e);let a=s();return f(a.onInputPaste(o))})("keyup",function(o){m(e);let a=s();return f(a.onInputKeyUp(o))}),u()()()}if(t&2){let e,i=s();l("ngClass",i.inputMultipleClass)("tabindex",-1),C("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),r(2),l("ngForOf",i.modelValue()),r(2),$(i.inputStyleClass),l("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),C("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Vo(t,n){t&1&&x(0,"SpinnerIcon",37),t&2&&(l("styleClass","p-autocomplete-loader")("spin",!0),C("aria-hidden",!0))}function Po(t,n){}function Fo(t,n){t&1&&d(0,Po,0,0,"ng-template")}function Do(t,n){if(t&1&&(c(0,"span",38),d(1,Fo,1,0,null,24),u()),t&2){let e=s(2);C("aria-hidden",!0),r(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Lo(t,n){if(t&1&&(O(0),d(1,Vo,1,3,"SpinnerIcon",35)(2,Do,2,2,"span",36),M()),t&2){let e=s();r(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),r(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function $o(t,n){if(t&1&&x(0,"span",41),t&2){let e=s(2);l("ngClass",e.dropdownIcon),C("aria-hidden",!0)}}function Ao(t,n){t&1&&x(0,"ChevronDownIcon")}function Bo(t,n){}function Qo(t,n){t&1&&d(0,Bo,0,0,"ng-template")}function No(t,n){if(t&1&&(O(0),d(1,Ao,1,0,"ChevronDownIcon",15)(2,Qo,1,0,null,24),M()),t&2){let e=s(2);r(),l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),r(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ro(t,n){if(t&1){let e=w();c(0,"button",39,7),h("click",function(o){m(e);let a=s();return f(a.handleDropdownClick(o))}),d(2,$o,1,2,"span",40)(3,No,3,2,"ng-container",15),u()}if(t&2){let e=s();l("disabled",e.disabled),C("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),r(2),l("ngIf",e.dropdownIcon),r(),l("ngIf",!e.dropdownIcon)}}function qo(t,n){t&1&&k(0)}function jo(t,n){t&1&&k(0)}function Go(t,n){if(t&1&&d(0,jo,1,0,"ng-container",30),t&2){let e=n.$implicit,i=n.options;s(2);let o=ve(6);l("ngTemplateOutlet",o)("ngTemplateOutletContext",Me(2,Yt,e,i))}}function Ko(t,n){t&1&&k(0)}function Ho(t,n){if(t&1&&d(0,Ko,1,0,"ng-container",30),t&2){let e=n.options,i=s(4);l("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",G(2,fo,e))}}function Wo(t,n){t&1&&(O(0),d(1,Ho,1,4,"ng-template",null,10,R),M())}function Uo(t,n){if(t&1){let e=w();c(0,"p-scroller",46,9),h("onLazyLoad",function(o){m(e);let a=s(2);return f(a.onLazyLoad.emit(o))}),d(2,Go,1,5,"ng-template",null,2,R)(4,Wo,3,0,"ng-container",15),u()}if(t&2){let e=s(2);j(G(8,qe,e.scrollHeight)),l("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),r(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Jo(t,n){t&1&&k(0)}function Zo(t,n){if(t&1&&(O(0),d(1,Jo,1,0,"ng-container",30),M()),t&2){s();let e=ve(6),i=s();r(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",Me(3,Yt,i.visibleOptions(),H(2,ho)))}}function Yo(t,n){if(t&1&&(c(0,"span"),y(1),u()),t&2){let e=s(2).$implicit,i=s(3);r(),D(i.getOptionGroupLabel(e.optionGroup))}}function Xo(t,n){t&1&&k(0)}function en(t,n){if(t&1&&(O(0),c(1,"li",50),d(2,Yo,2,1,"span",15)(3,Xo,1,0,"ng-container",30),u(),M()),t&2){let e=s(),i=e.$implicit,o=e.index,a=s().options,p=s(2);r(),l("ngStyle",G(5,qe,a.itemSize+"px")),C("id",p.id+"_"+p.getOptionIndex(o,a)),r(),l("ngIf",!p.groupTemplate),r(),l("ngTemplateOutlet",p.groupTemplate)("ngTemplateOutletContext",G(7,Zt,i.optionGroup))}}function tn(t,n){if(t&1&&(c(0,"span"),y(1),u()),t&2){let e=s(2).$implicit,i=s(3);r(),D(i.getOptionLabel(e))}}function on(t,n){t&1&&k(0)}function nn(t,n){if(t&1){let e=w();O(0),c(1,"li",51),h("click",function(o){m(e);let a=s().$implicit,p=s(3);return f(p.onOptionSelect(o,a))})("mouseenter",function(o){m(e);let a=s().index,p=s().options,z=s(2);return f(z.onOptionMouseEnter(o,z.getOptionIndex(a,p)))}),d(2,tn,2,1,"span",15)(3,on,1,0,"ng-container",30),u(),M()}if(t&2){let e=s(),i=e.$implicit,o=e.index,a=s().options,p=s(2);r(),l("ngStyle",G(12,qe,a.itemSize+"px"))("ngClass",p.optionClass(i,o,a)),C("id",p.id+"_"+p.getOptionIndex(o,a))("aria-label",p.getOptionLabel(i))("aria-selected",p.isSelected(i))("aria-disabled",p.isOptionDisabled(i))("data-p-focused",p.focusedOptionIndex()===p.getOptionIndex(o,a))("aria-setsize",p.ariaSetSize)("aria-posinset",p.getAriaPosInset(p.getOptionIndex(o,a))),r(),l("ngIf",!p.itemTemplate&&!p._itemTemplate),r(),l("ngTemplateOutlet",p.itemTemplate||p._itemTemplate)("ngTemplateOutletContext",Me(14,go,i,a.getOptions?a.getOptions(o):o))}}function an(t,n){if(t&1&&d(0,en,4,9,"ng-container",15)(1,nn,4,17,"ng-container",15),t&2){let e=n.$implicit,i=s(3);l("ngIf",i.isOptionGroup(e)),r(),l("ngIf",!i.isOptionGroup(e))}}function rn(t,n){if(t&1&&(O(0),y(1),M()),t&2){let e=s(4);r(),A(" ",e.searchResultMessageText," ")}}function ln(t,n){t&1&&k(0,null,12)}function sn(t,n){if(t&1&&(c(0,"li",52),d(1,rn,2,1,"ng-container",53)(2,ln,2,0,"ng-container",24),u()),t&2){let e=s().options,i=s(2);l("ngStyle",G(4,qe,e.itemSize+"px")),r(),l("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),r(),l("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function pn(t,n){if(t&1&&(c(0,"ul",47,11),d(2,an,2,2,"ng-template",48)(3,sn,3,6,"li",49),u()),t&2){let e=n.$implicit,i=n.options,o=s(2);j(i.contentStyle),l("ngClass",i.contentStyleClass),C("id",o.id+"_list")("aria-label",o.listLabel),r(2),l("ngForOf",e),r(),l("ngIf",!e||e&&e.length===0&&o.showEmptyMessage)}}function cn(t,n){t&1&&k(0)}function un(t,n){if(t&1&&(c(0,"div",42),d(1,qo,1,0,"ng-container",24),c(2,"div",43),d(3,Uo,5,10,"p-scroller",44)(4,Zo,2,6,"ng-container",15),u(),d(5,pn,4,7,"ng-template",null,8,R)(7,cn,1,0,"ng-container",24),u(),c(8,"span",45),y(9),u()),t&2){let e=s();$(e.panelStyleClass),l("ngClass",e.panelClass)("ngStyle",e.panelStyle),r(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),r(),pe("max-height",e.virtualScroll?"auto":e.scrollHeight),r(),l("ngIf",e.virtualScroll),r(),l("ngIf",!e.virtualScroll),r(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),r(2),A(" ",e.selectedMessageText," ")}}var dn={provide:dt,useExisting:Ye(()=>Ze),multi:!0},Ze=(()=>{class t extends Z{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant="outlined";fluid=!1;completeMethod=new S;onSelect=new S;onUnselect=new S;onFocus=new S;onBlur=new S;onDropdownClick=new S;onClear=new S;onKeyUp=new S;onShow=new S;onHide=new S;onLazyLoad=new S;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=q(xt);value;_suggestions=ae(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=ae(null);focusedMultipleOptionIndex=ae(-1);focusedOptionIndex=ae(-1);_componentStyle=q(Jt);visibleOptions=He(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=He(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(o=>se(o,this.optionValue)===e):e;if(fe(e))if(typeof e=="object"||this.optionValueSelected){let o=this.getOptionLabel(i);return o??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return fe(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(Pe.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,o){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,o),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,st(()=>{this.filled=fe(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||yt("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0?this.show():this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,o,a)=>{i.push({optionGroup:o,group:!0,index:a});let p=this.getOptionGroupChildren(o);return p&&p.forEach(z=>i.push(z)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return We(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?We(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?se(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>we(i,this.getOptionValue(e),this.equalityKey())):!1:we(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&X(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(X(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let o=this.visibleOptions().find(a=>this.isOptionMatched(a,this.inputEL.nativeElement.value||""));o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(_t(i.value)&&this.hasSelectedOption()?(X(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(fe(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],o=this.modelValue().slice(0,-1);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),X(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,o=!0){let a=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],a])):this.updateModel(a),this.onSelect.emit({originalEvent:e,value:i}),o&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,o){i!=null&&(o==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let o=this.modelValue()[i],a=this.modelValue().filter((p,z)=>z!==i).map(p=>this.getOptionValue(p));this.updateModel(a),this.onUnselect.emit({originalEvent:e,value:o}),X(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=ze(this.itemsViewChild.nativeElement,`li[id="${i}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&X(this.inputEL.nativeElement),e&&X(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&X(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return fe(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?se(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?se(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?se(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?se(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=ze(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=ze(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(F(Ct),F(tt))};static \u0275cmp=I({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,o,a){if(i&1&&(b(a,Ki,5),b(a,Hi,5),b(a,Wi,5),b(a,Ui,5),b(a,Ji,5),b(a,Zi,5),b(a,Yi,5),b(a,Xi,5),b(a,eo,5),b(a,to,5),b(a,io,5),b(a,ge,4)),i&2){let p;g(p=_())&&(o.itemTemplate=p.first),g(p=_())&&(o.emptyTemplate=p.first),g(p=_())&&(o.headerTemplate=p.first),g(p=_())&&(o.footerTemplate=p.first),g(p=_())&&(o.selectedItemTemplate=p.first),g(p=_())&&(o.groupTemplate=p.first),g(p=_())&&(o.loaderTemplate=p.first),g(p=_())&&(o.removeIconTemplate=p.first),g(p=_())&&(o.loadingIconTemplate=p.first),g(p=_())&&(o.clearIconTemplate=p.first),g(p=_())&&(o.dropdownIconTemplate=p.first),g(p=_())&&(o.templates=p)}},viewQuery:function(i,o){if(i&1&&(Y(oo,5),Y(no,5),Y(ao,5),Y(ro,5),Y(lo,5),Y(so,5),Y(po,5),Y(co,5)),i&2){let a;g(a=_())&&(o.containerEL=a.first),g(a=_())&&(o.inputEL=a.first),g(a=_())&&(o.multiInputEl=a.first),g(a=_())&&(o.multiContainerEL=a.first),g(a=_())&&(o.dropdownButton=a.first),g(a=_())&&(o.itemsViewChild=a.first),g(a=_())&&(o.scroller=a.first),g(a=_())&&(o.overlayViewChild=a.first)}},inputs:{minLength:[2,"minLength","minLength",le],delay:[2,"delay","delay",le],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",v],disabled:[2,"disabled","disabled",v],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",le],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>le(e,null)],name:"name",required:[2,"required","required",v],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",v],forceSelection:[2,"forceSelection","forceSelection",v],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",le],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",v],group:[2,"group","group",v],completeOnFocus:[2,"completeOnFocus","completeOnFocus",v],showClear:[2,"showClear","showClear",v],field:"field",dropdown:[2,"dropdown","dropdown",v],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",v],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",v],tabindex:[2,"tabindex","tabindex",le],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",v],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",v],selectOnFocus:[2,"selectOnFocus","selectOnFocus",v],searchLocale:[2,"searchLocale","searchLocale",v],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",v],typeahead:[2,"typeahead","typeahead",v],variant:"variant",fluid:[2,"fluid","fluid",v]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},standalone:!0,features:[P([dn,Jt]),Oe,K,T],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,o){if(i&1){let a=w();c(0,"div",13,0),h("click",function(z){return m(a),f(o.onContainerClick(z))}),d(2,_o,2,25,"input",14)(3,xo,3,2,"ng-container",15)(4,zo,6,26,"ul",16)(5,Lo,3,2,"ng-container",15)(6,Ro,4,5,"button",17),c(7,"p-overlay",18,1),N("visibleChange",function(z){return m(a),Q(o.overlayVisible,z)||(o.overlayVisible=z),f(z)}),h("onAnimationStart",function(z){return m(a),f(o.onOverlayAnimationStart(z))})("onHide",function(){return m(a),f(o.hide())}),d(9,un,10,11,"ng-template",null,2,R),u()()}i&2&&($(o.styleClass),l("ngClass",o.rootClass)("ngStyle",o.style),r(2),l("ngIf",!o.multiple),r(),l("ngIf",o.filled&&!o.disabled&&o.showClear&&!o.loading),r(),l("ngIf",o.multiple),r(),l("ngIf",o.loading),r(),l("ngIf",o.dropdown),r(),B("visible",o.overlayVisible),l("options",o.overlayOptions)("target","@parent")("appendTo",o.appendTo)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions))},dependencies:[E,W,pt,ue,me,de,Bt,Le,Ot,Qt,St,Fe,It,Tt,wt,Ut,U],encapsulation:2,changeDetection:0})}return t})();var mn=({dt:t})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${t("floatlabel.font.weight")};
    inset-inline-start: ${t("floatlabel.position.x")};
    color: ${t("floatlabel.color")};
    transition-duration: ${t("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${t("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${t("floatlabel.active.font.size")};
    font-weight: ${t("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${t("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${t("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${t("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${t("floatlabel.on.border.radius")};
    background: ${t("floatlabel.on.active.background")};
    padding: ${t("floatlabel.on.active.padding")};
}
`,fn={root:({instance:t,props:n})=>["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]},Xt=(()=>{class t extends J{name="floatlabel";theme=mn;classes=fn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var hn=["*"],je=(()=>{class t extends Z{_componentStyle=q(Xt);variant="over";static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=I({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(i,o){i&2&&ot("p-floatlabel",!0)("p-floatlabel-over",o.variant==="over")("p-floatlabel-on",o.variant==="on")("p-floatlabel-in",o.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[P([Xt]),K,T],ngContentSelectors:hn,decls:1,vars:0,template:function(i,o){i&1&&(ce(),te(0))},dependencies:[E,U],encapsulation:2,changeDetection:0})}return t})();var ei=()=>({width:"100%"});function gn(t,n){if(t&1&&(c(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"p",10),y(5),u(),c(6,"p",11),y(7),u()(),c(8,"div",12)(9,"span",13),y(10),xe(11,"currency"),u(),c(12,"span",14),y(13),u()()()()()),t&2){let e=n.$implicit;r(5),D(e.description),r(2),A("C\xF3digo: ",e.code,""),r(3),D(Se(11,4,e.unitPrice,"S/ ")),r(3),A("Stock: ",e.stock,"")}}function _n(t,n){t&1&&(c(0,"div",15),y(1,"No se encontraron resultados."),u())}function yn(t,n){if(t&1&&(c(0,"div",16),y(1),u()),t&2){let e=s(2);r(),A(" ",e.filteredProducts.length," productos encontrados ")}}function Cn(t,n){if(t&1&&d(0,yn,2,1,"div",16),t&2){let e=s();re(e.filteredProducts.length>0?0:-1)}}var Ge=class t{constructor(n){this._productService=n}checkedPrecioMenor=!1;selectedProduct;filteredProducts=[];products;onSelectedProduct=new S;ngOnInit(){this.getProducts()}ngOnChanges(n){n.checkedPrecioMenor.currentValue?this.getProductsPorMenor():this.getProducts()}getProducts(){this._productService.getProducts().subscribe(n=>{this.products=n.data.result})}getProductsPorMenor(){this._productService.increaseMinorPrice().subscribe(n=>{this.products=n})}filterProducts(n){let e=[],i=n.query;for(let o=0;o<this.products.length;o++){let a=this.products[o];(a.description.toLowerCase().indexOf(i.toLowerCase())==0||a.code.toLowerCase().indexOf(i.toLowerCase())==0)&&e.push(a)}this.filteredProducts=e}onSelectProduct(n){this.onSelectedProduct.emit(n.value),this.selectedProduct=null}static \u0275fac=function(e){return new(e||t)(F(jt))};static \u0275cmp=I({type:t,selectors:[["shared-search-bar"]],inputs:{checkedPrecioMenor:"checkedPrecioMenor"},outputs:{onSelectedProduct:"onSelectedProduct"},standalone:!0,features:[Te,T],decls:10,vars:8,consts:[["item",""],["empty",""],["footer",""],["variant","on"],["optionLabel","nombre","size","small","id","search",3,"ngModelChange","completeMethod","onSelect","ngModel","suggestions","virtualScrollItemSize","inputStyle"],["for","search"],[1,"flex","w-full","items-center","justify-between"],[1,"flex","gap-4","w-full"],[1,"grid","grid-cols-12","w-full"],[1,"col-span-8"],[1,"text-wrap","line-clamp-3","leading-[1.2]","font-semibold"],[1,"text-sm","pt-2"],[1,"col-span-4","flex","flex-col","items-end"],[1,"font-bold"],[1,"font-semibold"],[1,"font-medium","px-3","py-2","text-sm"],[1,"px-3","py-3","text-sm","border-t-[1px]","border-zinc-300"]],template:function(e,i){if(e&1){let o=w();c(0,"p-floatlabel",3)(1,"p-autocomplete",4),N("ngModelChange",function(p){return m(o),Q(i.selectedProduct,p)||(i.selectedProduct=p),f(p)}),h("completeMethod",function(p){return m(o),f(i.filterProducts(p))})("onSelect",function(p){return m(o),f(i.onSelectProduct(p))}),d(2,gn,14,7,"ng-template",null,0,R)(4,_n,2,0,"ng-template",null,1,R)(6,Cn,1,1,"ng-template",null,2,R),u(),c(8,"label",5),y(9,"Buscar productos por nombre o c\xF3digo"),u()()}e&2&&(r(),j(H(6,ei)),B("ngModel",i.selectedProduct),l("suggestions",i.filteredProducts)("virtualScrollItemSize",40)("inputStyle",H(7,ei)))},dependencies:[E,ke,ne,ie,oe,Ze,je,At,$t]})};var ye=class{static mapRespQuotationsDtoToGenerateQuotation_BL(n){let e=[];return n.detail.forEach(i=>{e.push({productCode:i.noProduct,quantity:i.quantity,price:i.price})}),{clientDoc:n.noClient,clientNames:n.clientName,igv:n.igv,totalPrice:n.totalPrice,cart:e}}static mapRespQuotationsDtoToModifyQuotation_BL(n){let e=[];return n.detail.forEach(i=>{e.push({noLine:i.noLine,productCode:i.noProduct,quantity:i.quantity,price:i.price})}),{noCotizacion:n.no,clientDoc:n.noClient,clientNames:n.clientName,igv:n.igv,totalPrice:n.totalPrice,cart:e}}static mapProductToQuotationDetailDto(n){return{noProduct:n.code,noQuotation:"",descProduct:n.description,quantity:n.quantity,price:n.unitPrice,amount:n.amount,stock:n.stock,noLine:0}}};var bn=({dt:t})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${t("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${t("progressspinner.color.1")};
    }
    40% {
        stroke: ${t("progressspinner.color.2")};
    }
    66% {
        stroke: ${t("progressspinner.color.3")};
    }
    80%,
    90% {
        stroke: ${t("progressspinner.color.4")};
    }
}
`,vn={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ti=(()=>{class t extends J{name="progressspinner";theme=bn;classes=vn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ii=(()=>{class t extends Z{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=q(ti);static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=I({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},standalone:!0,features:[P([ti]),K,T],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,o){i&1&&(c(0,"div",0),et(),c(1,"svg",1),x(2,"circle",2),u()()),i&2&&(l("ngStyle",o.style)("ngClass",o.styleClass),C("aria-label",o.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),r(),pe("animation-duration",o.animationDuration),C("data-pc-section","root"),r(),C("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[E,W,de,U],encapsulation:2,changeDetection:0})}return t})();var Ke=class t{constructor(n){this._http=n}getClientDataMigo(n){let e=`${zt.url}/company/migo/${n}`;return this._http.get(e,{withCredentials:!0})}static \u0275fac=function(e){return new(e||t)(Xe(ut))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var Sn=()=>({width:"50px",height:"50px"});function wn(t,n){t&1&&(c(0,"div",0),x(1,"p-progress-spinner",33),u()),t&2&&(r(),j(H(2,Sn)))}function In(t,n){if(t&1&&(c(0,"div",3)(1,"h1",34),y(2),u(),x(3,"p-tag",35),u()),t&2){let e=s();r(2),A("Cotizaci\xF3n: ",e.cotizacion.no,""),r(),l("severity",e.getStatusSeverity(e.cotizacion.status))("value",e.cotizacionStatus[e.cotizacion.status])}}function Tn(t,n){t&1&&(c(0,"h1",4),y(1,"Generar nueva cotizaci\xF3n"),u())}function On(t,n){if(t&1){let e=w();c(0,"cotizador-card-producto",39),h("onProductChange",function(){m(e);let o=s(2);return f(o.onProductChange())}),u()}if(t&2){let e=n.$implicit;l("product",e)}}function Mn(t,n){if(t&1&&(c(0,"p",36),y(1,"Productos agregados"),u(),c(2,"div",37),at(3,On,1,1,"cotizador-card-producto",38,nt),u()),t&2){let e=s();r(3),rt(e.cotizacionCartProducts)}}function kn(t,n){t&1&&(c(0,"div",21)(1,"p",40),y(2,"A\xFAn no se han agregado productos."),u()())}function En(t,n){if(t&1){let e=w();c(0,"p-button",41),h("onClick",function(){m(e);let o=s();return f(o.sendToDynamics())}),u()}if(t&2){let e=s();l("disabled",e.isFormInvalid().sendBtn)("loading",e.loadingBtnSend)}}function zn(t,n){if(t&1){let e=w();c(0,"p-button",42),h("onClick",function(){m(e);let o=s();return f(o.updateInDynamics())}),u()}if(t&2){let e=s();l("disabled",e.isFormInvalid().sendBtn)("loading",e.loadingBtnSend)}}var oi=class t{constructor(n,e,i,o,a){this._cotizacionesService=n;this._cartService=e;this._companyService=i;this.messageService=o;this.confirmationService=a}cotizacion={no:"",noClient:"",clientName:"",status:2,detail:[]};selectedProduct;filteredProducts=[];precioPorMenor=!1;loadingBtnDelete=!1;loadingBtnSave=!1;loadingBtnSend=!1;loadingFetchData=!1;productsPluralMap={"=0":"productos","=1":"producto",other:"productos"};ngOnInit(){this.getCotizacionData()}ngOnDestroy(){this._cartService.clearCart()}get cotizacionCartProducts(){return this._cartService.cotizacionProductsCart}get cotizacionStatus(){return Pt}getCotizacionData(){this.loadingFetchData=!0;let n=history.state?.cotizacionId||null;if(console.log({cotizacionId:n}),!n){this.loadingFetchData=!1;return}n.toUpperCase().startsWith("CT")&&this.loadCotizacionFromLocalStorage(n),n.toUpperCase().startsWith("FV")&&this.getCotizacionById(n),!n.toUpperCase().startsWith("CT")&&!n.toUpperCase().startsWith("FV")&&this.loadCotizacionFromLocalStorage(n)}loadCotizacionFromLocalStorage(n){let e=this._cotizacionesService.findCotizacionInLocalStorageById(n);if(!e){this.cotizacion={no:"",noClient:"",clientName:"",status:2,detail:[]},this.messageService.add({severity:"error",summary:"Error al obtener la cotizaci\xF3n",detail:"Se produjo un error al intentar obtener los datos de la cotizaci\xF3n.",key:"toast-generate-cotizacion",life:3500}),this.loadingFetchData=!1;return}this.cotizacion=e,this._cartService.cotizacionProductsCart=e.detail,this.loadingFetchData=!1}getCotizacionById(n){this._cotizacionesService.getQuotationById(n).pipe(be(e=>(this.messageService.add({severity:"error",summary:"Error al obtener la cotizaci\xF3n",detail:"Se produjo un error al intentar obtener los datos de la cotizaci\xF3n.",key:"toast-generate-cotizacion",life:3500}),this.loadingFetchData=!1,Ce))).subscribe(e=>{e&&(this.cotizacion=e.data,this.cotizacion.status=0,this.cotizacion.clientName=e.data.noClient==="NV"?"":this.cotizacion.clientName,this.cotizacion.noClient=e.data.noClient==="NV"?"":this.cotizacion.noClient,this._cartService.cotizacionProductsCart=e.data.detail,this.loadingFetchData=!1)})}addProductToCart(n){this._cartService.addProductToCart(ye.mapProductToQuotationDetailDto(n)),this.saveCotizacionInLocalStorage()}getTotalCartAmount(){return this._cartService.calculateTotalCartAmount()}getCartIGV(){return this._cartService.calculateIGV()}onSelectProduct(n){this.addProductToCart(n),this.selectedProduct=null}saveToLocalStorageCotizacion(){this.loadingBtnSave=!0,this.cotizacion.totalPrice=this.getTotalCartAmount(),this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion),this.clearFormAndCart(),this.loadingBtnSave=!1,this.messageService.add({severity:"info",summary:"Cotizaci\xF3n guardada",detail:"Se guard\xF3 la cotizaci\xF3n exitosamente.",key:"toast-generate-cotizacion",life:2500})}sendToDynamics(){this.loadingBtnSend=!0,this.cotizacion.detail=this._cartService.cotizacionProductsCart,this._cotizacionesService.addQuotation(ye.mapRespQuotationsDtoToGenerateQuotation_BL(this.cotizacion)).pipe(Ie(n=>{n.success?(this.messageService.add({severity:"success",summary:"Cotizaci\xF3n generada",detail:"La cotizaci\xF3n fue enviada exitosamente.",key:"toast-generate-cotizacion",life:2500}),this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no),this.clearFormAndCart(),console.log({resp:n}),this.loadingBtnSend=!1):(this.messageService.add({severity:"danger",summary:"Error al registrar la cotizaci\xF3n",detail:"La cotizaci\xF3n no puedo ser registrada.",key:"toast-generate-cotizacion",life:2500}),console.log({resp:n}),this.loadingBtnSend=!1)}),be(n=>(this.messageService.add({severity:"error",summary:"Error al registrar la cotizaci\xF3n",detail:"Error: La cotizaci\xF3n no puedo ser registrada.",key:"toast-generate-cotizacion",life:2500}),console.error({err:n}),this.loadingBtnSend=!1,Ce))).subscribe()}updateInDynamics(){this.loadingBtnSend=!0,this.cotizacion.detail=this._cartService.cotizacionProductsCart,this._cotizacionesService.updateQuotation(ye.mapRespQuotationsDtoToModifyQuotation_BL(this.cotizacion)).pipe(Ie(n=>{n.success?(this.messageService.add({severity:"success",summary:"Cotizaci\xF3n actualizada",detail:"La cotizaci\xF3n fue actualizada exitosamente.",key:"toast-generate-cotizacion",life:2500}),this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no),this.clearFormAndCart(),console.log({resp:n}),this.loadingBtnSend=!1):(this.messageService.add({severity:"danger",summary:"Error al actualizar la cotizaci\xF3n",detail:"La cotizaci\xF3n no puedo ser actualizada.",key:"toast-generate-cotizacion",life:2500}),console.log({resp:n}),this.loadingBtnSend=!1)}),be(n=>(this.messageService.add({severity:"error",summary:"Error al registrar la cotizaci\xF3n",detail:`Error: ${n.message}`,key:"toast-generate-cotizacion",life:2500}),console.log({error:n}),this.loadingBtnSend=!1,Ce))).subscribe()}isFormInvalid(){let n={saveBtn:!0,sendBtn:!0,deleteBtn:!0};return this.cotizacionCartProducts.length>0&&(n.saveBtn=!1,n.sendBtn=!1,n.deleteBtn=!1),this.cotizacion.status===0&&(n.saveBtn=!0),this.cotizacion.status===2&&(n.deleteBtn=!0),n}validateDocCliente(n){let e=n.charCode;(e<48||e>57)&&n.preventDefault()}getClientDataMigo(){if(this.cotizacion.noClient.length===0){this.cotizacion.clientName="",this.saveCotizacionInLocalStorage();return}if(!(this.cotizacion.noClient.length!==8&&this.cotizacion.noClient.length!==11))return this._companyService.getClientDataMigo(this.cotizacion.noClient).subscribe(n=>{this.cotizacion.noClient.length===8?this.cotizacion.clientName=n.nombre||"":this.cotizacion.clientName=n.nombre_o_razon_social||"",this.saveCotizacionInLocalStorage()})}onNameChange(){this.saveCotizacionInLocalStorage()}clearFormAndCart(){this.cotizacion={no:"",noClient:"",clientName:"",totalPrice:0,status:2,detail:[]},this.precioPorMenor=!1,this._cartService.clearCart()}onProductScanned(n){if(!n){console.warn("Producto no encontrado");return}this.addProductToCart(n)}onProductChange(){this.saveCotizacionInLocalStorage()}saveCotizacionInLocalStorage(){this.cotizacion.totalPrice=this.getTotalCartAmount(),this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion)}deleteCotizacion(){if(this.cotizacion.status===1){this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no),this.messageService.add({severity:"success",summary:"Cotizaci\xF3n eliminada",detail:"La cotizaci\xF3n fue eliminada exitosamente.",key:"toast-generate-cotizacion",life:2500}),this.clearFormAndCart(),this.loadingBtnDelete=!1;return}this.deleteCotizacionApi(this.cotizacion.no)}deleteCotizacionApi(n){this._cotizacionesService.deleteQuotation(n).pipe(Ie(e=>{e.success?(this.messageService.add({severity:"success",summary:"Cotizaci\xF3n eliminada",detail:"La cotizaci\xF3n fue eliminada exitosamente.",key:"toast-generate-cotizacion",life:2500}),this.clearFormAndCart(),console.log({resp:e}),this.loadingBtnDelete=!1):(this.messageService.add({severity:"danger",summary:"Error al eliminar la cotizaci\xF3n",detail:"La cotizaci\xF3n no puedo ser eliminada.",key:"toast-generate-cotizacion",life:2500}),console.log({resp:e}),this.loadingBtnDelete=!1)}),be(e=>(this.messageService.add({severity:"error",summary:"Error al eliminar la cotizaci\xF3n",detail:"Se produjo un error al intentar eliminar la cotizaci\xF3n.",key:"toast-generate-cotizacion",life:2500}),console.log({error:e}),this.loadingBtnDelete=!1,Ce))).subscribe()}onPrecioPorMenorChange(){this._cartService.increasePrecioPorMenorInProducts(this.precioPorMenor),this.saveCotizacionInLocalStorage()}confirmationModal(n){this.confirmationService.confirm({target:n.target,message:"\xBFEst\xE1 seguro que desea eliminar la cotizaci\xF3n?",header:"Confirmaci\xF3n",closable:!0,closeOnEscape:!0,rejectButtonProps:{label:"Cancelar",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Eliminar",severity:"danger"},accept:()=>{this.loadingBtnDelete=!0,this.deleteCotizacion()},reject:()=>{}})}getStatusSeverity(n){switch(n){case 0:return"warn";case 1:return"info";default:return"secondary"}}static \u0275fac=function(e){return new(e||t)(F(Gt),F($e),F(Ke),F(he),F(Ve))};static \u0275cmp=I({type:t,selectors:[["cotizador-generar-page"]],standalone:!0,features:[P([he,Ve]),T],decls:47,vars:23,consts:[[1,"fixed","w-full","h-full","top-0","left-0","right-0","bottom-0","z-[60]","bg-black","opacity-40","flex","items-center","justify-center"],[1,"container","vh-screen-navbar","flex","flex-col","mx-auto","p-4"],[1,"mb-4","flex","gap-2","flex-wrap","justify-center","font-semibold"],[1,"flex","gap-2"],[1,"text-xl","text-center","md:text-2xl"],[1,"flex","flex-col","gap-3"],[1,"grid","md:grid-cols-2","gap-3"],[1,""],["variant","on"],["pInputText","","minlength","8","maxlength","11","inputmode","numeric","id","numDocCli","pSize","small",1,"w-full",3,"ngModelChange","keypress","ngModel"],["for","numDocCli"],["type","text","id","nomCli","pInputText","","pSize","small",1,"w-full",3,"ngModelChange","disabled","ngModel"],["for","nomCli"],[1,"w-full"],[3,"onSelectedProduct","checkedPrecioMenor"],[1,"flex","items-center","text-gray-500","font-semibold"],["inputId","chkPrecioPorMenor",3,"ngModelChange","ngModel","binary"],["for","chkPrecioPorMenor",1,"ml-2"],[1,"my-2"],[1,"flex","flex-col","flex-grow","overflow-hidden"],[1,"flex-grow","overflow-y-auto"],[1,"flex","justify-center","items-center","h-full"],[1,"mt-1","bg-white"],[1,"mb-2"],[1,"text-end","text-lg","flex","justify-between","my-2"],[1,"font-bold"],[1,"mb-4"],[1,"grid","grid-cols-2","gap-2"],["icon","pi pi-save","label","Guardar","styleClass","w-full","severity","info",3,"onClick","disabled","loading"],["icon","pi pi-trash","label","Eliminar","styleClass","w-full","severity","danger",3,"onClick","disabled","loading"],["icon","pi pi-send","label","Lanzar","styleClass","w-full","severity","success",3,"disabled","loading"],["icon","pi pi-send","label","Editar en Dynamic","styleClass","w-full","severity","success",3,"disabled","loading"],["position","bottom-center","key","toast-generate-cotizacion"],["strokeWidth","8","fill","transparent","animationDuration",".5s"],[1,"text-xl","md:text-2xl"],[3,"severity","value"],[1,"font-semibold","text-lg"],[1,"space-y-2","flex","flex-col","gap-2"],[3,"product"],[3,"onProductChange","product"],[1,"text-gray-500","text-center","lg:text-lg"],["icon","pi pi-send","label","Lanzar","styleClass","w-full","severity","success",3,"onClick","disabled","loading"],["icon","pi pi-send","label","Editar en Dynamic","styleClass","w-full","severity","success",3,"onClick","disabled","loading"]],template:function(e,i){e&1&&(d(0,wn,2,3,"div",0),x(1,"shared-navbar"),c(2,"div",1)(3,"div",2),d(4,In,4,3,"div",3)(5,Tn,2,0,"h1",4),u(),c(6,"div",5)(7,"div",6)(8,"div",7)(9,"p-floatlabel",8)(10,"input",9),N("ngModelChange",function(a){return Q(i.cotizacion.noClient,a)||(i.cotizacion.noClient=a),a}),h("keypress",function(a){return i.validateDocCliente(a)})("ngModelChange",function(){return i.getClientDataMigo()}),u(),c(11,"label",10),y(12,"N\xB0 Documento"),u()()(),c(13,"div",7)(14,"p-floatlabel",8)(15,"input",11),N("ngModelChange",function(a){return Q(i.cotizacion.clientName,a)||(i.cotizacion.clientName=a),a}),h("ngModelChange",function(){return i.onNameChange()}),u(),c(16,"label",12),y(17,"Cliente"),u()()()(),c(18,"div",13)(19,"shared-search-bar",14),h("onSelectedProduct",function(a){return i.onSelectProduct(a)}),u()(),c(20,"div",15)(21,"p-checkbox",16),N("ngModelChange",function(a){return Q(i.precioPorMenor,a)||(i.precioPorMenor=a),a}),h("ngModelChange",function(){return i.onPrecioPorMenorChange()}),u(),c(22,"label",17),y(23,"Precio por menor"),u()()(),x(24,"hr",18),c(25,"div",19)(26,"div",20),d(27,Mn,5,0)(28,kn,3,0,"div",21),u()(),c(29,"div",22),x(30,"hr",23),c(31,"div",24)(32,"p"),y(33),xe(34,"i18nPlural"),u(),c(35,"p",25),y(36),xe(37,"currency"),u()(),x(38,"hr",26),c(39,"div",27)(40,"p-button",28),h("onClick",function(){return i.saveToLocalStorageCotizacion()}),u(),c(41,"p-button",29),h("onClick",function(a){return i.confirmationModal(a)}),u(),c(42,"div",13),d(43,En,1,2,"p-button",30)(44,zn,1,2,"p-button",31),u()()()(),x(45,"p-toast",32)(46,"p-confirmdialog")),e&2&&(re(i.loadingFetchData?0:-1),r(4),re(i.cotizacion.status===i.cotizacionStatus.Devuelto||i.cotizacion.status===i.cotizacionStatus.Pendiente?4:5),r(6),B("ngModel",i.cotizacion.noClient),r(5),l("disabled",!1),B("ngModel",i.cotizacion.clientName),r(4),l("checkedPrecioMenor",i.precioPorMenor),r(2),B("ngModel",i.precioPorMenor),l("binary",!0),r(6),re(i.cotizacionCartProducts.length>0?27:28),r(6),lt("",i.cotizacionCartProducts.length," ",Se(34,17,i.cotizacionCartProducts.length,i.productsPluralMap),""),r(3),A("Total ",Se(37,20,i.getTotalCartAmount(),"S/ "),""),r(4),l("disabled",i.isFormInvalid().saveBtn)("loading",i.loadingBtnSave),r(),l("disabled",i.isFormInvalid().deleteBtn)("loading",i.loadingBtnDelete),r(2),re(i.cotizacion.status!==i.cotizacionStatus.Devuelto?43:44))},dependencies:[E,ke,ct,ne,Ee,ie,ht,gt,oe,Vt,De,Mt,Re,kt,Et,Le,je,Ge,Dt,Ft,qt,Rt,Nt,ii],styles:[".vh-screen-navbar[_ngcontent-%COMP%]{height:calc(100dvh - 37px)!important}"]})};export{oi as GenerarPageComponent};
