import"../chunks/entry.C4g3lS3g.js";import{a as b,w as _}from"../chunks/api.CC94BoDS.js";import{e as p}from"../chunks/index.wfseJq7Y.js";import"../chunks/disclose-version.B2rXiN4X.js";import{R as y,N as h,T as w,t as T,aD as D,O as a,ab as c,P as I,ao as f,Q as M}from"../chunks/index.BzXfXzR0.js";import{h as $}from"../chunks/svelte-head.Axeo-4SS.js";import{a as k,t as O}from"../chunks/template.CwzYuxmV.js";import{H as S}from"../chunks/Header.BGvhgTA9.js";import{T as j,a as z,M as C}from"../chunks/Menu.BKuG1YTa.js";import{M as H}from"../chunks/Map.BbuUxS1H.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="50e4060f-bc42-4263-81d0-983ee7ed1ad2",t._sentryDebugIdIdentifier="sentry-dbid-50e4060f-bc42-4263-81d0-983ee7ed1ad2")}catch{}})();const N=!1,m=async({params:t})=>{const r=t.id;r||p(404);const e=await b.getTree(r);return e.status!==200&&p(404),{id:r,tree:e.data}},P=m?_(m):void 0,K=Object.freeze(Object.defineProperty({__proto__:null,load:P,prerender:N},Symbol.toStringTag,{value:"Module"}));var x=O('<!> <!> <!> <!> <div class="mapContainer svelte-1s722p0"><!></div>',1);function U(t,r){y(r,!0);const e=r.data.tree;var o=x();$(E=>{T(()=>D.title=`${e.species??""} - Details`)});var s=h(o);S(s,{title:"Tree"});var n=a(s,2);j(n,{get title(){return e.species}});var i=a(n,2);z(i,{get tree(){return e.id},active:"map"});var d=a(i,2);C(d,{get id(){return e.id}});var l=a(d,2),u=I(l),v=f(()=>[e.lat,e.lon]),g=f(()=>[e.lat,e.lon]);H(u,{get center(){return c(v)},get marker(){return c(g)},zoom:18,className:"treeTab"}),M(l),k(t,o),w()}export{U as component,K as universal};