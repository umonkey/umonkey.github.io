import{i as u,u as v,r as _,h as b}from"./index.xYywNjA9.js";import{l as c}from"./events.Dbp-u9uP.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="fd9e91ef-068b-4e43-aa9a-99358d972964",e._sentryDebugIdIdentifier="sentry-dbid-fd9e91ef-068b-4e43-aa9a-99358d972964")}catch{}})();function m(e,a,n=a){var t=u();c(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=f(e)?d(r):r,n(r),t&&r!==(r=a())){var o=e.selectionStart,s=e.selectionEnd;e.value=r??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(b&&e.defaultValue!==e.value||v(a)==null&&e.value)&&n(f(e)?d(e.value):e.value),_(()=>{var l=a();f(e)&&l===d(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function f(e){var a=e.type;return a==="number"||a==="range"}function d(e){return e===""?null:+e}export{m as b};