import"../chunks/disclose-version.B2rXiN4X.js";import{i as T}from"../chunks/legacy.B0sGpCCt.js";import{R as W,T as $,P as v,$ as u,N as b,Q as g,O as j,t as N}from"../chunks/index.BzXfXzR0.js";import{s as O,i as _,a as Q,b as h}from"../chunks/store.BhaMp9_P.js";import{a as r,t as f,c as R}from"../chunks/template.CwzYuxmV.js";import{p as S}from"../chunks/stores.CL3sxlGr.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="03036ac2-0e0f-46ae-a2c4-b4e4f2b7b629",e._sentryDebugIdIdentifier="sentry-dbid-03036ac2-0e0f-46ae-a2c4-b4e4f2b7b629")}catch{}})();var q=f("<h1>Something went wrong</h1> <p>We are sorry, but this page is not working currently. Please try again later.</p>",1),z=f("<h1>Page not found</h1> <p>We are sorry, but this page does not exist.</p>",1),A=f("<h1> </h1> <p> </p>",1),B=f('<div class="container svelte-11j1l8y"><!></div>');function L(e,s){W(s,!1);const d=O(),o=()=>Q(S,"$page",d);T();var p=B(),y=v(p);{var w=a=>{var n=q();u(2),r(a,n)},x=a=>{var n=R(),I=b(n);{var D=t=>{var i=z();u(2),r(t,i)},k=t=>{var i=A(),l=b(i),P=v(l);g(l);var m=j(l,2),E=v(m,!0);g(m),N(()=>{var c;h(P,`Error ${o().status??""}`),h(E,((c=o().error)==null?void 0:c.message)??"The error message is unavailable.")}),r(t,i)};_(I,t=>{o().status==404?t(D):t(k,!1)},!0)}r(a,n)};_(y,a=>{o().status==500?a(w):a(x,!1)})}g(p),r(e,p),$()}export{L as component};