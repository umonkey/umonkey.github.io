import{a3 as y}from"./index.BzXfXzR0.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="0b505cf8-eddf-4bc5-ad41-73b7a4c396c1",s._sentryDebugIdIdentifier="sentry-dbid-0b505cf8-eddf-4bc5-ad41-73b7a4c396c1")}catch{}})();const g={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}};function m(){const{subscribe:s,update:o}=y(new Array),f={};let u=0;function i(t){return t instanceof Object}function d(t="default",n={}){return f[t]=n,f}function l(t,n){const r={target:"default",...i(t)?t:{...n,msg:t}},e=f[r.target]||{},a={...g,...e,...r,theme:{...e.theme,...r.theme},classes:[...e.classes||[],...r.classes||[]],id:++u};return o(c=>a.reversed?[...c,a]:[a,...c]),u}function b(t){o(n=>{if(!n.length||t===0)return[];if(typeof t=="function")return n.filter(e=>t(e));if(i(t))return n.filter(e=>e.target!==t.target);const r=t||Math.max(...n.map(e=>e.id));return n.filter(e=>e.id!==r)})}function p(t,n){const r=i(t)?t:{...n,id:t};o(e=>{const a=e.findIndex(c=>c.id===r.id);return a>-1&&(e[a]={...e[a],...r}),e})}return{subscribe:s,push:l,pop:b,set:p,_init:d}}const w=m();export{w as t};