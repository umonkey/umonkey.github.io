import{P as d,X as _,Y as I,Z as D}from"./utils._tGpIG1X.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2b6721e4-d269-4e70-9d6b-ef4dec8855d0",e._sentryDebugIdIdentifier="sentry-dbid-2b6721e4-d269-4e70-9d6b-ef4dec8855d0")}catch{}})();const f=[];function m(e,n){return{subscribe:q(e,n).subscribe}}function q(e,n=d){let s=null;const o=new Set;function i(r){if(D(e,r)&&(e=r,s)){const u=!f.length;for(const t of o)t[1](),f.push(t,e);if(u){for(let t=0;t<f.length;t+=2)f[t][0](f[t+1]);f.length=0}}}function a(r){i(r(e))}function l(r,u=d){const t=[r,u];return o.add(t),o.size===1&&(s=n(i,a)||d),r(e),()=>{o.delete(t),o.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:l}}function x(e,n,s){const o=!Array.isArray(e),i=o?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=n.length<2;return m(s,(l,r)=>{let u=!1;const t=[];let b=0,p=d;const g=()=>{if(b)return;p();const c=n(o?t[0]:t,l,r);a?l(c):p=typeof c=="function"?c:d},w=i.map((c,y)=>_(c,h=>{t[y]=h,b&=~(1<<y),u&&g()},()=>{b|=1<<y}));return u=!0,g(),function(){I(w),p(),u=!1}})}function z(e){let n;return _(e,s=>n=s)(),n}export{x as d,z as g,q as w};
//# sourceMappingURL=index.C3pZAK_X.js.map