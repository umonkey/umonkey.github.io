import{a as d,t as _,r as F}from"./disclose-version.iI4glXBe.js";import"./legacy.BLYxeSQ6.js";import{aE as K,h as L,a2 as j,aF as q,K as k,t as u,L as c,M as b}from"./utils._tGpIG1X.js";import{b as p}from"./store.DQ7cVAKa.js";import{i as I}from"./if.BWgjNr8K.js";import{r as z,s as x,a as A}from"./attributes.CyGvgM0f.js";import{l as G,d as H}from"./events.DwnvAdS4.js";import{p as o}from"./props.Brq1YyLo.js";import{s as J}from"./class.CbeUwlfh.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="6e494549-4a64-4e2a-93cc-8e1a275808a4",e._sentryDebugIdIdentifier="sentry-dbid-6e494549-4a64-4e2a-93cc-8e1a275808a4")}catch{}})();function D(e,a,n=a){var i=K();G(e,"input",t=>{var r=t?e.defaultValue:e.value;if(r=w(e)?g(r):r,n(r),i&&r!==(r=a())){var f=e.selectionStart,v=e.selectionEnd;e.value=r??"",v!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(v,e.value.length))}}),(L&&e.defaultValue!==e.value||j(a)==null&&e.value)&&n(w(e)?g(e.value):e.value),q(()=>{var t=a();w(e)&&t===g(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function w(e){var a=e.type;return a==="number"||a==="range"}function g(e){return e===""?null:+e}var N=_('<textarea class="svelte-wb01f3"></textarea>'),O=_('<input class="svelte-wb01f3">'),P=_('<div class="hint svelte-wb01f3"> </div>'),Q=_('<div class="input"><label class="svelte-wb01f3"><span class="svelte-wb01f3"> </span> <!></label> <!></div>');function le(e,a){let n=o(a,"value",12,""),i=o(a,"placeholder",8,""),t=o(a,"label",8,""),r=o(a,"type",8,"text"),f=o(a,"multiline",8,!1),v=o(a,"hint",8,"");var m=Q(),y=c(m),h=c(y),E=c(h,!0);b(h);var B=k(h,2);{var M=s=>{var l=N();F(l),u(()=>{x(l,"placeholder",i()),A(l,n())}),D(l,n),d(s,l)},S=s=>{var l=O();z(l),u(()=>{x(l,"type",r()),x(l,"placeholder",i())}),D(l,n),d(s,l)};I(B,s=>{f()?s(M):s(S,!1)})}b(y);var T=k(y,2);{var V=s=>{var l=P(),C=c(l,!0);b(l),u(()=>p(C,v())),d(s,l)};I(T,s=>{v()&&s(V)})}b(m),u(()=>p(E,t())),d(e,m)}var R=_('<button type="button"> </button>');function re(e,a){const n=o(a,"type",3,"submit"),i=o(a,"disabled",3,!1);var t=R();t.__click=function(...f){var v;(v=a.onClick)==null||v.apply(this,f)};var r=c(t,!0);b(t),u(()=>{t.disabled=!!i(),J(t,`${n()??""} svelte-t79v4t`),p(r,a.label)}),d(e,t)}H(["click"]);export{re as B,le as T};
//# sourceMappingURL=Button.DZlzgf-O.js.map