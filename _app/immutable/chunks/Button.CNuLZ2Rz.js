import"./disclose-version.BYc7yKR5.js";import"./legacy.DB9raPp5.js";import{T as O,N as E,U as L,P as d,R as v,O as w,t as _}from"./index.z6kBXauZ.js";import{i as k,b as I}from"./store.D4VmzRFx.js";import{a as s,n as P,c as R,t as p,r as U}from"./template.B-dqGRda.js";import{r as j,s as x,a as q}from"./attributes.B19BiYAU.js";import{b as z}from"./input.BtxBt0iG.js";import{p as i}from"./props.pyAFSr6r.js";import{d as B}from"./events.D7MPWNQN.js";import{s as F}from"./class.Ci0NJvbd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3a55c4bc-7f86-4793-927e-b169eadaa1ab",t._sentryDebugIdIdentifier="sentry-dbid-3a55c4bc-7f86-4793-927e-b169eadaa1ab")}catch{}})();var G=P('<svg fill="currentColor" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>');function J(t){var e=G();s(t,e)}const K=(t,e)=>{e.help&&window.open(e.help,"_blank")};var Q=p('<button type="button" title="Open help page for this value" class="svelte-ks7uan"><!></button>');function S(t,e){O(e,!0);var n=R(),u=E(n);{var b=a=>{var o=Q();o.__click=[K,e];var f=d(o);J(f),v(o),s(a,o)};k(u,a=>{e.help&&a(b)})}return s(t,n),L({get help(){return e.help},set help(a){help(a)}})}B(["click"]);var V=p("<textarea></textarea>"),W=p('<div class="group svelte-2l27f3"><input class="form"> <!></div>'),X=p('<div class="hint"> </div>'),Y=p('<div class="input"><label><span> </span> <!></label> <!></div>');function ce(t,e){let n=i(e,"value",12,""),u=i(e,"placeholder",8,""),b=i(e,"label",8,""),a=i(e,"type",8,"text"),o=i(e,"multiline",8,!1),f=i(e,"hint",8,""),m=i(e,"help",8,void 0);var h=Y(),g=d(h),y=d(g),D=d(y,!0);v(y);var H=w(y,2);{var M=r=>{var l=V();U(l),_(()=>{x(l,"placeholder",u()),q(l,n())}),z(l,n),s(r,l)},T=r=>{var l=W(),c=d(l);j(c);var N=w(c,2);S(N,{get help(){return m()}}),v(l),_(()=>{x(c,"type",a()),x(c,"placeholder",u())}),z(c,n),s(r,l)};k(H,r=>{o()?r(M):r(T,!1)})}v(g);var A=w(g,2);{var C=r=>{var l=X(),c=d(l,!0);v(l),_(()=>I(c,f())),s(r,l)};k(A,r=>{f()&&r(C)})}v(h),_(()=>I(D,b())),s(t,h)}var Z=p('<button type="button"> </button>');function de(t,e){const n=i(e,"type",3,"submit"),u=i(e,"disabled",3,!1),b=`button ${n()}`;var a=Z();F(a,b),a.__click=function(...f){var m;(m=e.onClick)==null||m.apply(this,f)};var o=d(a,!0);v(a),_(()=>{a.disabled=!!u(),I(o,e.label)}),s(t,a)}B(["click"]);export{de as B,S as H,ce as T};