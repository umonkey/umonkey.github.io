import"./disclose-version.BlK1kMzR.js";import{i as z}from"./legacy.D4frCxXy.js";import{e as k,f as x,t as m,s as h,j as s,k as r,g as E}from"./utils.CFhoaAiD.js";import{p as _}from"./props.DVQ-LOBM.js";import{r as d}from"./routes.Coe4Xs8_.js";import{T as U}from"./TabRenderer.xm9p1GuZ.js";import{i as S,b as C,s as j,a as A}from"./store.D7wMafqz.js";import{a as p,n as B,f as P,t as I,c as Q,e as R}from"./template.BnrarM8h.js";import{s as D}from"./attributes.CRngR2u9.js";import{w as q}from"./index.BFoUtggM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="64f32032-05c4-4ac0-a3ed-9a7e989c0c02",e._sentryDebugIdIdentifier="sentry-dbid-64f32032-05c4-4ac0-a3ed-9a7e989c0c02")}catch{}})();function se(e,t){k(t,!1);let a=_(t,"tree",8),o=_(t,"active",8);const i=[{id:"details",title:"Details",url:d.treeDetails(a())},{id:"map",title:"Map",url:d.treeMap(a())},{id:"comments",title:"Comments",url:d.treeComments(a())},{id:"history",title:"History",url:d.treeHistory(a())}];z(),U(e,{get active(){return o()},tabs:i}),x()}var F=B('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>');function G(e){var t=F();p(e,t)}const M=q(!1),J=()=>{M.update(e=>!e)};var K=I("&middot; <a> </a>",1),L=I('<div class="title svelte-1fl0gie"><h1 class="svelte-1fl0gie"><strong> </strong> <!></h1> <button class="edit svelte-1fl0gie"><!></button></div>');function re(e,t){k(t,!0);const a=_(t,"address",3,void 0);var o=L(),i=s(o),u=s(i),g=s(u,!0);r(u);var w=h(u,2);{var b=c=>{var f=K(),n=h(E(f));m(()=>D(n,"href",d.searchQuery(a())));var y=s(n,!0);r(n),m(()=>C(y,a())),p(c,f)};S(w,c=>{a()&&c(b)})}r(i);var l=h(i,2);l.__click=[J];var v=s(l);G(v),r(l),r(o),m(()=>C(g,t.title)),p(e,o),x()}P(["click"]);var N=I('<div class="canvas svelte-3e8uwn"><div class="menu svelte-3e8uwn"><ul class="svelte-3e8uwn"><li class="svelte-3e8uwn"><a class="svelte-3e8uwn">Edit this tree</a></li> <li class="svelte-3e8uwn"><a class="svelte-3e8uwn">Upload photos</a></li></ul></div></div>');function ie(e,t){k(t,!1);const a=j(),o=()=>A(M,"$menuState",a);let i=_(t,"id",8);const u=()=>{M.set(!1)};z();var g=Q(),w=E(g);{var b=l=>{var v=N(),c=s(v),f=s(c),n=s(f),y=s(n);m(()=>D(y,"href",d.treeEdit(i()))),r(n);var T=h(n,2),H=s(T);m(()=>D(H,"href",d.treeUploadPhotos(i()))),r(T),r(f),r(c),r(v),R("click",v,u),p(l,v)};S(w,l=>{o()&&l(b)})}p(e,g),x()}export{ie as M,re as T,se as a};