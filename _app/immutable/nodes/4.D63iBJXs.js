import"../chunks/entry.BBdyXkGg.js";import{w as oe,a as ie}from"../chunks/api.BrEoN2th.js";import"../chunks/disclose-version.BYc7yKR5.js";import{h as E,a as ne,i as fe,b as le,aN as ce,w as S,q as ve,aa as G,K as R,J,aj as K,ay as W,aO as B,n as q,c as z,p as A,aP as de,d as ue,a0 as me,T as U,P as b,R as u,U as F,N as T,ab as x,t as D,O as I,a3 as pe,a4 as te,aD as _e,aM as he,a8 as V}from"../chunks/index.z6kBXauZ.js";import{h as be}from"../chunks/svelte-head.DEEuaWfR.js";import{a as h,t as k,c as Q,f as X}from"../chunks/template.B-dqGRda.js";import{p as Y,a as ge}from"../chunks/props.pyAFSr6r.js";import{i as Z,b as $,s as ye,a as ee}from"../chunks/store.D4VmzRFx.js";import{H as we}from"../chunks/Header.CDyBmyzC.js";import{M as Ce}from"../chunks/Map.CewiQoZt.js";import{i as xe}from"../chunks/legacy.DB9raPp5.js";import{s as j}from"../chunks/attributes.B19BiYAU.js";import{e as De}from"../chunks/events.D7MPWNQN.js";import{C as Ie}from"../chunks/CloseIcon.DuJ7bTzG.js";import{e as ke,i as Me}from"../chunks/each.4NNzQdmB.js";import{r as L}from"../chunks/routes.DHZNubIy.js";import{s as Te}from"../chunks/trees.CNc1Hsd2.js";import{l as re}from"../chunks/auth.BeXj3ZH9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="826af5f9-8cdf-48fe-957f-780155340b96",e._sentryDebugIdIdentifier="sentry-dbid-826af5f9-8cdf-48fe-957f-780155340b96")}catch{}})();const H=0,M=1,O=2;function Ne(e,s,o,w,g){E&&ne();var l=e,d=fe(),y=me,i=G,c,a,t,m=(d?R:J)(void 0),v=(d?R:J)(void 0),p=!1;function r(n,_){p=!0,_&&(K(f),W(f),B(y));try{n===H&&o&&(c?q(c):c=z(()=>o(l))),n===M&&w&&(a?q(a):a=z(()=>w(l,m))),n===O&&g&&(t?q(t):t=z(()=>g(l,v))),n!==H&&c&&A(c,()=>c=null),n!==M&&a&&A(a,()=>a=null),n!==O&&t&&A(t,()=>t=null)}finally{_&&(B(null),W(null),K(null),de())}}var f=le(()=>{if(i!==(i=s())){if(ce(i)){var n=i;p=!1,n.then(_=>{n===i&&(S(m,_),r(M,!0))},_=>{if(n===i)throw S(v,_),r(O,!0),v.v}),E||ve(()=>{p||r(H,!0)})}else S(m,i),r(M,!1);return()=>i=G}});E&&(l=ue)}const ae=({url:e})=>({searchQuery:e.searchParams.get("q")}),Pe=ae?oe(ae):void 0,oa=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));var Ee=k('<div><a class="svelte-5k02eh"><img alt="See how good is this tree." class="svelte-5k02eh"></a></div>'),Se=k('<div class="images svelte-5k02eh"></div>'),qe=k('<div class="gallery svelte-5k02eh"><!></div>');function ze(e,s){U(s,!0);var o=qe(),w=b(o);Ne(w,()=>ie.getTree(s.tree.id),null,(g,l)=>{var d=Q(),y=T(d);{var i=a=>{var t=X("Failed to load photos.");h(a,t)},c=a=>{var t=Q(),m=T(t);{var v=r=>{var f=X("No images for this tree.");h(r,f)},p=r=>{var f=Se();ke(f,21,()=>x(l).data.files,Me,(n,_)=>{var C=Ee(),P=b(C);D(()=>j(P,"href",L.treeDetails(s.tree.id)));var se=b(P);D(()=>j(se,"src",L.file(x(_).small_id))),u(P),u(C),h(n,C)}),u(f),h(r,f)};Z(m,r=>{x(l).data.files.length==0?r(v):r(p,!1)},!0)}h(a,t)};Z(y,a=>{x(l).status!=200?a(i):a(c,!1)})}h(g,d)}),u(o),h(e,o),F()}var Ae=k('<div class="preview svelte-1hfbc1n"><div class="header svelte-1hfbc1n"><div class="title svelte-1hfbc1n"><a> </a></div> <button class="close svelte-1hfbc1n"><!></button></div> <div class="props"> </div> <!></div>');function He(e,s){U(s,!1);let o=Y(s,"tree",8),w=Y(s,"onClose",8);xe();var g=Q(),l=T(g);{var d=y=>{var i=Ae(),c=b(i),a=b(c),t=b(a);D(()=>j(t,"href",L.treeDetails(o().id)));var m=b(t,!0);u(t),u(a);var v=I(a,2),p=b(v);Ie(p,{}),u(v),u(c);var r=I(c,2),f=b(r,!0);D(()=>$(f,Te(o()))),u(r);var n=I(r,2);ze(n,{get tree(){return o()}}),u(i),D(()=>$(m,o().species)),De("click",v,function(..._){var C;(C=w())==null||C.apply(this,_)}),h(y,i)};Z(l,y=>{o()&&y(d)})}h(e,g),F()}const Oe=[40.181389,44.514444],N=pe(re.read("mapState")||{center:Oe,zoom:15});N.subscribe(e=>{re.write("mapState",e)});const Qe=te(N,e=>e.center),Ze=te(N,e=>e.zoom);var je=k('<!> <div class="mapContainer svelte-fq13u2"><!> <!></div>',1);function ia(e,s){U(s,!0);const o=ye(),w=()=>ee(Qe,"$mapCenter",o),g=()=>ee(Ze,"$mapZoom",o),l=s.data.searchQuery;let d=he(void 0);const y=l?`Map: ${l}`:"Map",i=f=>{V(d,ge(f))},c=()=>{V(d,void 0)},a=(f,n)=>{N.set({center:f,zoom:n})};var t=je();be(f=>{_e.title="Tree Map"});var m=T(t);we(m,{title:y});var v=I(m,2),p=b(v);Ce(p,{get center(){return w()},get zoom(){return g()},onChange:i,onMove:a,searchQuery:l});var r=I(p,2);He(r,{get tree(){return x(d)},onClose:c}),u(v),h(e,t),F()}export{ia as component,oa as universal};