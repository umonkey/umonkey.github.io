import{a as f,n as se,t as M,c as L,g as R,h as oe}from"../chunks/disclose-version.CLZNo6Mi.js";import{h as I,a as ie,au as ne,b as le,aM as ve,n as P,q as ce,Z as V,D as W,C as X,al as j,aw as J,aN as O,k as A,c as S,p as Z,aK as fe,d as me,L as de,W as B,U as b,V as u,X as K,S as N,P as k,t as y,T as z,ac as Q,a5 as ue,aF as pe}from"../chunks/utils.BFcvIjER.js";import{p as Y,a as _e}from"../chunks/props.xLB6besP.js";import{e as he,b as $,s as ge,a as ee}from"../chunks/store.MZmcVWKZ.js";import{H as we}from"../chunks/Header.CcdmL7Ww.js";import{M as be}from"../chunks/Map.CNK7cO5p.js";import"../chunks/legacy.j8GUzb4P.js";import{i as U}from"../chunks/if.i8DL9Ox0.js";import{s as q}from"../chunks/attributes.C1_R1VUv.js";import{i as xe}from"../chunks/lifecycle.CaLmRQ1O.js";import{e as Ce,i as ke}from"../chunks/each.CgBn9q31.js";import{r as G}from"../chunks/routes.Du5GAGsL.js";import{a as ye}from"../chunks/api.BlGb2U4K.js";import{s as ze}from"../chunks/trees.fhO0HKIS.js";import{w as Me,d as te}from"../chunks/index.CFeJIACE.js";import{l as ae}from"../chunks/auth.DCNBl5R4.js";const H=0,T=1,F=2;function Te(r,c,s,x,p){I&&ie();var n=r,_=ne(),h=de,a=V,o,e,t,g=(_?W:X)(void 0),l=(_?W:X)(void 0),w=!1;function i(v,d){w=!0,d&&(j(m),J(m),O(h));try{v===H&&s&&(o?A(o):o=S(()=>s(n))),v===T&&x&&(e?A(e):e=S(()=>x(n,g))),v===F&&p&&(t?A(t):t=S(()=>p(n,l))),v!==H&&o&&Z(o,()=>o=null),v!==T&&e&&Z(e,()=>e=null),v!==F&&t&&Z(t,()=>t=null)}finally{d&&(O(null),J(null),j(null),fe())}}var m=le(()=>{if(a!==(a=c())){if(ve(a)){var v=a;w=!1,v.then(d=>{v===a&&(P(g,d),i(T,!0))},d=>{if(v===a)throw P(l,d),i(F,!0),l.v}),I||ce(()=>{w||i(H,!0)})}else P(g,a),i(T,!1);return()=>a=V}});I&&(n=me)}var Ne=se('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>');function De(r){var c=Ne();f(r,c)}var Ee=M('<div><a class="svelte-5k02eh"><img alt="See how good is this tree." class="svelte-5k02eh"></a></div>'),Ie=M('<div class="images svelte-5k02eh"></div>'),Pe=M('<div class="gallery svelte-5k02eh"><!></div>');function Ae(r,c){B(c,!0);var s=Pe(),x=b(s);Te(x,()=>ye.getTree(c.tree.id),null,(p,n)=>{var _=L(),h=N(_);{var a=e=>{var t=R("Failed to load photos.");f(e,t)},o=e=>{var t=L(),g=N(t);{var l=i=>{var m=R("No images for this tree.");f(i,m)},w=i=>{var m=Ie();Ce(m,21,()=>k(n).data.files,ke,(v,d)=>{var C=Ee(),E=b(C);y(()=>q(E,"href",G.treeDetails(c.tree.id)));var re=b(E);y(()=>q(re,"src",G.file(k(d).small_id))),u(E),u(C),f(v,C)}),u(m),f(i,m)};U(g,i=>{k(n).data.files.length==0?i(l):i(w,!1)},!0)}f(e,t)};U(h,e=>{k(n).status!=200?e(a):e(o,!1)})}f(p,_)}),u(s),f(r,s),K()}var Se=M('<div class="preview svelte-mz5173"><div class="header svelte-mz5173"><div class="title svelte-mz5173"><a> </a></div> <button class="close svelte-mz5173"><!></button></div> <div class="props"> </div> <!></div>');function Ze(r,c){B(c,!1);let s=Y(c,"tree",8),x=Y(c,"onClose",8);xe();var p=L(),n=N(p);{var _=h=>{var a=Se(),o=b(a),e=b(o),t=b(e);y(()=>q(t,"href",G.treeDetails(s().id)));var g=b(t,!0);u(t),u(e);var l=z(e,2),w=b(l);De(w),u(l),u(o);var i=z(o,2),m=b(i,!0);y(()=>$(m,ze(s()))),u(i);var v=z(i,2);Ae(v,{get tree(){return s()}}),u(a),y(()=>$(g,s().species)),he("click",l,function(...d){var C;(C=x())==null||C.apply(this,d)}),f(h,a)};U(n,h=>{s()&&h(_)})}f(r,p),K()}const He=[40.181389,44.514444],D=Me(ae.read("mapState")||{center:He,zoom:15});D.subscribe(r=>{ae.write("mapState",r)});const Fe=te(D,r=>r.center),Le=te(D,r=>r.zoom);var Ue=M("<!> <!> <!>",1);function at(r,c){B(c,!0);const s=ge(),x=()=>ee(Fe,"$mapCenter",s),p=()=>ee(Le,"$mapZoom",s);let n=pe(void 0);const _=l=>{Q(n,_e(l))},h=()=>{Q(n,void 0)},a=(l,w)=>{D.set({center:l,zoom:w})};var o=Ue();oe(l=>{ue.title="Map"});var e=N(o);we(e,{title:"Tree"});var t=z(e,2);be(t,{get center(){return x()},get zoom(){return p()},onChange:_,onMove:a});var g=z(t,2);Ze(g,{get tree(){return k(n)},onClose:h}),f(r,o),K()}export{at as component};