import"../chunks/entry.B382n7UE.js";import{w as oe,a as ie}from"../chunks/api.CNyUk2eU.js";import"../chunks/disclose-version.Bny3gfsA.js";import{h as P,a as ne,i as le,b as fe,aN as ce,G as S,q as ve,ad as R,T as U,R as W,al as B,az as J,aO as K,C as z,c as A,p as H,aP as de,d as ue,a0 as me,j as L,e as b,g as u,k as O,f as M,a4 as x,t as k,s as D,a6 as pe,a7 as te,aE as _e,aF as he,ab as V}from"../chunks/index.6fWcJMZL.js";import{h as be}from"../chunks/svelte-head.BfVEVBH-.js";import{a as h,t as I,c as j,d as X}from"../chunks/template.Cy3dU-Fh.js";import{p as Y,a as ge}from"../chunks/props.CXIUh43G.js";import{i as q,b as $,s as ye,a as ee}from"../chunks/store.C3yr5Ypf.js";import{H as we}from"../chunks/Header.gUey7DPS.js";import{M as Ce}from"../chunks/Map.B0p6Ogt0.js";import{i as xe}from"../chunks/legacy.D-anx2rK.js";import{s as F}from"../chunks/attributes._hmteFvG.js";import{e as ke}from"../chunks/events.MNT5-Jkf.js";import{C as De}from"../chunks/CloseIcon.CuJrw6kc.js";import{e as Ie,i as Te}from"../chunks/each.DbABizDz.js";import{r as G}from"../chunks/routes.D1YDAj2-.js";import{f as Me,s as Ee}from"../chunks/trees.CJVlGslu.js";import{D as Ne}from"../chunks/constants.CnYczlNe.js";import{l as re}from"../chunks/auth.D_E-pkxn.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3f7ee1fb-bcc3-4fb1-8597-d4e354b9a5b3",e._sentryDebugIdIdentifier="sentry-dbid-3f7ee1fb-bcc3-4fb1-8597-d4e354b9a5b3")}catch{}})();const Q=0,T=1,Z=2;function Pe(e,s,o,w,g){P&&ne();var f=e,d=le(),y=me,i=R,c,a,t,m=(d?U:W)(void 0),v=(d?U:W)(void 0),p=!1;function r(n,_){p=!0,_&&(B(l),J(l),K(y));try{n===Q&&o&&(c?z(c):c=A(()=>o(f))),n===T&&w&&(a?z(a):a=A(()=>w(f,m))),n===Z&&g&&(t?z(t):t=A(()=>g(f,v))),n!==Q&&c&&H(c,()=>c=null),n!==T&&a&&H(a,()=>a=null),n!==Z&&t&&H(t,()=>t=null)}finally{_&&(K(null),J(null),B(null),de())}}var l=fe(()=>{if(i!==(i=s())){if(ce(i)){var n=i;p=!1,n.then(_=>{n===i&&(S(m,_),r(T,!0))},_=>{if(n===i)throw S(v,_),r(Z,!0),v.v}),P||ve(()=>{p||r(Q,!0)})}else S(m,i),r(T,!1);return()=>i=R}});P&&(f=ue)}const ae=({url:e})=>({searchQuery:e.searchParams.get("q")}),Se=ae?oe(ae):void 0,na=Object.freeze(Object.defineProperty({__proto__:null,load:Se},Symbol.toStringTag,{value:"Module"}));var ze=I('<div><a class="svelte-5k02eh"><img alt="See how good is this tree." class="svelte-5k02eh"></a></div>'),Ae=I('<div class="images svelte-5k02eh"></div>'),He=I('<div class="gallery svelte-5k02eh"><!></div>');function Qe(e,s){L(s,!0);var o=He(),w=b(o);Pe(w,()=>ie.getTree(s.tree.id),null,(g,f)=>{var d=j(),y=M(d);{var i=a=>{var t=X("Failed to load photos.");h(a,t)},c=a=>{var t=j(),m=M(t);{var v=r=>{var l=X("No images for this tree.");h(r,l)},p=r=>{var l=Ae();Ie(l,21,()=>x(f).data.files,Te,(n,_)=>{var C=ze(),N=b(C);k(()=>F(N,"href",G.treeDetails(s.tree.id)));var se=b(N);k(()=>F(se,"src",G.file(x(_).small_id))),u(N),u(C),h(n,C)}),u(l),h(r,l)};q(m,r=>{x(f).data.files.length==0?r(v):r(p,!1)},!0)}h(a,t)};q(y,a=>{x(f).status!=200?a(i):a(c,!1)})}h(g,d)}),u(o),h(e,o),O()}var Ze=I('<div class="preview svelte-1hfbc1n"><div class="header svelte-1hfbc1n"><div class="title svelte-1hfbc1n"><a> </a></div> <button class="close svelte-1hfbc1n"><!></button></div> <div class="props"> </div> <!></div>');function je(e,s){L(s,!1);let o=Y(s,"tree",8),w=Y(s,"onClose",8);xe();var g=j(),f=M(g);{var d=y=>{var i=Ze(),c=b(i),a=b(c),t=b(a);k(()=>F(t,"href",G.treeDetails(o().id)));var m=b(t,!0);k(()=>$(m,Me(o().species))),u(t),u(a);var v=D(a,2),p=b(v);De(p,{}),u(v),u(c);var r=D(c,2),l=b(r,!0);k(()=>$(l,Ee(o()))),u(r);var n=D(r,2);Qe(n,{get tree(){return o()}}),u(i),ke("click",v,function(..._){var C;(C=w())==null||C.apply(this,_)}),h(y,i)};q(f,y=>{o()&&y(d)})}h(e,g),O()}const E=pe(re.read("mapState")||{center:Ne,zoom:15});E.subscribe(e=>{re.write("mapState",e)});const qe=te(E,e=>e.center),Fe=te(E,e=>e.zoom);var Ge=I('<!> <div class="mapContainer svelte-11p9u5n"><!> <!></div>',1);function la(e,s){L(s,!0);const o=ye(),w=()=>ee(qe,"$mapCenter",o),g=()=>ee(Fe,"$mapZoom",o),f=s.data.searchQuery;let d=he(void 0);const y=f?`Map: ${f}`:"Map",i=l=>{V(d,ge(l))},c=()=>{V(d,void 0)},a=(l,n)=>{E.set({center:l,zoom:n})};var t=Ge();be(l=>{_e.title="Tree Map"});var m=M(t);we(m,{title:y});var v=D(m,2),p=b(v);Ce(p,{get center(){return w()},get zoom(){return g()},onChange:i,onMove:a,searchQuery:f,canAdd:!0});var r=D(p,2);je(r,{get tree(){return x(d)},onClose:c}),u(v),h(e,t),O()}export{la as component,na as universal};