import"./disclose-version.Bny3gfsA.js";import{t as _,e as v,g as c,j as E,f as L,k as N,s as w}from"./index.6fWcJMZL.js";import{b as k,i as I}from"./store.C3yr5Ypf.js";import{a as o,t as p,n as O,c as q,r as F}from"./template.Cy3dU-Fh.js";import{d as B}from"./events.MNT5-Jkf.js";import{s as G}from"./class.6EILLfGK.js";import{p as i}from"./props.CXIUh43G.js";import"./legacy.D-anx2rK.js";import{r as J,s as x,a as K}from"./attributes._hmteFvG.js";import{b as z}from"./input.CB6GPNT8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9e0202b5-35f3-4fdf-b5a5-87061e0c5e36",t._sentryDebugIdIdentifier="sentry-dbid-9e0202b5-35f3-4fdf-b5a5-87061e0c5e36")}catch{}})();var P=p('<button type="button"> </button>');function de(t,e){const n=i(e,"type",3,"submit"),u=i(e,"disabled",3,!1),b=`button ${n()}`;var a=P();G(a,b),a.__click=function(...f){var m;(m=e.onClick)==null||m.apply(this,f)};var s=v(a,!0);c(a),_(()=>{a.disabled=!!u(),k(s,e.label)}),o(t,a)}B(["click"]);var Q=O('<svg fill="currentColor" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>');function R(t){var e=Q();o(t,e)}const S=(t,e)=>{e.help&&window.open(e.help,"_blank")};var U=p('<button type="button" title="Open help page for this value" class="svelte-ks7uan"><!></button>');function V(t,e){E(e,!0);var n=q(),u=L(n);{var b=a=>{var s=U();s.__click=[S,e];var f=v(s);R(f),c(s),o(a,s)};I(u,a=>{e.help&&a(b)})}return o(t,n),N({get help(){return e.help},set help(a){help(a)}})}B(["click"]);var W=p("<textarea></textarea>"),X=p('<div class="group svelte-2l27f3"><input class="form"> <!></div>'),Y=p('<div class="hint"> </div>'),Z=p('<div class="input"><label><span> </span> <!></label> <!></div>');function ve(t,e){let n=i(e,"value",12,""),u=i(e,"placeholder",8,""),b=i(e,"label",8,""),a=i(e,"type",8,"text"),s=i(e,"multiline",8,!1),f=i(e,"hint",8,""),m=i(e,"help",8,void 0);var h=Z(),g=v(h),y=v(g),D=v(y,!0);c(y);var H=w(y,2);{var M=r=>{var l=W();F(l),_(()=>{x(l,"placeholder",u()),K(l,n())}),z(l,n),o(r,l)},A=r=>{var l=X(),d=v(l);J(d);var j=w(d,2);V(j,{get help(){return m()}}),c(l),_(()=>{x(d,"type",a()),x(d,"placeholder",u())}),z(d,n),o(r,l)};I(H,r=>{s()?r(M):r(A,!1)})}c(g);var C=w(g,2);{var T=r=>{var l=Y(),d=v(l,!0);c(l),_(()=>k(d,f())),o(r,l)};I(C,r=>{f()&&r(T)})}c(h),_(()=>k(D,b())),o(t,h)}export{de as B,V as H,ve as T};