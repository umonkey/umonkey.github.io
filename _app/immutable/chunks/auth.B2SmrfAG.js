import{a3 as d,a4 as i}from"./index.CbWQdyPD.js";import"./disclose-version.CVLrmm-c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="66ed61a8-cbad-4e98-a6ee-e2529270a757",t._sentryDebugIdIdentifier="sentry-dbid-66ed61a8-cbad-4e98-a6ee-e2529270a757")}catch{}})();class c{read(e){try{const r=localStorage.getItem(e);return r===null?void 0:(console.debug(`[storage] Read ${e}`),JSON.parse(r))}catch(r){console.error(`[storage] Error reading ${e}: ${r}`)}}write(e,r){try{r==null?(localStorage.removeItem(e),console.debug(`[storage] Removed ${e}`)):(localStorage.setItem(e,JSON.stringify(r)),console.debug(`[storage] Wrote ${e}`))}catch(n){console.error(`[storage] Error writing ${e}: ${n}`)}}}const o=new c,a="auth_state",s=d(o.read(a));s.subscribe(t=>{o.write(a,t)});const u=i(s,t=>!!t);export{s as a,u as i,o as l};
//# sourceMappingURL=auth.B2SmrfAG.js.map