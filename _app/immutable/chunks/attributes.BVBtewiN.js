import{h as i,Q as t,R as c,S as n,T as u}from"./utils._tGpIG1X.js";import{b as v}from"./disclose-version.B0_s5M88.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new r.Error().stack;s&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[s]="df40b5ea-85b5-4953-8a1e-d8cf6f405927",r._sentryDebugIdIdentifier="sentry-dbid-df40b5ea-85b5-4953-8a1e-d8cf6f405927")}catch{}})();function p(r){if(i){var s=!1,f=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var a=r.value;e(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var o=r.checked;e(r,"checked",null),r.checked=o}}};r.__on_r=f,t(f),v()}}function b(r,s){var f=r.__attributes??(r.__attributes={});f.value===(f.value=s??void 0)||r.value===s&&(s!==0||r.nodeName!=="PROGRESS")||(r.value=s)}function e(r,s,f,a){var o=r.__attributes??(r.__attributes={});i&&(o[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||o[s]!==(o[s]=f)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[c]=f),f==null?r.removeAttribute(s):typeof f!="string"&&y(r).includes(s)?r[s]=f:r.setAttribute(s,f))}var _=new Map;function y(r){var s=_.get(r.nodeName);if(s)return s;_.set(r.nodeName,s=[]);for(var f,a=r,o=Element.prototype;o!==a;){f=u(a);for(var d in f)f[d].set&&s.push(d);a=n(a)}return s}export{b as a,p as r,e as s};
//# sourceMappingURL=attributes.BVBtewiN.js.map