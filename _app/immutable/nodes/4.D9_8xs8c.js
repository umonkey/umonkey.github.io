import"../chunks/entry.DBWBq5p7.js";import{w as oe,a as ie}from"../chunks/api.Dz3o1cuw.js";import"../chunks/disclose-version.CBD3xgZr.js";import{h as P,a as ne,i as le,b as ce,aM as ve,v as E,q as fe,a9 as R,J as U,G as B,ai as J,ax as W,aN as $,m as S,c as A,p as Q,aO as de,d as ue,_ as me,Q as j,O as y,P as _,R as F,M as D,aa as C,t as M,N as I,a1 as pe,a2 as te,a7 as K,aA as _e,aL as he}from"../chunks/index.CkZYF_MV.js";import{h as ge}from"../chunks/svelte-head.DVTTa0YL.js";import{a as u,n as be,t as k,c as O,g as V}from"../chunks/template.BYNEIM5f.js";import{p as X,a as ye}from"../chunks/props.VLRjHyEX.js";import{i as Z,b as Y,s as we,a as ee}from"../chunks/store.OxwY4PIN.js";import{H as xe}from"../chunks/Header.CA36jw7E.js";import{M as Ce}from"../chunks/Map.Dvq_s2Gv.js";import{i as Me}from"../chunks/legacy.CiDAeZxa.js";import{s as q}from"../chunks/attributes.fQH54ea0.js";import{e as Ie}from"../chunks/events.CCmeEBG1.js";import{e as ke,i as ze}from"../chunks/each.DyCLsnoM.js";import{r as G}from"../chunks/routes.Cr-rSDRi.js";import{s as De}from"../chunks/trees.DzgDVnIk.js";import{l as re}from"../chunks/auth.CpFkdoSv.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c41fb217-490a-4ffb-a661-c9c62009b3ea",e._sentryDebugIdIdentifier="sentry-dbid-c41fb217-490a-4ffb-a661-c9c62009b3ea")}catch{}})();const H=0,z=1,L=2;function Ne(e,r,o,w,h){P&&ne();var n=e,d=le(),g=me,i=R,l,t,s,m=(d?U:B)(void 0),v=(d?U:B)(void 0),b=!1;function a(c,p){b=!0,p&&(J(f),W(f),$(g));try{c===H&&o&&(l?S(l):l=A(()=>o(n))),c===z&&w&&(t?S(t):t=A(()=>w(n,m))),c===L&&h&&(s?S(s):s=A(()=>h(n,v))),c!==H&&l&&Q(l,()=>l=null),c!==z&&t&&Q(t,()=>t=null),c!==L&&s&&Q(s,()=>s=null)}finally{p&&($(null),W(null),J(null),de())}}var f=ce(()=>{if(i!==(i=r())){if(ve(i)){var c=i;b=!1,c.then(p=>{c===i&&(E(m,p),a(z,!0))},p=>{if(c===i)throw E(v,p),a(L,!0),v.v}),P||fe(()=>{b||a(H,!0)})}else E(m,i),a(z,!1);return()=>i=R}});P&&(n=ue)}const ae=({url:e})=>({searchQuery:e.searchParams.get("q")}),Te=ae?oe(ae):void 0,ia=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));var Pe=be('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>');function Ee(e){var r=Pe();u(e,r)}var Se=k('<div><a class="svelte-5k02eh"><img alt="See how good is this tree." class="svelte-5k02eh"></a></div>'),Ae=k('<div class="images svelte-5k02eh"></div>'),Qe=k('<div class="gallery svelte-5k02eh"><!></div>');function He(e,r){j(r,!0);var o=Qe(),w=y(o);Ne(w,()=>ie.getTree(r.tree.id),null,(h,n)=>{var d=O(),g=D(d);{var i=t=>{var s=V("Failed to load photos.");u(t,s)},l=t=>{var s=O(),m=D(s);{var v=a=>{var f=V("No images for this tree.");u(a,f)},b=a=>{var f=Ae();ke(f,21,()=>C(n).data.files,ze,(c,p)=>{var x=Se(),T=y(x);M(()=>q(T,"href",G.treeDetails(r.tree.id)));var se=y(T);M(()=>q(se,"src",G.file(C(p).small_id))),_(T),_(x),u(c,x)}),_(f),u(a,f)};Z(m,a=>{C(n).data.files.length==0?a(v):a(b,!1)},!0)}u(t,s)};Z(g,t=>{C(n).status!=200?t(i):t(l,!1)})}u(h,d)}),_(o),u(e,o),F()}var Le=k('<div class="preview svelte-mz5173"><div class="header svelte-mz5173"><div class="title svelte-mz5173"><a> </a></div> <button class="close svelte-mz5173"><!></button></div> <div class="props"> </div> <!></div>');function Oe(e,r){j(r,!1);let o=X(r,"tree",8),w=X(r,"onClose",8);Me();var h=O(),n=D(h);{var d=g=>{var i=Le(),l=y(i),t=y(l),s=y(t);M(()=>q(s,"href",G.treeDetails(o().id)));var m=y(s,!0);_(s),_(t);var v=I(t,2),b=y(v);Ee(b),_(v),_(l);var a=I(l,2),f=y(a,!0);M(()=>Y(f,De(o()))),_(a);var c=I(a,2);He(c,{get tree(){return o()}}),_(i),M(()=>Y(m,o().species)),Ie("click",v,function(...p){var x;(x=w())==null||x.apply(this,p)}),u(g,i)};Z(n,g=>{o()&&g(d)})}u(e,h),F()}const Ze=[40.181389,44.514444],N=pe(re.read("mapState")||{center:Ze,zoom:15});N.subscribe(e=>{re.write("mapState",e)});const qe=te(N,e=>e.center),Ge=te(N,e=>e.zoom);var je=k("<!> <!> <!>",1);function na(e,r){j(r,!0);const o=we(),w=()=>ee(qe,"$mapCenter",o),h=()=>ee(Ge,"$mapZoom",o),n=r.data.searchQuery;let d=he(void 0);const g=n?`Map: ${n}`:"Map",i=a=>{K(d,ye(a))},l=()=>{K(d,void 0)},t=(a,f)=>{N.set({center:a,zoom:f})};var s=je();ge(a=>{_e.title="Tree Map"});var m=D(s);xe(m,{title:g});var v=I(m,2);Ce(v,{get center(){return w()},get zoom(){return h()},onChange:i,onMove:t,searchQuery:n});var b=I(v,2);Oe(b,{get tree(){return C(d)},onClose:l}),u(e,s),F()}export{na as component,ia as universal};
//# sourceMappingURL=4.D9_8xs8c.js.map