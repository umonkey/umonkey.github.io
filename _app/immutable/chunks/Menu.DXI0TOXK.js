import"./disclose-version.BYc7yKR5.js";import{i as C}from"./legacy.DB9raPp5.js";import{T as x,U as y,P as r,t as g,R as a,ab as w,ap as H,a3 as P,O as M,N as R}from"./index.z6kBXauZ.js";import{p as h}from"./props.pyAFSr6r.js";import{r as p}from"./routes.DHZNubIy.js";import{b as I,i as E,s as q,a as A}from"./store.D4VmzRFx.js";import{e as B,i as N}from"./each.4NNzQdmB.js";import{a as m,t as D,n as O,f as j,c as F}from"./template.B-dqGRda.js";import{s as T}from"./attributes.B19BiYAU.js";import{t as G}from"./class.Ci0NJvbd.js";import{d as J,e as K}from"./events.D7MPWNQN.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7bf007cb-6186-4d5e-a8d1-a39405130bda",t._sentryDebugIdIdentifier="sentry-dbid-7bf007cb-6186-4d5e-a8d1-a39405130bda")}catch{}})();var L=D('<li class="svelte-gfph6n"><a class="svelte-gfph6n"> </a></li>'),Q=D('<nav class="tabs svelte-gfph6n"><ul class="svelte-gfph6n"></ul></nav>');function V(t,e){x(e,!1);let s=h(e,"active",8),n=h(e,"tabs",8);const o=s()??n()[0].id,u=f=>f==o;C();var d=Q(),b=r(d);B(b,5,n,N,(f,i)=>{var l=L();const c=H(()=>u(w(i).id));g(()=>G(l,"active",w(c)));var v=r(l),_=r(v,!0);a(v),a(l),g(()=>{T(v,"href",w(i).url),I(_,w(i).title)}),m(f,l)}),a(b),a(d),m(t,d),y()}function ce(t,e){x(e,!1);let s=h(e,"tree",8),n=h(e,"active",8);const o=[{id:"details",title:"Details",url:p.treeDetails(s())},{id:"map",title:"Map",url:p.treeMap(s())},{id:"comments",title:"Comments",url:p.treeComments(s())},{id:"history",title:"History",url:p.treeHistory(s())}];C(),V(t,{get active(){return n()},tabs:o}),y()}var W=O('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>');function X(t){var e=W();m(t,e)}const k=P(!1),Y=()=>{k.update(t=>!t)};var Z=D('<div class="title svelte-1xb6mbd"><h1 class="svelte-1xb6mbd"><strong> </strong><!></h1> <button class="edit svelte-1xb6mbd"><!></button></div>');function ue(t,e){x(e,!0);const s=h(e,"address",3,void 0);var n=Z(),o=r(n),u=r(o),d=r(u,!0);a(u);var b=M(u);{var f=c=>{var v=j();g(()=>I(v,`· ${s()??""}`)),m(c,v)};E(b,c=>{s()&&c(f)})}a(o);var i=M(o,2);i.__click=[Y];var l=r(i);X(l),a(i),a(n),g(()=>I(d,e.title)),m(t,n),y()}J(["click"]);var $=D('<div class="canvas svelte-3e8uwn"><div class="menu svelte-3e8uwn"><ul class="svelte-3e8uwn"><li class="svelte-3e8uwn"><a class="svelte-3e8uwn">Edit this tree</a></li> <li class="svelte-3e8uwn"><a class="svelte-3e8uwn">Upload photos</a></li></ul></div></div>');function fe(t,e){x(e,!1);const s=q(),n=()=>A(k,"$menuState",s);let o=h(e,"id",8);const u=()=>{k.set(!1)};C();var d=F(),b=R(d);{var f=i=>{var l=$(),c=r(l),v=r(c),_=r(v),S=r(_);g(()=>T(S,"href",p.treeEdit(o()))),a(_);var z=M(_,2),U=r(z);g(()=>T(U,"href",p.treeUploadPhotos(o()))),a(z),a(v),a(c),a(l),K("click",l,u),m(i,l)};E(b,i=>{n()&&i(f)})}m(t,d),y()}export{fe as M,ue as T,ce as a};